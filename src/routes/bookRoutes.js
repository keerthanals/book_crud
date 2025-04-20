const express= require('express');
const router = express.Router();
const bookController= require('../controllers/bookController')
const validateBook=require('../middlewares/validateBook')

router.post('/',validateBook,bookController.createBook)
router.get('/',bookController.getAllBooks)
router.get('/:id',bookController.getBookById)
router.put('/:id',validateBook,bookController.updateBookById)
router.patch('/:id',bookController.partialUpdateBookById)
router.delete('/:id',bookController.deleteBookById)

module.exports=router;