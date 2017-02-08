import * as actions from './actions';

const initialState = {
  queries: {},
  showSearchResults: false,
  currentSearch: '',
};

function updateQuery(state, query, value) {
  const newState = Object.assign({}, state);
  newState.queries = Object.assign({}, state.queries);
  newState.queries[query] = value;
  return newState;
}

export default (prevState, action) => {
  const state = prevState || initialState;

  switch (action.type) {
    case actions.STREAM_SEARCH_SUCCESS:
      return updateQuery(state, action.query, action.result);

    case actions.STREAM_SEARCH_ERROR:
      return updateQuery(state, action.query, { error: action.error });

    case actions.STREAM_SEARCH_PENDING:
      return updateQuery(state, action.query, {});

    case actions.SET_CURRENT_SEARCH: {
      const newState = Object.assign({}, state);
      newState.currentSearch = action.query;
      return newState;
    }

    case actions.SEARCH_RESULTS_HIDE: {
      const newState = Object.assign({}, state);
      newState.showSearchResults = false;
      return newState;
    }

    case actions.SEARCH_RESULTS_SHOW: {
      const newState = Object.assign({}, state);
      newState.showSearchResults = true;
      return newState;
    }

    default: return state;
  }
};
