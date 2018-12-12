var db=require('../dbconnection'); //reference of dbconnection.js
var Request={
    //STUDENT
    //GETS
    getAllStudentRequests:function(matricula, callback){
      return db.query(" select AL.nome_aluno, S.id_solicitacao, S.data_solic, S.horas_info, S.pdf, S.inicio, S.fim, A.nome_atividade, C.status, C.data_correcao, C.horas_aceitas,"+
      " C.resp_correcao, CA.nome_categoria from Solicitacao as S, Atividade as A, Correcao as C, Categoria as CA , Aluno as AL "+
      "where S.id_atividade = A.id_atividade and S.id_correcao = C.id_correcao and S.matricula = ? and"+
      " CA.id_categoria = A.id_categoria and S.matricula = AL.matricula union select AL.nome_aluno, S.id_solicitacao, S.data_solic, S.horas_info, S.pdf, S.inicio, S.fim, "+
      "A.nome_atividade, null as status, null as data_correcao, null as horas_aceitas, "+
      "null as resp_correcao, CA.nome_categoria from  Aluno as AL, Solicitacao as S, Atividade as A, Categoria as CA where A.id_atividade = S.id_atividade"+
      " and S.id_correcao is null and S.matricula = ? and CA.id_categoria = A.id_categoria and AL.matricula = S.matricula", [matricula, matricula], callback);
    },

    getAllRequests:function(callback){
      return db.query(" select AL.nome_aluno, AL.matricula, S.id_solicitacao, S.data_solic, S.horas_info, S.pdf, S.inicio, S.fim,  A.nome_atividade, C.status, C.data_correcao, C.horas_aceitas,"+
      " C.resp_correcao, CA.nome_categoria from Aluno as AL, Solicitacao as S, Atividade as A, Correcao as C, Categoria as CA "+
      "where AL.matricula = S.matricula and S.id_atividade = A.id_atividade and S.id_correcao = C.id_correcao and"+
      " CA.id_categoria = A.id_categoria union select AL.nome_aluno, AL.matricula, S.id_solicitacao, S.data_solic, S.horas_info, S.pdf, S.inicio, S.fim, "+
      "A.nome_atividade, null as status, null as data_correcao, null as horas_aceitas, "+
      "null as resp_correcao, CA.nome_categoria from  Aluno as AL, Solicitacao as S, Atividade as A, Categoria as CA where  AL.matricula = S.matricula and A.id_atividade = S.id_atividade"+
      " and S.id_correcao is null and CA.id_categoria = A.id_categoria", null, callback);
    },
    //POSTS
    addNewRequest:function(Request, pdf_id,callback){
      // console.log("Req %s", Request.matricula);
      // console.log("Req %s", Request.id_atividade);
      // console.log("Req %s", Request.data_solic);
      // console.log("Req %s", Request.horas_info);

      return db.query("Insert into Solicitacao (matricula, id_atividade, data_solic, horas_info, pdf, inicio, fim) "+
      "values(?,?, NOW(),?, ?, ?, ?)",
      [Request.matricula, Request.id_atividade, Request.horas_info, pdf_id, Request.inicio, Request.fim],callback);
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
