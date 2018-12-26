const Firebird = require("node-firebird");
const connection = require("../../config/dbMedilab");

const consulta = (req, res) => {
  var retorno = function() {
    let conn;
    switch (req.query.unidade) {
      case "ba":
        conn = connection.connBa;
        break;
      case "tij":
        conn = connection.connTij;
        break;
      case "copa":
        conn = connection.connCopa;
        break;
      case "cx":
        conn = connection.connCx;
        break;
      case "ni":
        conn = connection.connNi;
        break;
      case "mad":
        conn = connection.connMad;
        break;
      case "cg":
        conn = connection.connCG;
        break;
      case "sg":
        conn = connection.connSG;
      default:
        break;
    }

    return new Promise(function(resolve, reject) {
      const sql =
        " SELECT first 200 r.NUMERO_EXAME, (r.NOME) as paciente, r.DATA_EXAME,r.MODALIDADE_EXAME, " +
        "TIPO_EXAME, (PATIENTID) as id, SEXO, DATA_NASC,ACCESSION, (h.LOCAL)as storage,r.NUMERO_CD,r.PASTA " +
        "FROM CD r " +
        "join hds h on h.NOME=r.NUMERO_CD where r.nome like ?";
      Firebird.attach(conn, (erro, db) => {
        if (erro) {
          reject(erro);
        }
        db.query(sql, [req.query.name + "%"], (erro, result) => {
          if (erro) {
            reject(erro);
          }
          db.detach();
          let paciente = [];
          result.map(n => {
            paciente.push({
              numero_exame:
                String(n.numero_exame) === "undefined"
                  ? ""
                  : String(n.numero_exame),
              nome:
                String(n.paciente) === "undefined" ? "" : String(n.paciente),
              data:
                String(n.data_exame) === "undefined"
                  ? ""
                  : String(n.data_exame),
              modalidade:
                String(n.modalidade_exame) === "undefined"
                  ? ""
                  : String(n.modalidade_exame),
              tipo_exame:
                String(n.tipo_exame) === "undefined"
                  ? ""
                  : String(n.tipo_exame),
              id: String(n.id) === "undefined" ? "" : String(n.id),
              sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
              data_nasc:
                String(n.data_nasc) === "undefined" ? "" : String(n.data_nasc),
              accession:
                String(n.accession) === "undefined" ? "" : String(n.accession),
              storage:
                String(n.storage) === "undefined" ? "" : String(n.storage),
              numero_cd:
                String(n.numero_cd) === "undefined" ? "" : String(n.numero_cd),
              pasta: String(n.pasta) === "undefined" ? "" : String(n.pasta)
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
    switch (req.query.unidade) {
      case "ba":
        conn = connection.connBa;
        break;
      case "tij":
        conn = connection.connTij;
        break;
      case "copa":
        conn = connection.connCopa;
        break;
      case "cx":
        conn = connection.connCx;
        break;
      case "ni":
        conn = connection.connNi;
        break;
      case "mad":
        conn = connection.connMad;
        break;
      case "cg":
        conn = connection.connCG;
        break;
      case "sg":
        conn = connection.connSG;
      default:
        break;
    }

    return new Promise(function(resolve, reject) {
      const sql =
        " SELECT first 200 r.NUMERO_EXAME, (r.NOME) as paciente, r.DATA_EXAME,r.MODALIDADE_EXAME, " +
        "TIPO_EXAME, (PATIENTID) as id, SEXO, DATA_NASC,ACCESSION, (h.LOCAL)as storage,r.NUMERO_CD,r.PASTA " +
        "FROM CD r " +
        "join hds h on h.NOME=r.NUMERO_CD where r.NUMERO_EXAME = ?";
      Firebird.attach(conn, (erro, db) => {
        if (erro) {
          reject(erro);
        }
        db.query(sql, [req.query.name], (erro, result) => {
          if (erro) {
            reject(erro);
          }
          db.detach();
          let paciente = [];
          result.map(n => {
            paciente.push({
              numero_exame:
                String(n.numero_exame) === "undefined"
                  ? ""
                  : String(n.numero_exame),
              nome:
                String(n.paciente) === "undefined" ? "" : String(n.paciente),
              data:
                String(n.data_exame) === "undefined"
                  ? ""
                  : String(n.data_exame),
              modalidade:
                String(n.modalidade_exame) === "undefined"
                  ? ""
                  : String(n.modalidade_exame),
              tipo_exame:
                String(n.tipo_exame) === "undefined"
                  ? ""
                  : String(n.tipo_exame),
              id: String(n.id) === "undefined" ? "" : String(n.id),
              sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
              data_nasc:
                String(n.data_nasc) === "undefined" ? "" : String(n.data_nasc),
              accession:
                String(n.accession) === "undefined" ? "" : String(n.accession),
              storage:
                String(n.storage) === "undefined" ? "" : String(n.storage),
              numero_cd:
                String(n.numero_cd) === "undefined" ? "" : String(n.numero_cd),
              pasta: String(n.pasta) === "undefined" ? "" : String(n.pasta)
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

const consultaNomePeriodo = (req, res) => {
  console.log(req.body);

  var retorno = function() {
    let conn;
    switch (req.body.unidade) {
      case "ba":
        conn = connection.connBa;
        break;
      case "tij":
        conn = connection.connTij;
        break;
      case "copa":
        conn = connection.connCopa;
        break;
      case "cx":
        conn = connection.connCx;
        break;
      case "ni":
        conn = connection.connNi;
        break;
      case "mad":
        conn = connection.connMad;
        break;
      case "cg":
        conn = connection.connCG;
        break;
      case "sg":
        conn = connection.connSG;
      default:
        break;
    }

    return new Promise(function(resolve, reject) {
      const sql =
        " SELECT first 200 r.NUMERO_EXAME, (r.NOME) as paciente, r.DATA_EXAME,r.MODALIDADE_EXAME, " +
        "TIPO_EXAME, (PATIENTID) as id, SEXO, DATA_NASC,ACCESSION, (h.LOCAL)as storage,r.NUMERO_CD,r.PASTA " +
        "FROM CD r " +
        "join hds h on h.NOME=r.NUMERO_CD where r.nome like ? and r.data_exame >= ? and r.data_exame <= ?";
      Firebird.attach(conn, (erro, db) => {
        if (erro) {
          reject(erro);
        }
        db.query(
          sql,
          [`${req.body.paciente}%`, req.body.dataIN, req.body.dataOut],
          (erro, result) => {
            if (erro) {
              reject(erro);
            }
            db.detach();
            let paciente = [];
            result.map(n => {
              paciente.push({
                numero_exame:
                  String(n.numero_exame) === "undefined"
                    ? ""
                    : String(n.numero_exame),
                nome:
                  String(n.paciente) === "undefined" ? "" : String(n.paciente),
                data:
                  String(n.data_exame) === "undefined"
                    ? ""
                    : String(n.data_exame),
                modalidade:
                  String(n.modalidade_exame) === "undefined"
                    ? ""
                    : String(n.modalidade_exame),
                tipo_exame:
                  String(n.tipo_exame) === "undefined"
                    ? ""
                    : String(n.tipo_exame),
                id: String(n.id) === "undefined" ? "" : String(n.id),
                sexo: String(n.sexo) === "undefined" ? "" : String(n.sexo),
                data_nasc:
                  String(n.data_nasc) === "undefined"
                    ? ""
                    : String(n.data_nasc),
                accession:
                  String(n.accession) === "undefined"
                    ? ""
                    : String(n.accession),
                storage:
                  String(n.storage) === "undefined" ? "" : String(n.storage),
                numero_cd:
                  String(n.numero_cd) === "undefined"
                    ? ""
                    : String(n.numero_cd),
                pasta: String(n.pasta) === "undefined" ? "" : String(n.pasta)
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
  consultaNomePeriodo
};
