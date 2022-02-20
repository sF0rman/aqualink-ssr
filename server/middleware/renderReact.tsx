import { RequestHandler } from "express";
import ReactDOMServer from "react-dom/server";
import { Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import Shell from "../../client/Shell";

const reactRender: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const reactHtml = await renderReact(req.url);
    res.status(200).send(reactHtml);
  } catch (err) {
    next(err);
  }
};

const renderReact = async (url: string) => {
  const WrappedApp = (
    <StaticRouter location={url}>
      <Shell />
    </StaticRouter>
  );

  const content = ReactDOMServer.renderToString(WrappedApp);
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="main.css" />
    </head>
    <body>
      <div id="root">
        ${content}
      </div>
      <script src="main.js"></script>
    </body>
  </html>`;
};

export default reactRender;
