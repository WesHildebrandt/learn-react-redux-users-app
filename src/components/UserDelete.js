/**
 * Created by demmith on 7/6/2017.
 */
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

/**
 * User delete component
 */
class UserDelete extends React.Component
{
  /**
   * Constructor
   *
   * @param props
   */
  constructor(props)
  {
    super(props);

    // bind <this> to the event methods
    this.modalDeleteHide = this.modalDeleteHide.bind(this);
    this.userDelete = this.userDelete.bind(this);
  }
  /**
   * Render
   *
   * @returns {XML}
   */
    render()
    {
      return(
        <Modal show={this.props.modal_delete.show}>
          <Modal.Header>
            <Modal.Title>
              Are you sure you want to delete &nbsp;
              <strong>{this.props.modal_delete.username}</strong>?
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.modalDeleteHide}>No</Button>
            <Button bsStyle="primary" onClick={this.userDelete}>Yes</Button>
          </Modal.Footer>
        </Modal>
      )
    }

  /**
   * Close the delete modal
   *
   * @param event
   */
  modalDeleteHide(event)
  {
    this.props.dispatch({
      type: 'users.modalDeleteHide',
    });
  }

  /**
   * Delete a user
   *
   * @param event
   */
  userDelete(event)
  {
    // delete the user
    this.props.dispatch({
      type: 'users.delete',
      id: this.props.modal_delete.id,
    });

    // hide the modal dialog
    this.props.dispatch({
      type: 'users.modalDeleteHide',
    });
  }
}

// export the connected class
function mapStateToProps(state) {
  // set the data for the user delete modal
  let modal_delete;
  if (state.users.modal && state.users.modal.list_delete) {
    modal_delete = state.users.modal.list_delete;
  }
  else {
    modal_delete = {
      show:false,
      id: 0,
      username: '',
    }
  }

  // return
  return {
    modal_delete: modal_delete,
  }
}

// export the connected class
export default connect(mapStateToProps)(UserDelete);
