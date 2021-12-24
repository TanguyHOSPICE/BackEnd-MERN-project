// **** ETAPE-14 puis 16
const mongoose = require("mongoose");

mongoose
    .connect('mongodb+srv://hospice:Stumpy971@cluster0.ocxwj.mongodb.net/mern-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    )
    .then({} => console.log('Connected to MongoDB'))
    .catch({} => console.log('Failed to connect to MongoDB', err))
