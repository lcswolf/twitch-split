/* eslint-disable padded-blocks */
import { expect } from 'chai';
import nock from 'nock';
import sinon from 'sinon';
import * as actions from './actions';

const { TWITCH } = actions;
const requestConfig = {
  reqHeaders: {
    'Client-ID': TWITCH.CLIENT_ID,
    Accept: TWITCH.ACCEPT,
  },
};

describe('Search actions', () => {
  before(() => { nock.disableNetConnect(); });
  after(() => { nock.enableNetConnect(); });

  describe('streamSearch', () => {
    let mockApi;
    let dispatch;
    let getState;
    const query = 'test';
    const expected = { type: actions.STREAM_SEARCH_SUCCESS, query, result: { result: 'test' } };

    beforeEach(() => {
      // Verify calls are made to the correct endpoint and with the correct headers set.
      mockApi = nock(TWITCH.SEARCH, requestConfig).get('').query(
        { query, limit: TWITCH.LIMIT },
      );
      dispatch = sinon.spy();
      getState = sinon.stub().returns({ queries: {} });
    });

    afterEach(() => { nock.cleanAll(); });

    it('dispatches result', async () => {
      const api = mockApi.reply(200, expected.result);

      await actions.streamSearch(query)(dispatch, getState);

      expect(api.isDone()).to.be.true;
      expect(dispatch.secondCall.args[0]).to.deep.equal(expected);
    });

    it('dispatches pending status', async () => {
      const api = mockApi.reply(200, expected.result);

      await actions.streamSearch(query)(dispatch, getState);

      expect(api.isDone()).to.be.true;
      expect(dispatch.firstCall.args[0]).to.deep.equal(
        { type: actions.STREAM_SEARCH_PENDING, query },
      );
    });

    it('does not fetch data when query was previous sent', async () => {
      const api = mockApi.reply(200, expected.result);
      getState = sinon.stub().returns({ queries: { [query]: 'exists' } });

      await actions.streamSearch(query)(dispatch, getState);

      expect(api.isDone()).to.be.false;
    });

    it('dispatches error', async () => {
      const api = mockApi.reply(404);

      await actions.streamSearch(query)(dispatch, getState);

      expect(api.isDone()).to.be.true;
      const result = dispatch.secondCall.args[0];
      expect(result.type).to.equal(actions.STREAM_SEARCH_ERROR);
      expect(result.query).to.equal(query);
      expect(result.error).to.be.a('error');
    });
  });

});
