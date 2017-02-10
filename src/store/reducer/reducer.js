import actions from '../actions';
import updateQuery from './updateQuery';
import flattenResults from './flattenResults';

const initialState = {
  queries: {},
  showSearchResults: false,
  currentSearch: '',
  selectedStreams: [],
};

export default (prevState, action) => {
  const state = prevState || initialState;

  switch (action.type) {
    case actions.STREAM_SEARCH_SUCCESS: {
      const results = flattenResults(action.result);
      return updateQuery(state, action.query, results);
    }

    case actions.STREAM_SEARCH_ERROR: {
      return updateQuery(state, action.query, { error: action.error });
    }

    case actions.STREAM_SEARCH_PENDING: {
      return updateQuery(state, action.query, []);
    }

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

    case actions.STREAM_SELECT: {
      console.log(action.id); // eslint-disable-line
      if (state.selectedStreams.includes(action.id)) return state;
      const newState = Object.assign({}, state);
      newState.selectedStreams = newState.selectedStreams.concat(action.id);
      return newState;
    }

    default: return state;
  }
};
