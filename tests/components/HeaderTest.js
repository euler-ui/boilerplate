import React from 'react';
import ReactDom from 'react-dom'
// import TestUtils from 'react-addons-test-utils';
import Header from '../../src/components/Header';


describe('components/Header', function() {
  it('renders without problems', function() {
    var EXPECTED_CONTENT = "ComponentsBootstrap based resulable components, written in React";
    var header = ReactDom.render(<Header/>, document.body);
    var headerNode = ReactDom.findDOMNode(header);

    assert.equal(EXPECTED_CONTENT, headerNode.textContent);
  //   var BestPizzaButton = React.createClass({
  //     getInitialState: function() {
  //       return {
  //         bestPizza: {}
  //       };
  //     },
  //     shoutName: function(name) {
  //       return name.toUpperCase();
  //     },
  //     getFirstPizza: function() {
  //       this.setState({
  //         bestPizza: this.props.pizzas[0],
  //         color: "grey"
  //       })
  //     },
  //     render: function() {
  //       var bestPizza = this.state.bestPizza;
  //       var style = {
  //           color: "black"
  //       }
  //       if (this.state.color) {
  //           style.color = this.state.color;
  //       }
  //       return (
  //         <div>
  //               <button onClick={this.getFirstPizza} style={style}>
  //                   Get {this.shoutName(this.props.userName)}'s best Pizza
  //               </button>
  //               &nbsp;{bestPizza.name ? bestPizza.name : null}
  //               </div>
  //         )
  //     }
  //   })
  //   var pizzas = [{
  //       name: "Pizza One"
  //   }, {
  //       name: "Pizza Two"
  //   }]
  //   ReactDom.render(<BestPizzaButton userName="Tom" pizzas={pizzas}/>, document.body);
  });
});