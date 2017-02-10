export default function updateQuery(state, query, value) {
  const newState = Object.assign({}, state);
  newState.queries = Object.assign({}, state.queries);
  newState.queries[query] = value;
  return newState;
}
