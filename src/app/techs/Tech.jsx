import React from 'react';

const styles = {
  tech: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem',
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem',
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0',
  },
};

export default function Tech(props) {
  return (
    <div style={styles.tech}>
      <img style={styles.logo} alt={props.tech.title} src={props.tech.logo} />
      <h3 style={styles.h3}>
        {props.tech.title}
      </h3>
      <p>{props.tech.text1}</p>
      <p>{props.tech.text2}</p>
    </div>
  );
}

Tech.propTypes = {
  tech: React.PropTypes.shape({
    title: React.PropTypes.string,
    logo: React.PropTypes.string,
    text1: React.PropTypes.string,
    text2: React.PropTypes.string,
  }).isRequired,
};
