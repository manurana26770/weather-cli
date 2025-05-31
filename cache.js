const fs = require('fs');
const path = require('path');

const cacheFile = path.join(__dirname, 'cache.json');

exports.readCache = () => {
  try {
    return JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  } catch {
    return {};
  }
};

exports.writeCache = (data) => {
  fs.writeFileSync(cacheFile, JSON.stringify(data, null, 2), 'utf8');
};
