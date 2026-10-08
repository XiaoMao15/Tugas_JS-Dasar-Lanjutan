import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2>Contact Us</h2>
          <p className="text-muted">
            Punya pertanyaan atau ingin memberikan saran? Hubungi kami melalui form berikut.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Pesan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Tulis pesan..."
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Kirim Pesan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;