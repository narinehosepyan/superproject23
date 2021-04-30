const express=require("express");
const random=require("random");

const app=express();

app.use(express.static(`public`));

app.set(`view engine`,`ejs`);
app.use(express.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.render(`index`)
});

app.get("/info",function(req,res){
data={
    name:'Narine', 
    email:'hosepyannarine@gmail.com',
    languages:['c++','javascript', 'php']
}
res.render(`info`,{data:data});

});

app.get("/random",function(req,res){
    let rand="";
    if(req.query.max && req.query.min){
        rand=random.int(+req.query.min,+req.query.max)
    }
    res.render(`random`,{rand:rand})

});

app.get("/contact",function(req,res){
    res.render(`contact`)
})

app.post("/contact",function(req,res){
    let info=req.body;
    console.log(info);
    res.render(`contact-success`,{info})
})

app.listen(3000);