const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://your-domain.example'

export default function Head() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'صرافی جوان',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.jpg`,
  }

  return (
    <>
      <link rel="icon" href="/icon.png" />
      <link rel="icon" sizes="32x32" href="/icon.png" />
      <link rel="apple-touch-icon" href="/placeholder-logo.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
