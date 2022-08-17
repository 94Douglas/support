import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class testComp extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactRole = this.onChangeContactRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactRole: ''
    }
  }
  onChangeContactName(e) {
    this.setState({ contactName: e.target.value })
  }
  onChangeContactPhone(e) {
    this.setState({ contactPhone: e.target.value })
  }
  onChangeContactEmail(e) {
    this.setState({ contactEmail: e.target.value })
  }
  onChangeContactRole(e) {
    this.setState({ contactRole: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const contactObject = {
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      contactEmail: this.state.contactEmail,
      contactRole: this.state.contactRole
    };
    axios.post('http://localhost:5000/contact-info/create-contact-name', contactObject)
      .then(res => console.log(res.data));
    this.setState({ contactName: '', contactPhone: '', contactEmail: '', contactRole: '' })
  }
  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.contactName} onChange={this.onChangeContactName} />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.contactPhone} onChange={this.onChangeContactPhone} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.contactEmail} onChange={this.onChangeContactEmail} />
        </Form.Group>
        <Form.Group controlId="Name">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" value={this.state.contactRole} onChange={this.onChangeContactRole} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Page Person
        </Button>
      </Form>
    </div>);
  }
}