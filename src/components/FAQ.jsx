import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { images } from '../content/Images';

function FAQ() {
  const { content } = useLanguage();
  const faq = content?.faq;
  const [openIndex, setOpenIndex] = useState(null);
  
  if (!faq) return null;

  const toggleQuestion = (index) => {
    // Simply toggle, if same, close it, if different, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{ '--faq-bg': `url('${images.faq.background}')` }}
      className="relative isolate bg-[image:var(--faq-bg)] bg-cover bg-center bg-fixed py-16 md:py-24"
    >
      <div className="absolute inset-0 -z-10 bg-ink/85" />
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sage md:text-sm">
            {faq.kicker}
          </p>
          <h2 className="mb-6 text-3xl font-light leading-tight text-surface md:text-4xl lg:text-5xl">
            {faq.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-surface-alt md:text-xl">
            {faq.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-surface/20 bg-surface/10 backdrop-blur-sm transition hover:bg-surface/15 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left transition"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-1 items-center gap-3">
                    <span className="flex items-center text-2xl leading-none" role="img" aria-label={item.question}>
                      {item.emoji}
                    </span>
                    <h3 className="flex-1 text-base font-medium leading-snug text-surface md:text-lg">
                      {item.question}
                    </h3>
                  </div>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-surface transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-surface/20 px-6 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-surface-alt md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        {faq.contactText && (
          <div className="mt-12 text-center">
            <p className="mb-4 text-surface-alt">{faq.contactText}</p>
            <a
              href={faq.contactHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-surface transition hover:bg-accent-strong hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                </svg>
              <span>{faq.contactLabel}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default FAQ;