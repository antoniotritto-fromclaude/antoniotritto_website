import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/libro` },
    { url: `${SITE_URL}/newsletter` },
    { url: `${SITE_URL}/podcast` },
    { url: `${SITE_URL}/privacy-policy` },
    { url: `${SITE_URL}/cookie-policy` },
  ];
}
