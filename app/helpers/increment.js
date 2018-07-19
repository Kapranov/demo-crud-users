import { helper } from '@ember/component/helper';

export function increment(integer) {
  return integer + 1;
}

export default helper(increment);
