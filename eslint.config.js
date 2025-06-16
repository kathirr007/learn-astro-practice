import antfu from '@antfu/eslint-config'
import eslintPluginAstro from 'eslint-plugin-astro'

export default antfu(

  {
    formatters: true,
    vue: true,
    react: true,
    astro: true,
    typescript: true,
    ...eslintPluginAstro.configs.recommended,
    ignores: [
      '.astro/**/*',
      '.vscode/**/*',
      'dist/**/*',
      'node_modules/**/*',
      'public/**/*',
      'package-lock*',
      'pnpm-lock*',
      'bun.lock*',
      'yarn.lock*',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      'style/brace-style': ['error', '1tbs'],
      'style/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
      'style/operator-linebreak': 'off',
      'perfectionist/sort-imports': ['error', { tsconfigRootDir: '.' }],
      'unicorn/number-literal-case': 'off',
      'antfu/consistent-list-newline': 'off',
    },
  },
)
