import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Cardgrid from "../Elements/cardlist";
import "./Home.css";

function Home() {
  return (
    <>
      <Container className="my-5">
        <section className="bookstore-hero">
          <div className="bookstore-hero-copy">
            <p className="eyebrow">TEMUKAN BUKU FAVORITMU</p>
            <h1>Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa.</h1>
            <p className="hero-description">
              Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button href="/book" size="lg" variant="primary">Buy Now</Button>
              <Button href="/book" size="lg" variant="outline-secondary">Detail</Button>
            </div>
          </div>
          <div className="bookstore-hero-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMb5krsnCB5_G62keU25cTcnK3TN_yHWKrCIdpLwCjsysFS-HGlVHAVwe&s=10" alt="Buku di atas meja" />
          </div>
        </section>
      </Container>
      <Cardgrid />
    </>
  );
}
export default Home;
