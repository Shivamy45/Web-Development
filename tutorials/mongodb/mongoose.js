const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/blueKart");
    console.log("We are connected");
    // if your database has auth enabled
    // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');
};
main().catch((err) => console.log(err));

const personSchema = new mongoose.Schema({
    name: String,
});

personSchema.methods.speak = function speak() {
    var greeting = "My name is " + this.name;
    console.log(greeting);
};

// NOTE: methods must be added to the schema before compiling it with mongoose.model()

const Person = mongoose.model('Person', personSchema);

const person1 = new Person({ name: "Nilesh" });
person1.speak();

const person2 = new Person({ name: "Ajay" });
person2.speak();

// NOTE: async function provides the function await
async function save() {
    await person1.save();
    await person2.save();
};
save().catch((err) => console.log(err));

async function find() {
    const persons = await Person.find();
    console.log(persons);
}
find().catch((err) => console.log(err));
