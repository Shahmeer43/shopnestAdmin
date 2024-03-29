import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const onDelete = async () => {
    await fetch(`http://localhost:8000/delete/${props.item._id}`, {
      method: "POST",
      body: JSON.stringify(props.item._id),
    });

    props.fetchProducts();
  };
  return (
    <div
      className="card m-2"
      style={{
        width: "18rem",
      }}
    >
      <div style={{ height: "13rem" }}>
        <img
          src={props.item.url}
          className="card-img-top"
          alt="productImage"
          style={{ objectFit: "contain", height: "100%" }}
        />
      </div>
      <div
        className="card-body"
        style={{
          height: "13rem",
        }}
      >
        <h5 className="card-title">{props.item.title}</h5>
        <p className="card-text">{props.item.desc}</p>
        <p className="card-text fw-bold">{props.item.price}$</p>
        <Link to={`/edit/${props.item._id}`} className="btn btn-primary">
          Edit
        </Link>
        <button onClick={onDelete} className="btn btn-primary mx-3">
          Delete
        </button>
      </div>
    </div>
  );
}
