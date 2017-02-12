import React, { Component } from 'react';
import uuid from 'uuid/v4';
import parseSplat from './parseSplat';
import './StreamsView.scss';

import Streams from './Streams';
import Chats from './Chats';

// Generate list of streams from URL.
function parseStreams(splat) {
  return parseSplat(splat).map(
    stream => ({ name: stream, id: uuid() }),
  );
}

/* eslint-disable react/prop-types, no-console */
class StreamsView extends Component {
  state = {
    streams: parseStreams(this.props.params.splat),
    lastSplat: this.props.params.splat,
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.lastSplat !== nextProps.params.splat) {
      this.setState({
        streams: parseStreams(nextProps.params.splat),
        lastSplat: nextProps.params.splat,
      });
    }
  }

  render() {
    return (
      <div className="streams-view">
        <Streams
          className="streams-view__streams"
          streams={this.state.streams}
        />
        <Chats
          className="streams-view__chats"
          streams={this.state.streams}
        />
      </div>
    );
  }
}

export default StreamsView;
