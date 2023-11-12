import React, { useState } from "react";
import { Form, Button, Row, Col} from "react-bootstrap";

import {login} from '../../services/auth';

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Row className="login-user">
      <Col md={6}>        
        <Form>
          <Form.Group>
            <Form.Label className="login-user__label">Username</Form.Label>
            <Form.Control className="login-user__input" type="text" name="username" onChange = {(e) => setUsername(e.target.value)}/>
          </Form.Group>
          <Form.Group>
            <Form.Label className="login-user__label">Password</Form.Label>
            <Form.Control className="login-user__input" type="password" name="password" onChange = {(e) => setPassword(e.target.value)}/>
          </Form.Group>
          <Button className="login-user__button" variant="success" onClick={() => {login(username, password)}}>Log in</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
