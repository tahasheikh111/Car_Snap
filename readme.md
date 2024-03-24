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

##Technologies Used
## Backend

**Django**: A high-level Python web framework that provides a robust foundation for building complex web applications. Django offers features like an object-relational mapper (ORM) for database interactions, a templating system for dynamic content generation, and a built-in admin interface for managing data.

## Frontend

**React**: A JavaScript library for building user interfaces. React's component-based architecture promotes the creation of reusable and modular UI elements, leading to cleaner, more maintainable code. React leverages a virtual DOM to optimize rendering performance and efficiently update the UI when data changes.

**Webpack**: A module bundler that acts as the central hub for managing frontend assets (JavaScript, CSS, images). Webpack takes these files, processes them (including dependency management), and bundles them into optimized files for efficient browser loading. Webpack offers features like code splitting (loading code on demand), asset management (handling various asset types), and a development server with hot module replacement (HMR) for smooth development workflows.

**Babel**: A JavaScript compiler that bridges the gap between modern JavaScript syntax and older browser compatibility. Babel transpiles code written using the latest ECMAScript features into a version that can be understood by a broader range of browsers, ensuring wider application reach.

**Material-UI**: A popular React UI framework that provides a rich set of pre-designed and customizable React components adhering to Google's Material Design guidelines. This allows you to build aesthetically pleasing and user-friendly UIs quickly and efficiently.

**React Router**: A library for client-side routing that helps manage navigation within your React application. React Router enables you to define routes that map URLs to specific React components, creating an intuitive single-page application (SPA) experience without full page reloads.

