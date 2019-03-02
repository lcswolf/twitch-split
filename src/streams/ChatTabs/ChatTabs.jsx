import React from "react";
import propTypes from "../propTypes";
import "./ChatTabs.scss";

const ChatTabs = props => {
  const tabs = props.streams.map((stream, index, arr) => {
    const classBase = "chat-tabs__tab";
    let classes = classBase;
    let onClick = () => {
      props.tabClicked(index);
    };
    if (index === arr.length - 1) classes = `${classes} ${classBase}--last`;
    if (index === props.active) {
      classes = `${classes} ${classBase}--active`;
      onClick = null;
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <li key={stream.id} className={classes} onClick={onClick}>
        {stream.name}
      </li>
    );
  });

  return (
    <nav className={`${props.className} chat-tabs`}>
      <ul>{tabs}</ul>
    </nav>
  );
};
ChatTabs.propTypes = propTypes;

export default ChatTabs;
