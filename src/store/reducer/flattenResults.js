/* eslint-disable no-underscore-dangle */
export default function flattenResults(resultsJSON) {
  return resultsJSON.streams.map(stream => ({
    id: stream._id,
    previewTemplate: stream.preview.template,
    displayName: stream.channel.display_name,
    name: stream.channel.name,
    status: stream.channel.status,
    game: stream.game,
  }));
}
