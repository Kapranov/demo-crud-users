import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function markdown(params) {
  let content = params[0];
  if (content) {
    return new htmlSafe(window.markdown.toHTML(content));
  }
}

export default helper(markdown);
