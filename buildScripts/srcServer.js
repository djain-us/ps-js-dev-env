import express from "express";
import path from "path";
//import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
import webpack_dev_middleware from "webpack-dev-middleware"; 

const port = 3000;
const app = express();
const compiler = webpack(config);
const webpack_dm = webpack_dev_middleware(compiler, {
  publicPath: config.output.publicPath
});

app.use(webpack_dm);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.log("Erro loading website.")
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
