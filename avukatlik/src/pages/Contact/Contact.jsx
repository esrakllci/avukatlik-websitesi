import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='bg-[#F5F5F5] text-[#3c3c3c]'>
      <Navbar />
      <div>
        <img src={require('../../assets/img/legal-advisor-is-explaining-th_hn.png')} alt="" className='w-full'/>
      </div>
      <div>
        <div className='contact-head'>
          <p className='col-span-3 contact-head-hr'></p>
          <p className='col-span-6 font-lora font-bold'>İletişim</p>
          <p className='col-span-3 projects-head-hr'></p>
        </div>
      </div>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-info-01'>
            <MdLocationOn size="2.7em"/>
            <p>Abdurrahman Gazi Mah. Selma Sokak No: 14 A Blok Kat: 4 Daire: 28 Sancaktepe Ticaret Merkezi Sancaktepe/ İstanbul</p>
          </div>
          <div className='contact-info-01 mt-[40px]'>
            <BsFillTelephoneFill />
            <p>0552 008 34 04</p>
          </div>
          <div className='contact-info-01 mt-[20px]'>
            <IoIosMail size="1.3em"/>
            <p>av.sedanurdemir@gmail.com</p>
          </div>
        </div>
        <div className='contact-form'>
          <div className='flex flex-row'>
            <div className='form-name'>
              <p>Adınız</p>
              <input className='name-input' type="text" />
            </div>
            <div className='form-e-posta'>
              <p>E-Posta</p>
              <input className='e-posta-input' type="text" />
            </div>
          </div>
          <div className='form-title'>
            <p className='form-title-text'>Konu Başlığı</p>
            <input className='title-input' type="text" />
          </div>
          <div className='form-message'>
            <p className='mb-[6px]' >Mesajınız</p>
            {/* <input className='message-input w-full h-full' type="text" /> */}
            <textarea className='forms-textarea w-full' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='w-[500px]'>
            <button className='form-bttn' type='submit'>Gönder</button>
          </div>
        </div>
        <div className='contact-form2'>         
          <div className='form-name'>
            <p>Ad</p>
            <input className='name-input' type="text" />
          </div>
          <div className='form-e-posta'>
            <p>E-Posta</p>
            <input className='e-posta-input' type="text" />
          </div>
          <div className='form-title'>
            <p className='form-title-text'>Konu Başlığı</p>
            <input className='title-input' type="text" />
          </div>
          <div className='form-message'>
            <p className='mb-[6px]'>Mesajınız</p>
            <textarea className='forms-textarea w-full' name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='2xl:w-[665px]'>
            <button className='form-bttn' type='submit'>Gönder</button>
          </div> 
        </div>
        <div className='contact-info2'>
          <div className='contact-info-01'>
            <div className='mt-[5px]'><MdLocationOn size="1.5em"/></div>
            <p>Abdurrahman Gazi Mah. Selma Sokak No: 14 A Blok Kat: 4 Daire: 28 Sancaktepe Ticaret Merkezi Sancaktepe/ İstanbul</p>
          </div>
          <div className='contact-info-01 mt-[12px]'>
            <BsFillTelephoneFill />
            <p>0552 008 34 04</p>
          </div>
          <div className='contact-info-01 mt-[12px]'>
             <IoIosMail size="1.3em"/>
            <p>av.sedanurdemir@gmail.com</p>
          </div>
          <div className='contact-info-01 mt-[12px]'>
            <BsInstagram size="1.3em"/>
            <p>demirlawoff</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact