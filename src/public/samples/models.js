var ModalDialog = ReactBootstrap.Modal.Dialog
var ModalHeader = ReactBootstrap.Modal.Header
var ModalBody = ReactBootstrap.Modal.Body
var ModalFooter = ReactBootstrap.Modal.Footer
var ModalTitle = ReactBootstrap.Modal.Title
var Button = ReactBootstrap.Button
var modalInstance = (
  <div className="static-modal">
    <ModalDialog>
      <ModalHeader>
        <ModalTitle>Modal title</ModalTitle>
      </ModalHeader>

      <ModalBody>
        One fine body...
      </ModalBody>

      <ModalFooter>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </ModalFooter>

    </ModalDialog>
  </div>
);

ReactDOM.render(modalInstance, mountNode);