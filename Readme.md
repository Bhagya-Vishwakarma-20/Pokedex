
# Inventory Management System

A web application for managing inventory with categories and items, featuring full CRUD operations.

## Project Roadmap

### 1. Project Setup
- [x] Initialize Node.js project
- [x] Install required dependencies (express, mongoose, ejs, etc.)
- [x] Setup basic Express server
- [x] Configure environment variables
- [x] Setup MVC folder structure

### 2. Database Design
- [ ] Design MongoDB Schema
  - Categories Schema
  - Items Schema with category reference
- [ ] Setup MongoDB connection
- [ ] Create Models

### 3. Categories Implementation
- [ ] Create Category Routes
  - GET /categories (list all)
  - GET /categories/create (form)
  - POST /categories (create)
  - GET /categories/:id (view)
  - GET /categories/:id/edit (edit form)
  - PUT /categories/:id (update)
  - DELETE /categories/:id (delete)
- [ ] Create Category Controllers
- [ ] Create Category Views
  - List view
  - Create form
  - Edit form
  - Detail view

### 4. Items Implementation
- [ ] Create Item Routes
  - GET /items (list all)
  - GET /items/create (form)
  - POST /items (create)
  - GET /items/:id (view)
  - GET /items/:id/edit (edit form)
  - PUT /items/:id (update)
  - DELETE /items/:id (delete)
- [ ] Create Item Controllers
- [ ] Create Item Views
  - List view
  - Create form
  - Edit form
  - Detail view

### 5. Frontend Development
- [ ] Setup views with EJS
- [ ] Create layout template
- [ ] Style with CSS
- [ ] Add client-side validation
- [ ] Implement responsive design

### 6. Additional Features
- [ ] Add image upload for items
- [ ] Implement search functionality
- [ ] Add sorting and filtering
- [ ] Implement pagination
- [ ] Add flash messages for operations

### 7. Testing & Deployment
- [ ] Write tests
- [ ] Debug and test all CRUD operations
- [ ] Security improvements
- [ ] Deploy to hosting platform

## Tech Stack
- Node.js
- Express.js
- MongoDB
- EJS templating
- Bootstrap/CSS for styling

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Create .env file with required variables
4. Run the application: `npm start`

## Project Structure
