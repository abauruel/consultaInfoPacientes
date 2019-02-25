const Firebird = require("node-firebird");
const connection = require("../../config/dbMedilab");

const consulta = (req, res) => {
  var retorno = function() {
    let conn;
    conn =
      req.query.unidade === "ba"
        ? connection.connBa
        : req.query.unidade === "copa"
        ? connection.connCopa
        : req.query.unidade === "tij"
        ? connection.connTij
        : req.query.unidade === "cg"
        ? connection.connCG
        : req.query.unidade === "cx"
        ? connection.connCx
        : req.query.unidade === "mad"
        ? connection.connMad
        : req.query.unidade === "ni"
        ? connection.connNi
        : req.query.unidade === "sg"
        ? connection.connSG
        : null;
    return new Promise(function(resolve, reject) {
      const sql =
        "Select first 200 NUMERO, NOME, DATA, " +
        "MODALIDADE, TIPO_EXAME, DIRETORIO, PATIENTID, SEXO, DATA_NASC," +
        "ACCESSION, STUDYUID FROM EXAMES WHERE NOME like ?";
      Firebird.attach(conn, (err, db) => {
        if (err) {
          reject(err);
        }
        db.query(sql, [req.query.name + "%"], (err, result) => {
          if (err) {
            reject(err);
          }
          db.detach();
          let paciente = [];

          result.map(n => {
            paciente.push({
              numero: String(n.numero) === "undefined" ? "" : String(n.numero),
              nome: n.nome.toString(),
              data: String(n.data) === "undefined" ? "" : String(n.data),
              modalidade:
                String(n.modalidade) === "undefined"
                  ? ""
                  : String(n.modalidade),
              tipo_exame:
                String(n.tipo_exame) === "undefined"
                  ? ""
                  : String(n.tipo_exame),
              diretorio:
                String(n.diretorio) === "undefined" ? "" : String(n.diretorio),
              patientid:
                String(n.patientid) === "undefined" ? "" : String(n.patientid),
              sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
              data_nasc:
                String(n.data_nasc) === "undefined" ? "" : String(n.data_nasc),
              acession:
                String(n.acession) === "undefined" ? "" : String(n.acession),
              studyuid:
                String(n.studyuid) === "undefined" ? "" : String(n.studyuid)
            });
          });
          resolve(paciente);
        });
      });
    });
  };

  retorno().then(function(result) {
    res.json(result);
  });
};

const consultaAN = (req, res) => {
  var retorno = function() {
    let conn;
    conn =
      req.query.unidade === "ba"
        ? connection.connBa
        : req.query.unidade === "copa"
        ? connection.connCopa
        : req.query.unidade === "tij"
        ? connection.connTij
        : req.query.unidade === "cg"
        ? connection.connCG
        : req.query.unidade === "cx"
        ? connection.connCx
        : req.query.unidade === "mad"
        ? connection.connMad
        : req.query.unidade === "ni"
        ? connection.connNi
        : req.query.unidade === "sg"
        ? connection.connSG
        : null;
    return new Promise(function(resolve, reject) {
      const sql =
        "Select first 200 NUMERO, NOME, DATA, " +
        "MODALIDADE, TIPO_EXAME, DIRETORIO, PATIENTID, SEXO, DATA_NASC," +
        "ACCESSION, STUDYUID FROM EXAMES WHERE NUMERO = ?";
      Firebird.attach(conn, (err, db) => {
        if (err) {
          reject(err);
        }
        db.query(sql, [req.query.name + "%"], (err, result) => {
          if (err) {
            reject(err);
          }
          db.detach();
          let paciente = [];

          result.map(n => {
            paciente.push({
              numero: String(n.numero) === "undefined" ? "" : String(n.numero),
              nome: n.nome.toString(),
              data: String(n.data) === "undefined" ? "" : String(n.data),
              modalidade:
                String(n.modalidade) === "undefined"
                  ? ""
                  : String(n.modalidade),
              tipo_exame:
                String(n.tipo_exame) === "undefined"
                  ? ""
                  : String(n.tipo_exame),
              diretorio:
                String(n.diretorio) === "undefined" ? "" : String(n.diretorio),
              patientid:
                String(n.patientid) === "undefined" ? "" : String(n.patientid),
              sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
              data_nasc:
                String(n.data_nasc) === "undefined" ? "" : String(n.data_nasc),
              acession:
                String(n.acession) === "undefined" ? "" : String(n.acession),
              studyuid:
                String(n.studyuid) === "undefined" ? "" : String(n.studyuid)
            });
          });
          resolve(paciente);
        });
      });
    });
  };

  retorno().then(function(result) {
    res.json(result);
  });
};

const consultaExamesPeriodo = (req, res) => {
  var retorno = function() {
    let conn;
    conn =
      req.body.unidade === "ba"
        ? connection.connBa
        : req.body.unidade === "copa"
        ? connection.connCopa
        : req.body.unidade === "tij"
        ? connection.connTij
        : req.body.unidade === "cg"
        ? connection.connCG
        : req.body.unidade === "cx"
        ? connection.connCx
        : req.body.unidade === "mad"
        ? connection.connMad
        : req.body.unidade === "ni"
        ? connection.connNi
        : req.body.unidade === "sg"
        ? connection.connSG
        : null;
    return new Promise(function(resolve, reject) {
      const sql =
        "Select first 200 NUMERO, NOME, DATA, " +
        "MODALIDADE, TIPO_EXAME, DIRETORIO, PATIENTID, SEXO, DATA_NASC," +
        "ACCESSION, STUDYUID FROM EXAMES WHERE NOME like ? and DATA >= ? and DATA <= ?";
      Firebird.attach(conn, (err, db) => {
        if (err) {
          reject(err);
        }
        db.query(
          sql,
          [
            `${req.body.paciente.toUpperCase()}%`,
            req.body.dataIN.replace("/", ".").replace("/", "."),
            req.body.dataOut.replace("/", ".").replace("/", ".")
          ],
          (err, result) => {
            if (err) {
              reject(err);
            }
            db.detach();
            let paciente = [];

            result.map(n => {
              paciente.push({
                numero:
                  String(n.numero) === "undefined" ? "" : String(n.numero),
                nome: n.nome.toString(),
                data: String(n.data) === "undefined" ? "" : String(n.data),
                modalidade:
                  String(n.modalidade) === "undefined"
                    ? ""
                    : String(n.modalidade),
                tipo_exame:
                  String(n.tipo_exame) === "undefined"
                    ? ""
                    : String(n.tipo_exame),
                diretorio:
                  String(n.diretorio) === "undefined"
                    ? ""
                    : String(n.diretorio),
                patientid:
                  String(n.patientid) === "undefined"
                    ? ""
                    : String(n.patientid),
                sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
                data_nasc:
                  String(n.data_nasc) === "undefined"
                    ? ""
                    : String(n.data_nasc),
                acession:
                  String(n.acession) === "undefined" ? "" : String(n.acession),
                studyuid:
                  String(n.studyuid) === "undefined" ? "" : String(n.studyuid)
              });
            });
            resolve(paciente);
          }
        );
      });
    });
  };

  retorno().then(function(result) {
    res.json(result);
  });
};

module.exports = {
  consulta,
  consultaAN,
  consultaExamesPeriodo
};
