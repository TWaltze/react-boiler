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
	"settings": {
		"import/resolver": {
			"webpack": {
				"config": "webpack/webpack.config.js"
			}
		}
	},
	"rules": {
		"no-console": WARN,
		"quotes": [ERROR, "single"],
		"radix": DISABLE,
		"class-methods-use-this": DISABLE,
		"arrow-body-style": DISABLE,
		"space-before-function-paren": [ERROR, "never"],
		"comma-dangle": [ERROR, "never"],
		"no-tabs": DISABLE,
		"object-curly-newline": [ERROR, { multiline: true }],
		"indent": [ERROR, "tab", {
			"ArrayExpression": WARN,
			"MemberExpression": WARN,
			"ObjectExpression": WARN,
			"CallExpression": {
				"arguments": WARN
			}
		}],
		"react/jsx-indent": [ERROR, "tab"],
		"react/prop-types": DISABLE,
		"import/no-unresolved": [ERROR, { commonjs: true, amd: true }],
		"import/prefer-default-export": DISABLE
	}
};
