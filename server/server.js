const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI in .env file');
    process.exit(1);
}

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
