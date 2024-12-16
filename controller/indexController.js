
const db = require('../db/queries')



// ! get
exports.indexGet= async (req,res)=>{
    res.render('home',{cats: await db.getALLCats()});
}

exports.catSearchGet= async (req,res)=>{
    res.render('names',{names: await db.searchInCat(req.query.catid)});
}





// ! edit
exports.catEditPost= async (req,res)=>{
     console.log("post",req.body.cat,req.body.catid);
     await db.editCat(req.body.cat,req.body.catid);

     res.redirect('/');
}
exports.catEditGet= async (req,res)=>{
     console.log("category get :"+(req.query.catid));
     
     res.render('catForm',{catid:req.query.catid});    
}

exports.nameEditPost= async (req,res)=>{
     await db.editName(req.body.name,req.body.nameid);
     res.redirect('/');
}
exports.nameEditGet= async (req,res)=>{
     res.render('nameForm',{nameid:req.query.nameid});    
}





//! Delete


exports.catDeletePost= async (req,res)=>{
     await db.deleteFullCat(req.body.cat);
     res.redirect('/');
}
exports.catDeleteGet= async (req,res)=>{
     res.render('delFullCat',{names :await db.searchInCat(req.query.cat),cat:req.query.cat});    
}


exports.nameDeletePost= async (req,res)=>{
     await db.deleteName(req.body.name);
     res.redirect('/');
}



//!create 

exports.createCatPost= async (req,res)=>{
     await db.createCat(req.body.cat);
     res.redirect('/')
}
exports.createNamePost = async (req,res)=>{
     await db.createName(req.body.name,req.body.cat);
     res.redirect(`/cat?catid=${req.body.cat}`);
}








