import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
				<div className="container">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
						</a>
					</div>
					<div className="navbar-menu">
						<div className="navbar-end">
							<a className="navbar-item">Login with Google</a>
						</div>
					</div>
				</div>
			</nav>
		);
  }
}

export default Header;
