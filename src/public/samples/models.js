import { Button, ModalDialog, ModalHeader, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
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