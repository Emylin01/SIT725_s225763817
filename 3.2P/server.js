var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.PORT || 3000;

const desserts =[
     {
        title: "Chocolate Cake",
        image: "images/chocolate_cake.jpg",
        link: "View Info",
        description: "Rich and moist chocolate cake topped with ganache."
    },
    {
        title: "Strawberry Cheesecake",
        image: "images/cheesecake.jpg",
        link: "View Info",
        description: "Creamy cheesecake with fresh strawberry topping."
    },
    {
        title: "Macarons",
        image: "images/macaron.jpg",
        link: "View Info",
        description: "Light and colorful French almond cookies."
    }
];
app.get('/api/desserts', (req, res) => {
    res.json({ statusCode: 200, data: desserts });
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})
