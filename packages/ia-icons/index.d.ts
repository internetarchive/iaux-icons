import { LitElement } from 'lit-element';

export enum IconTemplate {
  Advance = 'advance',
  Audio = 'audio',
  Close = 'close',
  Donate = 'donate',
  Ellipses = 'ellipses',
  IALogo = 'iaLogo',
  Images = 'images',
  Search = 'search',
  Software = 'software',
  Texts = 'texts',
  Upload = 'upload',
  User = 'user',
  Video = 'video',
  Web = 'web',
}

export declare class IAIcon extends LitElement {
  icon: IconTemplate;
}
