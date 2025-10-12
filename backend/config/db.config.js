module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "contraseña-super-secreta",
  DB: "db_neuro",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}