const config = {
  verbose: true,
  transform: {
    '^.+\\.js?$': require.resolve('babel-jest'),
  },
};

module.exports = config;
