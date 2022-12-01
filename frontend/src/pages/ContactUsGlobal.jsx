import React from "react";
import Table from "react-bootstrap/Table";
import ContactTableRowGlobal from "../components/ContactTableRowGlobal";

const ContactUsGlobal = () => {
  const DataTable = () => {
    return this.state.contactPersons.map((res, i) => {
      return <ContactTableRowGlobal obj={res} key={i} />;
    });
  };
  return (
    <div>
      <section className="heading">
        <h1>Kontaktuppgifter Till Styrelsen</h1>
        {/* <p>Kontaktuppgifter till styrelsemedlemmar</p> */}
      </section>
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Email</th>
              <th>Roll</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>Styrelsen</td>
              <td>olovshage@gmail.com</td>
              <td>Styrelsen</td>
            </tr>
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default ContactUsGlobal;
