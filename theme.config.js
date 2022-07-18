export default {
  github: 'https://github.com/jonathangiardino/flashpromos-docs',
  docsRepositoryBase:
    'https://github.com/jonathangiardino/flashpromos-docs/blob/master',
  titleSuffix: ' – Flash Promos',
  logo: (
    <div style={{ display: 'flex', justifyItems: 'center' }}>
      <div style={{ height: '28px' }}>
        <img style={{ height: '100%' }} src="/applogo.png" />
      </div>
    </div>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Flash Promos Docs: A Shopify App for creating, managing and scheduling promos blazing fast."
      />
      <meta
        name="og:description"
        content="Flash Promos Docs: A Shopify App for creating, managing and scheduling promos blazing fast."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Flash Promos Docs" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Flash Promos Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Flash Promos.</>,
  unstable_faviconGlyph: '👋',
}
