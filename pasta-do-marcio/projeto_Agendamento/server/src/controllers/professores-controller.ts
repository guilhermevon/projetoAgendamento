import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import Professor from "../models/professor.js"; // Ajuste o caminho conforme necessário
import ProfessoresService from "../services/professores-service.js"; // Ajuste o caminho conforme necessário
import RequestDB from "../models/request-db";

export default class ProfessoresController {

    static async buscarProfessores(req: Request, res: Response) {
        try {
            const db = (req as RequestDB).db;
            const professoresService = new ProfessoresService(db);

            res.status(200).json(await professoresService.buscarProfessores());
        } catch (err) {
            res.status(500).json((err as Error).message);
        }
    }

    static async buscarProfessorPorId(req: Request, res: Response) {
        const id = req.params.id;

        let objectId: ObjectId;
        try {
            objectId = new ObjectId(id);
        } catch (error) {
            res.status(400).json({ message: "Id informado inválido" });
            return;
        }

        try {
            const db = (req as RequestDB).db;
            const professoresService = new ProfessoresService(db);

            const professor = await professoresService.buscarProfessorPorId(objectId);

            if (professor) {
                res.status(200).json(professor);
            } else {
                res.status(404).json({ message: "O professor não foi encontrado." });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async inserirProfessor(req: Request, res: Response) {
        try {
            const db = (req as RequestDB).db;
            const professoresService = new ProfessoresService(db);

            let professor: Professor;
            try {
                const record = req.body;
                professor = professoresService.validar(record);
            } catch (error) {
                res.status(400).json({ message: (error as Error).message });
                return;
            }

            await professoresService.inserirProfessor(professor);
            res.status(201).json(professor);
        } catch (err) {
            res.status(500).json({ message: (err as Error).message });
        }
    }

    static async atualizarProfessor(req: Request, res: Response) {
        const id = req.params.id;

        let objectId: ObjectId;
        try {
            objectId = new ObjectId(id);
        } catch (error) {
            res.status(400).json({ message: "Id informado inválido" });
            return;
        }

        try {
            const db = (req as RequestDB).db;
            const professoresService = new ProfessoresService(db);

            if (await professoresService.existeProfessor(objectId)) {
                let professor: Professor;
                try {
                    const record = req.body;
                    professor = professoresService.validar(record);
                } catch (error) {
                    res.status(400).json({ message: (error as Error).message });
                    return;
                }

                await professoresService.atualizarProfessor(objectId, professor);
                res.status(200).json(professor);

            } else {
                res.status(404).json({ message: "O professor não existe." });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    static async deletarProfessor(req: Request, res: Response) {
        const id = req.params.id;
        let objectId: ObjectId;
        try {
            objectId = new ObjectId(id);
        } catch (error) {
            res.status(400).json({ message: "Id informado inválido" });
            return;
        }

        try {
            const db = (req as RequestDB).db;
            const professoresService = new ProfessoresService(db);
            if (await professoresService.existeProfessor(objectId)) {
                await professoresService.deletarProfessor(objectId);
                res.status(204).send("");
            } else {
                res.status(404).json({ message: "O professor não existe." });
            }
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}
