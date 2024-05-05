# Next.js CRUD Tutorial

## Project Overview

Welcome to an educational project designed to teach full-stack development with a focus on CRUD (Create, Read, Update, Delete) operations. This repository holds a Next.js application implemented with TypeScript, styled with Material UI, and backed by a MySQL database. We utilize Prisma as our ORM (Object-Relational Mapping) tool, and Cloudinary for handling product images.

## Learn CRUD Operations

- **Create**: Add new products.
- **Read**: Display products.
- **Update**: Modify existing products.
- **Delete**: Remove products.

## Project Structure

- `src/`: Folder for source code of the application.
- `app/`: Houses the main application logic, including API routing and pages.
- `components/`: Contains reusable React components used across different parts of the application.
- `config/`: Contains configuration files for various parts of your application, such as settings.
- `db/`: Contains database connection handlers.
- `utils/`: Contains utility functions or helper functions used across the application.
- `types/`: Holds TypeScript type definitions for application, enhancing type safety and code maintainability.
- `actions/`: Contains action functions responsible for triggering specific actions within your application such as API requests.
- `prisma/`: Contains Prisma-related files such as schema definitions and migrations.
- `public/`: Contains static assets like images, fonts, or other files that need to be publicly accessible. These assets are typically served directly by the server without any processing.

## Installation Instructions

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/nextjs-ecommerce.git
```

Change into project directory

```bash
cd nextjs-ecommerce
```

Install Dependencies:

```bash
npm install
```

Environment Setup:

`Note:` Create a .env file in the root directory and add the following:

```bash
NEXTAUTH_URL= 'http://localhost:3000'
DATABASE_URL="<your-mysql-database-connection-string>"
CLOUDINARY_CLOUD_NAME="<your-cloudinary-cloud-name>"
CLOUDINARY_API_KEY="<your-api-key>"
CLOUDINARY_API_SECRET="<your-api-secret>"
CLOUDINARY_PROJECT_FOLDER="<your-project-folder-name>"
```

Initialize the Database:

```bash
npx prisma migrate dev
```

Running the project:

```bash
npm run dev
```

## Preview project:

https://nextjs-ecommerce-prod.vercel.app/admin

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
