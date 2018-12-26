module.exports = {
    user: process.env.NODE_ORACLEDB_USER || "dba_clinica",
    password : process.env.NODE_ORACLEDB_PASSWORD || "oscet2010",
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "srv-orcl01/multimed"

}
