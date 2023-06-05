import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ServerLoad.css";
import { Link } from "react-router-dom";

const ServerLoad = () => {
  const [kitchens, setKitchen] = useState([]);

  useEffect(() => {
    fetch("https://kitchen-chronicles-server-soikotdeb.vercel.app/Kitchen")
      .then((res) => res.json())
      .then((data) => setKitchen(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="d-flex justify-content-center   mb-3 fw-bold">
        Our Popular Chef
      </h1>
      <div className="card-grid">
        {kitchens.map((kitchen) => (
          <Card key={kitchen.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={kitchen.chef_picture} />
            <Card.Body>
              <Card.Title>
                <span className="fw-bold">Chef Name: </span>
                {kitchen.chef_name}
              </Card.Title>
              <Card.Text>
                <span className="fw-bold">Years of experience: </span>{" "}
                {kitchen.years_of_experience}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Numbers of recipes: </span>{" "}
                {kitchen.number_of_recipes}
              </Card.Text>
              <Card.Text>
                <span className="fw-bold">Total Likes: </span> {kitchen.likes}
              </Card.Text>

              <Link
                className="fw-bold   text-center text-decoration-none d-inline-block p-1 mt-3"
                to="/recipe"
                style={{
                  height: "40px",
                  width: "130px",
                  border: "2px solid #000",
                  backgroundColor: " #eae3e2 ",
                  borderRadius: "5px",
                }}
                onClick={() =>
                  localStorage.setItem("selectedChef", JSON.stringify(kitchen))
                }
              >
                View Recipes
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServerLoad;
