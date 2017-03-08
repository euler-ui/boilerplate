import { DropdownButton, ButtonToolbar, MenuItem } from 'react-bootstrap';
var BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

function renderDropdownButton(title, i) {
  return (
    <DropdownButton bsStyle={ title.toLowerCase() } title={ title } key={ i } id={ `dropdown-basic-${i}` }>
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>Active Item</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  );
}

var buttonsInstance = (
<ButtonToolbar>
  { BUTTONS.map(renderDropdownButton) }
</ButtonToolbar>
);

ReactDOM.render(buttonsInstance, mountNode);
