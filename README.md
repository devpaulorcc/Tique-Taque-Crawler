# Tique-Taque-Crawler

The **Tique-Taque-Crawler** is an automated tool developed in Node.js to interact with the **Tique-Taque** system, efficiently and programmatically performing specific tasks.

## Features

- Automation of tasks in the Tique-Taque system.
- Scheduled execution using `cron` for specific times.
- Easy configuration and installation for Linux-based systems.
- Customizable to suit different use cases.

---

## Requirements

Make sure you have the following requirements before installing:

- **Node.js** (version 23 or higher)
- **npm** (Node.js package manager)
- Terminal access (Linux)

---

## Installation

Follow the steps below to set up the project on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/YoungC0DE/Tique-Taque-Crawler.git
```

### 2. Navigate to the project directory

```bash
cd Tique-Taque-Crawler
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set directory permissions

```bash
sudo chmod -R 777 /var/www/Projects/Tique-Taque-Crawler
```

The project is now set up and ready to use.

---

## Cron Configuration

To schedule the execution of the script at specific times, follow the steps below:

### 1. Edit the crontab

```bash
crontab -e
```

### 2. Add the following entries to the crontab

```cron
SHELL=/bin/bash
NODE_ENV=production

0 9 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
30 12 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
30 13 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
0 18 * * * /var/www/Projects/Tique-Taque-Crawler/script_linux.sh
```

These lines schedule the execution of the `script_linux.sh` script at the specified times.

---

## Project Structure

The project is organized as follows:

- `config.js`: Main configuration file for the project.
- `helpers.js`: Contains helper functions used by the crawler.
- `index.js`: Main entry point of the application.
- `script_linux.sh`: Script for automated execution on Linux systems.

---

## Usage

After configuring the cron, the Tique-Taque-Crawler will run automatically at the scheduled times. To run it manually, use the command:

```bash
bash script_linux.sh
```
