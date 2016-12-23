import React from 'react';
import Navbar from './Navbar'

var items = [{
  name: "Buttons",
  url: "/home/components/buttons"
}, {
  name: "Form",
  url: "/home/components/form"
}, {
  name: "List & Table",
  url: "/home/components/tablelist"
}, {
  name: "Others",
  url: "/home/components/others"
}]
var SecondaryPage = React.createClass({
  render() {
    return (
      <section>
        <Navbar items={ items } router={ this.props.router } />
        <section className="components-content">
          { this.props.children }
        </section>
      </section>
      );
  }
});
module.exports = SecondaryPage