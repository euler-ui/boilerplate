import { Input, Button, ButtonInput, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
var PagerInstance = React.createClass({
  render: function() {
    var style = {
      height: "200px"
    }
    return (
      <div style={ style }>
        <form className="col-xs-8">
          <Input type="text" label="User Name" placeholder="Enter username" />
          <Input type="password" label="Password" placeholder="Enter password" />
          <ButtonToolbar>
            <Button className="navbar-right" type="reset">Reset</Button>
            <Button className="navbar-right" type="submit">Submit</Button>
          </ButtonToolbar>
        </form>
      </div>
    );
  }
})


ReactDOM.render(<PagerInstance/>, mountNode);