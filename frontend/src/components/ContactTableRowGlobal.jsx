import React from "react";

const ContactTableRowGlobal = () => {
  return (
    <tr>
      <td>olovshage@gmail.com</td>
      <td>{this.props.obj.contactPhone}</td>
      <td>{this.props.obj.contactEmail}</td>
      <td>{this.props.obj.contactRole}</td>
    </tr>
  );
};

export default ContactTableRowGlobal;
