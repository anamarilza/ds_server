// var db=require('../dbconnection'); //reference of dbconnection.js
// var Request={
//     getAllRequests:function(callback){
//         return db.query("Select * from Solicitacao",callback);
//     },
//     getRequestById:function(id,callback){
//         return db.query("select * from Solicitacao where id_solicitacao=?",[id],callback);
//     },
//     addRequest:function(Task,callback){ ///COLOCAR PDF
//         return db.query("Insert into Solicitacao (matricula, id_atividade, data_solic, status, horas_info) values(?,?,?,?,?)",
//         [request.matricula, request.id_atividade, request.id_correcao],callback);
//     },
//     deleteRequest:function(id,callback){
//         return db.query("delete from Solicitacao where id_solicitacao=?",[id],callback);
//     }
// };
//  module.exports=Request;
