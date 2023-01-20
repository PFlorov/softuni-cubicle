const config = {
  production: {
    PORT: 1234,
  },
  development: {
    PORT: 5001,
  },
};
module.exports = config[process.env.node_env || "development"];
