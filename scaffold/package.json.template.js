module.exports = (packageName, descriptiveName, version) => `{
  "name": "@internetarchive/icon-${packageName}",
  "version": "${version}",
  "description": "SVG ${descriptiveName} icon",
  "license": "AGPL-3.0-only",
  "main": "index.js",
  "module": "index.js",
  "types": "index.d.ts",
  "publishConfig": {
    "access": "public"
  },
  "scripts": {
    "lint": "eslint ."
  },
  "dependencies": {
    "lit-html": "^1.2.1"
  },
  "devDependencies": {
    "@open-wc/eslint-config": "^1.0.0",
    "eslint": "^6.1.0",
    "eslint-plugin-lit": "^0.5.0",
    "husky": "^4.2.3",
    "lint-staged": "^8.0.0"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "git add"
    ]
  },
  "eslintConfig": {
    "extends": [
      "@open-wc/eslint-config"
    ]
  }
}
`;
