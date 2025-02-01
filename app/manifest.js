export default function manifest() {
    return {
        name: 'Taher Chabra - Full-stack Web Developer',
        short_name: 'Taher Chabra',
        description: "Portfolio webiste for Taher Chabra - Full-stack Web Developer.",
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}