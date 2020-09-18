var request = require('request');

var options = {
  method: 'POST',
  url: 'https://fiservseminars.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: {
    grant_type: 'client_credentials',
    client_id: 'N0REnrxkr3N2HWxHr1lVnVnWlyKCwYdm',
    client_secret:
      'YGn-l_OH6RywOUQ9BqC5ne2wftjiIOusvhmC425T1zTXn7Bz8dFsWC9H3x5nXR5V',
    audience: 'https://fiservseminars.us.auth0.com/api/v2/',
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
