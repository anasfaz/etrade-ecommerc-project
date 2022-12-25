const mongoClient=require('mongodb').MongoClient
const state={
    db:null
}

module.exports.connect=(done)=>{
    const url='mongodb+srv://anas:anas1122001@cluster0.08zmpwh.mongodb.net/?retryWrites=true&w=majority'
    const dbname='ecommerce'
     
    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })

    
}

module.exports.get=function(){
    return state.db
}