import React from 'react';
import RenderMixin from "../utility/RenderMixin"
var Header = React.createClass({
  mixins: [RenderMixin],
  render: function() {
    console.log("Header:render", arguments);
    var style = {
        backgroundImage: "url(public/images/skylightbg.png)",
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
      <div style={style}><div style={comStyle}>Components</div><div style={descStyle}>Bootstrap based resulable components, written in React</div></div>
    );
  },
  // componentWillReceiveProps: function() {
  //   console.log("Header:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("Header:componentDidUpdate", arguments);
  // }
});
export default Header