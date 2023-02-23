// let baseUrl = 'http://localhost:5000/api';
// let socketUrl = 'http://localhost:5000/';
// let assetsUrl = 'http://localhost:5000/';

baseUrl = 'https://dce-api-dev.falconweb.app/api';
socketUrl = 'https://dce-api-dev.falconweb.app/';
assetsUrl = 'https://dce-api-dev.falconweb.app/';
projectName = 'dce';
env = 'dev';

let youtubeChannelId = 'UCLcuFnQASrPRn0y2KHeK8Kg';
let youtubeApiKey = 'GOOGLE_API_KEY_REDACTED';

if (window.location.host === 'dce-dev.falconweb.app') {
  baseUrl = 'https://dce-api-dev.falconweb.app/api';
  socketUrl = 'https://dce-api-dev.falconweb.app/';
  assetsUrl = 'https://dce-api-dev.falconweb.app/';
} else if (window.location.host === 'dce-qa.falconweb.app') {
  baseUrl = 'https://dce-api-qa.falconweb.app/api';
  socketUrl = 'https://dce-api-qa.falconweb.app/';
  assetsUrl = 'https://dce-api-qa.falconweb.app/';
  env = 'qa';
} else if (window.location.host === 'dce-staging.falconweb.app') {
  baseUrl = 'https://dce-api-staging.falconweb.app/api';
  socketUrl = 'https://dce-api-staging.falconweb.app/';
  assetsUrl = 'https://dce-api-staging.falconweb.app/';
  env = 'staging';
} else if (window.location.host === 'dce-prod.falconweb.app') {
  baseUrl = 'https://dce-api-prod.falconweb.app/api';
  socketUrl = 'https://dce-api-prod.falconweb.app/';
  assetsUrl = 'https://dce-api-prod.falconweb.app/';
  env = 'prod';
}
module.exports = {
  baseUrl,
  socketUrl,
  assetsUrl,
  youtubeChannelId,
  youtubeApiKey,
  projectName,
  env
};
