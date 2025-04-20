const express= require("express");
const app = express();
const bookRoutes=require('./routes/bookRoutes')
app.use(express.json()); // Make sure this is at the top, before the route.


app.use('/books',bookRoutes)
const port=3003;

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})