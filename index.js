import puppeteer from 'puppeteer';
import config from './config.js';
import { setTimeout } from "node:timers/promises";
import { getCurrentTime, report } from './helpers.js';

const URL = 'https://www.tiquetaque.app/';
const LATITUDE = -23.666220;
const LONGITUDE = -46.807516;

// STEP 1 - SETUP

const args = [
    '--ignore-certificate-errors',
    '--no-sandbox',
    '--start-maximized',
];

const browser = await puppeteer.launch({
    headless: "new",
    args,
    ignoreHTTPSErrors: true,
});

const [page] = await browser.pages();

await page.setGeolocation({
    latitude: LATITUDE, 
    longitude: LONGITUDE
});

const context = browser.defaultBrowserContext();
await context.overridePermissions(URL, ['geolocation']);

await page.setViewport({width: 1920, height: 1080});

// STEP 2 - LOGIN

await page.goto(URL);

await setTimeout(1000);

await page.locator('input#email').fill(config.EMAIL);
await page.locator('input#password').fill(config.LOGIN_CODE);

await setTimeout(1000);

await page.locator('button#btn-login').click();

await setTimeout(2000);

// STEP 3 - PROCESS

await page.locator('button#btn-remote-record').click();

await setTimeout(3000);

await page.locator('button#btn-save-location').click();

await setTimeout(2000);

report("check-in at " + getCurrentTime());

await browser.close();