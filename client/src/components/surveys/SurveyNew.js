import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-4 is-offset-4">
          <SurveyForm />
        </div>
      </div>
    );
  }
}

export default SurveyNew;
