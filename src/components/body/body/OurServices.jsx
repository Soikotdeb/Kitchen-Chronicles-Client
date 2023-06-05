import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const styles = {
  hoverEffect: {
    transition: "opacity 0.3s",
  },
  hoverEffectHover: {
    opacity: 0.8,
  },
};

const OurServices = () => {
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const [book1, setBook1] = useState(false);
  const [book2, setBook2] = useState(false);
  const [book3, setBook3] = useState(false);
  const [book4, setBook4] = useState(false);
  const [book5, setBook5] = useState(false);
  const [book6, setBook6] = useState(false);

  const handleBooking1 = () => {
    setBook1(true);
  };
  const handleBooking2 = () => {
    setBook2(true);
  };
  const handleBooking3 = () => {
    setBook3(true);
  };
  const handleBooking4 = () => {
    setBook4(true);
  };
  const handleBooking5 = () => {
    setBook5(true);
  };
  const handleBooking6 = () => {
    setBook6(true);
  };

  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center fw-bold">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Catering</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    style={{
                      ...styles.hoverEffect,
                      ...(hover && styles.hoverEffectHover),
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    variant="top"
                    src="https://img.freepik.com/free-photo/banquet-table-with-snacks_144627-18359.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Catering is one of the primary services that we offer at our
                  chef kitchen. We understand that every event is unique, and we
                  work closely with our.
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking1}>
                Book Now
                {!book1 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Private Events</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-photo/decorated-wedding-hall-with-candles-round-tables-centerpieces_8353-10057.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Our chef kitchen also specializes in private events, from
                  birthdays to anniversaries, and everything in between. We
                  offer a range of{" "}
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking2}>
                Book Now
                {!book2 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Cooking Classes</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    style={{
                      ...styles.hoverEffect,
                      ...(hover && styles.hoverEffectHover),
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    variant="top"
                    src="https://img.freepik.com/free-photo/lifestyle-people-learning-make-sushi_23-2149865330.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Our cooking classes are a fun and educational way to learn new
                  culinary skills and techniques. Led by our experienced chefs,
                  our classes{" "}
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking3}>
                Book Now
                {!book3 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Online Ordering</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-vector/cash-delivery-concept-illustration_23-2148755957.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Our cooking classes are a fun and educational way to learn new
                  culinary skills and techniques. Led by our experienced chefs,
                  our classes{" "}
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking4}>
                Book Now
                {!book4 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Menu Customization</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    style={{
                      ...styles.hoverEffect,
                      ...(hover && styles.hoverEffectHover),
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    variant="top"
                    src="https://img.freepik.com/free-vector/flat-design-online-grocery-store-app-template_23-2150104126.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Our cooking classes are a fun and educational way to learn new
                  culinary skills and techniques. Led by our experienced chefs,
                  our classes{" "}
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking5}>
                Book Now
                {!book5 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title className="fw-bold">Table Reservations</Card.Title>
                <Card style={{ width: "18rem", marginBottom: "10px" }}>
                  <Card.Img
                    variant="top"
                    src="https://img.freepik.com/free-psd/framed-reserved-sign-table_53876-81714.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr"
                  />
                </Card>
                <Card.Text>
                  Our cooking classes are a fun and educational way to learn new
                  culinary skills and techniques. Led by our experienced chefs,
                  our classes{" "}
                </Card.Text>
              </Card.Body>
              <Button className="mb-2" onClick={handleBooking6}>
                Book Now
                {!book6 && <FaHeart className="ms-2" color="red" size={24} />}
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;
