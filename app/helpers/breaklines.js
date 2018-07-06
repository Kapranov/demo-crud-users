import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import Ember from 'ember';

export function breaklines(params) {
  let value = params[0];
  if (value) {
    let escaped = Ember.Handlebars.Utils.escapeExpression(value);
        escaped = escaped.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new htmlSafe(escaped);
  }
}

export default helper(breaklines);
