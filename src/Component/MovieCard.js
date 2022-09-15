import React from "react";
import "./MovieCard.css";
import StarRatings from "react-star-ratings";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../js/actions/actions";

const MovieCard = ({ el }) => {
  const dispatch= useDispatch();
  return (
    <div>
      <div>
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{el.Title}</h1>
                <div className="card_cat">
                  <p className="PG">PG - 13</p>
                  <p className="year">{el.Release}</p>
                  <p className="genre">{el.Genre.Name}</p>
                  <p className="time">2h 28m</p>
                </div>
                <p className="disc">
                  Ethan Hunt and his IMF team, along with some familiar allies,
                  race against time after a mission gone wrong.
                </p>
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                  Read More
                </a>
                <div className="social-btn">
                  <StarRatings
                    rating={el.Rating}
                    starRatedColor="yellow"
                    numberOfStars={5}
                    name="rating"
                    starDimension="35px"
                  />
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={el.ImageURL} alt="" />
              </div>
              <div className="play_btn">
                <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
                  <i className="fas fa-play-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* FOLLOW */}
       
      </div>
      <Button onClick={()=> dispatch(deleteMovie(el._id))}>Delete</Button>
    </div>
  );
};

export default MovieCard;
