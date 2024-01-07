import './App.css';
import * as component from "./Components.js";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import {Outlet} from "react-router-dom";

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
const noti = withReactContent(Swal);
const currentUrl = window.location.href;

const id =currentUrl.slice(30);






const Materia = () => {

  const [assignature,setAssignature]= useState([]);


  useEffect(() => {
   getAssignature();

  }, []);

  const getAssignature =()=>{
    Axios.get(`http://localhost:3006/materia/${id}`).then((response)=>{

    setAssignature(response.data);
  
    });
  }
  


function TopBar() {
  return (
    <Navbar className="bg-body-secondary h2">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>{assignature.length > 0 ? assignature[0].name : 'Loading...'}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
        {/* <ButtonEdit card= {false} /> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
  return(
<>
    <div>

    <TopBar />

    </div>


    </>
  );


}

export default Materia;