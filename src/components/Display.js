const ReactBootstrap = require("react-bootstrap");
const React = require("react");
const ReactDOM = require("react-dom");
const ButtonGroup = ReactBootstrap.ButtonGroup,
  Button = ReactBootstrap.Button,
  ButtonToolbar = ReactBootstrap.ButtonToolbar,
  DropdownButton = ReactBootstrap.DropdownButton,
  MenuItem = ReactBootstrap.MenuItem;
const Display = React.createClass({
  render() {
    return (
      <div className="sample-displayContainer">
        <h3><small>Example</small></h3>
        <div ref="mountNode" className="sample-displayEl"></div>
      </div>
    );
  },
  componentWillUpdate(props) {
    setTimeout(() => {
      try {
        this.updateDisplayElement(props.code);
      } catch ( err ) {
        console.log("failed to updateDisplayElement", err)
      }
    }, 0);
  },
  transformES6Imports(code) {
    const regexp = /import(.*?)(;|\n)/g;
    return code.replace(regexp, (w, g1) => {
      const childRegexp = /{(.*?)}\s+from\s+['"](.*?)['"]/;
      let widgetsName = "";
      let libName = "";
      if (childRegexp.test(g1)) {
        widgetsName = RegExp.$1;
        libName = RegExp.$2;
      }
      if (libName !== "react-bootstrap" || !widgetsName) {
        return w;
      }
      let wNames = widgetsName.split(",");
      let result = wNames.map((fullName) => {
        let names = fullName.split("as");
        let widgetName = fullName.trim();
        let varName = widgetName;
        if (names.length > 1) {
          widgetName = names[0];
          varName = names[1];
        }
        return `const ${varName} = ReactBootstrap.${widgetName};\n`
      })
      return result.join("");
    });
  },
  updateDisplayElement(code) {
    const me = this;
    debugger;
    code = this.transformES6Imports(code);
    let compiledCode = Babel.transform(code, {
      presets: ['es2015', 'react']
    }).code;
    compiledCode = "(function(){var mountNode = me.refs.mountNode;" + compiledCode + "})()";
    eval(compiledCode);
  }
});
export default Display
