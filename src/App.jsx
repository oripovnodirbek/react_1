import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
           <div className="container">
      <div className="header">
        <div className="logo">
          <img src="./img/Logo.png" alt="LOGO" />
        </div>
        <div className="input">
          <input type="text" placeholder="Cari apapun disini..." />
        </div>
        <div className="translate">
          <img src="./img/header.png" alt="translate" />
        </div>
        <div className="location">
          <img src="./img/headerr.png" alt="location" />
        </div>
      </div>
      <hr />
      <div className="selector">
        <div className="parama">
                   <p>Gunung</p>
                   <p>Pantai</p>
                   <p>Kuliner</p>
                   <p>Outbond</p>
                   <p>Sejarah</p>
                   <p>Edukasi</p>
                   <p>Romantis</p>
                   <p>Alam</p>
        </div>
        <div className="trash">
          <img src="./img/Buttons.png" alt="buttons"/>
        </div>
      </div>
      <div className="hero">
        <div className="text">
          <h3>✈ • Explore the wonderful indonesia!</h3>
          <h1>Liburan & nikmati <br />
              <span>tempat baru</span> di <br />
              indonesia  ️🏝
          </h1>
          <p>Destinize membuat kamu selalu update terkait tempat liburan <br />
             baru di Indonesia dengan mengikuti perkembangan para <br />
             influencer di sosial media ✨
          </p>
          <div className="btns">
            <button>Mulai sekarang →</button>
            <button id='putar'>Putar Demo</button>
          </div>
        </div>
        <div className="picture">
          <img src="./img/main.png" alt="main img" />
        </div>
      </div>
      <div className="sponsor">
        <img src="./img/1sp.png" alt="" />
        <img src="./img/2sp.png" alt="" />
        <img src="./img/3sp.png" alt="" />
        <img src="./img/4sp.png" alt="" />
        <img src="./img/5sp.png" alt="" />
      </div>
      <div className="favorit">
        <p>DESTINASI FAVORIT</p>
        <div className="air">
           <h1>✈ • Temukan Destinasi Favoritmu</h1>
           <p>Lihat semua o </p>
        </div>
        <div className="carts">
        <div className="cart">
          <img src="./img/1p.png" alt="photo" />
          <p>Raja Ampat</p>
          <span>Bali</span>
        </div>
        <div className="cart">
          <img src="./img/2p.png" alt="photo" />
          <p>Labuan Bajo</p>
          <span>NTT</span>
        </div>
        <div className="cart">
          <img src="./img/3p.png" alt="photo" />
          <p>Kawah ljen</p>
          <span>Jawa Timur</span>
        </div>
        <div className="cart">
          <img src="./img/4p.png" alt="photo" />
          <p>Bromo</p>
          <span>Jawa Timur</span>
        </div>
        </div>
      </div>
      <div className="tempat">
        <div className="textTemp">
        <p className='reser'>RESERVASI TEMPAT</p>
        <h1>Gak mau ngantri? <br /> reservasi aja! 🤙🏻</h1>
        <div className="gak">
          <img src="./img/gak1.png" alt="gak" />
          <div className="about">
            <h1>Cari tempat yang kamu mau</h1>
            <p>Temukan destinasi selanjutnya yang akan kamu <br />
             kunjungi dengan Destinize
             </p>
          </div>
        </div>
        <div className="gak">
          <img src="./img/gak2.png" alt="gak" />
          <div className="about">
            <h1>Isi data dan konfirmasi pembayaran</h1>
            <p>Tulis dan lengkapi data kamu untuk keperluan <br />
             data booking
             </p>
          </div>
        </div>
        <div className="gak">
          <img src="./img/gak3.png" alt="gak" />
          <div className="about">
            <h1>Tinggal masuk dan enjoy!</h1>
            <p>Kamu bisa langsung masuk dan enjoy liburan <br />
             kamu tanpa hambatan
             </p>
          </div>
        </div>
        </div>

        <div className="imgTemp">
          <img src="./img/gakMain.png" alt="photo" />
        </div>
      </div>

      <div className="earth">
        <p className='wis'>CARI TEMPAT WISATA</p>

        <h1 className='cari'>🗺 • Cari Tempat Wisata Didekatmu</h1>

        <h3>Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang sedang populer di <br />
         daerah kamu dengan begitu kamu akan selalu update dan gak kudet lagi 👍🏻
        </h3>

        <img src="./img/card.png" alt="earth photo" />

        <div className="geolo">
        <div className="geo">
          <img src="./img/1c.png" alt="geo" />

          <div className="pop">
            <h1>Populer di dekatmu</h1>
            <p>Tempat pariwisata yang populer <br />
             dan pasti dikenal semua orang didekatmu
            </p>
          </div>
        </div>

        <div className="geo">
          <img src="./img/2c.png" alt="geo" />

          <div className="pop">
            <h1>Favorit di dekatmu</h1>
            <p>Tempat favorit dan disukai semua <br />
             orang orang di sekitar daerah kamu
            </p>
          </div>
        </div>

        <div className="geo">
          <img src="./img/3c.png" alt="geo" />

          <div className="pop">
            <h1>Ramai di didekatmu</h1>
            <p>Spot yang paling ramai dikunjungi <br />
             para warga sekaligus para <br />
             wisatawan
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
