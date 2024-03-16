// CRUD - Create Read Update Delete

// CREATE/USE DATABASE
// use database_name


// INSERTING DATA
// Inserting single data in MongoDB
db.collection_name.insertOne({ name: "skype", version: 3.2, rating: 5.0, price: 399 })

// Inserting an array data in MongoDB
db.collection_name.insertMany([{ name: "skype", version: 3.2, rating: 5.0, price: 399 }, { name: "google", version: 2.5, rating: 3.0, price: 499 }, { name: "meta", version: 1.2, rating: 2.6, price: 699, isFoldable: true }])

// to create another collection
db.another_collection_name.find([{ name: "shivam", marks: 95, height: 5.9, weight: 74 }, { name: "satyam", marks: 90, height: 5.7, weight: 84 }, { name: "chotu", marks: 75, height: 3.9, weight: 44 }])


// SEARCHING DATA
// to show all the datas
db.collection_name.find()

// data with versin 1.2
db.collection_name.find({ version: 1.2 })

// rating >=3
db.collection_name.find({ rating: { $gte: 3 } })

// rating >3
db.collection_name.find({ rating: { $gt: 3 } })

// rating <=3
db.collection_name.find({ rating: { $lte: 3 } })

// rating <3
db.collection_name.find({ rating: { $lt: 3 } })

// rating >= 3 and price> 399
db.collection_name.find({ rating: { $lt: 3 }, price: { $gt: 399 } })

// rating >= 3 or price> 399
db.collection_name.find({ $or: [{ rating: { $lt: 3 } }, { price: { $gt: 399 } }] })

// to see only few things -- here its name only
db.collection_name.find({ $or: [{ rating: { $lt: 3 } }, { price: { $gt: 399 } }] }, { name: 1 })


// DELETING DATA
// deleteOne - delete the first matching result
db.collection_name.deleteOne({ price: 399 })

// deleteMany - delete all matching result
db.collection_name.deleteMany({ name: "skype" })


// UPDATING DATA
// single data
// will update the first data with matching condition
db.collection_name.updateOne({ name: "google" }, { $set: { price: "free" } })
db.collection_name.upadateOne({ name: "shivam" }, { $set: { rating: 3.4 } })

// will update all the data with matching condition
db.collection_name.updateMany({ name: "google" }, { $set: { price: "$1" } })
