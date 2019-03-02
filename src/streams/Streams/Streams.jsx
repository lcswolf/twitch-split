import React from 'react';
import propTypes from '../propTypes';
import './Streams.scss';

const Streams = (props) => {
  const streams = props.streams.map(stream => (
    <iframe
      key={stream.id}
      className="streams__stream"
      src={`https://player.twitch.tv/?channel=${stream.name}`}
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    />
  ));

  return (
    <section className={`${props.className} streams`}>
      {streams}
    </section>
  );
};
Streams.propTypes = propTypes;

export default Streams;
