import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import penimage from './images/pen.png';

// tampoco supe como hacerlo de otra forma
function ButtonEdit({card}){
    if (card){
        return <button type="button" className='btn btn-light border-black p-0 m-2 position-absolute bottom-0 end-0 button_edit'><img src={penimage}  alt="editar" className='icon'/></button>;
    } else {
        return <Button  type="button" className='  btn btn-light border-black p-0 button_edit'><img src={penimage}  alt="editar" className='icon'/></Button>;
    }
    

}




export function navbar() {
  return (
    <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Universidad</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        <ButtonEdit 
            card= {false} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// <img src={penimage}  alt="editar" className='object-fit-scale w-25 h-25'/>

export function GridAssignatures({lista}) {
  return (
      <Row xs={1} md={4} className="mx-5">
        {lista.map((val, idx) => (
          <Col key={idx}>
            <Card className=' my-3 '>
              <Card.Body className='my-5'>
              <Card.Title className='my-5 text-uppercase fs-3 fw-bolder font-monospace'> {val.name} </Card.Title>
                {/* NO ENCONTRE COMO HACER ESTO DE UNA FORMA CORRECTA, NOMAS QUERIA CAMBIAR LA ALTURA*/}
              </Card.Body>
              <ButtonEdit card={true} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

