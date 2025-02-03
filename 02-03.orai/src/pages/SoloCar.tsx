import React, { useState, useEffect } from "react";
import { Car } from "../types/Car";
import apiClient from "../apiClient/apiClient";
import { useParams } from "react-router-dom";

const SoloCar = () => {
  const [data, setData] = useState<Car>();
  const { id } = useParams();
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(0);

  useEffect(() => {
    apiClient
      .get(`/cars/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <body>
      <h1>Autó adatai</h1>
      <p>
        <b>ID: </b>
        {data?.id}
      </p>
      <p>
        <b>Brand: </b>
        {data?.brand}
      </p>
      <p>
        <b>Model: </b>
        {data?.model}
      </p>
      <p>
        <b>Year: </b>
        {data?.year}
      </p>
    </body>
  );
};

export default SoloCar;
