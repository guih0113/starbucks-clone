import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlugin from 'eslint-plugin-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Next.js + TypeScript base
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier integration
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          useTabs: true,
          tabWidth: 2,
        },
      ],
      
      semi: ['error', 'never'], // Remover ponto e vírgula desnecessário
    },


    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
]

export default eslintConfig
