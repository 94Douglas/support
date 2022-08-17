// import React from 'react'
import PageBorder from '../components/PageBorder'
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ContactTableRow from '../components/ContactTableRow';
import "../components/styleContact.css";

export default class ContactUs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactPersons: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000/contact-info')
      .then(res => {
        this.setState({
          contactPersons: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  DataTable() {
    return this.state.contactPersons.map((res, i) => {
      return <ContactTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}