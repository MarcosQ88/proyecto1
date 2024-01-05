import './App.css';
import * as component from "./Components.js";

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

const Home = ({lista}) => {


  return(
    
    <div>

      <component.navbar />
      <component.GridAssignatures lista ={lista}/>

    <Outlet />
    </div>
  );
  

}

export default Home;