import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "prisma/generated/**",
      "src/generated/**",
      "**/@prisma/client/**",
      "node_modules/.prisma/**",
      "prisma/migrations/**",
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  ...tseslint.configs.recommended,
];

export default eslintConfig;
