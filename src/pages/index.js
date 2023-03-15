import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper";

import "./reset.scss"
import "./global.scss"
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import Logo from "../assets/logo.svg"

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  return images
}

const images = importAll(require.context('../assets/photos', false, /\.(png|jpe?g|svg)$/));

const IndexPage = () => {

  const [imprint, setImprint] = React.useState(false)

  React.useEffect(() => {
    const isBrowser = () => typeof window !== `undefined`

    // window.addEventListener('resize', setMobile(isBrowser() && window.screen.width < 768))
  }, [])

  const scrollDown = () => {
    setImprint(!imprint)
    setTimeout(() => window.scrollTo(0, !imprint ? document.body.scrollHeight : 0), 100)
  }

  return (
    <main>
      <div className="grid">
        <div className="grid-left">
          <div className="logo-wrapper">
            <img id="logo" src={Logo} alt="" />
          </div>
          <div className="adress">
            <a target="_blank" href="https://goo.gl/maps/yzd3zGV2FzqoBPip8">
              <p>
                SCHILLERSTRASSE 23 <br />
                70173 STUTTGART
              </p>
            </a>
          </div>
        </div>

        <div className="images">
          <Swiper
            className="mySwiper"
            modules={[Autoplay, EffectFade]}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            watchOverflow={true}
            autoplay={
              { delay: 500 }
            }
          >

            {
              Object.keys(images).map((keyName, i) => (
                <SwiperSlide>
                  <img src={images[keyName].default} alt="" />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

      <div className="links">
        <div onClick={scrollDown} className="imprint">
          <p className="imprint-title">
            IMPRINT
          </p>

          <div className="imprint-content" style={{ opacity: imprint ? 1 : 0, maxHeight: imprint ? 2000 : 0}}>
            <p>
              Angaben gem. § 5 TMG

              studio amore ist eine Firmensparte der
              SUPERSUPPLY Stuttgart GmbH
              Weberstrasse 3
              70182 Stuttgart
              Germany

              Mail: info@supersupply.de

              Amtsgericht Stuttgart HRB 774274
              Ust.Id: DE346238175
              Geschäftsführer: Janusch Munkwitz
            </p>
          </div>
        </div>

        <div className="mail">
          <a href="mailto:info@studioamore.de">
            <p>
              INFO@STUDIOAMORE.DE
            </p>
          </a>
        </div>

        <div className="insta">
          <a target="_blank" href="https://www.instagram.com/studio__amore/">
            <p>
              INSTAGRAM
            </p>
          </a>
        </div>

      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
