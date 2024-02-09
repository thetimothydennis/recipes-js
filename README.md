# Recipes-js
**A MERN stack app for cataloging recipes.**

## Initialization
Clone the repo to your local filesystem.
Copy the .env-example to .env, then input your MongoDB connection string and port on which to run the application.
Use `npm run setup` to install prerequisites and build the frontend.
Use `npm run serve` to start the application within pm2.
Use `npm run kill` to stop the application.
Use `npm run logs` to view the application logs from pm2.
Use `npm run rebuild` to kill the app, rebuild the frontend, then restart the app.
Use `npm run pm2delete` to delete the server instance from pm2.

## Notes
You will need to provide your own MongoDB database. This can be in Docker, a local MongoDB instance, or a cloud-hosted option. Whichever you use, you will need to put the connection string to your database in the .env file for the application to work.

When running `install` or `rebuild`, you may need to input an administrator password, as that directory is normally restricted to those who are not super users.

## Backend dependencies
dotenv
express
mongoose
morgan
path
pm2
url

## Frontend dependencies
axios
react
react-dom
react-router
react-router-dom