import React from "react";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { store, actions } = useContext(Context);

  const starWarsVehicles = store.vehicles.map((vehicles, i) => {
    return (
      <div key={ i }className="card col-sm-4">
        <div className="card-header">{vehicles.name}</div>
        <img src={`https://starwars-aws.s3.amazonaws.com/img/vehicles/${vehicles.name}.jpg`} className="card-img-top rounded mx-auto d-block  display-image-details display-image inside-borders-vehicles mt-3 mb-1" alt="..." />
        <div className="card-text  card-body  card-details text-black card-body 
        card-body-font-size inside-borders-vehicle  px-3 py-2">
          <dl className="row">
            <dt className="text-start">model:</dt>
            <dd> {vehicles.model}</dd>
            <dt className="text-start">manufact:</dt>
            <dd> {vehicles.manufacturer}</dd>
            <dt className="text-start">Cost:</dt>
            <dd> {vehicles.cost_in_credits} Credits</dd>
            <dt className="text-start">Length:</dt>
            <dd> {vehicles.length} </dd>
            <dt className="text-start">Speed:</dt>
            <dd> {vehicles.max_atmosphering_speed}</dd>
          </dl>
          <div className="d-flex my-1 flex-row justify-content-between align-items-center">
            <Link to="/details">
              <button className="btn bg-dark text-white rounded info-btn" onClick={() => actions.setDetails(vehicles.url)}>
              Details
              </button>
            </Link>
            <button
              onClick={() =>
                actions.addToFavorites(vehicles.name, vehicles.url)
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
      <div className="row">{starWarsVehicles}</div>
    </div>
  );
};

export default Vehicles;