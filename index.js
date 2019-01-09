// const { getBody } = require('./utils');

async function handle(req, res) {
  // const { headers } = req;
  // const body = await getBody(req).catch(console.log.bind(console));

  res.end({
    ok: true,
    message: 'Hello from Bolt Bot!',
  });
}

module.exports = handle;
