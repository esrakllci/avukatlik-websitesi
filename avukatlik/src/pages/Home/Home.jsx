import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-base-div bg-[#F5F5F5]'>
      <Navbar />
      <img src={require('../../assets/img/rear-view-of-a-small-statue-of.png')} alt="" className='home-img' />
      <div className='home-main'>
        <div className='md:grid md:grid-cols-12'>
          <h1 className="home-h1 md:col-span-9 leading-[34px] md:leading-[65px] 2xl:leading-[100px]">Demir <br className='md:hidden' />Hukuk Bürosu <br />Av. Seda Nur Demir</h1>
          <div className='md:col-span-3'></div>
        </div>
        <div className='md:grid md:grid-cols-12'>
          <p className='home-text md:col-span-7'>Demir Hukuk Bürosu olarak; Türkiye’nin birçok yerine yayılmış işbirlikçilerimiz ile birlikte müvekkillerimizin tüm hukuki ihtiyaçlarını karşılamaktayız.</p>
          <div className='md:col-span-5'></div>
        </div>
        <h3 className='home-h3'>
          <Link to="/about">DAHA FAZLA</Link>
        </h3>
      </div>
      <div>
        <div className='projects-head'>
          <p className='md:col-span-3 projects-head-hr'></p>
          <p className='md:col-span-6'>Çalışma Alanlarımız</p>
          <p className='md:col-span-3 projects-head-hr'></p>
        </div>
      </div>
      <div className='home-projects'>
        <div className='home-projects-div'>
          <h1>Sözleşmeler Hukuku</h1>
          <p>Sözleşme Hukuku, insanların özgür iradeleri ile sözleşme yapma serbestisi içinde sözleşme yapmalarını sağlayan, “sözleşme yapma serbestisinin” hakkın...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
        <div className='home-projects-div'>
          <h1>İş ve Sosyal Güvenlik Hukuku</h1>
          <p>İş hukuku, işçi hakları, çalışma koşulları, işçi ücretleri, işçi sendikaları ve işveren-işçi...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
        <div className='home-projects-div'>
          <h1>İcra ve İflas Hukuku</h1>
          <p>İcra hukuku, borcunu ödeyemeyen borçlunun borcunun, alacaklının talebi üzerine, devlet zoruyla taşınır ve taşınmaz varlıklarına el konarak karşılanmasını konu alan hukuk...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
        <div className='home-projects-div'>
          <h1>İdare ve Vergi Hukuku</h1>
          <p>Vergi Hukuku, vergi niteliklerini, vergi yükümlülüklerini ve devletin mali faaliyetlerini hukuki açıdan inceleyen bir kamu hukuku dalıdır...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
        <div className='home-projects-div'>
          <h1>Aile ve Miras Hukuku</h1>
          <p>Aile ve miras hukuku, medeni hukukun alt dalı olan bir hukuk dalıdır. Aile ve miras hukukunu da kapsayan medeni hukuk, 1 Ocak...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
        <div className='home-projects-div'>
          <h1>Gayrimenkul Hukuku</h1>
          <p>Gayrimenkul Hukuku, Medeni Hukuk kapsamında yer alır ve ev, arsa, apartman, daire gibi taşınmazlar için düzenlenmiş olan...</p>
          <h6><Link to={"/activities"}>DAHA FAZLA</Link></h6>
        </div>
      </div>
      <div className='home-online'>
        <img src={require('../../assets/img/anasayfarandevual.png')} alt="" />
        <div className='home-online-text'>
          <p className='home-online-soru'>Çevrimiçi Danışmanlığa mı İhtiyacınız Var?</p>
          <p className='home-online-direction'>Demir Hukuk Bürosu olarak çevrimiçi danışmanlık sağlıyoruz. Alttaki butona tıklayarak randevu oluşturabilirsiniz.</p>
          <button className='home-online-button'><Link to="/contact" >RANDEVU OLUŞTUR</Link></button>
        </div>
      </div>
      <div className='home-last-blog'>
        <p className='home-last-blog-head'>Son Blog Paylaşımlarımıza Erişin</p>
        <p className='home-last-blog-direction'>Blogumuzda paylaştığımız güncel konuları okumak için alttaki butona tıklayabilirsiniz.</p>
        <button className='home-last-blog-button'><Link to="/blog" >BLOG</Link></button>
      </div>
      <Footer />
    </div>
  )
}

export default Home