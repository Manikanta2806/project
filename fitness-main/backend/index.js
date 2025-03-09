const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
//const trainerRoutes = require("./routes/trainerRoutes");
//const memberRoutes = require("./routes/memberRoutes");
const subscriptionRoutes = require("./routes/customerRoute");
//const paymentRoutes = require("./routes/paymentRoutes");

dotenv.config();
connectDB(); 
const app = express();
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({ extended: true })); 
app.use("/api/auth", authRoutes);
//app.use("/api/trainers", trainerRoutes);
//app.use("/api/members", memberRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
//app.use("/api/payments", paymentRoutes);
const PORT=process.env.PORT;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
