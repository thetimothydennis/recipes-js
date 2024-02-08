# Recipes-js
**A MERN stack app for cataloging recipes.**

## Initialization
Clone the repo to your local filesystem.
Copy the .env-example to .env, then input your MongoDB connection string and port on which to run the application.
Use `npm run make` to install all prerequisites and build the project frontend. Nodemon will also be installed globally to simplify service creation on Linux systems.
Use `npm run install` to copy the built application to /var/www/recipes-js/
Use `npm run serve` to start the application manually.
Use `npm run rebuild` to install updated dependencies, rebuild the frontend, then copy the updated build to /var/www/recipes-js

## Installing a Linux service (for systemd environments)
You can edit the values in `scripts/recipesjs.service`, but left alone it should work fine.
To install the service, use `npm run install-service`, which copies the `recipesjs.service` file into `/etc/systemd/system`. From there, you can enable the server on boot with `systemctl enable recipesjs`, start the service with `systemctl start recipesjs` and restart it with `systemctl restart recipesjs`. To disable the server at boot, run `systemctl disable recipesjs`.


## Notes
You will need to provide your own MongoDB database. This can be in Docker, a local MongoDB instance, or a cloud-hosted option. Whichever you use, you will need to put the connection string to your database in the .env file for the application to work.

When running `install` or `rebuild`, you may need to input an administrator password, as that directory is normally restricted to those who are not super users.