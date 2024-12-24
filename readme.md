# Socket Server Project

This project serves as the **backend** for a chat application, developed as part of a Socket.IO lab from a Platzi course. It complements the [Angular Chat Client](#) and manages real-time communication using **Socket.IO**.

## Features

### Real-Time Communication
- **Broadcasting Messages:** Implemented real-time message handling and broadcasting using Socket.IO.
- **Room Management:** Supports joining and leaving rooms for segmented communication. 
- **Namespace Implementation:** Distinguishes between groups (e.g., teachers and students) for better scalability. (apply for certain commit)

### Authentication and Middleware
- **Token Authentication:** Middleware validates token-based connections before establishing a session.
- **Secure Communication:** Configured CORS and secure routes for user management.

### API and User Services
- **CRUD Operations:** Basic API for user management.
- **In-Memory User Service:** Handles user data efficiently for small-scale projects.

### Testing
- **Socket.IO Testing:** Tests implemented using Jest with setup/teardown configurations.
- **Debugging Tools:** Documentation on using `DEBUG` environment variables for better insights.

### Admin Monitoring
- **Admin UI Integration:** Added support for monitoring and managing sockets using an admin interface.

## Key Commit Highlights

### Core Features
- **Real-Time Communication:**
  - Introduced room-based message broadcasting.
  - Used `socket.volatile.emit` for optimized event emission.
  - Implemented namespace handling for teachers and students.

- **Authentication Middleware:**
  - Validates tokens for secure Socket.IO connections.

### Refactors and Improvements
- **Modular Architecture:**
  - Modularized backend logic for better scalability and maintainability.
  - Added reusable classes for managing namespaces and socket events.

- **Testing Enhancements:**
  - Implemented foundational tests for Socket.IO using Jest.

### Developer Experience
- **Debugging Tools:**
  - Documented the use of environment variables for debugging Node.js applications.

### Integration
- **Admin UI:**
  - Integrated admin monitoring tools to manage and debug active sockets.

## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **Socket.IO**: Core dependency for real-time communication.

### Installation
1. Clone the repository:
   ```bash
   git clone # Socket Server Project

This project serves as the **backend** for a chat application, developed as part of a Socket.IO lab from a Platzi course. It complements the [Angular Chat Client](#) and manages real-time communication using **Socket.IO**.

## Features

### Real-Time Communication
- **Broadcasting Messages:** Implemented real-time message handling and broadcasting using Socket.IO.
- **Room Management:** Supports joining and leaving rooms for segmented communication.
- **Namespace Implementation:** Distinguishes between groups (e.g., teachers and students) for better scalability.

### Authentication and Middleware
- **Token Authentication:** Middleware validates token-based connections before establishing a session.
- **Secure Communication:** Configured CORS and secure routes for user management.

### API and User Services
- **CRUD Operations:** Basic API for user management.
- **In-Memory User Service:** Handles user data efficiently for small-scale projects.

### Testing
- **Socket.IO Testing:** Tests implemented using Jest with setup/teardown configurations.
- **Debugging Tools:** Documentation on using `DEBUG` environment variables for better insights.

### Admin Monitoring
- **Admin UI Integration:** Added support for monitoring and managing sockets using an admin interface.

## Key Commit Highlights

### Core Features
- **Real-Time Communication:**
  - Introduced room-based message broadcasting.
  - Used `socket.volatile.emit` for optimized event emission.
  - Implemented namespace handling for teachers and students.

- **Authentication Middleware:**
  - Validates tokens for secure Socket.IO connections.

### Refactors and Improvements
- **Modular Architecture:**
  - Modularized backend logic for better scalability and maintainability.
  - Added reusable classes for managing namespaces and socket events.

- **Testing Enhancements:**
  - Implemented foundational tests for Socket.IO using Jest.

### Developer Experience
- **Debugging Tools:**
  - Documented the use of environment variables for debugging Node.js applications.

### Integration
- **Admin UI:**
  - Integrated admin monitoring tools to manage and debug active sockets.

## Getting Started

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your machine.
- **Socket.IO**: Core dependency for real-time communication.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/socket-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd socket-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
- Start the server:
  ```bash
  npm start
  ```
- For development with live reloading:
  ```bash
  npm run dev
  ```

### Environment Variables
- Configure `DEBUG` to enable detailed logging:
  ```bash
  DEBUG=socket* npm start
  ```

## Project Structure
```
├── src
│   ├── routes             # Handles namespace-specific connections
│   ├── services           # Reusable class for socket events
│   ├── middleware         # Contains authentication middleware
│   ├── index.js           # main file of the proyect
│   ├── realTimeServer.js  # socket server
├── tests
└── package.json
```

## Resources
- Platzi Course: [Socket.IO Class](https://platzi.com/home/clases/3276-socket-io/)

---
For more details about the frontend project, see [Angular Chat Client](#).


   ```
2. Navigate to the project directory:
   ```bash
   cd socket-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server
- Start the server:
  ```bash
  npm start
  ```
- For development with live reloading:
  ```bash
  npm run dev
  ```

### Environment Variables
- Configure `DEBUG` to enable detailed logging:
  ```bash
  DEBUG=socket* npm start
  ```

## Project Structure
```
├── src
│   ├── routes.js          # Handles namespace-specific connections
│   ├── io.class.js        # Reusable class for socket events
│   ├── user.service.js    # Manages user data in-memory
│   ├── middleware         # Contains authentication middleware
│   └── tests
│       └── socket.test.js # Jest tests for Socket.IO
└── package.json           # Project configuration
```

## Resources
- Platzi Course: [Socket.IO Class](https://platzi.com/home/clases/3276-socket-io/)

---
For more details about the frontend project, see [Angular Chat Client](#).

