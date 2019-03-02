// import uuid from 'uuid/v4';

// const streams = [
//   'mrwaynz',
//   'pepperjc',
//   'bbyong7',
// ].map(stream => ({ name: stream, id: uuid() }));

// Sanitize
export default function parseSplat(splat) {
  // Accept only ASCII sections (/asdfasd/asdf)
  if (!/^([a-zA-Z0-9_]{4,}\/?)+$/.test(splat)) return [];
  return splat
    .toLowerCase()
    .split("/")
    .filter(value => value.length !== 0)
    .filter((value, index) => index < 3);
}
