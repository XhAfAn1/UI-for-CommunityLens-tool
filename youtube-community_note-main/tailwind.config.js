/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Custom colors if we need them, let's Stick to standard tailwind + dark mode for now
            },
        },
    },
    plugins: [],
}
