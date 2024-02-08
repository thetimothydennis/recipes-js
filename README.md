# Recipes-js
**A MERN stack app for cataloging recipes.**

## Initialization
Clone the repo to your local filesystem.
Copy the .env-example to .env, then input your MongoDB connection string and port on which to run the application.
Use `npm run install` to install prerequisites and build the frontend.
Use `npm run serve` to start the application.

## Notes
You will need to provide your own MongoDB database. This can be in Docker, a local MongoDB instance, or a cloud-hosted option. Whichever you use, you will need to put the connection string to your database in the .env file for the application to work.

When running `install` or `rebuild`, you may need to input an administrator password, as that directory is normally restricted to those who are not super users.