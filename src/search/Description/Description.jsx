import React from 'react';
import './Description.scss';

/* eslint-disable react/prop-types */
const Description = (props) => {
  const style = {};
  if (!props.visible) style.display = 'none';

  return (
    <div className="description" style={style}>
      <ul>
        <li>
          Use twitch split to watch multiple streams from Twitch.tv side by side.
        </li>
        <li>
          Search for two or three streams and hit the button.
        </li>
        <li>
          Share the URL from your address bar with friends to share your split view.
        </li>
      </ul>
    </div>
  );
};

export default Description;
