const { Tea } = require("./db/models");

async function coord() {
  await Tea.sync({ alter: true });
}
coord();
