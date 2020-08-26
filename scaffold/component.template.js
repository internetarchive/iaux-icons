module.exports = (iconName) => {
  const className = iconName.split('-').reduce((str, word) => `${str}${word.substr(0, 1).toUpperCase()}${word.substr(1)}`, '');

  return `import icon from './index.js';
import { css, LitElement } from 'lit-element';

class IAIcon${className} extends LitElement {
  static get styles() {
    return css\`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    \`;
  }

  render() {
    return icon;
  }
}

customElements.define('ia-icon-${iconName}', IAIcon${className});

export default IAIcon${className};`;
};
