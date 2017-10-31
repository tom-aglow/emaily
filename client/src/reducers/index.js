import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveysReducer from './surveysReduser';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  form: reduxForm
});
