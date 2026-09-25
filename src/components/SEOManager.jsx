import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/businessInfo';
import { FAQS } from '../data/faqData';
import { SERVICES } from '../data/servicesData';

const BASE_URL = 'https://lotusspa-pune.com';
const DEFAULT_IMAGE = `${BASE_URL}/logo.jpg`;

const SEO_ROUTES = {
  '/': {
    title: 'Lotus Spa | Luxury Spa in Viman Nagar Pune | Full Body Massage & Couple Spa Pune',
    description: 'Indulge in a premier luxury spa in Viman Nagar Pune. Lotus Spa offers full body massage in Pune, couple spa experiences, & holistic wellness rituals at Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/`,
    schemaType: 'DaySpa'
  },
  '/about': {
    title: 'About Lotus Spa | Premier Luxury Spa in Viman Nagar Pune',
    description: 'Learn about Lotus Spa, a leading luxury spa in Viman Nagar Pune offering full body massage in Pune, couple spa packages, & pristine therapy suites in Clover Park, Viman Nagar, Pune.',
    canonical: `${BASE_URL}/about`,
    schemaType: 'AboutPage'
  },
  '/services': {
    title: 'Full Body Massage Pune & Services | Luxury Spa in Viman Nagar Pune',
    description: 'Explore full body massage in Pune, Swedish massage, deep tissue massage, Balinese therapy, & aromatherapy at Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/services`,
    schemaType: 'ItemPage'
  },
  '/packages': {
    title: 'Couple Spa Pune & Full Body Massage Packages | Luxury Spa in Viman Nagar Pune',
    description: 'Discover curated spa packages combining full body massage in Pune, couple spa Pune sessions, and botanical body scrubs at Lotus Spa in Viman Nagar, Pune.',
    canonical: `${BASE_URL}/packages`,
    schemaType: 'ItemPage'
  },
  '/gallery': {
    title: 'Visual Tour of Our Luxury Spa in Viman Nagar Pune | Lotus Spa Gallery',
    description: 'Explore photos of private therapy suites, couple spa Pune rooms, and serene atmosphere at Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/gallery`,
    schemaType: 'ImageGallery'
  },
  '/faq': {
    title: 'Frequently Asked Questions | Luxury Spa in Viman Nagar Pune',
    description: 'Find answers about full body massage in Pune, couple spa Pune packages, booking guidelines, and spa etiquette at Lotus Spa in Clover Park, Viman Nagar, Pune.',
    canonical: `${BASE_URL}/faq`,
    schemaType: 'FAQPage'
  },
  '/contact': {
    title: 'Contact Us | Luxury Spa in Viman Nagar Pune | Lotus Spa',
    description: 'Get in touch with Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014. Call +91 80926 31411 or submit an inquiry for full body massage in Pune.',
    canonical: `${BASE_URL}/contact`,
    schemaType: 'ContactPage'
  },
  '/booking': {
    title: 'Reserve Appointment | Luxury Spa in Viman Nagar Pune | Lotus Spa',
    description: 'Book your full body massage in Pune or couple spa Pune appointment online at Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/booking`,
    schemaType: 'ReserveAction'
  },
  '/privacy': {
    title: 'Privacy Policy | Lotus Spa Viman Nagar Pune',
    description: 'Read the privacy policy for Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/privacy`,
    schemaType: 'WebPage'
  },
  '/terms': {
    title: 'Terms & Conditions | Lotus Spa Viman Nagar Pune',
    description: 'Read the terms and conditions for Lotus Spa in Clover Park, Viman Nagar, Pune, Maharashtra 411014.',
    canonical: `${BASE_URL}/terms`,
    schemaType: 'WebPage'
  }
};

export default function SEOManager() {
  const location = useLocation();
  const currentPath = location.pathname;
  const seo = SEO_ROUTES[currentPath] || {
    title: '404 Page Not Found | Lotus Spa Viman Nagar Pune',
    description: 'The requested page was not found on Lotus Spa website.',
    canonical: `${BASE_URL}${currentPath}`,
    schemaType: 'WebPage'
  };

  useEffect(() => {
    // 1. Update Title
    document.title = seo.title;

    // 2. Helper to set/update meta tag
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Meta Description & Keywords
    setMetaTag('meta[name="description"]', 'name', 'description', seo.description);
    setMetaTag(
      'meta[name="keywords"]',
      'name',
      'keywords',
      'Spa in Viman Nagar Pune, Full Body Massage Pune, Couple Spa Pune, Luxury Spa Pune, Lotus Spa Viman Nagar'
    );

    // OpenGraph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', seo.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', seo.description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', seo.canonical);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', DEFAULT_IMAGE);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'business.business');
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Lotus Spa');

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', seo.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', seo.description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', DEFAULT_IMAGE);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // Dynamic JSON-LD Structured Data
    let schemaScript = document.getElementById('dynamic-jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-jsonld-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    let schemaData = {
      '@context': 'https://schema.org',
      '@type': 'DaySpa',
      name: BUSINESS_INFO.name,
      description: BUSINESS_INFO.shortDescription,
      url: BASE_URL,
      telephone: BUSINESS_INFO.contact.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.line1,
        addressLocality: BUSINESS_INFO.address.locality,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.5678553,
        longitude: 73.9143637
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '10:00',
          closes: '21:00'
        }
      ]
    };

    if (currentPath === '/faq') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
    } else if (currentPath === '/services') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: SERVICES.map((srv, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Service',
            name: srv.name,
            description: srv.description,
            provider: {
              '@type': 'DaySpa',
              name: BUSINESS_INFO.name
            }
          }
        }))
      };
    }

    schemaScript.textContent = JSON.stringify(schemaData);
  }, [currentPath, seo]);

  return null;
}
