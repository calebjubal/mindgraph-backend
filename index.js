const dbConnect = require('./config/dbConnect');

dbConnect();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});