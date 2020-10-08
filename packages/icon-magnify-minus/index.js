import { html } from 'lit-html';

export default html`
<svg
  viewBox="0 0 18 18"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-minusTitleID magnify-minusDescID"
>
  <title id="magnify-minusTitleID">Zoom out</title>
  <desc id="magnify-minusDescID">An icon of a magnifying glass with a minus symbol</desc>
  <g fill="none" fill-rule="evenodd">
    <circle cx="7" cy="7" r="6" class="stroke-color" stroke-width="2" />
    <path d="m12 12 4.335213 4.335213" class="stroke-color" stroke-linecap="round" stroke-width="2" />
    <path d="m10 7.75v-1.5h-6v1.5z" class="fill-color" fill-rule="nonzero" />
  </g>
</svg>
`;
