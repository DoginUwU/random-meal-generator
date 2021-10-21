import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <h1>Random meal generator 🍕</h1>
      <p>Are you hungry today? how about learning a new delicious recipe?</p>
      <Link to="meal">
        <Button>I'm hungry 🌭</Button>
      </Link>
      <Footer />
    </Container>
  );
};

export default Home;
