import React from 'react';
import uuid from 'uuid/v4';
import Chats from './Chats';
import './StreamsView.scss';

const streams = [
  'mrwaynz',
  'pepperjc',
  'bbyong7',
].map(stream => ({ name: stream, id: uuid() }));

// {console.log(props.params.splat)}
/* eslint-disable react/prop-types, no-console */
export default () => (
  <div className="streams-view">
    <div className="streams-view__streams">
      Streams view placeholder: <br />
    </div>
    <Chats
      className="streams-view__chats"
      streams={streams}
    />
  </div>
);
