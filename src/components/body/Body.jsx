import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaCalendar, FaComment } from "react-icons/fa";
import ServerLoad from "../serverDataLoad/ServerLoad";
import FeedbackSection from "../feedbackSection/FeedbackSection";
import OurServices from "./body/OurServices";

const styles = {
  imageContainer: {
    backgroundImage: `url('https://img.freepik.com/premium-photo/cheerful-bearded-waiter-with-kebab-salad-georgian-restaurant-discerning-waiter-black-clothes-with-beard-portion-kebabss_211786-2551.jpg?size=626&ext=jpg&ga=GA1.2.2087522418.1672577037&semt=robertav1_2_sidr')`,
    backgroundSize: "cover",
    height: "500px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  imageText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  },
};

const Body = () => {
  const imgStyle = {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  };
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          style={{ width: "100%", height: "700px" }}
          src="https://dark-lighting.com/wp-content/uploads/GoMongo-Restaurant@Dark-1-e1449071546951.jpg"
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="text-light fw-bold"> Kitchen Chronicles</h1>
          <p className="text-light fw-bold">
            {" "}
            Welcome to our restaurant, where every dish is a delight.We pride
            ourselves on serving only the freshest ingredients in our dishes.{" "}
            <br /> Our menu features a range of options to suit any taste or
            dietary need. <br />
          </p>
        </div>
      </div>

      <Container className="mt-5 mb-5">
        <ServerLoad></ServerLoad>
      </Container>

      <Container>
        <Row className="my-3">
          <Col xs={12} md={8}>
            <h1 className="fw-bold ps-5">
              The ambiance of a restaurant can often make or break the dining
              experience for me.
            </h1>
            <div className="d-flex justify-content-center mb-4 mt-3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkhef03Xe6hgwxJvOOFeOJQT71NbRrMU34Q&usqp=CAU"
                alt=""
                style={imgStyle}
              />
              <p className="fw-bold ms-3">Sd Soikot</p>
              <p className="ms-3 me-3 fw-bold">
                <FaCalendar></FaCalendar> March 10,2023
              </p>
              <p className="fw-bold">
                <FaComment></FaComment> No Comments
              </p>
            </div>
            <div style={styles.imageContainer}>
              <div style={styles.imageText}>
                <h1 className="fw-bold">Kitchen Chronicles</h1>
                <p className="fw-bold text-light d-flex">
                  {" "}
                  <h1 className="fw-bold text-danger">Welcome</h1> to our
                  restaurant, where every dish is a delight. We pride ourselves
                  on serving only the freshest ingredients in our dishes.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-center fw-bold mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              ipsum, <br /> laudantium sequi fuga excepturi, nostrum voluptatem
              repudiandae quos corrupti temporibus aliquid, <br /> esse labore
              minima. Aliquid autem officiis doloremque a? Animi! <br /> I
              appreciate restaurants that cater to dietary restrictions, making
              it easier for everyone to enjoy the meal.
            </div>{" "}
            <br />
            <div className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }} className="mx-3">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1602704436221-0c31f124008b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdG9yYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1600353565554-830bd78cfc2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
              </Card>
            </div>
          </Col>
          <Col xs={4}>
            <div>
              <div>
                <h1 className="d-flex fw-bold mb-4"> Popular Food</h1>
              </div>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
                />
                <Card.Body>
                  <h4 className="fw-bold">dumpling dish</h4>
                  <p>
                    <small>
                      This is a dumpling dish that is very famous in our Chinese
                      restaurant.{" "}
                    </small>
                  </p>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <h4 className="fw-bold">Mapo tofu</h4>
                  <p>
                    <small>
                      This is a Mapo tofuh that is very famous in our Chinese
                      restaurant.{" "}
                    </small>
                  </p>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem", marginBottom: "10px" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80"
                />
                <Card.Body>
                  <h4 className="fw-bold">Beef and broccoli</h4>
                  <p>
                    <small>
                      This is a Beef and broccoli that is very famous in our
                      Chinese restaurant.{" "}
                    </small>
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <OurServices></OurServices>
      <FeedbackSection></FeedbackSection>
    </div>
  );
};

export default Body;
