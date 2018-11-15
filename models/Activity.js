var db=require('../dbconnection'); //reference of dbconnection.js
var Activity={
    getAllActivities:function(id_curriculo, callback){
        return db.query("Select * from Atividade where id_curriculo = ?",[id_curriculo],callback);
    },
    getActivityById:function(id_atividade, callback){
        return db.query("select * from Atividade where id_atividade=?",[id_atividade],callback);
    }
};
 module.exports=Activity;
