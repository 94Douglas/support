import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import axios from "axios";
const BACKEND = process.env.BACKEND_API;

export default class ContactTableRow extends Component {
  
  constructor(props) {
    super(props);
    this.deleteContactPerson = this.deleteContactPerson.bind(this);
  }
  deleteContactPerson() {
    axios
      .delete(
        // "http://localhost:5000/contact-info/delete-contact-name/" +
        // "https://olovshageback.herokuapp.com/contact-info/delete-contact-name/" +
        BACKEND + "/contact-info/delete-contact-name/" +
        this.props.obj._id
      )
      .then((res) => {
        console.log("Successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.contactName}</td>
        <td>{this.props.obj.contactPhone}</td>
        <td>{this.props.obj.contactEmail}</td>
        <td>{this.props.obj.contactRole}</td>
       
      </tr>
        );
  }
}