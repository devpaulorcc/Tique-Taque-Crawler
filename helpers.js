import fs from "fs";
import util from "util";

export const getCurrentTime = () => {
    let date_ob = new Date();

    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    return hours + ":" + minutes;
}

export const report = (msg) => {
    var log_file = fs.createWriteStream('debug.log', {flags : 'a'});
    var log_stdout = process.stdout;

    log_file.write(util.format(msg) + '\n');
    log_stdout.write(util.format(msg) + '\n');
}