import { useLanguage } from '../context/LanguageContext';
import { images } from '../content/Images';

function Hero() {
  const { content } = useLanguage();
  const herocontent = content.hero;
  
  return (
    <section
      style={{ '--hero-bg': `url('${images.hero.background}')` }}
      className="relative isolate bg-[image:var(--hero-bg)] bg-cover bg-center"
    >
      <div className="absolute inset-0 -z-10 bg-ink/70" />
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-surface-alt">{herocontent.kicker}</p>
        <h1 className="text-4xl font-semibold leading-tight text-surface md:text-6xl">{herocontent.title}</h1>
        <p className="max-w-2xl text-surface-alt md:text-lg">{herocontent.subtitle}</p>
        <a
          href={herocontent.ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface transition hover:bg-accent-strong hover:shadow-xl"
        >
          {herocontent.ctaLabel}
        </a>
      </div>
    </section>
  );
}

export default Hero;