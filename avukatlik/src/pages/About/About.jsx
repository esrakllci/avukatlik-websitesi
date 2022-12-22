import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const About = () => {
  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />
      <div className='about-main-img'>
        <img src={require('../../assets/img/lady-justice-or-justitia-statu@2x.png')} alt="" className='w-full' />
      </div>
      <div>
        <div className='projects-head md:mb-[74px]'>
          <p className='col-span-3 projects-head-hr'></p>
          <p className='col-span-6 font-lora font-bold'>Hakkımızda</p>
          <p className='col-span-3 projects-head-hr'></p>
        </div>
      </div>
      <div className='hakkımızda-container-img md:hidden'>
        <img src={require('../../assets/img/judge-gavel-with-justice-at-la.png')} alt="" className='md:hidden mt-[80px]' />
      </div>
      <div className='hakkımızda-container'>
        <div className='hakkımızda-container-text'>
          <h1 className='text-[28px] font-satoshi font-bold'>DEMİR HUKUK BÜROSU</h1>
          <p className='mt-[20px]'>
            Demir Hukuk Bürosu olarak; Türkiye’nin birçok yerine yayılmış işbirlikçilerimiz ile birlikte müvekkillerimizin tüm hukuki ihtiyaçlarını karşılamaktayız. Geleneksel hukuki hizmetlerin yanı sıra yenilikçi ve somut çözümler üreten büromuz, müvekkillerine kişiselleştirilmiş hizmetler sunar ve bilhassa önleyici hukuk hizmeti ile haklarını resmi makamlar önünde güvence altına alır.
          </p>
          <br />
          <p>
            Şahıslara, şahıs şirketlerine, işletmelere ve bunlar gibi her türlü finansal kuruluşlara vermekte olduğumuz hukuk hizmetleri ile alışılagelmiş avukat-müvekkil ilişkisini başka bir boyuta taşıyarak istikrarlı, dayanıklı ve profesyonel düzeyde hukuki rehberlik eden büromuzun ana çalışma alanları; ticaret hukuku, icra ve iflas hukuku, iş hukuku, ceza hukuku, gayrimenkul hukuku, sigorta hukuku, fikri mülkiyet hukukudur. Ayrıca yukarıda sayılan çalışma alanları ile sınırlı olmamak üzere, muhtelif sektörlerdeki şirketlerin hukuki danışmanlığını da yürütmektedir.
          </p>
        </div>
        <div className='hakkımızda-container-img'>
          <img src={require('../../assets/img/judge-gavel-with-justice-at-la.png')} alt="" className='hidden md:inline-block' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About