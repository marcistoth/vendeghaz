import { useLanguage } from '../context/LanguageContext';
import { images } from '../content/Images';

function Features() {
  const { content } = useLanguage();
  const features = content?.features;
  
  if (!features) return null;

  return (
    <section
      style={{ '--features-bg': `url('${images.features.background}')` }}
      className="relative isolate bg-[image:var(--features-bg)] bg-cover bg-center"
    >
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sage md:text-sm">
            {features.kicker}
          </p>
          <h2 className="mb-6 text-3xl font-light leading-tight text-surface md:text-4xl lg:text-5xl">
            {features.title}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-surface-alt md:text-xl">
            {features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg bg-surface/10 p-4 backdrop-blur-sm transition hover:bg-surface/15 hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center text-2xl leading-none" role="img" aria-label={item.label}>
                  {item.emoji}
                </span>
                <div className="flex-1">
                  <h3 className="mb-1 font-medium leading-tight text-surface">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-surface-alt">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;