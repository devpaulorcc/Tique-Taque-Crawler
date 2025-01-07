#!/bin/bash

PROJECT_DIR=/var/www/Projects/Tique-Taque-Crawler

NODE_VERSION=23

NPM_PATH=/home/$USER/.nvm/versions/node/v${NODE_VERSION}.5.0/bin/npm

cd ${PROJECT_DIR}

${NPM_PATH} start >> /home/$USER/cron.log 2>&1