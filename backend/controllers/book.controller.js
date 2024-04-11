const Book = require("../middlewares/models/book.model")

async function findAll(req, res) {
    try {
        const books = await Book.find()
        return res.json(books)
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "error - books not found"})
    }
}

async function insert(req, res) {
    try {
        const newBook = new Book({
            author: req.body.author,
            country: req.body.country,
            language: req.body.language,
            pages: req.body.pages,
            title: req.body.title,
            year: req.body.year,
            img: req.body.imageLink
        })

        await newBook.save()
        return res.json({msg: "book saved"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "error - book not saved"})
    }
}

async function deleteOne(req, res) {
    try {
        await Book.findByIdAndDelete(req.params.id)
        return res.json({msg: "book removed"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: "error - book not deleted"})
    }
}

module.exports = {
    findAll,
    insert,
    deleteOne,
}