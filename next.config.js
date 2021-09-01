//const { NODE_ENV, APP_NAME } = process.env;
const { NODE_ENV, APP_NAME, HOTPEPPER_API_KEY } = process.env;

const nextConfig = {
  publicRuntimeConfig: {
    env: NODE_ENV,
    APP_NAME,
    HOTPEPPER_API_KEY,
  },
};

module.exports = nextConfig;
