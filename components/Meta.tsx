import Head from 'next/head'

export default function Meta({
  title = 'Hogg Media',
  description = 'Coding and Web development blog',
  type = 'website',
  date = '7/1/2021',
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta name='author' content='Jeff Hogg' />
      <meta property='og:url' content='https://hoggmedia.com/' />
      <meta
        property='og:image'
        content='https://www.hoggmedia.com/images/hoggmediass.png'
      />
    </Head>
  )
}
