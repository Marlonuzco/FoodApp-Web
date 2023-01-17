import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function LoginScreen() {
  const navigate = useNavigate()
  return (
    <div id="div1">
      <div id="div2">
        <h1 id="title">Login</h1>
        <div id="div3">
          <h5 id="title2">Si ya estás registrado</h5>
        <Button variant="dark" size="lg" id="button1" onClick={()=>{navigate('/LoginForm')}}>
            Iniciar Sesión
          </Button>
          <h5 id="title2">Y si no estás registrado entonces</h5>
          <Button variant="light" size="lg" id="button1" onClick={()=>{navigate('/LoginRegister')}}>
            Registrarme
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
