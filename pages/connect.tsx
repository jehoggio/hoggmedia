import Head from 'next/head';
import ContactForm from '../components/ContactForm';

function Connect() {
  return (
    <div>
      <Head>
        <title>Connect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </div>
  );
}

export default Connect;
