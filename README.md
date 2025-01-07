# Tique-Taque-Crawler

THIS PROJECT REQUIRE NODEJS IN VERSION 23 OR HIER

>> SET PERMISSIONS IN DIRECTORY
`sudo chmod -R 777 /var/www/Projects/Tique-Taque-Crawler`

>> install dependences
`npm i`

>> configure cron
`crontab -e`

copy and past
<code>
    SHELL=/bin/bash
    NODE_ENV=production

    0 9 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
    30 12 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
    30 13 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
    0 18 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
<code>