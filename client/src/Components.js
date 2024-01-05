import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import penimage from './images/pen.png';
import getAssignatures from "./App.js";

import { useState, useEffect } from 'react';
//importacion de Axios. creo que es para manejar de forma mas facil los llamados al server
import Axios from "axios";
//importacion de bootstrap. libreria con botones, tablas y demas ya armado
import 'bootstrap/dist/css/bootstrap.min.css';

// importacion de sweetalert2. una libreria para tener notificiones ya prehechas
// si no funca es por que tengo que instalar la version de react
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

//creo que esto seria como el objeto que se usa para invoccat a las notificacioness
const Noti = withReactContent(Swal);




// tampoco supe como hacerlo de otra forma
function ButtonEdit({assignature},{card}){
    if (card){
        return <button onClick={editAssignature(assignature)} type="button" className='btn btn-light border-black p-0 m-2 position-absolute bottom-0 end-0 button_edit'><img src={penimage}  alt="editar" className='icon'/></button>;
    } else {
        return <Button  type="button" className='  btn btn-light border-black p-0 button_edit'><img src={penimage}  alt="editar" className='icon'/></Button>;
    }
    

}

const update = ({val})=>{
  Axios.put("http://localhost:3006/update",{
    id : val.id,
    name :  document.getElementById("input-name").value,
    code : document.getElementById("input-code").value,
    correlativas : document.getElementById("input-correlativas").value,
 
  }).then(()=>{
    getAssignatures();
    Noti.fire({
      title: "<strong>Actualización exitosa!!!</strong>",
      html: "<i>El empleado <strong></strong> fue actualizado con éxito!!!</i>",
      icon: 'success',
      timer:3000
    });
    }).catch(function(error){
      Noti.fire({
        icon: 'error',
        title: 'Oops...',
        text: JSON.parse(JSON.stringify(error)).message==="Network Error"?"Intente más tarde":JSON.parse(JSON.stringify(error)).message
      })
    });
    
}




export function navbar() {
  return (
    <Navbar className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Universidad</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        {/* <ButtonEdit card= {false} /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const editAssignature = (val)=>{


  Noti.fire({
    title: "Editar <strong>"+val.name+"</strong>",
    // podria sacar el inline style
    html: `
      <label>Nombre:<input id="input-name" placeholder=`+ val.name +` class="swal2-input" style="width:23vw; margin-left :3vw; margin-right:0;"></label>
      <label>Codigo:<input id="input-code" placeholder=`+ val.code +` class="swal2-input" style="width:23vw; margin-left :3vw; margin-right:0;"></label>
      <label>Correlativas:<input id="input-correlativas" placeholder=`+ val.correlativas +` class="swal2-input" style="width:23vw; margin-left :3vw; margin-right:0;"></label>
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        update(val ={val})
        
      ];
    }
  });
 
}
// <img src={penimage}  alt="editar" className='object-fit-scale w-25 h-25'/>


export function GridAssignatures({lista}) {
  return (
      <Row xs={1} md={4} className="mx-2">
        {lista.map((val, idx) => (
          <Col key={idx}>
            <Card className=' my-3 '>
              <Card.Body className='my-5 '>
              <Card.Title className='my-5  text-uppercase fs-3 fw-bolder font-monospace text-center'> {val.name} </Card.Title>
              <Card.Text className='text-center'>
                <strong>Code:</strong> {val.code}
                <br/>
                <strong>Correlativas</strong> : {val.correlativas}
        </Card.Text>
                {/* NO ENCONTRE COMO HACER ESTO DE UNA FORMA CORRECTA, NOMAS QUERIA CAMBIAR LA ALTURA*/}
              </Card.Body>
              {/* <ButtonEdit assignature= {val} card={true}  /> */}
             <button onClick={()=>{editAssignature(val);}} type="button" className='btn btn-light border-black p-0 m-2 position-absolute bottom-0 end-0 button_edit'><img src={penimage}  alt="editar" className='icon'/></button>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

