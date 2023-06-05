import React from "react";
import { FaAngleDown } from "react-icons/fa";
import jsPDF from "jspdf";
import { Container, Row } from "react-bootstrap";

const Blog = () => {
  const handleGenerate = () => {
    // create a new jsPDF instance with A4 size (210 x 297 mm)
    const doc = new jsPDF({
      format: "a4",
    });

    // set the font size to 12
    doc.setFontSize(12);

    // add a title to the PDF document
    doc.text("Blog", 105, 15, { align: "center" });

    // loop through all the blog posts
    document.querySelectorAll(".my-div").forEach((div, index) => {
      const top = 25 + index * 70;

      // add a title to the blog post
      const title = div.querySelector("p:first-child").textContent;
      doc.text(title, 15, top, { fontWeight: "bold" });

      // add the question to the blog post
      const question = div.querySelector("p:nth-child(2)").textContent;
      doc.text(question, 15, top + 10, { fontStyle: "italic" });

      // add the answer to the blog post
      const answer = div.querySelector("small").textContent;
      doc.text(answer, 15, top + 20, { fontSize: 2 });

      // add a divider line between blog posts
      doc.setLineWidth(0.5);
      doc.line(15, top + 45, 195, top + 45);
    });

    // save the document as a PDF file
    doc.save("blog.pdf");
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          onClick={handleGenerate}
          type="button"
          className="btn btn-primary btn-sm"
        >
          Generate PDF
        </button>
      </div>
      <Container className="d-flex align-items-center justify-content-center mt-5 h-100">
        <Row>
          <Row className="mt-3">
            <div
              className="my-div"
              style={{
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                height: "100%",
                width: "90%",
                borderRadius: "5px",
                textAlign: "center",
                transition: "background-color 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e1e1e1")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
            >
              <p className="fw-bold">
                {" "}
                <span className="fw-bold text-danger">Question1: </span> Tell us
                the differences between uncontrolled and controlled components.?
              </p>
              <p className="fw-bold text-danger">
                {" "}
                <FaAngleDown /> Controlled component <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span> In
                React, a controlled component is a component that is controlled
                by React state, while an uncontrolled component is a component
                that maintains its own internal state.
              </small>
              <p className="fw-bold text-danger mt-3">
                {" "}
                <FaAngleDown /> Uncontrolled Component <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span> An
                uncontrolled component, maintains its own internal state, and
                when the user interacts with the component, it updates its own
                state, which in turn updates the components value.
              </small>
            </div>
          </Row>
          <Row className="mt-3">
            <div
              className="my-div"
              style={{
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                height: "100%",
                width: "90%",
                borderRadius: "5px",
                textAlign: "center",
                transition: "background-color 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e1e1e1")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
            >
              <p className="fw-bold">
                {" "}
                <span className="fw-bold text-danger">Question2: </span> How to
                validate React props using PropTypes.?
              </p>
              <p className="fw-bold text-danger">
                {" "}
                <FaAngleDown /> process to validate React props using PropTypes{" "}
                <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span>{" "}
                1=Install the prop-types package! <br /> 2= Import PropTypes
                from the prop-types package at the top of your component file{" "}
                <br /> 3= Add a propTypes property to your component and define
                the expected prop types <br /> 4= When you use your component,
                make sure to pass in the expected props <br /> 5= React will
                automatically validate the props being passed to your component
                and warn you in the console if any of them are invalid. <br />{" "}
                <p className="fw-bold">
                  Thats it! Using PropTypes is a simple and effective way to
                  validate the props of your React components.
                </p>{" "}
              </small>
            </div>
          </Row>
          <Row className="mt-3">
            <div
              className="my-div"
              style={{
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                height: "100%",
                width: "90%",
                borderRadius: "5px",
                textAlign: "center",
                transition: "background-color 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e1e1e1")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
            >
              <p className="fw-bold">
                {" "}
                <span className="fw-bold text-danger">Question3: </span> Tell us
                the difference between nodejs and express js.?
              </p>
              <p className="fw-bold text-danger">
                {" "}
                <FaAngleDown /> nodejs <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span>{" "}
                <p id="hobar">
                  NodeJS is the package, which provides the JavaScript run-time
                  environment,
                </p>
              </small>
              <p className="fw-bold text-danger mt-3">
                {" "}
                <FaAngleDown /> express js <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span> whereas
                Express is a framework that sits on top of NodeJS and helps us
                to handle requests and responses..
              </small>
            </div>
          </Row>
          <Row className="mt-3 d-flex">
            <div
              className="my-div"
              style={{
                backgroundColor: "#f1f1f1",
                border: "1px solid #ccc",
                height: "100%",
                width: "90%",
                borderRadius: "5px",
                textAlign: "center",
                transition: "background-color 0.5s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e1e1e1")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#f1f1f1")}
            >
              <p className="fw-bold">
                {" "}
                <span className="fw-bold text-danger">Question4: </span> What is
                a custom hook, and why will you create a custom hook?
              </p>
              <p className="fw-bold text-danger">
                {" "}
                <FaAngleDown /> What is a custom hook? <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span> A custom
                Hook is a JavaScript function whose name starts with ”use” and
                that may call other Hooks.
              </small>
              <p className="fw-bold text-danger mt-3">
                {" "}
                <FaAngleDown /> why will you create a custom hook?{" "}
                <FaAngleDown />
              </p>{" "}
              <small>
                {" "}
                <span className="fw-bold text-primary">Answare: </span> it can
                be reused easily, which makes the code cleaner and reduces the
                time to write the code.
              </small>
            </div>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
