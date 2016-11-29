import RenderMixin from "../utility/RenderMixin"
var Editor = React.createClass({
  mixins: [RenderMixin],
  render: function() {
    console.log("Editor:render", arguments);
    var isEditorVisible = this.props.isEditorVisible;
    var divStyle = {
      "height": "200px"
    };
    if (isEditorVisible) {
      divStyle.display = "block";
    } else {
      divStyle.display = "none";
    }
    return (
      <div ref="editor" style={divStyle}></div>
    );
  },
  componentDidMount: function() {
    var editor = ace.edit(this.refs.editor);
    var props = this.props;
    editor.setTheme("ace/theme/merbivore_soft");
    editor.session.setMode("ace/mode/jsx");
    editor.setAutoScrollEditorIntoView(true);
    editor.setOption("maxLines", 30);
    editor.on("change", function(e, g) {
      props.updateEditor(props.path, g.getValue());
    });
    this.aceEditor = editor;
  },
  componentWillUpdate: function(props) {
    var editor = this.aceEditor;
    if (props.editingCode !== undefined) {
      return;
    }
    editor.setValue(props.code);
    editor.selection.clearSelection();
  },
  // componentWillReceiveProps: function() {
  //   console.log("Editor:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("Editor:componentDidUpdate", arguments);
  // }
});
export default Editor;