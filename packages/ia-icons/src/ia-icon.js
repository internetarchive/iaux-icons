import { LitElement, html, css } from 'lit-element';
import advance from '@internetarchive/icon-advance';
import audio from '@internetarchive/icon-audio';
import close from '@internetarchive/icon-close';
import donate from '@internetarchive/icon-donate';
import ellipses from '@internetarchive/icon-ellipses';
import iaLogo from '@internetarchive/icon-ia-logo';
import images from '@internetarchive/icon-images';
import search from '@internetarchive/icon-search';
import software from '@internetarchive/icon-software';
import texts from '@internetarchive/icon-texts';
import upload from '@internetarchive/icon-upload';
import user from '@internetarchive/icon-user';
import video from '@internetarchive/icon-video';
import web from '@internetarchive/icon-web';

const iconTemplates = {
  advance,
  audio,
  close,
  donate,
  ellipses,
  iaLogo,
  images,
  search,
  software,
  texts,
  upload,
  user,
  video,
  web,
};

class IAIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    };
  }

  static get styles() {
    return css`
      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  constructor() {
    super();
    this.icon = '';
  }

  render() {
    return iconTemplates[this.icon] || html``;
  }
}

export default IAIcon;
