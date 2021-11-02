const ENV = {
  prod: {
    API_URL: "http://localhost:3333/",
  },
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") {
    return ENV.prod;
  }
  if (env.indexOf("prod") !== -1) {
    return ENV.prod;
  }
}

export default getEnvVars("prod");
