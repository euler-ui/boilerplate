import React from 'react';
var Header = React.createClass({
  render: function() {
    var style = {
      backgroundImage: "url(images/skylightbg.png)",
      backgroundSize: "100%",
      textAlign: "center",
      height: "150px",
      paddingTop: "30px"

    }
    var comStyle = {
      color: "white",
      fontSize: "24px"
    }
    var descStyle = {
      color: "grey"
    }
    return (
      <div style={ style }>
        <div style={ comStyle }>Components</div>
        <div style={ descStyle }>Bootstrap based resulable components, written in React</div>
      </div>
    );
  }
});
export default Header