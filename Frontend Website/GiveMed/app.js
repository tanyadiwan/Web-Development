const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //for serving static files


app.set('view engine', 'ejs') // set the template engine as ejs
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'))


//END POINTS
app.get('/', (req, res)=>{
    const con = "this is the best content on internet so use it wisely"
    const params = {'title': 'pubg is the best game', "content": con}
    res.status(200).render('index.html', params);
})

app.get("/:page", (req, res)=>{
	res.render(req.params.page)
})

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database")
    })
});

//START THE SERVER
app.listen(port, ()=>{
    console.log(`This application started successfully on port ${port}`);
});