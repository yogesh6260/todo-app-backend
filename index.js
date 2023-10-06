const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/DBConnection");
const userRouter = require("./routes/User.route");
const taskRouter = require("./routes/Task.route");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running! ✅",
    success: true,
  });
});

app.use("/api", userRouter);
app.use("/api", taskRouter);

app.listen(PORT, (log, err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
