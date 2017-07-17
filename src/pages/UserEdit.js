/**
 * Created by demmith on 7/7/2017.
 */
import React from 'react';
import { PageHeader, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

/**
 * User add/edit page component
 */
class UserEdit extends React.Component
{
  /**]
   * Render
   *
   * @returns {XML}
   */
  render()
  {
    return(
      <div>
        <PageHeader>User add/edit</PageHeader>
        <Form horizontal>
          <Field name="username" component={UserEdit.renderUsername}/>
          <Field name="job" component={UserEdit.renderJob}/>
          <FormGroup>
            <Col smOffset={2} sm={8}>
              <Button type="submit">Save User</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  /**
   * Render the username form field
   *
   * @param props
   * @returns {XML}
   */
  static renderUsername(props)
  {
    return(
      <FormGroup>
        <Col sm={2}>Username</Col>
        <Col sm={8}>
          <FormControl {...props.input} id="username" type="text"
               placeholder="Username"/>
        </Col>
      </FormGroup>
    );
  }

  /**
   * Render the job form field
   *
   * @param props
   * @returns {XML}
   */
  static renderJob(props)
  {
    return(
      <FormGroup>
        <Col sm={2}>Job</Col>
        <Col sm={8}>
          <InputGroup>
            <FormControl {...props.input} id="job" type="text" placeholder="Job"/>
            <InputGroup.Addon>
              <Glyphicon glyph="briefcase"/>
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    );
  }
}

// Decorate the form component
export default UserEdit = reduxForm({
  form: 'user_edit',
}) (UserEdit);
