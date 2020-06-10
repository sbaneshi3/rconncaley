const client = require("node-cayley")("localhost:64210");

const g = (graph = client.g); // Or: const g = graph = client.graph;

client.write(
  [
    {
      primaryKey: "</user/shortid/23TplPdS>",
      label: "companyA",

      userId: "23TplPdS",
      realName: "XXX_L3",
    },
  ],
  (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      // resBody: cayley server response body to this write.
    }
  }
);
