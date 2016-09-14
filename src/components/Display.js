import RenderMixin from "../utility/RenderMixin"
var Display = React.createClass({
  mixins: [RenderMixin], 
  render: function() {
    console.log("%s render", this.constructor.displayName, arguments);
    return (
      <div className="sample-displayContainer">
            <h3><small>Example</small></h3>
            <div ref="displayEl" className="sample-displayEl"></div>
        </div>
    );
  },
  componentWillUpdate: function(props) {
    // console.log("Display", "will update")
    var me = this;
    setTimeout(function() {
        try {
          me.updateDisplayElement(props.code);
        } catch (err) {
          console.log("failed to updateDisplayElement", err)
        }
    }, 0);
  },
  updateDisplayElement: function(code) {
    var me = this;
    var compiledCode = Babel.transform(code, { presets: ['es2015', 'react'] }).code;
    compiledCode = compiledCode.replace("mountNode", "displayEl");
    compiledCode = "(function(){var displayEl = me.refs.displayEl;" + compiledCode + "})()";
    eval(compiledCode);
  }
});
export default Display