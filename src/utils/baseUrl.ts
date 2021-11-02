const ENV = {
  prod: {
    API_URL: "http://survey.kadence.co.id:9999/",
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
