import React from 'react';
import './App.scss';
import Flexible from 'flexiblegs-css';

function App() {

//   componentDidMount () {
//     $(document).scroll(function () {
//       var $nav = $(".header");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
// }

  return (
    <div className="App">

      {/* Header */}
      <div className="wrap header">
        <div className="col xl-5-12 xl-center lg-5-12 lg-center md-center navbar-title">
            <a href="asd">TILANCE</a>
        </div>
        <div className="col xl-7-12 xl-center lg-7-12 lg-center navbar-menu">
            <a href="asd" className="md-hidden">ANASAYFA</a>
            <a href="asd" className="md-hidden">TILANCE NEDİR?</a>
            <a href="asd" className="md-hidden">İLETİŞİM</a>

            <a href="asd">
                <img src="Images/eng.jpg" alt="Resim Bulunamadı." width="24"/>
            </a>
            <a href="asd">
                <img src="Images/tr.png" alt="Resim Bulunamadı." width="24"/>
            </a>
        </div>
      </div> <br /> <br /> <br /> <br />
    {/* Header Bitiş */}

    {/* Top Security */}
    <div className="wrap xl-1 xl-center lg-1 lg-center md-1 md-center main">

        <div className="col">
            <h1 className="main-title">TILANCE</h1>
            <p>En hızlı ve güvenilir şekilde hizmet ver ya da hizmet al!</p>
            <div className="cursor">
                <form action="test">
                    <span className="security">
                        <input type="checkbox"/>
                        <a href="asd" target="_blank">Gizlilik ve Veri Kullanımı okudum, onaylıyorum.</a>
                    </span>
                    <br />
                    <input type="email" name="email" placeholder="E-Posta Adresiniz"/>
                    {/* <i></i> */} 

                    <input type="submit" value="Hazır Ol" className="ready-btn"/>
                </form>
            </div>
            <img src="Images/cloud.png" alt="Resim Bulunamadı." class="clouds" />
        </div>

    </div>
    {/* Top Security Bitiş */}

    {/* whatIsTilance */}
    <div className="wrap" 
    style={{
      marginBottom:'70px'
    }}>
        <div className="col xl-3-12 lg-2-12"></div>
        <div className="col xl-6-12 xl-center lg-8-12 lg-center md-center">
            <h3 className="about-tilance-title">TILANCE NEDİR?</h3>
            <p className="about-tilance">Hizmet almak isteyenler ve hizmet vermek isteyenlerin birbirini
                tanıdıkları, başarılı iş ilişkilerine
                imza atabilecekleri ve sosyal olabilecekleri bir platformdur. TILANCE ile serbest çalışanlar için
                rahat
                bir iş ortamı, iş verenler için de hizmet alacakları kişileri güvenle seçebilecekleri bir platform
                oluşturmayı hedefliyoruz.</p>
        </div>
        <div className="col xl-3-12 lg-2-12"></div>
    </div>
    {/* whatIsTilance Bitiş */}

    {/* Content A */}
    <div className="wrap contenta">
        <div className="col xl-3-12 lg-2-12"></div>
        <div className="col xl-3-12 lg-8-12 lg-center content-a">
            <h4>Yazdığıyla Değil Yaptığıyla Seç!</h4>
            <p>
                Hizmet alacağın kişiyi profilinde yazdıklarıyla değil yaptıklarıyla seç. Yazılı belgelerden yapılacak
                işin
                kalitesini anlamaya çalışmak yerine tamamlanmış işlerin paylaşılan görselleriyle işin kalitesini ve
                sürekliliğini görme fırsatı yakala.
            </p>
        </div>
        <div className="col xl-hidden lg-not-hidden lg-2-12"></div>
        <div className="col xl-hidden lg-not-hidden lg-2-12"></div>
        <div className="col xl-3-12 lg-8-12 lg-center" 
        style={{
          marginBottom:'50px'
        }}>
            <img src="Images/template.jpeg" alt="Resim Bulunamadı." width="450" />
        </div>
        <div className="col xl-3-12 lg-2-12"></div>
    </div>
    {/* Content A Bitiş */}


    {/* <div class="wrap contenta">
        <div class="col xl-2-12"></div>
        <div class="col xl-8-12"></div>
        <div class="col xl-2-12"></div>
    </div> */}









    

    {/* Content B */}
    <div className="wrap lg-hidden contentb"
    style={{
      marginBottom:'50px'
    }}>
        <div className="col xl-3-12"></div>
        <div className="col xl-3-12">
            <img src="images/template.jpeg" alt="Resim Bulunamadı." width="450"/>
        </div>
        <div className="col xl-3-12 content-b">
            <h4>Neler Yaptığını Paylaş!</h4>
            <p>
                Hepimiz yaptığımız işlerle gurur duyuyoruz. Bu işleri paylaşarak hem meslektaşlarınız arasında bir üne
                sahip olun hem de müşterilerinizin yaptığınız işleri görmesine ve sizi daha iyi tanımasına yardımcı
                olun.
            </p>
        </div>
        <div className="col xl-3-12"></div>
    </div>

    {/* Content B Lg-- */}

    <div className="wrap xl-hidden lg-not-hidden contentb"
    style={{
      marginBottom:'50px'
    }}>
        <div className="col lg-2-12"></div>
        <div className="col lg-8-12 lg-center content-b">
            <h4>Neler Yaptığını Paylaş!</h4>
            <p>
                Hepimiz yaptığımız işlerle gurur duyuyoruz. Bu işleri paylaşarak hem meslektaşlarınız arasında bir üne
                sahip olun hem de müşterilerinizin yaptığınız işleri görmesine ve sizi daha iyi tanımasına yardımcı
                olun.
            </p>
        </div>
        <div className="col lg-2-12"></div>
        <div className="col lg-8-12 lg-center">
            <img src="images/template.jpeg" alt="Resim Bulunamadı." width="450"/>
        </div>
        <div className="col lg-2-12"></div>
    </div>
    
    {/* Content B Lg-- Bitiş */}

    {/* Content B Bitiş */}

    {/* Content C */}
        <div className="wrap contentc">
            <div className="col xl-3-12 lg-2-12"></div>
            <div className="col xl-3-12 xl-left lg-8-12 lg-center content-c">
                <h4>İşin Ne Olacağına Sen Karar Ver!</h4>
                    <p>
                        Misafirin için yemek de yaptırabilirsin, şirketlere sunum da! İnsanların her alanda yetenekli
                        olabileceğinin farkındayız. İşte bu yüzden hizmet çeşitliliğimizi oldukça geniş tutuyoruz. Her işinizde
                        size yardımcı olabilecek insanları bulmak için harekete geçin.
                    </p>
            </div>
            <div className="col xl-hidden lg-not-hidden lg-2-12"></div>
            <div className="col xl-hidden lg-not-hidden lg-2-12"></div>
            <div className="col xl-3-12 lg-8-12 lg-center" 
            style={{
            marginBottom:'50px'
            }}>
                <img src="Images/template.jpeg" alt="Resim Bulunamadı." width="450" />
            </div>
            <div className="col xl-3-12 lg-2-12"></div>
        </div>
    {/* Content C Bitiş*/}

    {/* Bottom Form Input */}
    <div className="wrap xl-1 xl-center lg-1 lg-center md-1 md-center bottom"
    style={{
      marginTop:'50px'
    }}>
        <div className="col">
            <p>Zamanı geldiğinde haberin olsun!</p>
            <div className="cursor">
                <form action="deneme">
                    <span className="security">
                        <input type="checkbox" />
                        <a href="asd" target="_blank">Gizlilik ve Veri Kullanımı okudum, onaylıyorum.</a>
                    </span>
                    <br />
                    <input type="email" name="email" placeholder="E-Posta Adresiniz" />
                    {/* <i></i> */}

                    <input type="submit" value="Hazır Ol" />
                </form>
            </div>
        </div>
    </div>
    {/* Bottom Form Input Bitiş */}

    {/* Footer */}
    <div className="wrap xl-normal footer">
         <div className="col xl-4-12 lg-3-12"></div>
         <div className="col xl-4-12 xl-center lg-6-12 lg-center footer-text">
             <b>
                 <a href="asd">info@tilance.com</a>
             </b>
             <p>All © Copyright by TILANCE. All Rights Reserved.</p>
         </div>
         <div className="col xl-4-12 lg-3-12"></div>
    </div>
    {/* Footer Bitiş */}

    </div>
  );
}

export default App;
