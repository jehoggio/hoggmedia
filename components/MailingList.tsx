const EmailInput = () => {
  return (
    <div className='mt-8'>
      <p className='max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
        Join Our Mailing List!
      </p>
      <div className='flex justify-center mb-4'>
        <input
          type='text'
          name='email'
          id='email'
          className='max-w-xs shadow-sm focus:ring-green-400 focus:border-green-400 block w-full sm:text-sm border-gray-300 rounded-md'
          placeholder='you@example.com'
          aria-describedby='email-description'
        />
      </div>

      <button
        type='button'
        className='inline-flex items-center my-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
      >
        Sign Up
      </button>
      <p className='mt-2 text-sm text-gray-500' id='email-description'>
        We'll never sell your data
      </p>
    </div>
  )
}

export default EmailInput
