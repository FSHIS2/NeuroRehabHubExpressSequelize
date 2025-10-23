module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1912@Abacoinf",
  DB: "db_neuro",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}