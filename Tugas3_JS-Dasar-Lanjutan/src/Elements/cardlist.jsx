import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import booksData from "../Utils/books";
import "./cardlist.css";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

function Cardgrid() {
  const [books, setBooks] = useState(booksData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
    price: "",
  });
  useEffect(() => {
    const savedBooks = localStorage.getItem("addedBooks");

    if (savedBooks) {
      setBooks([...booksData, ...JSON.parse(savedBooks)]);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      ...form,
      id: Date.now(),
      year: Number(form.year),
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
    const savedBooks = JSON.parse(
      localStorage.getItem("addedBooks") || "[]"
    );

    localStorage.setItem(
      "addedBooks",
      JSON.stringify([...savedBooks, newBook])
    );

    setForm({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
      price: "",
    });

    setShowForm(false);
  };
  return (
    <Container id="book" className="card-list py-5">
      <div className="text-center mb-4">
        <h2>Novel Pilihan</h2>
        <p className="text-muted">
          Temukan novel fantasi, misteri, dan petualangan favoritmu.
        </p>

        <Button
          variant="success"
          onClick={() => setShowForm(!showForm)}
          className="mt-2"
        >
          {showForm ? "Batal" : "Tambah Novel"}
        </Button>
      </div>

      {showForm && (
        <Form onSubmit={handleSubmit} className="mb-5">
          <Form.Group className="mb-3">
            <Form.Label>Judul Novel</Form.Label>
            <Form.Control
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Masukkan judul novel"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Penulis</Form.Label>
            <Form.Control
              required
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Masukkan nama penulis"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tahun Terbit</Form.Label>
            <Form.Control
              required
              type="number"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              placeholder="Contoh: 2024"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Masukkan deskripsi novel"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>URL Gambar</Form.Label>
            <Form.Control
              required
              type="url"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="https://..."
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              required
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Contoh: Rp150.000"
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Simpan Novel
          </Button>
        </Form>
      )}

      <Row xs={1} sm={2} lg={3} className="g-4">
        {books.map((book) => (
          <Col key={book.id}>
            <Card className="card-list__card h-100">
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  {book.author} · {book.year}
                </Card.Subtitle>

                <Card.Text>{book.description}</Card.Text>

                <div className="mt-auto pt-3 d-flex align-items-center justify-content-between gap-2">
                  <strong className="book-price">
                    {book.price}
                  </strong>

                  <Button href="/login" size="sm" variant="primary">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cardgrid;