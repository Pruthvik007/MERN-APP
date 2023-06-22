# Employee Management Application
# View At https://effulgent-lokum-fb843ff.netlify.app/

This is a full-stack employee management application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows organizations to store and manage employee details such as name, email, role, date of joining, gender, location, mobile number, and status. The CRUD (Create, Read, Update, Delete) operations are supported for employee records, which can only be performed by admin users.

# Key Features

+ **User Authentication**: The application uses JWT (JSON Web Tokens) for user authorization. Only authenticated admin users have access to perform CRUD operations and create new admin users.

+ **Middleware Handling**: Middleware functions are implemented to handle authentication and authorization logic, ensuring that only authorized requests are processed.

+ **Exception Handling**: Robust error handling mechanisms are implemented to handle and display meaningful error messages in case of any unexpected errors.

+ **Validation**: The application includes input validation to ensure that the data entered by the users meets the required criteria.

+ **React Routing**: React Router is used for handling client-side routing, allowing for a seamless single-page application experience.

+ **Component Reusability**: Components are designed to be reusable and modular, promoting code efficiency and maintainability.

+ **React Redux**: Redux is integrated into the application to manage the global state, providing a predictable state container for efficient data flow and management.

+ **Fetch API and Context API**: The application uses Fetch API for making asynchronous requests to the server and Context API for managing the global state within the client-side.

+ **Password Hashing**: Admin user passwords are hashed and securely stored in the database to ensure data security.

# Server Routes

## Employee Router
The Employee Router handles the CRUD operations for employee records and includes the following API endpoints:
+ GET /api/employees - Retrieves all employee records.
+ GET /api/employees/:id - Retrieves a specific employee record.
+ POST /api/employees - Creates a new employee record.
+ PUT /api/employees/:id - Updates an existing employee record.
+ DELETE /api/employees/:id - Deletes an employee record.

## User Router
The User Router handles user authentication and includes the following API endpoints:

+ POST /api/users/login - Authenticates the admin user and generates a JWT token.
+ POST /api/users/signup - Creates a new admin user.

# Technologies Used
The Employee Management Application is built using the following technologies:

+ **MongoDB**: A popular NoSQL database used for storing employee details and other application data.

+ **Express.js**: A flexible and minimalist web application framework for Node.js used to build the server-side RESTful APIs.

+ **React.js**: A JavaScript library for building user interfaces. React.js is used for the client-side development of the application, providing a rich and interactive user experience.

+ **Node.js**: A JavaScript runtime environment that allows executing server-side code and provides the backend functionality for the application.

+ **JWT (JSON Web Tokens)**: A secure and compact way of transmitting information between parties as a JSON object. JWT is used for user authentication and authorization.

+ **Redux**: A predictable state container for JavaScript applications. Redux is used for managing the global state in the client-side, providing efficient data flow and management.

+ **Fetch API**: A modern web API for making asynchronous requests to the server from the client-side.

+ **Context API**: A React API for managing global state within the client-side, used for sharing data between components.

+ **React Router**: A library for handling client-side routing in React applications, allowing for a seamless single-page application experience.

+ **Middleware**: Middleware functions are used in the server to handle authentication, authorization, and other request processing tasks.

+ **Exception Handling**: Robust error handling mechanisms are implemented to handle and display meaningful error messages in case of any unexpected errors.

+ **Password Hashing**: Admin user passwords are securely hashed and stored in the database to ensure data security.

These technologies work together to provide a powerful and efficient employee management system with a user-friendly interface and secure data handling.

# Getting Started

To run this application locally, follow these steps:

1.Clone the repository: git clone <repository_url>

2.Install the dependencies: npm install

3.Set up the environment variables (e.g., MongoDB connection URL, JWT secret) in a .env file.

4.Start the server: npm start

5.Navigate to the client directory: cd client

6.Install the client dependencies: npm install

7.Start the client: npm start

8.Access the application in your browser at http://localhost:3000/MERN-APP

Please ensure that you have Node.js and MongoDB installed on your system before running the application.



