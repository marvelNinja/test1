use data
db.data.insert({'Name':"Dhananjay",'Rollno':22})
db.data.insert({'Name':"Raju",'Rollno':23})
db.data.insert({'Name':"Vishwas",'Rollno':24})
db.data.insert({'Name':"king",'Rollno':25})

db.data.remove({'Rollno':25})
db.data.find().pretty()
db.data.update({'Rollno':22},{$set:{'Rollno':90}})

db.data.find({"Name":"Dhananjay"})

db.data.insert({'Name':"king",'Rollno':25})
db.data.insert({'Name':"king",'Rollno':25,'desc':'luis'})
db.data.find({$and:[{'Name':'king'},{'desc':'luis'}]})
db.data.find({$or:[{'Name':'king'},{'desc':'luis'}]})

db.createCollection("desi")
use desi

db.desi.insert({"Name":"Dark",""})