import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <a className="navbar-item" href="/auth/google">
            Login with Google
          </a>
        );
      default:
        return (
          <a className="navbar-item" href="/api/logout">
            Logout
          </a>
        );
    }
  }

  render() {
    return (
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              {this.renderContent()}
              {/*<a className="navbar-item">Login with Google</a>*/}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
