import React from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);

  const starWarsPlanets = store.planets.map((planet, i) => {
    return (
      <div key={ i }className="card col-sm-4">
        <div className="card-header">{planet.name}</div>
        <div className="card-text text-black card-body card-body-font-size inside-borders-vehicle px-3 py-2">
          <dl className="row">
            <dt className="text-start">Population:</dt>
            <dd> {planet.population}</dd>
            <dt className="text-start">Climate:</dt>
            <dd> {planet.climate}</dd>
            <dt className="text-start">Diameter:</dt>
            <dd> {planet.diameter} </dd>
            <dt className="text-start">Rotation:</dt>
            <dd> {planet.rotation_period} </dd>
            <dt className="text-start">Translation:</dt>
            <dd> {planet.orbital_period}</dd>
          </dl>
          <div className="d-flex my-1 flex-row justify-content-between align-items-center">
            <Link to="/details">
              <button className="btn bg-dark text-white rounded info-btn" onClick={() => actions.setDetails(planet.url)}>
              Details
              </button>
            </Link>
            <button
              onClick={() =>
                actions.addToFavorites(planet.name, planet.url)
              }
              className="fas fa-heart text-danger btn fav-btn mt-2"
            >

            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container mt-5">
      <div className="row">{starWarsPlanets}</div>
    </div>
  );
};

export default Planets;
