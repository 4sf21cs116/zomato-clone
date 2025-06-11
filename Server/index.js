const express = require('express');
const cors = require('cors');
const connectDB = require('./Db');
const userRoutes = require('./Routes/UserRoutes');
const loginRoutes = require('./Routes/Login');
const Restuarant=require('./Routes/RestuarantRoutes');
const  Orders=require('./Routes/OrderRoutes');

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); 

app.use('/api/users', userRoutes); 
app.use('/api/login', loginRoutes);
app.use('/api/restaurants',Restuarant);
app.use('/api/orders',Orders);


app.listen(5000, () => console.log('Server started on port 5000'));
