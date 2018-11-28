var db=require('../dbconnection'); //reference of dbconnection.js
var Question={
    getAllQuestionsFromCurriculum:function(id_curriculo, callback){
        return db.query("Select Duvida.perg_duv, Duvida.resp_duv from Duvida, Curriculo"
        +" where Duvida.id_curriculo = Curriculo.id_curriculo and Duvida.id_curriculo = ?",
        [id_curriculo], callback);
    },
    getQuestionById:function(id_perg, callback){
        return db.query("Select perg_duv, resp_duv from Duvida where id_perg=?",[id_perg], callback);
    },
    addNewQuestion:function(Question, callback){
      return db.query("Insert into Duvida (id_curriculo, perg_duv, resp_duv) "+
      "values(?, ?, ?)",
      [Question.id_curriculo, Question.perg_duv, Question.resp_duv], callback);
    }
};
 module.exports=Question;
