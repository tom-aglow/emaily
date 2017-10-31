import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  
  renderSurveys() {
  	return this.props.surveys.reverse().map(survey => {
  		return (
				<div className="card" key={survey._id}>
					<header className="card-header">
						<p className="card-header-title">{survey.title}</p>
						<a href="#" className="card-header-icon" aria-label="more options">
						<span className="icon">
							<i className="fa fa-angle-down" aria-hidden="true"></i>
						</span>
						</a>
					</header>
					<div className="card-content">
						<div className="content">
							{survey.body}
							<br />
							<time>Sent on: {new Date(survey.dateSent).toLocaleDateString()}</time>
						</div>
					</div>
					<footer className="card-footer">
						<a href="#" className="card-footer-item">Yes: {survey.yes}</a>
						<a href="#" className="card-footer-item">No: {survey.no}</a>
					</footer>
				</div>
			)
		})
	}

  render() {
    return (
    	<div className="columns is-mobile">
				<div className="column is-4 is-offset-4">
					{this.renderSurveys()}
				</div>
			</div>
		);
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
