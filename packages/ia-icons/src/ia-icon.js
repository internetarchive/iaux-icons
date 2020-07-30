import { LitElement, html, css } from 'lit-element';
import advance from '@internetarchive/icon-advance';
import applePay from '@internetarchive/icon-applepay';
import audio from '@internetarchive/icon-audio';
import calendar from '@internetarchive/icon-calendar';
import close from '@internetarchive/icon-close';
import creditCard from '@internetarchive/icon-credit-card';
import donate from '@internetarchive/icon-donate';
import ellipses from '@internetarchive/icon-ellipses';
import email from '@internetarchive/icon-email';
import googlePay from '@internetarchive/icon-googlepay';
import iaLogo from '@internetarchive/icon-ia-logo';
import images from '@internetarchive/icon-images';
import localePin from '@internetarchive/icon-locale-pin';
import lock from '@internetarchive/icon-lock';
import paypal from '@internetarchive/icon-paypal';
import search from '@internetarchive/icon-search';
import software from '@internetarchive/icon-software';
import texts from '@internetarchive/icon-texts';
import upload from '@internetarchive/icon-upload';
import user from '@internetarchive/icon-user';
import venmo from '@internetarchive/icon-venmo';
import video from '@internetarchive/icon-video';
import web from '@internetarchive/icon-web';

const iconTemplates = {
  applePay,
  advance,
  audio,
  calendar,
  close,
  creditCard,
  donate,
  ellipses,
  email,
  googlePay,
  iaLogo,
  images,
  localePin,
  lock,
  paypal,
  search,
  software,
  texts,
  upload,
  user,
  venmo,
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
