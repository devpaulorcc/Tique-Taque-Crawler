import fs from "fs";
import util from "util";

export const getCurrentTime = () => {
    let date = new Date();

    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    return hours.padStart(2, '0') + ":" + minutes.padStart(2, '0');
}

export const report = (msg) => {
    var log_file = fs.createWriteStream('debug.log', {flags : 'a'});
    var log_stdout = process.stdout;

    log_file.write(util.format(msg) + '\n');
    log_stdout.write(util.format(msg) + '\n');
}