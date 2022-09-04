import { assetsUrl } from '../config';

export default function assetsURL(str) {
  const _str = `${assetsURL}${String(str).replace('\\', '/')}`;
  return _str;
}
