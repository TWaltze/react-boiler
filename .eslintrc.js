module.exports = {
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
		"no-console": 0,
		"class-methods-use-this": 0,
		"arrow-body-style": ["error", "always"],
		"space-before-function-paren": ["error", "never"],
		"comma-dangle": ["error", "never"],
		"no-tabs": 0,
		"indent": ["error", "tab", {
			"ArrayExpression": 1,
			"MemberExpression": 1,
			"ObjectExpression": 1,
			"CallExpression": {
				"arguments": 1
			}
		}],
		"react/jsx-indent": [2, "tab"],
	}
};
