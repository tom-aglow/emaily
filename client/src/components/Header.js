import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

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
        return [
          <Payments key="1" />,
          <a className="navbar-item" href="/api/logout" key="2">
            Logout
          </a>
        ];
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
            <Link
              className="navbar-item"
              to={this.props.auth ? '/surveys' : '/'}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
              />
            </Link>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">{this.renderContent()}</div>
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
