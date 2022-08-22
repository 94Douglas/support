import React, { Component } from "react";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class ContactTableRowAdmin extends Component {

    constructor(props) {
        super(props);
        this.deleteContactPerson = this.deleteContactPerson.bind(this);
    }
    deleteContactPerson() {
        axios
            .delete(
                // "http://localhost:5000/contact-info/delete-contact-name/" +
                "https://olovshageback.herokuapp.com/contact-info/delete-contact-name/" +
                this.props.obj._id
            )
            .then((res) => {
                toast.success(`Successfully Deleted ${this.props.obj.contactName}`);
                // window.location.reload();
            })
            .catch((error) => {
                toast.error(`Something went wrong.`);
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
                <td>
                    {/* <Link
            className="edit-link"
            to={"/edit-contact-name/" + this.props.obj._id}
          >
            Edit
          </Link> */}

                    <Button onClick={this.deleteContactPerson} size="sm" variant="danger">
                        Delete
                    </Button>

                </td>
            </tr>
        );
    }
}
