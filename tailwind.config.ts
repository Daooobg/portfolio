import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                light: { primary: '#F5F5F5' },
                dark: { black: '#000000', gray: '#616161', darkGray: '#202020', lightGray: '#9C9C9C' },
                green: { primary: '#2BCF7E', secondary: '#ACFFD6' },
            },
        },
    },
    plugins: [],
};
export default config;
