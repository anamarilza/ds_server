var db=require('../dbconnection'); //reference of dbconnection.js
var Request={
    //STUDENT
    //GETS
    getAllStudentRequests:function(matricula, callback){
      return db.query("Select * from Solicitacao, Aluno where Aluno.matricula = ?"+
      "and Aluno.matricula = Solicitacao.matricula", matricula, callback);
    },
    //POSTS
    addNewRequest:function(Request, pdf_id,callback){
      // console.log("Req %s", Request.matricula);
      // console.log("Req %s", Request.id_atividade);
      // console.log("Req %s", Request.data_solic);
      // console.log("Req %s", Request.horas_info);

      return db.query("Insert into Solicitacao (matricula, id_atividade, data_solic, horas_info, pdf) "+
      "values(?,?, NOW(),?, ?)",
      [Request.matricula, Request.id_atividade, Request.horas_info, pdf_id],callback);
    }

    // ADMIN
    // getAllRequests:function(callback){
    //     return db.query("Select * from Solicitacao",callback);
    // },
    // getAllSolvedRequests:function(callback){
    //     return db.query("Select * from Solicitacao where id_correcao is not null",callback);
    // },
    // getAllUnsolvedRequests:function(callback){
    //     return db.query("Select * from Solicitacao where id_correcao is null",callback);
    // },
    // getAllRequests:function(callback){
    //     return db.query("Select * from Solicitacao, Correcao, Status where Solicitacao.id_correcao = Correcao.id_correcao and Status.id_status = Correcao.id_status",callback);
    // },
    // getAllRequestsFromStudent:function(matricula, callback){
    //     return db.query("Select * from Solicitacao where matricula=?", matricula);
    // },
    // getRequestById:function(id,callback){
    //     return db.query("Select * from Solicitacao where id_solicitacao=?",[id],callback);
    // }
};
 module.exports=Request;
