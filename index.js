const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running! ✅",
    success: true,
  });
});

app.listen(PORT, (log, err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
