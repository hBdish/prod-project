const normalizeName = require('../normalize-name');

module.exports = (sliceName) => `export interface ${normalizeName(sliceName)}Schema {
    
}`;
