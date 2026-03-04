
const querystring = require('querystring');

function userDataSubmit(req, res) {
    res.write(`
        <h1> you can get data from the form here </h1>
        `)

    let databody = [];

    req.on('data', chunk => {
        databody.push(chunk);
    });

    req.on("end", () => {
    let rawData = Buffer.concat(databody).toString();
    let readableData = querystring.parse(rawData);

    let dataString =
      "My name is " +
      readableData.name +
      " and my email is " +
      readableData.email;

    console.log(dataString);
  });

    
}

module.exports = userDataSubmit;