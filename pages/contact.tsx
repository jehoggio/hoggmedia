import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

function Contact() {
  return (
    <Layout title='Contact Me'>
      <h1 className='text-5xl border-b-4 p-5 mb-8 font-bold'>Contact</h1>
      <ContactForm />
    </Layout>
  )
}

export default Contact
