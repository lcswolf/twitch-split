import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid/v4';

import Tech from './Tech';

const styles = {
  container: {
    margin: '1rem',
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem',
  },
  techs: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

export default class Techs extends Component {
  constructor() {
    super();
    this.state = { techs: [] };
  }

  componentDidMount() {
    axios
      .get('app/techs/techs.json')
      .then((response) => {
        const techs = response.data.map(tech => ({
          ...tech,
          id: uuid(),
        }));
        this.setState({ techs });
      });
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.h2}>
          Cooked with all these awesome technologies:
        </h2>
        <div style={styles.techs}>
          {this.state.techs.map(tech => (
            <Tech key={tech.id} tech={tech} />
          ))}
        </div>
      </div>
    );
  }
}
