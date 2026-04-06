// Core Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // (Optional: can use express.json instead)
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

// App Initialization
const app = express();

// Database Connection
require("./src/config/database");

// Route Imports
const userRouter = require("./src/routes/userRoute");
const designationRouter = require("./src/routes/desigRoute");
const salaryRouter = require("./src/routes/salaryRoute");
const pageRouter = require("./src/routes/pageRoute");
const userManageRouter = require("./src/routes/userManageRoute");
const sliderRouter = require("./src/routes/sliderRoute");
const companyRouter = require("./src/routes/companyRoute");
const applicationRouter = require("./src/routes/applicationRoute");

// Trust Proxy (Important for deployment behind proxy like Nginx/Cloudflare)

app.set("trust proxy", 1);

//  CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://austrailaworkpermitvisa.netlify.com",
  "https://www.austrailaworkpermitvisa.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    const normalized = origin.replace(/\/+$/, "");

    // Allow exact matches
    if (allowedOrigins.includes(normalized)) {
      return callback(null, true);
    }

    // Allow Vercel preview deployments (*.vercel.app)
    try {
      const host = new URL(normalized).host;
      const isVercelPreview = /\.vercel\.app$/i.test(host);
      if (isVercelPreview) return callback(null, true);
    } catch (err) {
      console.error("CORS URL parse error:", err.message);
    }

    // Block all other origins
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true, // Allow cookies & auth headers
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Accept",
    "Authorization",
    "X-Requested-With",
  ],
  optionsSuccessStatus: 204,
  maxAge: 86400, // Cache preflight response for 24 hours
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Set security HTTP headers
app.use(helmet());

// Allow cross-origin resource sharing for assets (e.g., CDN images)
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

// Rate Limiting (Basic DDoS Protection)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per window
  message: "Too many requests, please try again later.",
});
app.use(limiter);

// Static File Serving (CDN-ready)

app.use("/static", express.static(path.join(__dirname, "public")));

// Parse cookies
app.use(cookieParser());

// Parse JSON (Recommended modern way)
app.use(express.json());

// Parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// (Optional fallback if needed)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//  API Routes
app.use("/api/users", userRouter);
app.use("/api/designation", designationRouter);
app.use("/api/page", pageRouter);
app.use("/api/salary", salaryRouter);
app.use("/api/userManagement", userManageRouter);
app.use("/api/slider", sliderRouter);
app.use("/api/company", companyRouter);
app.use("/api/application", applicationRouter);

// 404 Handler (Route Not Found)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

//  Global Error Handler
app.use((err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

//  Export App
module.exports = app;
