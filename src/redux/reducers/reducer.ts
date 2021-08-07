import { ACTION_FETCH_GEOCODE } from '../actions/actions';

export interface InitialState {
 results: any[]
}

const initialState: InitialState = {
  results: []
};

const reducer = (state = initialState, action: { type: any;payload: any }) => {
  switch (action.type) {
    case ACTION_FETCH_GEOCODE:
      return {
        ...state,
        results: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
