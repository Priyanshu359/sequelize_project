import  express from 'express';
import {config} from 'dotenv';
import sequelize from './config/sequelize';
import productRoutes from './routes/productRoutes';

config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api", productRoutes);

// sequelize.syn({ force: false }).then(() => {
//     console.log("Database Synchronized");
// }).catch((err) => {
//     console.error("Database sync failed: ", err);
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

