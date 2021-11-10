import { css, LitElement } from 'lit';
import icon from './index.js';

class IAIconMagnifyMinus extends LitElement {
  static get styles() {
    return css`
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
    `;
  }

  render() {
    return icon;
  }
}

customElements.define('ia-icon-magnify-minus', IAIconMagnifyMinus);

export default IAIconMagnifyMinus;
