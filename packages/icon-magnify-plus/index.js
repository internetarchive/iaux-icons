import { html } from 'lit-html';

export default html`
<svg
  viewBox="0 0 18 18"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-plusTitleID magnify-plusDescID"
>
  <title id="magnify-plusTitleID">Zoom in</title>
  <desc id="magnify-plusDescID">An icon of a magnifying glass with a plus symbol</desc>
  <g fill="none" fill-rule="evenodd">
    <circle cx="7" cy="7" r="6" class="stroke-color" stroke-width="2" />
    <path d="m12 12 4.335213 4.335213" class="stroke-color" stroke-linecap="round" stroke-width="2" />
    <path d="m7.75 4v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z" class="fill-color" fill-rule="nonzero" />
  </g>
</svg>
`;
