import React, { Component } from "react";
import { BiRefresh } from "react-icons/bi";
import { IoMdRefresh, IoMdRefreshCircle } from "react-icons/io";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import "../components/../styleContact.css";
import axios from "axios";
import ContactTableRowAdmin from "./ContactTableRowAdmin";

export default class testComp extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
    this.onChangeContactEmail = this.onChangeContactEmail.bind(this);
    this.onChangeContactRole = this.onChangeContactRole.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      contactRole: "",
      contactPersons: [],
    };
  }
  onChangeContactName(e) {
    this.setState({ contactName: e.target.value });
  }
  onChangeContactPhone(e) {
    this.setState({ contactPhone: e.target.value });
  }
  onChangeContactEmail(e) {
    this.setState({ contactEmail: e.target.value });
  }
  onChangeContactRole(e) {
    this.setState({ contactRole: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const contactObject = {
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      contactEmail: this.state.contactEmail,
      contactRole: this.state.contactRole,
    };
    // axios.post('http://localhost:5000/contact-info/create-contact-name', contactObject)
    axios
      .post(
        "https://olovshageback.herokuapp.com/contact-info/create-contact-name",
        contactObject
      )
      .then((res) => console.log(res.data));
    this.setState({
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      contactRole: "",
    });

    toast.success(`${this.state.contactName} har skapats.`);
    // window.location.reload();
  }
  componentDidMount() {
    // axios.get('http://localhost:5000/contact-info')
    axios
      .get("https://olovshageback.herokuapp.com/contact-info")
      .then((res) => {
        this.setState({
          contactPersons: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  DataTable() {
    return this.state.contactPersons.map((res, i) => {
      return <ContactTableRowAdmin obj={res} key={i} />;
    });
  }

  RefreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="form-wrapper">
          <section className="heading">
            <p>Skapa Styrelsemedlem till Kontakt Sidan</p>
            {/* <p>Kontaktuppgifter till styrelsemedlemmar</p> */}
          </section>
          <Button
            size="lg"
            block="block"
            type="submit"
            className="mt-4 mb-3"
            onClick={this.RefreshPage}
          >
            <IoMdRefresh />
          </Button>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              {/* <Form.Label>Namn</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Namn"
                value={this.state.contactName}
                onChange={this.onChangeContactName}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="Phone">
              {/* <Form.Label>Telefonnummer</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Telefonnummer"
                value={this.state.contactPhone}
                onChange={this.onChangeContactPhone}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="Email">
              {/* <Form.Label>Email</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Email"
                value={this.state.contactEmail}
                onChange={this.onChangeContactEmail}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="Name">
              {/* <Form.Label>Roll</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Roll"
                value={this.state.contactRole}
                onChange={this.onChangeContactRole}
              />
            </Form.Group>
            <Button
              variant="success"
              size="lg"
              block="block"
              type="submit"
              className="mt-4"
            >
              Skapa Person
            </Button>
          </Form>
        </div>

        <div className="table-wrapper-admin">
          <section className="heading">
            <p>Översikt Styrelsemedlemmar</p>
            {/* <p>Kontaktuppgifter till styrelsemedlemmar</p> */}
          </section>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Namn</th>
                <th>Telefonnummer</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Radera</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
