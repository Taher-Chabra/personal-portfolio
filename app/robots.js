export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/resume/'],
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                allow: ['/'],
                disallow: ['/resume/'],
            },
        ],
        sitemap: 'https://taherchabra.tech/sitemap.xml',
    }
}