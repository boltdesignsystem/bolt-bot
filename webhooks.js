const { getBody } = require('./utils');
// const { WEBHOOK_SECRET } = process.env;

async function handle(req, res) {
  const { headers } = req;
  const { 'x-github-event': event } = headers;

  const body = await getBody(req).catch(console.log.bind(console));

  const { action } = body;
  console.log(`event: ${event}, action: ${action}`);
  res.end();
}

module.exports = handle;
