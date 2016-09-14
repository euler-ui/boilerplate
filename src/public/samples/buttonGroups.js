var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var buttonGroupInstance = (
    <div>
        <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
        <p></p>
        <ButtonToolbar>
            <ButtonGroup>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button>8</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <p></p>
        <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <DropdownButton title="Dropdown" id="bg-nested-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
        </ButtonGroup>
    </div>
  
);

ReactDOM.render(buttonGroupInstance, mountNode);