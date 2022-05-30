import { Modal, Button } from 'react-bootstrap';

function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-primary text-white" closeButton>
        <Modal.Title className="display-6 " id="contained-modal-title-vcenter">
          {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="d-flex flex-column gap-2">
          <li className="fs-5">
            <strong>Full Name:&nbsp;</strong>
            {props.data.name}
          </li>
          <li className="fs-5">
            <strong>Username:&nbsp; </strong> {props.data.username}
          </li>
          <li className="fs-5">
            <strong>Email:&nbsp;</strong> {props.data.email}
          </li>

          <li className="fs-5">
            <strong>Phone:&nbsp;</strong> {props.data.phone}
          </li>
          <li className="fs-5">
            <strong>Website:&nbsp;</strong> {props.data.website}
          </li>
          {/* <li className="fs-5">
            <strong>City:&nbsp;</strong>
            {props.data.address.city}
          </li>
          <li className="fs-5">
            <strong>Street:&nbsp;</strong>
            {props.data.address.street}
          </li> */}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalShow;
