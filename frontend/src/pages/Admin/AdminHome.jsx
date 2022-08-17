import AdminOption from '../../components/AdminComps/AdminOption'

function AdminHome() {
  return (
    <>

      <section className="heading">
        <h1>Admin Panel</h1>
        <p>Välj något av alternativen nedan</p>
      </section>

      <AdminOption />
    </>
  );
}

export default AdminHome;
