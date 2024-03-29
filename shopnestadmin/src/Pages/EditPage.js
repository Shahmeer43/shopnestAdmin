import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "INITIAL_VALUES":
      return { ...action.initialValues };
    default:
      return state;
  }
};
const initialState = {
  title: "",
  price: "",
  description: "",
  detail: "",
  url: "",
  features: [],
};
const EditPage = () => {
  const [singleProduct, setSingleProduct] = useState(null);

  const productIdParameter = useParams().productId;

  const fetchSingleProduct = async () => {
    let productJSON = await fetch(
      `http://localhost:8000/single-product/${productIdParameter}`
    );

    let product = await productJSON.json();

    console.log(product);

    setSingleProduct(product);

    dispatch({
      type: "INITIAL_VALUES",
      initialValues: {
        title: product.title,
        price: product.price,
        description: product.desc,
        detail: product.detail,
        url: product.url,
        features: `${product.features.join(". ")}.`,
      },
    });
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!state) {
      return;
    }

    await fetch(`http://localhost:8000/edit/${productIdParameter}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
    navigate("/");
  };

  return (
    singleProduct && (
      <div className="container mt-4">
        <form className="container w-50" onSubmit={handleSubmit}>
          {console.log(singleProduct)}
          <div className="mb-3">
            <label htmlFor="inputTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="inputTitle"
              name="title"
              value={state.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control border-dark"
              id="inputPrice"
              name="price"
              value={state.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputDescription" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="inputDescription"
              name="description"
              value={state.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputDetail" className="form-label">
              Detail
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="inputDetail"
              name="detail"
              value={state.detail}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputURL" className="form-label">
              URL
            </label>
            <input
              type="text"
              className="form-control border-dark"
              id="inputURL"
              name="url"
              value={state.url}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="inputFeatures" className="form-label">
              Features
            </label>
            <textarea
              type="text"
              className="form-control border-dark"
              id="inputFeatures"
              name="features"
              value={state.features}
              onChange={handleInputChange}
              rows="3"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  );
};

export default EditPage;
