import "./App.css";
import {
  Form,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Col,
  Row,
  ProgressBar,
  Image,
  Card,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <div class="App-logo">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3e156b77849959.5c938e3707897.png"
                roundedCircle
                width="40"
              />
              <p>TechWorld</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Contact us</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Main */}
      <main className="App-main">
        {/* Progress Bar */}
        <div class="formulaire">
          <p>Form Progress</p>
          <ProgressBar variant="info" now={80} />
        </div>

        {/* Form */}
        <form>
          <Row>
            <Col>
              <Form.Label>Name*</Form.Label>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Label>Last Name*</Form.Label>
              <Form.Control placeholder="Last name" />
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Email Adress*</Form.Label>
            <Form.Control type="e-mail" placeholder="Foulen@gmail.com" />
            <Form.Text calssName="text-muted">
              Your e-mail would never be shared
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Form.Group>
          {/* ***** */}
          <fieldset class="radio">
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                I'm interested in ...
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Web development"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Data science"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="IOT"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          {/* ***** */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write a comment</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Hi I would like to..."
              rows={3}
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </form>
      </main>
      {/* Footer Card */}
      <footer>
        <Card>
          <Card.Header>Reminder</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> By filling this form you will join our amazing community. </p>
              <footer className="blockquote-footer">
                Happy learning in <cite title="Source Title">TechWorld</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </footer>
    </div>
  );
}

export default App;
