import React, { useEffect, useState } from "react";
import { Plant } from "../types/Plant";
import apiClient from "../apiClient/apiClient";


const Novenyek = () =>{
    const [data, setData] = useState<Array<Plant>>();
    const [nev, setNev] = useState("");
    const [evelo, setEvelo] = useState(false);
    const [kategoria, setKategoria] = useState("");
    const [ar, setAr] = useState(0);
    const [helper, setHelper] = useState(0);

    useEffect(()=>{
        apiClient.get("/novenyek").then((res)=> setData(res.data)).catch((err)=> {
            console.error(err);
        })
    },[])


    const Hozzaad=()=>{
        const Noveny={
            nev:nev,
            evelo:evelo,
            kategoria:kategoria,
            ar:ar,
        } as Plant
        apiClient.post("/novenyek", Noveny).then(res =>{
            switch(res.status){
                case 201:
                    console.log("Növény sikeresen hozzáadva")
                    alert("Növény sikeresen hozzáadva")
                    break;
                case 400:
                    console.error("Bad request")
                    break;
                default:
                    console.error("Hiba lépett fel")
                    break;
            }
        }).catch(err => {
            console.error(err);
        })
    }

    const Frissit=(id:number)=>{
        const plan={
            ar:ar,
        } as Plant
        apiClient.put(`/novenyek/${id}`, plan).then(res =>{
            switch(res.status){
                case 200:
                    console.log("Növény sikeresen frissítve")
                    alert("Növény sikeresen frissítve")
                    break;
                case 400:
                    console.error("Bad request")
                    break;
                default:
                    console.error("Hiba lépett fel")
                    break;
            }
        }).catch(err => {
            console.error(err);
        })
    }

    const Torles=(id:number)=>{
        apiClient.put(`/novenyek/${id}`).then(res =>{
            switch(res.status){
                case 200:
                    console.log("Növény sikeresen ftörölve")
                    alert("Növény sikeresen törölve")
                    break;
                case 400:
                    console.error("Bad request")
                    break;
                default:
                    console.error("Hiba lépett fel")
                    break;
            }
        }).catch(err => {
            console.error(err);
        })
    }


    return<>
        <h1>Növények</h1>
        <table>
            <th>ID</th>
            <th>Név</th>
            <th>Évelő</th>
            <th>Kategória</th>
            <th>Ár</th>
            {data?.map((p)=>(
                <tr>
                    <td>{p.id}</td>
                    <td>{p.nev}</td>
                    <td>{p.evelo}</td>
                    <td>{p.kategoria}</td>
                    <td>{p.ar}</td>
                    <input type="number" onChange={(e) => setAr(Number(e.target.value))}/> <label>Ár frissítés</label>
                    <button onClick={()=>{Frissit(p.id)}}>Frissítés</button>
                    <button onClick={()=>{Torles(p.id)}}>Törlés</button>
                </tr>
            ))}
        </table>
        <br />
        <input type="text" onChange={(e) => setNev(e.target.value)}/> <label>Név</label><br />
        <input type="checkbox" onChange={(e) => setEvelo(Boolean(e.target.value))}/> <label>Évelő</label><br />
        <input type="text" onChange={(e) => setKategoria(e.target.value)}/> <label>Kategória</label><br />
        <input type="number" onChange={(e) => setAr(Number(e.target.value))}/> <label>Ár</label><br />
        <button onClick={Hozzaad}>Hozzáadás</button><br />
    </>
}

export default Novenyek;