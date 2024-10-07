const PORT = 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer"); // Assuming you'll use multer later
const jwt = require("jsonwebtoken");
const path = require("path"); // Assuming you'll use path later
const { type } = require("os");
const { timeStamp } = require("console");
// const secret_ecom="1234$5"
// Middleware to parse JSON data sent in the request body
app.use(express.json({ extented: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "x-accept",'auth-token'],
  })
);

// Initialize MongoDB Database
// "mongodb+srv://aqsaimran341:Aqsaimran341%23%25@cluster0.xypq1.mongodb.net/"
// mongodb://127.0.0.1:27017/E-Commerce
mongoose
  .connect("mongodb://127.0.0.1:27017/E-Commerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  availale: {
    type: Boolean,
    default: true,
  },
});
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
const userModel = mongoose.model("User", userSchema);

const productModel = mongoose.model("Product", productSchema);

// CREATING END POINT FOR SIGNUP
app.post("/signup", async (req, res) => {
  const check = await userModel.findOne({ email: req.body.email });
  if (check)
    return res
      .status(400)
      .json({ success: false, error: "Exiting other user with same Email ID" });
  let cart = {};
  for (let index = 0; index < 300; index++) cart[index] = 0;
  const newUser = await userModel.create({
    email: req.body.email,
    name: req.body.name,
    date: req.body.date,
    password: req.body.password,
    cartData: cart,
  });

  const data = {
    user: {
      id: newUser.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});
// CREATING END POINT FOR LOGIN

app.post("/login", async (req, res) => {
  const userdata = await userModel.findOne({ email: req.body.email });
  console.log(userdata)
  if(!userdata){
   return   res.status(400).json({ success:false,error:"incorrect Email" });
  }
 
    const comparePassword = userdata.password === req.body.password;
   if(comparePassword){
    const data = {
        userdata: {
          id: userdata.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
   res.status(200).json({ success: true, token });
   }
   else {return res.json({ success: false, error:"Wrong password " });}


});

// API CREATION
app.listen(PORT, (error) => {
  if (!error) console.log(`Server is running at: ${PORT}`);
  else console.log(`Server is running at: ${error}`);
});

app.get("/", (req, res) => {
  res.send("Express App is running");
});
// Image Storage Engine
const storageData = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storageData });

//CREATING UPLOAD ENDPOINT FOR IMAGES
app.use("/images", express.static("upload/images"));

// FOR UPLOADING IMAGES
app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: 0, message: "No file uploaded" });
  }
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});
// API FOR ADDING PRODUCTS
app.post("/addproduct", async (req, res) => {
  const body = req.body;
  let AllProducts = await productModel.find({});

  const result = await productModel.create({
    id: AllProducts.length ? AllProducts.length + 1 : 1,
    name: body.name,
    category: body.category,
    old_price: body.old_price,
    new_price: body.new_price,
    image: body.image,
  });
  result.save();
  console.log(result);
  return res.json({ Success: 1, name: body.name });
});
// API FOR DELETING PRODUCT
app.delete("/removeproduct/:id", async (req, res) => {
  if (!(await productModel.findOneAndDelete(req.id)))
    res.status(404).json({ status: "Deleted Failed", name: req.body.name });

  res.json({ status: "Deleted Successfully", success: 1, name: req.body.name });
});

// POPULAR IN WOMEN CATEGORY PRODUCTS
app.get("/popular_in_Women",async(req,res)=>{
  const Products = await productModel.find({category:"women"});
 const popularInWomen=Products.slice(0,4);
  if(!Products)
  res.status(400).json({success:false,category:req.body.category})
return res.status(200).json(popularInWomen)
})
// TO GET NEW COLLECTIONS
app.get('/newcollection',async(req,res)=>{
  const Products = await productModel.find({});
  // TO GET LAST NEW 8 PRODUCTS 
 const popularInWomen=Products.slice(1).slice(-8);
  if(!Products)
  res.status(400).json({success:false,category:req.body.category})
return res.status(200).json(popularInWomen)
})
// CREATE MIDDLEWARE FOR CART_ITEMS
// app.use()
app.post('/addToCart',async(req,res)=>{
  console.log(res.body)
  res.send("Success")
})
// TO GET ALL PRODUCTS
app.get("/allproducts", async (req, res) => {
  const Products = await productModel.find({});
  if (!Products)
    return res
      .status(404)
      .json({ success: false, message: "Not any product" });

  res.send(Products);
});
