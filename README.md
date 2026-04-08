# Travel Demo App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed for managing travel and visa applications. This demo app provides a comprehensive platform for handling user registrations, application submissions, company management, salary tracking, and more.

## Features

### Backend Features
- **User Authentication & Authorization**: JWT-based authentication with role-based access control
- **Application Management**: Handle visa and travel application submissions
- **User Management**: Admin panel for managing users, roles, and permissions
- **Company Management**: CRUD operations for company profiles
- **Designation Management**: Manage job titles and positions
- **Salary Management**: Track and manage employee salaries
- **Page Management**: Dynamic content management for website pages
- **Slider Management**: Image slider management for the frontend
- **File Upload**: Cloudinary integration for image and document uploads
- **Email Services**: SMTP integration for notifications and password resets
- **Security**: Helmet for security headers, rate limiting, CORS configuration
- **Logging**: Winston-based logging system
- **Validation**: Input validation using express-validator

### Frontend Features
- **Responsive Design**: Built with React, Material-UI, and Bootstrap for mobile-first design
- **Dashboard**: Admin dashboard for managing all aspects of the application
- **User Interface**: Intuitive UI for application submission and user management
- **State Management**: Redux Toolkit for efficient state management
- **PDF Generation**: React-PDF for generating application documents
- **Image Handling**: React-Dropzone for file uploads
- **Notifications**: React-Hot-Toast for user notifications
- **Routing**: React Router for client-side navigation

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js, JWT
- **File Storage**: Cloudinary
- **Email**: Nodemailer
- **Security**: Helmet, CORS, XSS protection
- **Validation**: Express-validator
- **Logging**: Winston
- **Other**: Multer (file uploads), Bcrypt (password hashing), Moment (date handling)

### Frontend
- **Library**: React 18
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI, Bootstrap
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **PDF**: React-PDF
- **Icons**: Font Awesome
- **Build Tool**: Create React App (Webpack)
- **Styling**: CSS Modules, Emotion

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance like MongoDB Atlas)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd travel-demo-app
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory with the following variables:
   ```env
   SERVER_PORT=4001
   MONGO_URL=mongodb://localhost:27017/travelMernDb
   SECRET_KEY=your-secret-key
   JSON_WEB_TOKEN_KEY=your-jwt-key
   JSON_ACCESS_KEY=your-access-key
   JSON_ACCESS_REFRESH_KEY=your-refresh-key
   JSON_RESET_PASSWORD_KEY=your-reset-key
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   DEFAULT_PATH_APPLICATION_DIRECTORY=public/images/applicationUsers/default.jpg
   DEFAULT_PATH_SLIDER_DIRECTORY=public/images/sliderUsers/default.jpg
   SMTP_USERNAME=your-email@gmail.com
   SMTP_PASSWORD=your-email-password
   CLIENT_URL=http://localhost:3000
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:4001
   ```

## Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The server will start on `http://localhost:4001`

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```
   The app will be available at `http://localhost:3000`

## Build for Production

### Backend
```bash
cd backend
npm run build
```

### Frontend
```bash
cd frontend
npm run build
```

## API Documentation

The API endpoints are organized as follows:

- **Authentication**: `/api/auth` - Login, register, password reset
- **Users**: `/api/users` - User CRUD operations
- **Applications**: `/api/applications` - Application management
- **Companies**: `/api/companies` - Company management
- **Designations**: `/api/designations` - Designation management
- **Salaries**: `/api/salaries` - Salary management
- **Pages**: `/api/pages` - Page content management
- **Sliders**: `/api/sliders` - Slider image management

For detailed API documentation, refer to the Postman collection or Swagger docs (if implemented).

## Project Structure

```
travel-demo-app/
├── .gitignore                 # Git ignore rules
├── README.md                  # Project documentation
├── backend/
│   ├── src/
│   │   ├── config/          # Database and app configuration
│   │   ├── controllers/     # Route controllers
│   │   ├── helpers/         # Utility functions
│   │   ├── middlewares/     # Express middlewares
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   ├── validate/        # Input validation
│   │   └── logs/            # Application logs
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── index.js             # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── contexts/        # React contexts
│   │   ├── helpers/         # Utility functions
│   │   ├── layouts/         # Layout components
│   │   ├── utils/           # Helper utilities
│   │   └── assets/          # Static assets
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── webpack.config.js    # Webpack configuration
└── README.md
```

## Security Considerations

- Environment variables are used for sensitive data
- Passwords are hashed using bcrypt
- JWT tokens for authentication
- CORS configured for allowed origins
- Helmet for security headers
- Rate limiting to prevent abuse
- Input validation and sanitization

## Known Issues

- **Frontend vulnerabilities**: 30 vulnerabilities remain (9 low, 3 moderate, 18 high). Some can be fixed with `npm audit fix --force` but may introduce breaking changes.
- **Backend vulnerabilities**: 1 high severity vulnerability in nodemailer. Update to latest version when available.
- **Package warnings**: Some deprecated packages, but functionality remains intact.
- **Babel workaround**: Using deprecated `@babel/plugin-proposal-private-property-in-object` as devDependency to resolve build issues with babel-preset-react-app.

## Maintenance

- Regularly run `npm audit` to check for new vulnerabilities
- Update dependencies periodically with `npm update`
- Test thoroughly after major package updates
- Keep browserslist updated with `npx update-browserslist-db@latest`

## Renaming Folders

If you need to rename the `client` folder (or any other folder), follow these steps:

1. **Rename the folder using terminal:**
   ```bash
   mv client new-folder-name
   ```

2. **Update package.json name:**
   - Open `new-folder-name/package.json`
   - Change the `"name"` field to match the new folder name

3. **Update .gitmodules (if using submodules):**
   - Edit `new-folder-name/.gitmodules`
   - Update the `path` and submodule name to the new folder name

4. **Update README.md:**
   - Replace all references to the old folder name with the new one
   - Update installation and run commands accordingly

5. **Update any hardcoded paths in code:**
   - Check for any absolute paths or references in configuration files

## Full Project Run System

### Development Mode

1. **Start MongoDB** (if using local instance):
   ```bash
   # If using MongoDB locally, ensure it's running
   mongod
   ```

2. **Backend Setup and Start:**
   ```bash
   cd backend
   npm install
   # Ensure .env is configured
   npm run dev
   ```
   Backend will run on `http://localhost:4001`

3. **Frontend Setup and Start:**
   ```bash
   cd client
   npm install
   # Ensure .env is configured with REACT_APP_API_URL=http://localhost:4001
   npm start
   ```
   Frontend will run on `http://localhost:3000`

### Production Mode

1. **Build Backend:**
   ```bash
   cd backend
   npm run build
   npm start  # or use PM2/process manager
   ```

2. **Build Frontend:**
   ```bash
   cd client
   npm run build
   # Serve the build folder using nginx/apache or static server
   serve -s build
   ```

### Using Docker (if applicable)

If you have Docker setup:

```bash
# Build and run with docker-compose
docker-compose up --build
```

### Environment Variables Checklist

**Backend (.env):**
- SERVER_PORT=4001
- MONGO_URL=your-mongodb-connection-string
- SECRET_KEY=your-secret
- JWT keys configured
- Cloudinary credentials
- SMTP settings

**Frontend (.env):**
- REACT_APP_API_URL=http://localhost:4001 (or production URL)

### Troubleshooting

- **Port conflicts:** Change ports in .env if 3000/4001 are in use
- **MongoDB connection:** Ensure MongoDB is running or use cloud Atlas
- **Dependencies:** Run `npm install` in both folders
- **CORS issues:** Check allowed origins in backend app.js
- **Build errors:** Clear node_modules and reinstall, or check Node.js version

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Contact

For questions or support, please contact the development team.

---

**Note**: This is a demo application. For production use, ensure proper security measures, database backups, and monitoring are in place.
