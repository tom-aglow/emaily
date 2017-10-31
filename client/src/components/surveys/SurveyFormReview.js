import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions/index';
import { submitSurvey } from '../../actions/index';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div className="field" key={name}>
        <label className="label">{label}</label>
        <div className="control">{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="content">
      <h3>Please confirm your entries</h3>
      <div>{reviewFields}</div>
      <br />
      <div
        className="field is-grouped"
        style={{ justifyContent: 'space-between' }}
      >
        <div className="control">
          <button className="button is-warning" onClick={onCancel}>
            Back
          </button>
        </div>
        <div className="control">
          <button
            className="button is-success"
            onClick={() => submitSurvey(formValues, history)}
          >
            Send Survey
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
