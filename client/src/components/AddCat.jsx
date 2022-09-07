import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { API_URL } from "../config";

const AddCat = () => {
  const initialState = {
    name: "",
    breed: "",
    age: 0,
  };
  const [cat, setCat] = useState(initialState);
  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setCat((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(cat);
      await axios.post(API_URL + "/cats", cat);
      setCat(initialState);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <h1>Add Cat</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={cat.name}
          onChange={inputChangeHandler}
        />
        <input
          type="text"
          placeholder="Breed"
          name="breed"
          value={cat.breed}
          onChange={inputChangeHandler}
        />
        <input
          type="number"
          placeholder="Age"
          min="1"
          max="15"
          name="age"
          value={cat.age}
          onChange={inputChangeHandler}
        />
        <button>Add Cat</button>
      </form>
    </div>
  );
};

export default AddCat;
