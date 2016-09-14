var Popover = ReactBootstrap.Popover;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Button = ReactBootstrap.Button
var popoverInstance = (
  <div style={{ height: 180 }}>
    <ButtonToolbar>
        <OverlayTrigger trigger="click" placement="left" overlay={<Popover title="Popover left"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="top" overlay={<Popover title="Popover top"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
        <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Popover right"><strong>Holy guacamole!</strong> Check this info.</Popover>}>
            <Button bsStyle="default">Holy guacamole!</Button>
        </OverlayTrigger>
    </ButtonToolbar>
    <Popover placement="right" positionLeft={200} positionTop={50} title="Popover right">
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>
  </div>
);

ReactDOM.render(popoverInstance, mountNode);
