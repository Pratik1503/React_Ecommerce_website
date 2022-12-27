import { Button } from "./styles/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="error">
          <h1>404</h1>
          <h3>Uh Oh! You are lost.</h3>
          <p>
            The page you are looking for does not exist.How you got here is a
            mystery.But you can click the below Button to go back to homepage
          </p>
          <NavLink to="/">
            <Button>Home Page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.error{
    padding:9rem 0;
    text-align:center;
}

p{
    font-size:2rem;
    padding:2rem;
}

h3{
    font-size:3rem;
}
`;

export default Error;
