import React from 'react'
import ContactInformation from '../secondary compnts/ContactInformation'
import MessageToEmail from '../secondary compnts/MessageToEmail'

const Contact = () => {
  return (
    <div id="contact" className='px-4 sm:px-4 md:px-6 lg:px-10 2xl:px-20 min-h-screen w-full bg-black flex flex-col lg:flex-row items-center justify-evenly gap-y-10 gap-x-20 py-10'>
      <ContactInformation />
      <MessageToEmail />
    </div>
  )
}

export default Contact
