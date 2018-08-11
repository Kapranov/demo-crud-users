import { helper as buildHelper } from '@ember/component/helper';

export function not([val]) {
  return !val;
}

export default buildHelper(not);
