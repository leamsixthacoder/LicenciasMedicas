require('@rushstack/eslint-config/patch/modern-module-resolution');
module.exports = {
    extends: ['@microsoft/eslint-config-spfx/lib/profiles/react'],
    parserOptions: { tsconfigRootDir: __dirname },
    ignorePatterns: ['**/node_modules', '**/*.js', '**/*.json', '**/*.scss'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'], // Your TypeScript files extension

            parserOptions: {
                project: ['./tsconfig.json', './src/webparts/licenciasMedicas/components/tsconfig-licencia.json'], 
            },

            rules: {
                'react-hooks/exhaustive-deps': 'error',
                '@typescript-eslint/no-unused-vars': 'warn',
                'react/prop-types': 'off',
                'react/display-name': 'off',
                'no-useless-escape': 'off',
                '@microsoft/spfx/no-async-await': 'off',
                '@typescript-eslint/typedef': 'off',
                '@typescript-eslint/no-floating-promises': 'warn',
            },
        },
    ],
};