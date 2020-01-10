"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: 
   Date:   

*/
showClock();
setInterval("showClock()",1000);

function showClock(){

var thisDay = new Date ("May 19,2018 at 9:31:27 a.m");
var localDate = new Date ("May 19,2018");
var localTime =  new Date ("9:31:27 a.m");

function nextJuly4(thisDay) {
   var j4Date = setHours("9pm")*24;
}
  var days = (nextJuly4 - thisDay)/(1000*60*60*24);
  var hrs = (days- Math.floor(days))*24;
  var mins= (hrs - Math.floor(hrs))*60;
  var secs = (mins - Math.floor(mins))*60;

nextJuly4("days").textContent = Math.floor(dLeft);
nextJuly4("hrs").textContent = Math.floor(hLeft);
nextJuly4("mins").textContent = Math.floor(mLeft);
nextJuly4("secs").textContent = Math.ceil(sLeft);
}



function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}

