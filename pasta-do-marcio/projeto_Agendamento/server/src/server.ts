import express, { Application } from "express";
import cors from "cors";
import routers from "./routers";
import database from "./db";

const main = async () => {
  const port = 3000;
  const app: Application = express();

  // middlewares
  app.use(cors());
  app.use(express.json());
  await database.injectDBInApp(app);

  // rotas
  // Use rotas mais genéricas ou ajuste conforme necessário
  app.use("/professores", routers.professoresRouter);
  app.use("/disciplinas", routers.disciplinasRouter);
  app.use("/turmas", routers.turmasRouter);
  app.use("/horarios", routers.horariosRouter);

  // subir o servidor
  app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}`);
  });
};

main();
