import Head from 'next/head';
import ContactForm from '../components/ContactForm';

function Connect() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </div>
  );
}

export default Connect;
