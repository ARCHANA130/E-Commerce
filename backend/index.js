const port=4000;
const express=require('express');
const app= express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const multer=require('multer');
const path=require('path');
const cors=require('cors');
const { type } = require('os');

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017');

app.get("/", (req, res)=>{
    res.send("Express app is running")
})
//image storage
const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage})
app.use('/images', express.static('upload/images'))
//endpoint
app.post("/upload", upload.single('product'), (req, res)=>{
    res.json({
        success:1,
        img_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

const Product=mongoose.model('Product',{
    id:{
        type:Number,
        required:true
    }, name:{
        type:String,
        required:true
    },image:{
        type:String,
        required:true
    },category:{
        type:String,
        required:true
    },new_price:{
        type:Number,
        required:true
    }, old_price:{
        type:Number,
        required:true
    }, date:{
        type:Date,
        default:Date.now
    },availabele:{
        type:Boolean,
        default:true
    }
})

app.post('/addproduct',async (req, res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product)
    await product.save();
    console.log("save")
    res.json({
        success:true,
        name:req.body.name
    })
})

//for deleting
app.post('/removeproduct',async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name
    })
})
//api for getting all products
app.get('/allproducts', async (req,res) => {
    let products=await Product.find({});
    console.log("All products fetched");
    res.send(products);
})
//schema for user model
const Users=mongoose.model('Users',{
    name:{
        type:String,
     
    },
    email:{
        type:String,
      
    
    },
    password:{
        type:String,
     
    },
    cartData:{
        type:Object
    },
    date:{
        type:Date,
        default:Date.now
    }

})

//api for signup
app.post('/signup', async(req, res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({
            success:false,
            message:"Email already exists"
        })
    }
    let cart={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;      
    }
    const newUser=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })
    await newUser.save();
    const data={
        newUser:{
            id:newUser.id
        }
    }
    const token=jwt.sign(data, "secretkey");
    res.json({
        success:true,
        token
    })
})

app.get('/newcollections', async(req, res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-4);
    console.log('New collection fetched')
    res.send(newcollection);
})

app.get('/popular', async(req, res)=>{
    let products=await Product.find({category:"women"});
    let popular=products.slice(0,4)
    console.log('Popular fetched')
    res.send(popular);

})

app.post('/login', async(req, res)=>{
    let user=await Users.findOne({email:req.body.email})
    if(user){
        const pass_compare=req.body.password===user.password;
        if(pass_compare){
            const  data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data, "secretkey");
            res.json({success:true, token})
        }else{
            res.json({success:false, error:"Wrong password"})
        }
    }else{
        res.json({success:false, error:"Wrong emailId"})
    }
})

//middleware
const fethuser=async (req, res, next)=>{
    const token=req.header('auth-token');
    if(token){
        const data=jwt.verify(token, "secretkey");
        if(data){
            req.user=data.user;
            next();
        }else{
            res.status(401).json({success:false, message:"Invalid token"})
        }
    }else{
        res.status(401).json({success:false, message:"No token provided"})
    }
}

app.post('/addtocart',fethuser,async(req, res)=>{
   let usedata=await Users.findOne({_id:req.user.id})
   usedata.cartData[req.body.Itemid]+=1;
   await Users.findOneAndUpdate({_id:req.user.id},{cartData:usedata.cartData});
   res.send("Added")

})

app.post('/removefromcart',fethuser,async(req, res)=>{
    let usedata=await Users.findOne({_id:req.user.id})
    usedata.cartData[req.body.Itemid]-=1;
    if(usedata.cartData[req.body.Itemid]>0){
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:usedata.cartData});
        res.send("Removed")
    }
   
})

app.post('/getcart',fethuser,async(req, res)=>{
    let usedata=await Users.findOne({_id:req.user.id})
    console.log('get cart')
    res.json(usedata.cartData)
})

app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on port " + port);
    }else{
        console.log("Error"+error);
    }
});