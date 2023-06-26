import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//mongo connect
mongoose.connect('mongodb+srv://mohitzaveri06:Liverpoolisbest@login.dzkkrdn.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});


//Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


//Model
const User = new mongoose.model("User", userSchema)


//Routes
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            if (password === user.password) {
                res.send({message: "Login Successful", user: user});
            } else {
                res.send({message: "Password didn't match"});
            }
        } else {
            res.send({message: "User not registered"});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

//Routes
app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email });

        if (user) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({ name, email, password });
            await newUser.save();
            res.send({ message: "Successfully Registered, Please login now." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});


//Port
app.listen(9002,() => {
    console.log("BE started at port 9002")
})