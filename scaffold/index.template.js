module.exports = (svg) => `import { html } from 'lit';

export default html\`
${svg}
\`;
`;
