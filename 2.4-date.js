var today=new Date();
new Date( )
new Date(milliseconds)
new Date(datestring)
//new Date(year,month,date[,hour,minute,second,millisecond ])


var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year


function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temp = "12";
    temp += ((minute < 10) ? ":0" : ":") + minute;
    temp += ((second < 10) ? ":0" : ":") + second;
    temp += (hour >= 12) ? " P.M." : " A.M.";
    return temp;
}