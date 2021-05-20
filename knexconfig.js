// knexconfig.js tells knex how should it connect to MySQL
// depending on which environment we're running out app in.

module.exports = {
  dev: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "password",
      database: "taltechdb",
    },
  },
  docker: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
  },
};
