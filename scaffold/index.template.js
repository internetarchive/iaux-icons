module.exports = (svg) => `import { html } from 'lit-html';

export default html\`
${svg}
\`;
`;
