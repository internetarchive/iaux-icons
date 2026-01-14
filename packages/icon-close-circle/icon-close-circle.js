import { css, LitElement } from 'lit';
import icon from './index.js';

class IAIconCloseCircle extends LitElement {
  static get styles() {
    return css`
      :host {
        width: var(--iconWidth, 12px);
        height: var(--iconHeight, 12px);
      }

      .fill-color {
        fill: var(--iconFillColor, #999);
      }
    `;
  }

  render() {
    return icon;
  }
}

customElements.define('ia-icon-close-circle', IAIconCloseCircle);

export default IAIconCloseCircle;
