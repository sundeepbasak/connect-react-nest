import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { API_URL } from "../config";

const Home = () => {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    const res = await axios.get(API_URL + "/cats");
    // console.log(res);
    setCats(res.data);
  };

  const deleteHandler = async (id) => {
    await axios.delete(API_URL + `/cats/${id}`);
    fetchCats();
  };

  return (
    <div>
      <h1>CATS API</h1>
      <Link to="/cats/add">
        <button>Add New Cat</button>
      </Link>
      {cats?.map((cat) => (
        <div className="cat-container" key={cat.name}>
          <h1>Name: {cat.name}</h1>
          <h2>Breed: {cat.breed}</h2>
          <h2>Age: {cat.age}</h2>
          <div>
            <Link to={`/cats/edit/${cat._id}`}>
              <button>Edit Cat</button>
            </Link>
            <Link to="#">
              <button onClick={() => deleteHandler(cat._id)}>Delete Cat</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
