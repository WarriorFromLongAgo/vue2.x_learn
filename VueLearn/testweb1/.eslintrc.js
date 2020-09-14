// https://eslint.org/docs/user-guide/configuring

module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
  // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  // "off" or 0：  停用这个规则
  // "warn" or 1： 启用规则，当不满足规则时发出警告，不会导致程序退出
  // "error" or 2：启用规则，当不满足规则时报错，会导致程序退出
  rules: {
    // 强制一致的缩进风格
    'indent': ['error', 4],
    // allow async-await
    'generator-star-spacing': 'off',
    // 不允许 console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 不允许 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 停用tab缩进
    'no-tabs': 'off',
    // 禁用 var，用let和const代替
    "no-var": 'error',
    // 引号风格, 使用双引号
    "quotes": ['error', "double", "avoid-escape"],
    // data() 这种会报错
    'space-before-function-paren': [
      'error',
      'never'
    ],
    "space-unary-ops": ['error', { "words": true, "nonwords": false }],
  }
}
