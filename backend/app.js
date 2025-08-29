const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

require("./src/config/database");
const userRouter = require("./src/routes/userRoute");
const designationRouter = require("./src/routes/desigRoute");
const salaryRouter = require("./src/routes/salaryRoute");
const pageRouter = require("./src/routes/pageRoute");
const userManageRouter = require("./src/routes/userManageRoute");
const sliderRouter = require("./src/routes/sliderRoute");
const companyRouter = require("./src/routes/companyRoute");
const applicationRouter = require("./src/routes/applicationRoute");
const { clientURL } = require("./secret");

//middleware
const allowedOrigins = [
  "http://localhost:3000",
  "https://traveltestdemoapp.netlify.app",
  "https://allcartify.com",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
  allowedHeaders: "Content-Type, Accept, Authorization",
  credentials: true,
  optionsSuccessStatus: 204,
  maxAge: 86400,
};

app.use(cors(corsOptions));
app.use("*", cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Cross-origin-Resource-Policy", "cross-origin");
  next();
});

app.use("/static", express.static(path.join(__dirname, "public")));
app.use(helmet());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 200 });
app.use(limiter);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/designation", designationRouter);
app.use("/api/page", pageRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/userManagement", userManageRouter);
app.use("/api/slider", sliderRouter);
app.use("/api/company", companyRouter);
app.use("/api/application", applicationRouter);

module.exports = app;
