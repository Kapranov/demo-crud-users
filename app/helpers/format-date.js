import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formatDate(date) {
  return moment(date).fromNow();
  // return date ? moment(date).fromNow() : '';
}

export default helper(formatDate);
