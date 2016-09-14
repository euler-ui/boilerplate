var RenderMixin = {
  componentWillReceiveProps: function() {
    console.groupCollapsed("%s Props Change", this.constructor.displayName);
    this.propsChange = true;
    console.log("%s componentWillReceiveProps", this.constructor.displayName, arguments);
  },
  componentWillMount: function() {
    console.groupCollapsed("%s First Render", this.constructor.displayName);
    console.log("%s componentWillMount", this.constructor.displayName, arguments);
  },
  componentWillUpdate: function() {
    if (!this.propsChange) {
      console.groupCollapsed("%s State Change", this.constructor.displayName);
    }
    console.log("%s componentWillUpdate", this.constructor.displayName, arguments);
  },
  // render: function() {
  //   console.log("%s render", this.constructor.displayName, arguments);
  // },
  componentDidUpdate: function() {
    console.log("%s componentDidUpdate", this.constructor.displayName, arguments);
    console.groupEnd();
    this.propsChange = false;
  },
  componentDidMount: function() {
    console.log("%s componentDidMount", this.constructor.displayName, arguments);
    console.groupEnd();
  }
};
export default RenderMixin