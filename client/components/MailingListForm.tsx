import { useState } from 'react'
import SubscribedAlert from './alerts/SubscribedAlert'

const MailingListForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showSubscribed, setShowSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSubscribed(true)
    setName('')
    setEmail('')
  }

  return (
    <div className='mt-8'>
      <p className='max-w-md mb-6 mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
        Subscribe to the mailing list to stay up to date with the latest news
        and updates.
      </p>
      <form>
        <input
          type='text'
          name='name'
          value={name}
          id='name'
          className='max-w-xs shadow-sm focus:ring-green-400 focus:border-green-400 block sm:text-sm border-gray-300 rounded-md'
          placeholder='Name'
          required
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type='text'
          name='email'
          value={email}
          id='email'
          className='max-w-xs mt-2 shadow-sm focus:ring-green-400 focus:border-green-400 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='email@example.com'
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <button
          type='button'
          className='inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      {showSubscribed && <SubscribedAlert />}
      <p className='mt-4 text-sm text-gray-500' id='email-description'>
        Your data will be kept secure and private.
      </p>
    </div>
  )
}

export default MailingListForm
