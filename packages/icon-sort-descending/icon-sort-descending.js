import icon from './index.js';
import { css, LitElement } from 'lit-element';

class IAIconSortDescending extends LitElement {
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

customElements.define('ia-icon-sort-descending', IAIconSortDescending);

export default IAIconSortDescending;