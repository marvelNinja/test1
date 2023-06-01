db.createCollection("stud")
use stud

db.stud.insert({Name:"Neha",Marks:80})
db.stud.insert({Name:"Amit",Marks:70})
db.stud.insert({Name:"vijay",Marks:50})
db.stud.insert({Name:"Neha",Marks:60})
db.stud.insert({Name:"Amit",Marks:30})
db.stud.insert({Name:"Kajol",Marks:40})

var map=function(){emit(this.Name,this.Marks)}
var reduce=function(key,value){return Array.avg(value)}
db.stud.mapReduce(map,reduce,{out:"to"})
db.to.find()