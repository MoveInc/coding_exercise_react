module.exports = {
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  collectCoverageFrom: ['src/lib/**/*.{js,jsx}', '!src/lib/**/index.{js,jsx}'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
