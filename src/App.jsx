
import './scss/home-page.scss'
import Logo from './assets/logo.png'
import Menu from './assets/burger-menu.png'
import ContentImage from './assets/content-image.png'
import HomeSlider from './home-slider.jsx'
import VisionBlock from "./vision-block.jsx";
import MiniBlock from "./mini-block.jsx";
function App() {

  return (

      <div className={'home'}>
        <div className={'home__header'}>
            <img className={'home__logo'} src={Logo} alt={'logo'} />
            <img className={'home__menu'} src={Menu} alt={'menu'}/>
        </div>
          <div className={'home-slider'}>
              <div className={'home-slider__bg-banner home-slider__bg-banner--front'}>
                  Look Beyond the ordinary
              </div>
              <HomeSlider />
              <div className={'home-slider__bg-banner home-slider__bg-banner--back'}>
              </div>
          </div>
          <div className={'home__content'}>
              <p className={'home__content-text'}>
                  Visio is an investment management firm initially founded by Patrice Moyal in 2003.
                  The nimble, highly focused and dynamic team manage assets across listed
                  strategies for a diversified client base that includes some of the world's largest and
                  most sophisticated investors.
              </p>
              <div className={'home__content-figure'}>
                  <img className={'home__content-image'} src={ContentImage} alt={'content-image'} />
              </div>
          </div>
          <div className={'vision-block__blocks'}>
              <VisionBlock content={'the visio difference'} />
              <VisionBlock content={'meet the visio team'} />
              <VisionBlock content={'our funds and investments'} />
          </div>
          <div className={'mini-block__blocks'}>
              <MiniBlock content={'Hedge funds'} />
              <MiniBlock content={'Unit Trusts'} />
              <MiniBlock content={'Segregated Mandates'} />
              <MiniBlock content={'Africa Funds'} />
              <MiniBlock content={'Fund Performance'} />
              <MiniBlock content={'Risk Management'} />
          </div>
      </div>


  )
}

export default App
