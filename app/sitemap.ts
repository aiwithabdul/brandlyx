import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brandlyx.co.uk';

    // Core pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/privacy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service pages
    const serviceSlugs = [
        'digital-marketing',
        'seo',
        'content-creation',
        'automation',
        'chatbot-development',
        'wordpress',
        'nextjs-react',
    ];

    const serviceRoutes = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Location pages
    const cities = ['london', 'manchester'];
    const cityRoutes = cities.map((city) => ({
        url: `${baseUrl}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // City-Service combo pages
    const cityServiceRoutes: MetadataRoute.Sitemap = [];
    cities.forEach((city) => {
        serviceSlugs.forEach((slug) => {
            cityServiceRoutes.push({
                url: `${baseUrl}/${city}/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            });
        });
    });

    return [...routes, ...serviceRoutes, ...cityRoutes, ...cityServiceRoutes];
}
