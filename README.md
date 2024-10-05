# Full-Stack Pizza

A web-app built with React.js, Express.js and PostgreSQL which simulates the process of ordering pizza from a local restaurant. <br/>
Includes features like registration, sign in, cart system and simulated payment handling

## Setup

**1. Create a `.env` file using `.env.example` in the project root folder**

**Proceed with your preferred approach**
- [Using Docker](#using-docker)
- [Without Docker](#without-docker)

### Using Docker
**1. See https://docs.docker.com/engine/install/ to install Docker on your system**

**2. Verify installation with `docker --version`**


> Note: never use the default credentials in a production envrionment!

**4. Build and run the Docker Compose image**
1. Navigate to the project directory
```bash
cd /path/to/the/project/directory
```
2. Build the Docker images
```bash
docker compose build
```
3. Start the app
```bash
docker compose up
```

4. Access the app <br/>
Once the services are running, the app should be accessible at `http://localhost/` <br/>
The backend is at `http://localhost:{BACKEND_PORT}/` and `http://localhost/api`

### Without Docker (Linux)
**1. Install Postgresql**
1. Install and run PostgreSQL (https://www.postgresql.org/download/)

2. Log in to the PostgreSQL cli
```bash
sudo -u postgres psql
```
3. Create a new user with a password
```bash
CREATE USER ... WITH PASSWORD '...';
```
4. Create a new database
```bash
CREATE DATABASE ...;
```
5. Grant all privileges on the database to the new user
```bash
GRANT ALL PRIVILEGES ON DATABASE ... TO ...;
```
6. Exit PostgreSQL cli
```bash
\q
```

**2. Make sure node.js is installed on your system (https://nodejs.org/en/download/package-manager/current)**

**3. Create a `.env` file using `.env.example` in the project root folder**

**4. Navigate to `frontend` and `backend` separately, and run `npm install` for both**

**5. Install and set up nginx, configuration included in `frontend`**

**6. Run the individual services**
- Make sure PostgreSQL is running at first, start the service using your system's service manager
- Navigate to `frontend` and run `npm run dev` for a development server or `npm run build` to build the site
- Navigate to `backend` and run `npm run dev` for a development server or `npm start` for a production-ready server


**6. Access the app** <br/>
Once the services are running, the app should be accessible at `http://localhost/` <br/>
The backend is at `http://localhost:{BACKEND_PORT}/` and `http://localhost/api`