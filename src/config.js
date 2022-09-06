let baseUrl = 'http://localhost:5000/api';
let socketUrl = 'http://localhost:5000/';
let assetsUrl = 'http://localhost:5000/';

if (window.location.host === 'dce-dev.falconweb.app') {
  baseUrl = 'https://dce-api-dev.falconweb.app/api';
  socketUrl = 'https://dce-api-dev.falconweb.app/';
  assetsUrl = 'https://dce-api-dev.falconweb.app/';
} else if (window.location.host === 'dce-qa.falconweb.app') {
  baseUrl = 'https://dce-api-qa.falconweb.app/api';
  socketUrl = 'https://dce-api-qa.falconweb.app/';
  assetsUrl = 'https://dce-api-qa.falconweb.app/';
} else if (window.location.host === 'dce-stagging.falconweb.app') {
  baseUrl = 'https://dce-api-stagging.falconweb.app/api';
  socketUrl = 'https://dce-api-stagging.falconweb.app/';
  assetsUrl = 'https://dce-api-stagging.falconweb.app/';
} else if (window.location.host === 'dce-prod.falconweb.app') {
  baseUrl = 'https://dce-api-prod.falconweb.app/api';
  socketUrl = 'https://dce-api-prod.falconweb.app/';
  assetsUrl = 'https://dce-api-prod.falconweb.app/';
}
module.exports = { baseUrl, socketUrl, assetsUrl };
