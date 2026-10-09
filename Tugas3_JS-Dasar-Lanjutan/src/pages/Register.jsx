import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
import "./Auth.css";

function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    window.alert("Form Register ini masih berupa tampilan. Fitur pembuatan akun belum dihubungkan.");
  }
  const socialClick = () => window.alert("Register pihak ketiga belum dihubungkan.");
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Control type="email" placeholder="Email address" aria-label="Email address" required />
          <Form.Control type="password" placeholder="Password" aria-label="Password" required minLength={6} />
          <Button type="submit" className="auth-submit">Register</Button>
        </Form>
        <div className="auth-divider">Or use a third-party</div>
        <Button variant="outline-secondary" className="auth-social" onClick={socialClick}>Register with Twitter</Button>
        <Button variant="outline-primary" className="auth-social" onClick={socialClick}>Register with Facebook</Button>
        <Button variant="outline-secondary" className="auth-social" onClick={socialClick}>Register with GitHub</Button>
        <p className="auth-switch">Sudah punya akun? <Link to="/login">Login</Link></p>
      </section>
    </main>
  );
}
export default Register;
