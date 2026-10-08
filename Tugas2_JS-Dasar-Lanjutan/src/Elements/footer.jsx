function Footer() {
  return (
    <footer className="w-100 bg-dark text-light">
      <div className="container py-4">
        <div className="text-center">
          <h5>CodeSpace</h5>
          <p className="text-light text-opacity-75 mb-3">
            Media pembelajaran untuk belajar teknologi dan pemrograman.
          </p>

          <div className="d-flex justify-content-center gap-3 mb-3">
            <a href="#home" className="text-light text-decoration-none">
              Home
            </a>
            <a href="#team" className="text-light text-decoration-none">
              Team
            </a>
            <a href="#contact" className="text-light text-decoration-none">
              Contact
            </a>
          </div>

          <hr className="border-secondary" />

          <p className="mb-0 text-light text-opacity-75 small">
            © 2026 CodeSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;