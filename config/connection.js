const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// main().catch((err) => console.log(err));

// async function main() {
//     await mongoose.connect('')
//     console.lof("MongoDB is connected")
// }

mongoose
.connect(process.env.DB_URL)
.then(() => console.log("Mongodb is connected"))
.catch((err) => console.log(err));




