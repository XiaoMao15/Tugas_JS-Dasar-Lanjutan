import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './cardlist.css';

const materi = [
  {
    title: 'HTML & CSS',
    text: 'Mengenal dasar HTML dan CSS untuk membuat struktur serta tampilan halaman website.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'JavaScript Dasar',
    text: 'Mempelajari konsep dasar JavaScript seperti variabel, fungsi, kondisi, dan perulangan.',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Web Design',
    text: 'Memahami prinsip dasar desain website agar tampilan terlihat menarik, rapi, dan mudah digunakan.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'UI/UX Design',
    text: 'Mengenal konsep UI/UX untuk menciptakan pengalaman pengguna yang nyaman dan intuitif.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Git & GitHub',
    text: 'Mempelajari penggunaan Git dan GitHub untuk menyimpan, mengelola, dan berkolaborasi dalam project.',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Web Development',
    text: 'Mengenal proses pengembangan website dari tahap perencanaan hingga menjadi aplikasi yang dapat digunakan.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  },
];

function Cardgrid() {
  return (
    <Container className="card-list py-5">
      <div className="text-center mb-4">
        <h2>Materi Coding</h2>
        <p className="text-muted">
          Pelajari berbagai dasar teknologi untuk membangun website dan aplikasi.
        </p>
      </div>

      <Row xs={1} sm={2} lg={3} className="g-4">
        {materi.map((item) => (
          <Col key={item.title}>
            <Card className="card-list__card h-100">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
              />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cardgrid;