 **# Car Damage Detection Project Setup**

This project aims to create a web application that can detect car damage using image processing and machine learning techniques.

## Getting Started

### Initial Setup

1. **Set the execution policy (in PowerShell):**

   ```bash
   Set-ExecutionPolicy RemoteSigned -Scope Process
   ```

2. **Activate the Python environment:**

   ```bash
   .\se_environment\Scripts\activate
   ```

3. **Navigate to the Django project directory:**

   ```bash
   cd car_damage_detection_web
   ```

4. **Start the Django server:**

   ```bash
   python ./manage.py runserver
   ```

5. **In a new terminal, navigate to the frontend directory:**

   ```bash
   cd car_damage_detection_web/frontend
   ```

6. **Start the React development server:**

   ```bash
   npm run dev
   ```

## Project Structure

- **`api`:** Contains backend code (Django) for handling API requests and logic.
- **`frontend`:** Houses frontend code (React) for user interface and user interactions.
    - **`components`:** Contains reusable React components.

## Frontend Setup

Initialize the frontend with `npm init -y` in the `frontend` folder to create a `package.json` file.

## Technologies Used

**Backend:**

- **Django:** Python web framework for efficient server-side development.

**Frontend:**

- **React:** JavaScript library for building dynamic and interactive user interfaces.
- **Webpack:** Module bundler for optimizing and packaging frontend assets.
- **Babel:** JavaScript compiler for transpiling modern JavaScript code for wider browser compatibility.
- **Material-UI:** Popular React UI framework implementing Google's Material Design.
- **React Router:** Library for handling client-side routing and navigation.

## Contributing

We welcome contributions! Please refer to the CONTRIBUTING.md file for guidelines.

**Happy coding!**
