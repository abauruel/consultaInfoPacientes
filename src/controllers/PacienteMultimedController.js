const oracledb = require('oracledb')
const DbConfig = require('../config/dbconfig')

module.exports = {
    async consulta(req, res){
        const result = await oracledb.getConnection({
            user: DbConfig.user,
            password: DbConfig.password,
            connectString: DbConfig.connectString
        }).then(function(connection){
            return connection.execute(
                `select pac.nome, atnd.nrexame, atnd.fk_dthrinicioatnd, ex.descricao   from pacientes pac
                    inner join atendimentosexames atnd on atnd.fk_paciente=pac.id_paciente
                    inner join examesdetalhes ex on ex.id_exame=atnd.fk_exame
                where pac.nome like :nome`,[req.query.name+"%"],{maxRows: 200}
            ).then(function(result){
                connection.close()
                return result.rows

                
            }).catch(function(err){
                console.log(err.message)
                return connection.close()
            })
        })
        console.log(result)
        return res.json(result)
    }
}
