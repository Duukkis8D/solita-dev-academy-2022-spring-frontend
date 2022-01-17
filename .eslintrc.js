// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'react-hooks'
	],
	'rules': {
		'indent': [
			'warn',
			'tab'
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'camelcase': 'error',
		'eqeqeq': 'error',
		'array-bracket-spacing': [
			'error',
			'always'
		],
		'brace-style': [
			'error',
			'1tbs'
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-in-parens': [
			'error',
			'always'
		],
		'block-spacing': [
			'error',
			'always'
		],
		'template-curly-spacing': [
			'error',
			'never'
		],
		'react/jsx-curly-spacing': [
			'error',
			'always'
		],
		'react/prop-types': 0,
		'react-hooks/rules-of-hooks': 'error' // Checks rules of Hooks
	}
}
