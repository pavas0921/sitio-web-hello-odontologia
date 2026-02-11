import { MetadataRoute } from "next";
import { posts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://helloodontologia.com";

    const staticRoutes = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },

        // Servicios
        {
            url: `${baseUrl}/servicios/diseno-sonrisa`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.95, // servicio estrella
        },
        {
            url: `${baseUrl}/servicios/ortodoncia`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.85,
        },
        {
            url: `${baseUrl}/servicios/implantes`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.85,
        },
    ];

    const blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority:
            post.slug.includes("medellin") ? 0.85 : 0.75, // más prioridad a keywords locales
    }));

    return [...staticRoutes, ...blogRoutes];
}
