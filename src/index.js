import express from "express";
import morgan from "morgan";

import { connectDb } from "./db.js";
import { authorModel, bookModel } from "./models/models.js";

const app = express();
const port = 3000;
const uri = 'mongodb://mimi:180406@localhost:27017/library?authSource=admin';

app.use(morgan('dev'));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/authors/find-all', async (req, res) => {
    try {
        const authors = await authorModel.aggregate([
            {
                $lookup: {
                    from: "books",
                    localField: "_id",
                    foreignField: "author",
                    as: "books"
                }
            }
        ]);
        return res.json({ authors });
    } catch(ex) {
        console.log('Exception', ex);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/books/find-all', async (req, res) => {
    try {
        const books = await bookModel.find();
        return res.json({ books });
    } catch(ex) {
        console.log('Exception', ex);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.post('/authors/create', async (req, res) => {
    try {
        const name = req.body?.name;
        const age = req.body?.age;

        if (!name || !age) {
            return res.status(400).json({ message: 'Bad request, missing name or age' });
        }

        const author = new authorModel({
            name,
            age
        });

        const save = await author.save();
        return res.status(201).json({ author: save })
    } catch(ex) {
        console.log('Exception', ex);
        return res.status(500).json({ message: 'Internal Server Error', error: ex });
    }
});

app.post('/books/create', async (req, res) => {
    try {
        const isbn = req.body?.isbn;
        const name = req.body?.name;
        const cantPages = req.body?.cantPages;
        const author = req.body?.author;

        if (!isbn || !name || !cantPages || !author) {
            return res.status(400).json({ message: 'Bad request, isbn, missing name, cantPages or author' });
        }

        const book = new bookModel({
            isbn,
            name,
            cantPages,
            author
        });

        const save = await book.save();
        return res.status(201).json({ book: save });
    } catch(ex) {
        console.log('Exception', ex);
        return res.status(500).json({ message: 'Internal Server Error', error: ex });
    }
});

connectDb(uri)
.then(() => {
app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
});
})