import { useLanguage } from '../context/LanguageContext';

// Language-independent data
const footerData = {
  contact: {
    phone: '+36 30 123 4567',
    phoneHref: 'tel:+36301234567',
    email: 'info@vendeghaz.hu',
    address: '1234 Erdőszél, Csendes utca 42, Magyarország'
  },
  social: [
    {
      platform: 'facebook',
      url: 'https://facebook.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      platform: 'youtube',
      url: 'https://youtube.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      platform: 'tripadvisor',
      url: 'https://tripadvisor.com',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 4.039-10.429L24 6.648h-4.361a13.618 13.618 0 0 0-7.633-2.353zm-6 7.412a3.707 3.707 0 1 1 0 7.412 3.707 3.707 0 0 1 0-7.412zm12 0a3.707 3.707 0 1 1 0 7.412 3.707 3.707 0 0 1 0-7.412zm-6-3.882c1.644 0 3.22.437 4.612 1.176a7.614 7.614 0 0 0-4.612 6.883 7.614 7.614 0 0 0-4.612-6.883A9.024 9.024 0 0 1 12.006 7.825zm-6 5.293a2.118 2.118 0 1 0 0 4.235 2.118 2.118 0 0 0 0-4.235zm12 0a2.118 2.118 0 1 0 0 4.235 2.118 2.118 0 0 0 0-4.235z"/>
        </svg>
      )
    }
  ],
  links: [
    { id: 'booking', url: '#booking' },
    { id: 'faq', url: '#faq' },
    { id: 'gallery', url: '#gallery' },
    { id: 'contact', url: '#contact' }
  ],
  legal: [
    { id: 'privacy', url: '#privacy' },
    { id: 'terms', url: '#terms' },
    { id: 'conditions', url: '#terms-conditions' }
  ]
};

function Footer() {
  const { content } = useLanguage();
  const footer = content?.footer;
  
  if (!footer) return null;

  return (
    <footer className="bg-ink text-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-semibold uppercase tracking-[0.18em] text-surface">
              {footer.name}
            </h3>
            <p className="mb-6 leading-relaxed text-surface-alt">
              {footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {footerData.social.map((item) => (
                <a
                  key={item.platform}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/10 text-surface transition hover:bg-accent hover:text-surface"
                  aria-label={footer.socialLabels[item.platform]}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-sage">
              {footer.contactTitle}
            </h4>
            <ul className="space-y-3 text-sm text-surface-alt">
              <li>
                <a
                  href={footerData.contact.phoneHref}
                  className="flex items-center gap-2 transition hover:text-surface"
                >
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{footerData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="flex items-center gap-2 transition hover:text-surface"
                >
                  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{footerData.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{footerData.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-sage">
              {footer.linksTitle}
            </h4>
            <ul className="space-y-3 text-sm text-surface-alt">
              {footerData.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="transition hover:text-surface"
                  >
                    {footer.links[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-surface/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-surface-alt md:flex-row md:text-left">
            <p>{footer.copyright}</p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerData.legal.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  className="transition hover:text-surface"
                >
                  {footer.legal[item.id]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;