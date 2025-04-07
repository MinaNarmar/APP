# Dashboard Project

## Description
This project is a simple betting dashboard implemented using Node/Express for the backend and React with Redux for the frontend.

## Getting Started

### Prerequisites
- Node.js installed on your local machine.
- npm (Node Package Manager), included with Node.js.

### Installation
To get the project running locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone git clone https://github.com/MinaNarmar/APP.git
   cd APP
   ```

2. Start the backend server:
   ```bash
   cd backend
   npm install
   npm start
   ```

3. Open another terminal, navigate to the frontend directory, and start the React application:
   ```bash
   cd frontend
   cd bets-app
   npm install
   npm start
   ```

The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:3001`.

##  Questions

### 1. Why did you choose your specific approach to managing state with Redux?
The structure of actions and reducers in Redux helps in state, as it beneficial for debugging and testing. and i used Redux Toolkit to simplify the configuration.

### 2. How else could you have implemented the status filter feature?
the status filter could have been implemented using the React Context API

### 3. What trade-offs did you consider when designing the API endpoints?
I took simplicity into account while building the API endpoints. 

### 4. If I had more time, what additional feature or improvement would you add to this dashboard, and why?
If I had more time, I would add user authentication and authorization to the dashboard to personalized bet tracking (e.g., admin, regular user).


