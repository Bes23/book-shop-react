import React from 'react'
import {
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Mail,
  MapsHomeWorkRounded,
} from '@mui/icons-material'

const socials = [
  {
    id: 1,
    Icon: Facebook,
    color: '#99217b',
  },
  {
    id: 2,
    Icon: Instagram,
    color: '',
  },
  {
    id: 3,
    Icon: Twitter,
    color: '#3B5999',
  },
]

const contacts = [
  {
    Icon: MapsHomeWorkRounded,
    text: 'Via Faenza, 23',
  },
  {
    Icon: Phone,
    text: '+32 2323232323',
  },
  {
    Icon: Mail,
    text: 'bookstore@gmail.com',
  },
]

const Footer = () => {
  return (
    <footer className='mt-5 grid place-items-center md:grid-cols-2 gap-12 py-7 bg-[#5B5EA6] text-white'>
      <div className='flex flex-col'>
        <div>
          <h3>You can follow us on social medias:</h3>
        </div>
        <div className='flex mt-3'>
          {socials.map(({ id, Icon, color }) => (
            <div
              key={id}
              className={`w-[40px] h-[40px] rounded-full flex justify-center place-items-center ml-5 bg-[${color}] `}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
      <div className='px-5'>
        <h3>Contact:</h3>
        {contacts.map(({ Icon, text }) => (
          <div key={text} className='mt-2'>
            <Icon /> {text}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
