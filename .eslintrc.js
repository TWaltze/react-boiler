const DISABLE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	root: true,
	extends: [
		'airbnb-base',
		'airbnb-base/rules/strict',
		'eslint:recommended',
		'plugin:flowtype/recommended',
	],
	env: {
		browser: true,
		es6: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true
		}
	},
	plugins: [
		'import',
		'react',
		'flowtype'
	],
	settings: {
		'import/resolver': {
			webpack: {
				'config': 'webpack/webpack.config.js'
			}
		}
	},
	rules: {
		'no-console': WARN,
		'quotes': [ERROR, 'single'],
		'radix': DISABLE,
		'class-methods-use-this': DISABLE,
		'comma-dangle': [ERROR, 'never'],
		'no-tabs': DISABLE,
		'object-curly-newline': [ERROR, { multiline: true }],
		'indent': [ERROR, 'tab', {
			'ArrayExpression': WARN,
			'MemberExpression': WARN,
			'ObjectExpression': WARN,
			'CallExpression': {
				'arguments': WARN
			}
		}],
		'semi': ERROR,
		'eol-last': ERROR,
		'max-len': [ ERROR, { code: 80 } ],
		'no-plusplus': [ ERROR, { allowForLoopAfterthoughts: true } ],
		'arrow-parens': [ ERROR, 'always' ],
		'arrow-body-style': [ ERROR, 'as-needed' ],
		'array-bracket-spacing': [ ERROR, 'never' ],
		'space-before-function-paren': [ ERROR, {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		} ],

		'flowtype/require-valid-file-annotation': [ WARN, 'always' ],
		'flowtype/no-weak-types': [ WARN, {
			any: false,
			Object: false,
			Function: false
		} ],

		'import/no-unresolved': [ERROR, {
			commonjs: true,
			amd: true,
			caseSensitive: true
		}],
		'import/prefer-default-export': DISABLE,
		'import/named': ERROR,
		'import/namespace': [ ERROR, { allowComputed: true } ],
		'import/default': ERROR,
		'import/export': ERROR,
		'import/imports-first': ERROR,
		'import/first': [ ERROR, 'absolute-first' ],
		'import/extensions': ERROR,
		'import/no-duplicates': ERROR,
		'import/no-absolute-path': ERROR,
		'import/no-named-as-default': ERROR,
		'import/no-named-as-default-member': ERROR,
		'import/no-mutable-exports': ERROR,
		'import/newline-after-import': ERROR,

		// Based on plugin:react/recommend
		'react/display-name': ERROR,
		'react/jsx-key': ERROR,
		'react/jsx-no-comment-textnodes': ERROR,
		'react/jsx-no-duplicate-props': ERROR,
		'react/jsx-no-target-blank': ERROR,
		'react/jsx-no-undef': ERROR,
		'react/jsx-uses-react': ERROR,
		'react/jsx-uses-vars': ERROR,
		'react/no-children-prop': ERROR,
		'react/no-danger-with-children': ERROR,
		'react/no-deprecated': ERROR,
		'react/no-direct-mutation-state': ERROR,
		'react/no-find-dom-node': ERROR,
		'react/no-is-mounted': ERROR,
		'react/no-render-return-value': ERROR,
		'react/no-string-refs': ERROR,
		'react/no-unescaped-entities': ERROR,
		'react/no-unknown-property': ERROR,
		'react/react-in-jsx-scope': ERROR,
		'react/require-render-return': ERROR,

		// Custom
		'react/jsx-indent': [ERROR, 'tab'],
		'react/prop-types': DISABLE,
		'react/prefer-es6-class': ERROR,
		'react/prefer-stateless-function': DISABLE,
		'react/no-danger': ERROR,
		'react/no-did-mount-set-state': ERROR,
		'react/no-did-update-set-state': ERROR,
		'react/jsx-no-bind': DISABLE,
		'react/jsx-tag-spacing': ERROR,
		'react/jsx-boolean-value': ERROR,
		'react/jsx-closing-bracket-location': ERROR,
		'react/jsx-handler-names': ERROR,
		'react/jsx-no-literals': ERROR,
		'react/jsx-pascal-case': ERROR,

		'jsx-quotes': [ ERROR, 'prefer-double' ]
	}
};
