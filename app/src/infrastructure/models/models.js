import mongoose from 'mongoose';

import { authorSchema, bookSchema } from  "../schemas/schemas.js";

const authorModel = mongoose.model('Author', authorSchema);
const bookModel = mongoose.model('Book', bookSchema);

export { authorModel, bookModel };