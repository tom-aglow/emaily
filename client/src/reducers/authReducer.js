import { FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  //	null = we don't know weather user is logged in
  //	User model = user is logged in
  //	false = user isn't logged in

  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
