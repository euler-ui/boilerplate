import Display from "./Display";
import Editor from "./Editor";
import React from 'react';
import { ButtonInput } from 'react-bootstrap';
var Sample = React.createClass({
  propTypes: {
    path: React.PropTypes.string.isRequired,
    code: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired,
    isEditorVisible: React.PropTypes.bool
  },
  render: function() {
    var props = this.props;
    var path = props.path;
    var isEditorVisible = props.isEditorVisible;
    return (
      <div>
        <div>
          <h3 id={ path.substring(0, path.indexOf(".")) }>{ props.title }</h3></div>
        <p>
          { props.desc }
        </p>
        <Display ref="display" code={ props.editingCode != undefined ? props.editingCode : props.code } className="sample-display"></Display>
        { isEditorVisible ? null : <ButtonInput bsStyle="info" className="btn-xs" onClick={ () => props.showEditor(path) } value="Show Code" /> }
        <Editor ref="editor" path={ path } code={ props.code } editingCode={ props.editingCode } updateEditor={ props.updateEditor } isEditorVisible={ isEditorVisible }></Editor>
        { isEditorVisible ? <ButtonInput bsStyle="info" className="btn-xs" onClick={ () => props.hideEditor(path) } value="Hide Code" /> : null }
        <p></p>
      </div>
    );
  }
});

export default Sample