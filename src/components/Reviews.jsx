import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

function Reviews() {
  const { content } = useLanguage();
  const reviews = content?.reviews;
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return true;
  });
  const [isTablet, setIsTablet] = useState(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return width >= 768 && width < 1024;
    }
    return false;
  });
  
  if (!reviews) return null;

  // Update desktop/tablet state on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize(); // Call once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show different amounts based on screen size
  const getVisibleCount = () => {
    if (showAll || isDesktop) return reviews.items.length;
    if (isTablet) return 4;
    return 3;
  };

  const visibleReviews = reviews.items.slice(0, getVisibleCount());
  const hasMore = reviews.items.length > getVisibleCount();

  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-wood-dark md:text-sm">
            {reviews.kicker}
          </p>
          <h2 className="mb-6 text-3xl font-light leading-tight text-ink md:text-4xl lg:text-5xl">
            {reviews.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-ink-muted md:text-xl">
            {reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
              style={{ border: '1px solid #e8eaed' }}
            >
              {/* Header with avatar and name */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div 
                      className="flex h-10 w-10 items-center justify-center rounded-full text-base font-medium text-white"
                      style={{ backgroundColor: '#1a73e8' }}
                    >
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium leading-tight" style={{ color: '#202124' }}>
                      {review.name}
                    </h3>
                    <p className="text-xs" style={{ color: '#5f6368' }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                {/* Google icon */}
                <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Star Rating */}
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="#fbbc04"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="flex-1 text-sm leading-relaxed" style={{ color: '#3c4043' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Show More Button - only on mobile/tablet when there are hidden reviews */}
        {hasMore && !showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-accent bg-surface px-6 py-3 text-sm font-medium text-accent transition hover:bg-accent hover:text-surface"
            >
              <span>{reviews.showMoreText}</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {/* Google Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href={reviews.googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-surface transition hover:bg-accent-strong hover:shadow-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>{reviews.linkText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;