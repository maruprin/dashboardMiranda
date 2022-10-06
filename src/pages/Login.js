import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../App";
import colors from "../styles/colors";
import { Logo } from "../styles/styledComponents";

function Login(props) {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #f8f8f8;
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    justify-content: center;
    text-align: center;
  `;
  const Subcontainer = styled.div`
    position: absolute;
    top: 45vh;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    box-shadow: 0px 16px 30px #00000014;
    border-radius: 20px;
  `;
  const Form = styled.form`
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
  `;
  const H2 = styled.h2`
    color: ${colors.red};
    line-height: 30px;
    cursor: default;
  `;
  const Label = styled.label`
    display: block;
    text-align: left;
  `;
  const Input = styled.input`
    font-size: 18px;
    padding: 5px;
    margin-bottom: 30px;
    border: none;
    outline: none;
    border-bottom: 2px solid #c5c5c5;
    background: ${colors.white};
    width: 100%;
  `;
  const Button = styled.button`
    display: block;
    border: none;
    border-radius: 12px;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    padding: 10px 40px;
    color: #135846;
    background: #ebf1ef 0% 0% no-repeat padding-box;
    margin: 0 auto;
    &:hover {
      color: #ebf1ef;
      background-color: #135846;
    }
  `;
  const P = styled.p`
    font-size: 12px;
  `;

  const navigate = useNavigate();
  const { authDispatch } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "maruprin@mymail.com" && password === "1234") {
      authDispatch({ type: "login", payload: { userName: "maruprin", email: email, id: 3 } });
      return navigate("/");
    } else {
      let errorCredenciales = document.getElementById("error");
      errorCredenciales.style.color = colors.red;
      errorCredenciales.style.display = "block";
      let formLogin = document.getElementById("formLogin");
      formLogin.reset();
    }
  };

  return (
    <Container>
      <Subcontainer>
        <Form onSubmit={handleSubmit} id="formLogin">
          <Logo
            margin={{
              top: 0,
              right: "48px",
              bottom: "62px",
              left: "48px",
            }}
          />
          <H2>Login</H2>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            autocomplete="off"
            required
          />
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="enter your password"
            autocomplete="off"
            required
          />
          <Button type="submit">Login</Button>
          <br />
          <p style={{ display: "none" }} id="error">
            Credenciales incorrectas
          </p>
          <br />
          <br />
          <P>Mail: maruprin@mymail.com</P>
          <P>Password: 1234</P>
        </Form>
      </Subcontainer>
    </Container>
  );
}

export default Login;
