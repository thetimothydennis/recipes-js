#!/bin/bash

cd scripts
sudo rsync -Puar recipesjs.service /etc/systemd/system/
