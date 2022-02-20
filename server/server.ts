// import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import { PUBLIC_DIR_PATH } from "./configuration";
import reactRender from "./middleware/renderReact";

let app;

const start = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    const HOST: string = process.env.HTTP_HOST || "localhost";
    const PORT: string = process.env.HTTP_PORT || "8080";

    app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(PUBLIC_DIR_PATH, { index: false, extensions: ["css", "js"] }));
    app.use("/", reactRender);

    const SERVER = http.createServer(app);

    SERVER.listen(PORT, () => {
      console.log(`Web server listening on ${HOST}:${PORT}`);
      resolve();
    });
  });
};

export { start };

