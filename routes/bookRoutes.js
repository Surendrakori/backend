import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//Route for save a new book
router.post("/", async (req,res) => {
    try{
        if(
            !req.body.title||
            !req.body.author||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title,author,publishYear",
            })
        }
        const newBook = {
            title: req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear,
        }
        const book = await Book.create(newBook);
        
        return res.status(201).send(book);


    }catch(err){
        console.log(err.message)
        res.status(500).send({ message: err.message})
    }
})
export default router;