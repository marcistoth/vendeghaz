const withOpacity = (variable) => {
  return ({ opacityValue } = {}) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;
};

const semanticColors = {
  surface: '--color-surface',
  'surface-alt': '--color-surface-alt',
  ink: '--color-ink',
  'ink-muted': '--color-ink-muted',
  line: '--color-line',
  accent: '--color-accent',
  'accent-strong': '--color-accent-strong'
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: Object.fromEntries(
        Object.entries(semanticColors).map(([name, variable]) => [
          name,
          withOpacity(variable)
        ])
      )
    }
  },
  plugins: []
};