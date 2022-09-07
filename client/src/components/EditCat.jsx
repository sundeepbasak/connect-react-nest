import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { API_URL } from "../config";

const EditCat = () => {
  const initialState = {
    name: "",
    breed: "",
    age: 0,
  };
  const [cat, setCat] = useState(initialState);
  const navigate = useNavigate();
  const { id: catId } = useParams();
  console.log(catId, typeof catId);

  useEffect(() => {
    loadCat();
  }, []);

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
      await axios.put(API_URL + `/cats/${catId}`, cat);
      navigate("/");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const loadCat = async () => {
    try {
      const res = await axios.get(API_URL + `/cats/${catId}`);
      // console.log(res.data);
      setCat(res.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <h1>Edit Cat</h1>
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
        <button>Update Cat</button>
      </form>
    </div>
  );
};

export default EditCat;
