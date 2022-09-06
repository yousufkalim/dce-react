import { assetsUrl } from '../config';

export default function assetsURL(str) {
  const _str = `${assetsUrl}${String(str).replace('\\', '/')}`;
  return _str;
}
