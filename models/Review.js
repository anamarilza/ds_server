var db=require('../dbconnection'); //reference of dbconnection.js
var Review={
    addNewReview:function(Review, callback){
      return db.query("Insert into Correcao (data_correcao, siape_admin, resp_correcao, horas_aceitas, status, id_solicitacao) "+
      "values(NOW(), ?, ?, ?, ?, ?)",
      [Review.siape_admin, Review.resp_correcao, Review.horas_aceitas,
        Review.status, Review.id_solicitacao], callback);
    },
    updateRequest:function(id_solicitacao, callback){
      return db.query("update Solicitacao set id_correcao = (select (id_correcao) from Correcao as C "+
      "where C.id_solicitacao = ?) where id_solicitacao = ?;", [id_solicitacao, id_solicitacao]
        ,callback);
    }
};

 module.exports=Review;
