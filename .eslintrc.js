const DISABLE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	root: true,
	"extends": [
		"airbnb-base",
		"plugin:react/recommended"
	],
	"env": {
		"browser": true,
		"es6": true
	},
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"import",
		"react"
	],
	"rules": {
		"no-console": DISABLE,
		"class-methods-use-this": DISABLE,
		"arrow-body-style": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"comma-dangle": ["error", "never"],
		"no-tabs": DISABLE,
		"indent": ["error", "tab", {
			"ArrayExpression": WARN,
			"MemberExpression": WARN,
			"ObjectExpression": WARN,
			"CallExpression": {
				"arguments": WARN
			}
		}],
		"react/jsx-indent": [ERROR, "tab"],
		"react/prop-types": DISABLE
	}
};
