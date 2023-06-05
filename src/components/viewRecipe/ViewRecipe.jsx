import React, { useState } from "react";
import "./ViewRecipe.css";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewRecipe = () => {
  // Retrieve the selected chef data from localStorage
  const selectedChef = JSON.parse(localStorage.getItem("selectedChef"));
  const [isFavorite, setIsFavorite] = useState([]);

  const handleClick = (recipes) => {
    if (isFavorite.includes(recipes)) {
      return;
    }
    console.log(recipes);
    toast.success("Your card is added to favorites!");
    setIsFavorite((prev) => [...prev, recipes]);
  };

  return (
    <div>
      <Carousel className="mt-1 container mb-5 ">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={selectedChef.chef_picture}
            alt="First slide"
          />
          <Carousel.Caption>
            <div
              style={{
                animation: "fadeIn 2s ease-out forwards",
                color: " #eb0cf2 ",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animation = "shake 0.5s ease-in-out")
              }
              onMouseLeave={(e) => (e.currentTarget.style.animation = "")}
            >
              <h3 className="text-center mt-5 fw-bold">
                Name: {selectedChef.chef_name}
              </h3>
              <h3 className="text-center fw-bold">
                Total Recipes : {selectedChef.number_of_recipes}
              </h3>
              <p className="text-center fw-bold">
                Bio:{" "}
                <span className="text-primary"> {selectedChef.chef_name}</span>{" "}
                is a skilled culinary expert who creates delicious dishes with
                his expertise and passion for cooking. <br /> His dishes are
                renowned for their exceptional taste and presentation, making
                him a favorite among food lovers.
              </p>
              <p className="text-center fw-bold">
                experience: {selectedChef.years_of_experience} Years
              </p>
              <p className="text-center fw-bold">Likes: {selectedChef.likes}</p>
              <p className="text-center mb-5 fw-bold">
                Location: New York City. 40.7128° N, 74.0060° W
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={selectedChef.chef_picture}
            alt="Second slide"
          />
          <Carousel.Caption>
            <div
              style={{ animation: "fadeIn 2s ease-out forwards" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animation = "shake 0.5s ease-in-out")
              }
              onMouseLeave={(e) => (e.currentTarget.style.animation = "")}
            >
              <h3 className="text-center mt-5 fw-bold">
                Name: {selectedChef.chef_name}
              </h3>
              <h3 className="text-center fw-bold">
                Total Recipes : {selectedChef.number_of_recipes}
              </h3>
              <p className="text-center fw-bold">
                Bio:{" "}
                <span className="text-primary"> {selectedChef.chef_name}</span>{" "}
                is a skilled culinary expert who creates delicious dishes with
                his expertise and passion for cooking. <br /> His dishes are
                renowned for their exceptional taste and presentation, making
                him a favorite among food lovers.
              </p>
              <p className="text-center fw-bold">
                experience: {selectedChef.years_of_experience} Years
              </p>
              <p className="text-center fw-bold">Likes: {selectedChef.likes}</p>
              <p className="text-center mb-5 fw-bold">
                Location: New York City. 40.7128° N, 74.0060° W
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={selectedChef.chef_picture}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div
              style={{
                animation: "fadeIn 2s ease-out forwards",
                color: " #e92481 ",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.animation = "shake 0.5s ease-in-out")
              }
              onMouseLeave={(e) => (e.currentTarget.style.animation = "")}
            >
              <h3 className="text-center mt-5 fw-bold">
                Name: {selectedChef.chef_name}
              </h3>
              <h3 className="text-center fw-bold">
                Total Recipes : {selectedChef.number_of_recipes}
              </h3>
              <p className="text-center fw-bold">
                Bio:{" "}
                <span className="text-primary"> {selectedChef.chef_name}</span>{" "}
                is a skilled culinary expert who creates delicious dishes with
                his expertise and passion for cooking. <br /> His dishes are
                renowned for their exceptional taste and presentation, making
                him a favorite among food lovers.
              </p>
              <p className="text-center fw-bold">
                experience: {selectedChef.years_of_experience} Years
              </p>
              <p className="text-center fw-bold">Likes: {selectedChef.likes}</p>
              <p className="text-center mb-5 fw-bold">
                Location: New York City. 40.7128° N, 74.0060° W
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 className="fw-bold text-center">Chef Recipes </h1>
      <hr />

      {selectedChef.recipes.map((recipe, index) => (
        <div className="card" key={index}>
          <h1>
            {selectedChef.chef_name}s Recipe: {recipe.recipe_name}
          </h1>
          <img
            style={{ height: "500px", width: "95%" }}
            src={recipe.recipes_image}
            alt={recipe.recipe_name}
          />
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2>Cooking Method:</h2>
          <p>
            <small>{recipe.cooking_method}</small>
          </p>

          <div className="d-flex align-items-center justify-content-between">
            <div className="mx-2">
              <p>
                {" "}
                <span className="fw-bold align-items-center">Rating:</span>{" "}
                {recipe.rating}
                <Rating
                  readonly
                  placeholderRating={recipe.rating}
                  emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-danger"></FaStar>}
                  fullSymbol={<FaStar className="text-warning"></FaStar>}
                  className="ms-2"
                ></Rating>
              </p>
            </div>

            {!isFavorite.includes(recipe.recipe_id) ? (
              <Link
                className="ms-5 mb-2 "
                onClick={() => handleClick(recipe.recipe_id)}
              >
                <FaHeart color="red" size={24} />{" "}
              </Link>
            ) : (
              <button disabled className="disabled">
                <FaHeart color="red" size={24} />{" "}
              </button>
            )}

            <ToastContainer />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewRecipe;
