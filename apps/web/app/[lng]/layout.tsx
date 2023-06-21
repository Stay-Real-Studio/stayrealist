import { dir } from 'i18next';

const languages = ['en', 'de'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <div lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      {children}
    </div>
  );
}
