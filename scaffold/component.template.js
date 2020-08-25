module.exports = (iconName) => {
  const className = `${iconName.substr(0, 1).toUpperCase()}${iconName.substr(1)}`;

  return `import icon from './index.js';

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

export default IAIcon;`;
};
