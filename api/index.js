const serverless = require('serverless-http');
const app = require('../server/server'); // importing your express app

module.exports = serverless(app);
