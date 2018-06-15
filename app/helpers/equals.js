import { helper } from '@ember/component/helper';

export function equals(params) {
  return params;
}

export default helper(function ([a, b]) {
  return a === b;
});
