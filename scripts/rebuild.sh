#!/bin/bash

npm i
cd client
npm i
npm run build
cd ..
sudo rsync -Puar ./* /var/www/recipes-js
