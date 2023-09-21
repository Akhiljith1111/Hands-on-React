
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Row, Col, Container, Breadcrumb,Badge,Card} from "react-bootstrap"
// import Button from 'react-bootstrap/Button';
// import Alert from 'react-bootstrap/Alert'
import Example from "./Example"

function App() {
  return (
    <div className="App">
      <p>REACT BOOTSTRAP</p>
      <Button variant="outline-primary" size='lg' className='mb-5' disabled>Primary</Button>
      {/* <Alert>Alert</Alert> */}
      {/* <Button variant='secondary' size='lg'>View</Button> */}
      {/* <Alert>Alert</Alert>
      <Example /> */}
{/* <Breadcrumb>
  <Breadcrumb.Item href="#">Google</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb> */}

<Example />
<Badge bg="secondary">New</Badge>


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUkDhps0YJxzc8zJ80CnOCNi0TnqJ2nqQskjypxgCBtTLhZ9LGL3aq9za9-VqvWtsxWY&usqp=CAU" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


<Container className='container'>
   <Row className='row'>
    <Col className='coloumn' lg={6} sm={12}>col 1</Col>
    <Col className='coloumn' lg={6} sm={12}>col 2</Col>
    <Col className='coloumn' lg={6} sm={12}>col 3</Col>
    <Col className='coloumn' lg={6} sm={12}>col 4</Col>
    
   </Row>
   
 
</Container>
    </div>
  );
}

export default App;
