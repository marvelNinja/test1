db.createCollection('index')
use index
db.index.insert({Name:"Dhananjay",roll_no:1})
db.index.insert({Name:"Krish",roll_no:2})
db.index.insert({Name:"Amir",roll_no:3})
db.index.insert({Name:"Salman",roll_no:4})
db.index.insert({Name:"Akshay",roll_no:5})
db.index.insert({Name:"Sharukh",roll_no:6})

db.index.find()

db.index.createIndex({roll_no:1})

db.index.getIndexes()

db.index.dropIndex({roll_no:1})