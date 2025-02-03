import React, { useState, useEffect } from "react";
import { Car } from "../types/Car";
import apiClient from "../apiClient/apiClient";

const Cars = () => {
  const [data, setData] = useState<Array<Car>>();
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState(0);
  useEffect(() => {
    apiClient
      .get("/cars")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const Hozzaadas = () => {
    const auto = {
      model: model,
      brand: brand,
      year: year,
    } as Car;

    apiClient
      .post("/cars", auto)
      .then((res) => {
        switch (res.status) {
          case 201:
            console.log("Növény sikeresen hozzáadva");
            break;
          case 400:
            console.error("Bad request");
            break;
          default:
            console.error("Hiba lépett fel");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const Frissit = (id: number) => {
    const kocsi = {
      model: model,
      brand: brand,
      year: year,
    } as Car;

    apiClient
      .put(`/cars/${id}`, kocsi)
      .then((res) => {
        switch (res.status) {
          case 200:
            console.log("A termék sikeresen frissítve");
            break;
          case 400:
            console.error("Bad request");
            break;
          default:
            console.error("Hiba lépett fel");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const Torles = (id: number) => {
    apiClient
      .delete(`/cars/${id}`)
      .then((res) => {
        switch (res.status) {
          case 204:
            console.log("A termék sikeresen törölve");
            break;
          case 400:
            console.error("Bad request");
            break;
          default:
            console.error("Hiba lépett fel");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <body>
      <h1>Autók</h1>
      <table>
        <th>ID</th>
        <th>Model</th>
        <th>Brand</th>
        <th>Year</th>
        {data?.map((sz) => (
          <tr>
            <td>{sz.id}</td>
            <td>{sz.model}</td>
            <td>{sz.brand}</td>
            <td>{sz.year}</td>
            <button
              onClick={() => {
                Torles(sz.id);
              }}
            >
              Törlés
            </button>
            <input
              type="string"
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
            <label>Model</label>
            <input
              type="string"
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            />
            <label>Brand</label>
            <input
              type="number"
              onChange={(e) => {
                setYear(Number(e.target.value));
              }}
            />
            <label>Year</label>
            <button
              onClick={() => {
                Frissit(sz.id);
              }}
            >
              Szerkesztés
            </button>
          </tr>
        ))}
      </table>
      <h2>Hozzáadás</h2>
      <input
        type="text"
        onChange={(e) => {
          setModel(e.target.value);
        }}
      />{" "}
      <label>Model</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
      />{" "}
      <label>Brand</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setYear(Number(e.target.value));
        }}
      />{" "}
      <label>Year</label>
      <br />
      <button onClick={Hozzaadas}>Hozzáadás</button>
    </body>
  );
};

export default Cars;
