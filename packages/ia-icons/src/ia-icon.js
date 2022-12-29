import {
  LitElement, html, css, nothing
} from 'lit';
import advance from '@internetarchive/icon-advance/index';
import applePay from '@internetarchive/icon-applepay/index';
import audio from '@internetarchive/icon-audio/index';
import calendar from '@internetarchive/icon-calendar/index';
import calendarBlank from '@internetarchive/icon-calendar-blank/index';
import close from '@internetarchive/icon-close/index';
import closeCircle from '@internetarchive/icon-close-circle/index';
import collapseSidebar from '@internetarchive/icon-collapse-sidebar/index';
import creditCard from '@internetarchive/icon-credit-card/index';
import donate from '@internetarchive/icon-donate/index';
import download from '@internetarchive/icon-dl/index';
import editPencil from '@internetarchive/icon-edit-pencil/index';
import ellipses from '@internetarchive/icon-ellipses/index';
import email from '@internetarchive/icon-email/index';
import facebook from '@internetarchive/icon-facebook/index';
import googlePay from '@internetarchive/icon-googlepay/index';
import iaLogo from '@internetarchive/icon-ia-logo/index';
import images from '@internetarchive/icon-images/index';
import link from '@internetarchive/icon-link/index';
import localePin from '@internetarchive/icon-locale-pin/index';
import lock from '@internetarchive/icon-lock/index';
import magnifyMinus from '@internetarchive/icon-magnify-minus/index';
import magnifyPlus from '@internetarchive/icon-magnify-plus/index';
import paypal from '@internetarchive/icon-paypal/index';
import pinterest from '@internetarchive/icon-pinterest/index';
import search from '@internetarchive/icon-search/index';
import share from '@internetarchive/icon-share/index';
import software from '@internetarchive/icon-software/index';
import sortAscending from '@internetarchive/icon-sort-ascending/index';
import sortDescending from '@internetarchive/icon-sort-descending/index';
import texts from '@internetarchive/icon-texts/index';
import toc from '@internetarchive/icon-toc/index';
import tumblr from '@internetarchive/icon-tumblr/index';
import twitter from '@internetarchive/icon-twitter/index';
import upload from '@internetarchive/icon-upload/index';
import user from '@internetarchive/icon-user/index';
import venmo from '@internetarchive/icon-venmo/index';
import video from '@internetarchive/icon-video/index';
import visualAdjustment from '@internetarchive/icon-visual-adjustment/index';
import volumes from '@internetarchive/icon-volumes/index';
import web from '@internetarchive/icon-web/index';
import info from '@internetarchive/icon-info/index';

const iconTemplates = {
  applePay,
  advance,
  audio,
  calendar,
  calendarBlank,
  close,
  closeCircle,
  collapseSidebar,
  creditCard,
  donate,
  download,
  editPencil,
  ellipses,
  email,
  facebook,
  googlePay,
  iaLogo,
  images,
  link,
  localePin,
  lock,
  magnifyMinus,
  magnifyPlus,
  paypal,
  pinterest,
  search,
  share,
  software,
  sortAscending,
  sortDescending,
  texts,
  toc,
  tumblr,
  twitter,
  upload,
  user,
  venmo,
  video,
  visualAdjustment,
  volumes,
  web,
  info,
};

class IAIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    };
  }

  static get styles() {
    return css`
      svg {
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

  constructor() {
    super();
    this.icon = '';
  }

  render() {
    return html`${iconTemplates[this.icon]}` || nothing;
  }
}

export default IAIcon;
