import Head from 'next/head'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactForm />
    </div>
  )
}

export default Contact
