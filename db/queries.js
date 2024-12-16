const { name } = require('ejs');
const pool = require('./pool');

exports.getALLNames= async ()=>{
    const {rows} = await  pool.query('SELECT DISTINCT name FROM names');
    return rows ;
}
exports.getALLCats= async ()=>{ 
    const {rows} = await  pool.query('SELECT cat, MIN(id) as id FROM cate GROUP BY cat');
    return rows ;
}


// ! Search in category
exports.searchInCat= async (q)=>{
    const {rows} = await  pool.query('SELECT * FROM cate JOIN names ON cate.name_id = names.id WHERE cate.cat LIKE $1',[q]);
    return rows ;
}


// ! edits
exports.editCat= async (q,id)=>{
    
     await  pool.query('UPDATE cate SET cat=$1 WHERE id= $2',[q,id]);
}
exports.editName= async (q,id)=>{

     await  pool.query('UPDATE names SET name=$1 WHERE id= $2',[q,id]);
}

//!  delete 
exports.deleteFullCat= async (cat)=>{
    await  pool.query('DELETE FROM cate  WHERE cat=$1',[cat]);
}
exports.deleteName= async (name)=>{
    
    await  pool.query('DELETE FROM names  WHERE name=$1',[name]);
}



// ! create 

exports.createCat=async (cat)=>{
    pool.query('INSERT INTO cate (name_id,cat)  VALUES ($1,$2)',[0,cat]);
}

exports.createName=async(name,cat)=>{
    pool.query('INSERT INTO names (name) VALUES ($1)',[name]);
    const {rows} =  await pool.query('SELECT MAX(id) FROM names');
    const nameid=rows[0].max;
    console.log(nameid);
    pool.query('INSERT INTO cate (name_id,cat) VALUES ($1,$2) ',[nameid,cat]);
}






