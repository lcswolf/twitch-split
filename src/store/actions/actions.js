import "isomorphic-fetch";

export const TWITCH = {
  CLIENT_ID: "hzr8tf9f8ddrcnwv991g0p8njmgc2y",
  ACCEPT: "application/vnd.twitchtv.v5+json",
  SEARCH: "https://api.twitch.tv/kraken/search/streams",
  LIMIT: 25,
};

export const STREAM_SEARCH_SUCCESS = "STREAM_SEARCH_SUCCESS";
export const streamSearchSuccess = (query, result) => ({
  type: STREAM_SEARCH_SUCCESS,
  query,
  result,
});

export const STREAM_SEARCH_ERROR = "STREAM_SEARCH_ERROR";
export const streamSearchError = (query, error) => ({
  type: STREAM_SEARCH_ERROR,
  query,
  error,
});

export const STREAM_SEARCH_PENDING = "STREAM_SEARCH_PENDING";
export const streamSearchPending = query => ({
  type: STREAM_SEARCH_PENDING,
  query,
});

export const streamSearch = rawQuery => {
  const query = rawQuery.toLowerCase();

  return (dispatch, getState) => {
    const { queries } = getState();

    // If a previous search was already dispatched for the provided query, do
    // nothing.
    if (query.length === 0) return Promise.resolve();
    if (queries[query]) return Promise.resolve();

    // Add an empty query object to prevent multiple simultaneous searches for
    // the same stream.
    dispatch(streamSearchPending(query));
    return fetch(
      `${TWITCH.SEARCH}?query=${encodeURIComponent(query)}&limit=${
        TWITCH.LIMIT
      }`,
      {
        headers: {
          "Client-ID": TWITCH.CLIENT_ID,
          Accept: TWITCH.ACCEPT,
        },
      },
    )
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(streamSearchSuccess(query, data)))
      .catch(error => dispatch(streamSearchError(query, error)));
  };
};

export const SET_CURRENT_SEARCH = "SET_CURRENT_SEARCH";
export const setCurrentSearch = query => ({
  type: SET_CURRENT_SEARCH,
  query: query.toLowerCase(),
});

export const SEARCH_RESULTS_HIDE = "SEARCH_RESULTS_HIDE";
export const searchResultsHide = () => ({
  type: SEARCH_RESULTS_HIDE,
});

export const SEARCH_RESULTS_SHOW = "SEARCH_RESULTS_SHOW";
export const searchResultsShow = () => ({
  type: SEARCH_RESULTS_SHOW,
});

export const STREAM_SELECT = "STREAM_SELECT";
export const streamSelect = id => ({
  type: STREAM_SELECT,
  id,
});

export const STREAM_UNSELECT = "STREAM_UNSELECT";
export const streamUnselect = id => ({
  type: STREAM_UNSELECT,
  id,
});
