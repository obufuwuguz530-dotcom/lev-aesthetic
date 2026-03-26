/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                accent: {
                    gold: '#D4AF37',
                    goldLight: '#F9E076',
                },
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Inter', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(to right, #D4AF37, #F9E076)',
            },
        },
    },
    plugins: [],
}
