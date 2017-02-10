import { expect } from 'chai';
import flattenResults from './flattenResults';
import resultsJSON from '../../test-fixtures/results.json';

describe('flattenResults', () => {
  it('returns flattened array', () => {
    const results = flattenResults(resultsJSON);
    expect(results).to.be.an('array');
    expect(results).to.have.length(resultsJSON.streams.length);

    const result = results[5];
    const actual = resultsJSON.streams[5];

    /* eslint-disable no-underscore-dangle */
    expect(result.id).to.equal(actual._id);
    expect(result.previewTemplate).to.equal(actual.preview.template);
    expect(result.displayName).to.equal(actual.channel.display_name);
    expect(result.status).to.equal(actual.channel.status);
    expect(result.game).to.equal(actual.game);
  });
});
