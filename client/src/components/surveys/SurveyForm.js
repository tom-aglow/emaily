import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          type="text"
          component={SurveyField}
          name={name}
          label={label}
          key={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          <br />
          {this.renderFields()}
          <div
            className="field is-grouped"
            style={{ justifyContent: 'space-between' }}
          >
            <div className="control">
              <Link className="button is-text" to="/surveys">
                Cancel
              </Link>
            </div>
            <div className="control">
              <button type="submit" className="button is-link is-success">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  //	if provided emails are correct
  errors.emails = validateEmails(values.emails || '');

  //	if fields have any value
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
