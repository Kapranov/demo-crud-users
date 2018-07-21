import { helper } from '@ember/component/helper';

export function increment(index) {
  let idx = Number(index);
  return idx + 1;
}

export default helper(increment);
