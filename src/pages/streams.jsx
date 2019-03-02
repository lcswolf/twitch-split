import React from 'react';
import { StreamsView } from '../streams';

// eslint-disable-next-line react/prop-types
export default function StreamsPage({ params }) {
  return <StreamsView params={params} />;
}

// TODO: Remove this and adjust the StreamsView component's handling of the
// streams list parsing from url. When using React Router, the streams were
// split as "http://url/stream1/stream2". Streams are now passed as
// "http://url/streams?s=stream1,stream2".
StreamsPage.getInitialProps = async ({ query }) => {
  const streamsQuery = query.s;
  let streamsSplat;

  try {
    streamsSplat = streamsQuery.replace(',', '/');
  } catch (e) {
    //
  }

  return { params: { splat: streamsSplat } };
};
