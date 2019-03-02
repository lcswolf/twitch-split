import React from "react";
import propTypes from "../propTypes";
import "./ChatEmbs.scss";

const ChatEmbs = props => {
  const chats = props.streams.map((stream, index) => (
    <iframe
      className="chat-embs__chat"
      key={stream.id}
      style={{
        display: props.active !== index ? "none" : "",
      }}
      frameBorder="0"
      scrolling="yes"
      id={`${stream.name}_embed`}
      src={`https://www.twitch.tv/${stream.name}/chat`}
    />
  ));
  return <section className={`${props.className} chat-embs`}>{chats}</section>;
};
ChatEmbs.propTypes = propTypes;

export default ChatEmbs;
