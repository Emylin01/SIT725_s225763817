const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB')
console.log('Connected to MongoDB');

mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB');
});

const DessertSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});

const Dessert = mongoose.model('Dessert', DessertSchema);

// sample data
const desserts = [
  {
    title: "Chocolate Cake",
    image: "images/chocolate_cake.jpg",
    link: "https://en.wikipedia.org/wiki/Chocolate_cake",
    description: "Rich chocolate cake"
  },
  {
    title: "Strawberry Cheesecake",
    image: "images/cheesecake.jpg",
    link: "https://en.wikipedia.org/wiki/Cheesecake",
    description: "Delicious Strawberry Cheesecake"
  },
  {
    title: "Macaron",
    image: "images/macaron.jpg",
    link: "https://en.wikipedia.org/wiki/Macaron",
    description: "Sweet mini macarons"
  }
];

// insert data
const seedDB = async () => {
  await Dessert.deleteMany({});
  await Dessert.insertMany(desserts);
  
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();