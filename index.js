const app = require("./app");
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log("Started express server at port 3000");
});