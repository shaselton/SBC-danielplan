(function(){"use strict";angular.module("sbc").controller("CreateCtrl",["$scope",function(e){e.user={};e.createUser=function(){console.log(e.user)};e.$watch("user.currentWeight + user.heightFeet + user.heightInches",function(){if(!!e.user.currentWeight&&!!e.user.heightFeet&&!!e.user.heightInches){var t=e.user.heightFeet*12+parseInt(e.user.heightInches,10);e.user.bmi=e.user.currentWeight/(t*t)*703}});e.bmiChart={type:"AreaChart",displayed:!0,cssStyle:"height:600px; width:100%;",data:{cols:[{id:"day",label:"Day",type:"string"},{id:"bmi",label:"BMI",type:"number"}],rows:[{c:[{v:"Monday"},{v:29,f:"High BMI"}]},{c:[{v:"Wednesday"},{v:25.5,f:"Mid BMI"}]},{c:[{v:"Friday"},{v:20,f:"Lower BMI"}]}]},options:{title:"BMI Progress",isStacked:"false",fill:5,displayExactValues:!0,vAxis:{title:"BMI",gridlines:{count:8}},hAxis:{title:"Date"},tooltip:{isHtml:!0}},formatters:{}};e.weightChart={type:"AreaChart",displayed:!0,cssStyle:"height:600px; width:100%;",data:{cols:[{id:"day",label:"Day",type:"string"},{id:"lbs",label:"lbs",type:"number"}],rows:[{c:[{v:"Monday"},{v:215,f:"Highest Weight"}]},{c:[{v:"Wednesday"},{v:200.5,f:"Mid Weight"}]},{c:[{v:"Friday"},{v:197,f:"Lower Weight"}]}]},options:{title:"Weight Progress",isStacked:"false",fill:5,displayExactValues:!0,vAxis:{title:"lbs",gridlines:{count:5}},hAxis:{title:"Date"},tooltip:{isHtml:!0}},formatters:{}};e.faithChart={type:"LineChart",displayed:!0,cssStyle:"height:600px; width:100%;",data:{cols:[{id:"day",label:"Day",type:"string"},{id:"faith",label:"Faith",type:"number"}],rows:[{c:[{v:"Monday"},{v:0,f:"Lowest Faith"}]},{c:[{v:"Wednesday"},{v:1.5,f:"Mid Faith"}]},{c:[{v:"Friday"},{v:2.5,f:"Whole lotta faith"}]}]},options:{title:"Faith Progress",isStacked:"true",fill:5,displayExactValues:!0,vAxis:{title:"lbs",gridlines:{count:5}},hAxis:{title:"Date"},tooltip:{isHtml:!0}},formatters:{}};e.pieChart={type:"PieChart",displayed:!0,cssStyle:"height:600px; width:100%;",data:{cols:[{id:"day",label:"Day",type:"string"},{id:"food",label:"Faith",type:"number"}],rows:[{c:[{v:"More Food"},{v:10,f:"Moar Food!!"}]},{c:[{v:"Other Food"},{v:1.5,f:"Small FOOD :("}]},{c:[{v:"Food"},{v:2.5,f:"Food n Stuff"}]}]},options:{title:"My Plate",isStacked:"false",fill:5,displayExactValues:!0,vAxis:{title:"lbs",gridlines:{count:5}},hAxis:{title:"Date"},tooltip:{isHtml:!0}},formatters:{}}}])})();