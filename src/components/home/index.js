import React from 'react';
import TopBar from './TopBar';
import './home.css';
var Home = React.createClass({
  render() {
    return (
      <section className="primary">
        <TopBar router={ this.props.router } />
        <section className="primary-content">
          { this.props.children }
        </section>
      </section>
      );
  }
});

module.exports = Home