const validateBook =(req,res,next)=>{
    const { title, author,publishedYear,price}=req.body;
    if( !title || !author || !publishedYear || !price){
        return res.status(400).send(' title, author,publishedYear,price are required')
    }
        next();
};

module.exports = validateBook;