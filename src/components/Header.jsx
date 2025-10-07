import { useLanguage } from '../context/LanguageContext';

function Header() {
  const { languages, language: activeLanguage, setLanguage, content } = useLanguage();
  const headerContent = content.header;

  return (
    <div className="bg-surface-alt text-ink shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <span className="text-xl font-semibold uppercase tracking-[0.18em]">
          {headerContent.name}
        </span>
        <div className="flex w-full flex-col items-center gap-3 text-xs tracking-[0.12em] sm:flex-row sm:justify-center sm:text-sm lg:w-auto lg:justify-end lg:gap-6">
          <a
            href={headerContent.contact.phoneHref}
            className="flex items-center gap-2 text-ink-muted transition hover:text-ink"
          >
            <span>{headerContent.contact.phoneLabel}</span>
            <span className="font-medium">{headerContent.contact.phoneNumber}</span>
          </a>
          <div className="flex items-center gap-1 rounded-full border border-line bg-surface-alt/90 px-1.5 py-1 shadow-sm">
            {languages.map((lang) => {
              const isActive = activeLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition ${
                    isActive
                      ? 'bg-ink'
                      : 'hover:bg-line/35'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                  title={lang.label}
                >
                  <span className="flex h-4 w-6 items-center justify-center overflow-hidden rounded-sm">
                    {lang.flag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;