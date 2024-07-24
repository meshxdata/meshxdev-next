# Project Name

## Overview

This project is a web application built with Next.js, TypeScript, and various other technologies. It includes features such as user authentication, email sending, and data management.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/project-name.git
    cd project-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env.local` file in the root directory. Use the env.sample as the template


## Usage

To start the development server, run:

```
npm run dev
```


To build the project for production, run:

```
npm run build
```


## File Structure

Here is an overview of the project's file structure:

- `components/`: Contains React components used throughout the application.
- `hooks/`: Contains custom React hooks.
- `pages/`: Contains Next.js pages.
- `public/`: Contains static assets.
- `styles/`: Contains CSS and styling files.
- `utils/`: Contains utility functions and constants.

### Key Files

- `hooks/useMail.ts`: Custom hook for sending emails using SendGrid.
    ```typescript:hooks/useMail.ts
    startLine: 1
    endLine: 50
    ```

- `utils/email.consts.ts`: Contains email-related constants.
    ```typescript:utils/email.consts.ts
    startLine: 1
    endLine: 1
    ```

- `pages/api/email.ts`: API route for handling email sending.
    ```typescript:pages/api/email.ts
    startLine: 1
    endLine: 29
    ```

- `components/GetStartedForm/index.tsx`: Component for the "Get Started" form.
    ```typescript:components/GetStartedForm/index.tsx
    startLine: 1
    endLine: 62
    ```

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
