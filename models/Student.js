var db=require('../dbconnection'); //reference of dbconnection.js
var Student={
    getAllStudentsFromCourse:function(nome_curso, callback){
        return db.query("select A.matricula, A.nome_aluno, C.nome_curso, CU.nome_curriculo"+
        " from Aluno as A, Curso as C, Curriculo as CU "+
        "where A.id_curriculo = CU.id_curriculo and CU.id_curso = C.id_curso and C.nome_curso = ?",
        [nome_curso], callback);
    },
    getAllStudentsFromCourseId:function(id_curso, callback){
        return db.query("select A.matricula, A.nome_aluno, C.nome_curso, CU.nome_curriculo"+
        " from Aluno as A, Curso as C, Curriculo as CU "+
        "where A.id_curriculo = CU.id_curriculo and CU.id_curso = C.id_curso and C.id_curso = ?",
        [id_curso], callback);
    },
    getStudentByMatricula:function(matricula, callback){
        return db.query("select A.matricula, A.cpf_aluno, A.nome_aluno, C.nome_curso, CU.nome_curriculo"+
        " from Aluno as A, Curso as C, Curriculo as CU "+
        "where A.id_curriculo = CU.id_curriculo and CU.id_curso = C.id_curso and A.matricula = ?",[matricula], callback);
    },
    getStudentByCpf:function(cpf_aluno, callback){
        return db.query("select A.matricula, A.cpf_aluno, A.nome_aluno, C.nome_curso, CU.nome_curriculo"+
        " from Aluno as A, Curso as C, Curriculo as CU "+
        "where A.id_curriculo = CU.id_curriculo and CU.id_curso = C.id_curso and A.cpf_aluno = ?",[cpf_aluno], callback);
    },
    addNewStudent:function(Student, callback){
      return db.query("Insert into Aluno (matricula, nome_aluno, email, senha_aluno, cpf_aluno, id_curriculo) "+
      "values(?, ?, ?, ?, ?, ?)",
      [Student.matricula, Student.nome_aluno, Student.email, Student.senha_aluno, Student.cpf_aluno, Student.id_curriculo], callback);
    },
    // addListOfStudents:function(Students, callback){
    //
    // }
};
 module.exports=Student;
