import { dir } from 'i18next';
import Providers from '../../components/providers';

const languages = ['en', 'zh-CN'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
