import React from 'react'
import './Footer.css'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoIosMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-main flex flex-col'>
      <div className="footer-main-horizone md:grid md:grid-cols-12 mt-[56px]">
        <div className="footer-block-1 md:col-span-3">
          <div className="footer-block-1-title font-lora font-bold"><a href="">Av. Seda Nur Demir</a></div>
          <div className='footer-block-1-bar font-satoshi w-[195px] 2xl:w-full 2xl:text-[15px] 2xl:pr-[80px]'>
            <div className="footer-block-1-text-1">Sitemiz üzerinden online randevu alarak Hukuki Danışmanlık hizmetimizden faydalanabilirsiniz.</div>
            <div className='footer-line'></div>
            <div className="footer-block-1-text-2 mt-[10px]"><a href="">Pzt-Cum: 09:00 - 17:00 <br /> Cmt-Pzr: 12:00 - 16:00</a></div>
          </div>
        </div>
        <div className="footer-block-2 md:col-span-3">
          <div className='footer-block-2-title font-lora font-bold'><a href="">Bize Ulaşın</a></div>
          <div className='footer-block-2-bar mt-[10px] font-satoshi'>
            <div className='footer-block-3-bar flex flex-row mt-[13px] md:hidden 2xl:text-[15px]'>
              <a className='loc-logo'><MdLocationOn /></a>
              <a className='w-[154px] ml-[5px] font-satoshi'>Abdurrahman Gazi Mah. Selma Sokak No: 14 A Blok Kat: 4 Daire: 28 Sancaktepe Ticaret Merkezi Sancaktepe/ İstanbul</a>
            </div>
            <div className='footer-block-2-text-1 flex items-center mt-2'>
              <a className='tel-logo'><BsFillTelephoneFill /></a>
              <a className='ml-[4px]' href="tel:0552 008 34 04" target="_blank" rel="noopener noreferrer">0552 008 34 04</a>
            </div>
            <div className='footer-block-2-text-2 flex items-center mt-2'>
              <a className='mail-logo'><IoIosMail /></a>
              <a className='ml-[3px]' href='mailto:av.sedanurdemir@gmail.com' target="_blank" rel="noopener noreferrer">av.sedanurdemir@gmail.com</a>
            </div>
            <div className='footer-block-2-text-3 flex items-center mt-2'>
              <a className='demirlawoff'><BsInstagram /></a>
              <a className='ml-[4px]'href='https://www.instagram.com/demirlawoff/' target="_blank" rel="noopener noreferrer">demirlawoff</a>
            </div>
          </div>
        </div>
        <div className="footer-block-3 hidden md:inline-block md:col-span-3">
          <div className='footer-block-3-title'>
            <a className='font-lora font-bold'>Adresimiz</a>
          </div>
          <div className='footer-block-3-bar flex flex-row mt-[13px]'>
            <a className='loc-logo'><MdLocationOn /></a>
            <a className='w-[154px] 2xl:w-full 2xl:pr-[150px] ml-[5px] font-satoshi'>Abdurrahman Gazi Mah. Selma Sokak No: 14 A Blok Kat: 4 Daire: 28 Sancaktepe Ticaret Merkezi Sancaktepe/ İstanbul</a>
          </div>
        </div>
        <div className="footer-block-4 md:col-span-3">
          <div className='footer-block-4-title font-lora font-bold'>Site Haritası</div>
          <div className='footer-block-4-bar font-satoshi'>
            <div className='footer-block-4-text-1'>
              <Link to="/">Ana Sayfa</Link>
            </div>
            <div className='footer-block-4-text-2 mt-[8px] md:mt-[10px]'>
              <Link to="/about">Hakkımızda</Link>
            </div>
            <div className='footer-block-4-text-3 mt-[8px] md:mt-[10px]'>
              <Link to="/activities">Çalışma Alanlarımız</Link>
            </div>
            <div className='footer-block-4-text-4 mt-[8px] md:mt-[10px]'>
              <Link to="/blog">Blog</Link>
            </div>
            <div className='footer-block-4-text-5 mt-[8px] md:mt-[10px]'>
              <Link to="/contact">İletişim</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main-vertical md:mx-0 mx-[32px] text-center">
        <div className='mt[52px] mb-[40px] text-[15px] flex justify-center mt-[52px] font-satoshi'><a href="https://www.demirtassistem.com">Copyright Demir Hukuk Bürosu © 2022 Powered By Demirtaş Sistem. All Rights Reserved.</a></div>
      </div>
    </div>
  )
}


export default Footer