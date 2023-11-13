import express, { Request, Response } from "express";
import ProfessoresController from "../controllers/professores-controller"; // Ajuste o caminho conforme necessário

const professoresRouter = express.Router();

// Exemplo de rota para buscar todos os professores
professoresRouter.get("/", ProfessoresController.getAllProfessores);

// Exemplo de rota para buscar um professor por ID
professoresRouter.get("/:id", ProfessoresController.getProfessorById);

// Exemplo de rota para inserir um novo professor
professoresRouter.post("/", ProfessoresController.inserirProfessor);

// Exemplo de rota para atualizar um professor por ID
professoresRouter.put("/:id", ProfessoresController.atualizarProfessor);

// Exemplo de rota para deletar um professor por ID
professoresRouter.delete("/:id", ProfessoresController.deletarProfessor);

export default professoresRouter;
