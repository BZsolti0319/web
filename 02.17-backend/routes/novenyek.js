import express from "express";
import { dbQuery, dbRun } from "../database.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try{
        const novenyek = await dbQuery("SELECT * FROM novenyek;");
        res.status(200).json(novenyek);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next)=>{
    try{
        const [noveny] = await dbQuery("SELECT * FROM novenyek WHERE id = ?;", [req.params.id]);
        if(!user) return res.status(404).json({ message: "Plant not found" });
    } catch (err) {
        next(err);
    }
});
router.post("/", async (req, res, next) => {
    try {
        const result = await dbRun("INSERT INTO novenyek (nev, evelo, kategoria, ar) VALUES (?, ?, ?, ?);", [req.body.nev, req.body.evelo, req.body.kategoria, req.body.ar]);
        res.status(201).json({ id: result.lastID, ...req.body });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const [noveny] = await dbQuery("SELECT * FROM novenyek WHERE id = ?;", [req.params.id]);
        if (!noveny) return res.status(404).json({ message: "Plant not found" });

        await dbRun("UPDATE novenyek SET nev = ?, evelo = ?, kategoria = ?, ar = ? WHERE id = ?;", [req.body.name || user.name, req.body.email || user.email, req.params.id]);
        res.status(200).json({ id: req.params.id, nev: req.body.nev || user.nev, evelo: req.body.evelo || user.evelo || user.nev, kategoria: req.body.kategoria || user.nev, ar: req.body.ar || user.ar });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const [noveny] = await dbQuery("SELECT * FROM novenyek WHERE id = ?;", [req.params.id]);
        if (!noveny) return res.status(404).json({ message: "Plant not found" });

        await dbRun("DELETE FROM novenyek WHERE id = ?;", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;