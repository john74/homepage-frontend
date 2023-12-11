# Thikee Frontend

Welcome to the frontend repository of Thikee. This repository, currently a work-in-progress (WIP) project, contains the Next.js-based frontend code responsible for creating a personalized homepage with bookmark management and weather data integration.

![Alt text](https://i.postimg.cc/cJvhQ8g8/thikee-home.png)

## Project Overview

Thikee allows users to:
- Search the web using predefined search engines or add new search engines.
- Organize bookmarks into categories.
- Create shortcuts for quick access to bookmarks.
- Access current weather data and forecasts.

## Todo List

1. Refactor the codebase for better maintainability.
2. Integrate a UI library for a modern and responsive design.
3. Implement the ability for users to add bookmark subcategories.

## How to Run

1. **Clone the repository:**
   ```bash
   git clone git@github.com:john74/thikee-frontend.git ; cd thikee-frontend

2. **Install dependencies:**
   ```bash
   npm install

3. **Rename environment file**
   ```bash
   mv .env.local.example .env.local
- Generate new keys using openssl rand -base64 32.
- Replace the existing values of the environment variables in the .env file or use the predefined values.

4. **Run the development server:**
   ```bash
   npm run dev

Open your web browser and navigate to http://localhost:3000/ to access the application.