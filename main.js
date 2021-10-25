const schedule = require('node-schedule');
const exec = require('child_process').exec;
const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('30 * *  * * *', () => {

     console.log('123')

    });
}
scheduleCronstyle();
