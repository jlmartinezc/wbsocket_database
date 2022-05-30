const path = require('path');
const options = {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'ecommerce.sqlite3')
    },
    useNullAsDefault: true
}

module.exports = {
    options
}