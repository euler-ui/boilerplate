import Display from "./Display"
import Editor from "./Editor"
import RenderMixin from "../utility/RenderMixin"
var ButtonInput = ReactBootstrap.ButtonInput
var Sample = React.createClass({
    mixins: [RenderMixin], 
    propTypes: {
        path: React.PropTypes.string.isRequired,
        code: React.PropTypes.string,
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        isEditorVisible: React.PropTypes.bool
    },
    render: function() {
        console.log("Sample:render", arguments);
        var props = this.props;
        var path = props.path;
        var isEditorVisible = props.isEditorVisible;
        return (
            <div>
                <div><h3 id={path.substring(0, path.indexOf("."))}>{props.title}</h3></div>
                <p>{props.desc}</p>
                <Display ref="display" code={props.editingCode!=undefined? props.editingCode:props.code}className="sample-display"></Display>
                { isEditorVisible? null: <ButtonInput bsStyle="info" className="btn-xs" onClick={() => props.showEditor(path)} value="Show Code" /> }
                <Editor ref="editor" path={path} code={props.code} editingCode={props.editingCode} updateEditor={props.updateEditor} isEditorVisible={isEditorVisible}></Editor>
                { isEditorVisible? <ButtonInput bsStyle="info" className="btn-xs" onClick={() => props.hideEditor(path)} value="Hide Code" /> : null}
                <p></p>
            </div>
        );
    },
  // componentWillReceiveProps: function() {
  //   console.log("Sample:componentWillReceiveProps", arguments);
  // },
  // componentDidUpdate: function() {
  //   console.log("Sample:componentDidUpdate", arguments);
  // }
});

export default Sample