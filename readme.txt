# Car Damage Detection Project Setup

## Initial Setup

1. Set the execution policy (in PowerShell):

```bash
Set-ExecutionPolicy RemoteSigned -Scope Process
```

2. Activate the Python environment:

```bash
.\se_environment\Scripts\activate
```

3. Navigate to the Django project directory:

```bash
cd car_damage_detection_web
```

4. Start the Django server:

```bash
python ./manage.py runserver
```

5. In a new terminal, navigate to the frontend directory:

```bash
cd car_damage_detection_web/frontend
```

6. Start the React development server:

```bash
npm run dev
```

## Project Structure

- The `api` folder in `car_damage_detection` is strictly for backend.
- The `frontend` folder in `car_damage_detection` is strictly for frontend.
- React components go into the `component` folder.

## Initialization of Frontend

In the `frontend` folder, `npm init -y` is used to make `package.json`.

## Technologies Used

### Webpack

Webpack is a module bundler. It takes your JavaScript, CSS, and other assets, and bundles them together in an optimized form for the browser. It also allows for code splitting, asset management, and provides a development server.

### Babel

Babel is a JavaScript compiler that allows you to write modern JavaScript code and transpile it into an older version that is compatible with a broader range of browsers. It supports JSX and React, and enables the use of the latest ECMAScript features.

### React

React is a JavaScript library for building user interfaces. Install it with `npm i react react-dom --save-dev`.

### Material-UI

Material-UI is a popular React UI framework that implements Google's Material Design. Install it with `npm install @material-ui/core`.

### React Router

React Router is a library that provides the core routing functionality for React Router. It allows you to create a single-page application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
