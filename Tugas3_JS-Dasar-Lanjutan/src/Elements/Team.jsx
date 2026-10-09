import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const teamMembers = [
  {
    name: 'IpulDev',
    role: 'Frontend Developer',
    description: 'Mengembangkan tampilan dan antarmuka website menggunakan React JS.',
  },
  {
    name: 'Bintang',
    role: 'UI/UX Designer',
    description: 'Merancang tampilan website agar nyaman digunakan dan mudah dipahami.',
  },
  {
    name: 'SakiAihara',
    role: 'Content Developer',
    description: 'Menyiapkan materi dan konten yang digunakan dalam website.',
  },
];

function Team() {
  return (
    <section id="team" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Our Team</h2>
          <p className="text-muted">
            Kenali tim yang berkontribusi dalam pembuatan website ini.
          </p>
        </div>

        <Row xs={1} md={3} className="g-4">
          {teamMembers.map((member) => (
            <Col key={member.name}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-3 text-primary">
                    {member.role}
                  </Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Team;