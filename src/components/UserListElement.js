/**
 * Created by demmith on 7/5/2017.
 */
import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/**
 * User list element component
 */
class UserListElement extends React.Component
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
    this.modalDeleteShow = this.modalDeleteShow.bind(this);
  }

  /**
   * Render
   *
   * @returns {XML}
   */
  render() {
    const user = this.props.user;
    return(
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.job}</td>
        <td>
          <Link to={'/user-edit/' + user.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" data-id={user.id} data-username={user.username}
            onClick={this.modalDeleteShow}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }

  /**
   * Prompt to delete the user
   *
   * @param event
   */
  modalDeleteShow(event)
  {
    const user_id = Number(event.target.dataset.id);
    const username = event.target.dataset.username;
    this.props.dispatch({
      type: 'users.modalDeleteShow',
      id: user_id,
      username: username,
    });
  }
}

// make sure we have all the props
UserListElement.propTypes = {
  user: React.PropTypes.object.isRequired
}

// export the connected class
export default connect() (UserListElement);

