import MenuMobile from './mobileVersion/MenuMobile';
import { AppBar, Toolbar, Slide, useScrollTrigger } from '@mui/material';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import './navBar.css';

function NavBar() {

  const trigger = useScrollTrigger();
  return (
    <DeviceOrientation lockOrientation={'landscape'}>

      <Orientation orientation='landscape' alwaysRender={false}>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar className='navBar'>
            <Toolbar>
              <div className="landscapeNavBarDiv">
                <a href="/"
                  className='landscapeLinktoMain'
                >
                  <img
                    className="landscapeGameIcon"

                  />
                  <p className="navBarGameName">Rebel Tanks</p>
                </a>
                <div className='nvbrItem nvbrBtn'><a className='nvbrItemConteiner nvbrContactContainer nvbrItem' href="/contacts">КОНТАКТЫ</a></div>

                {/* <div className='nvbrItem nvbrBtn'><a className='nvbrItemConteiner nvbrHelpContainer nvbrItem' href="/help">ПОМОЧЬ</a></div> */}
              </div >
            </Toolbar>

          </AppBar>
        </Slide>
      </Orientation>

      <Orientation orientation='portrait' alwaysRender={false}>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar className='navBar'>
            <Toolbar>
              <div className='gameIconContainerPortrait'>
                <a href="/" className='gameIconPositionPortrait'>
                  <img
                    className='portraitGameIcon'
                  />
                </a>

                <div className='menuMobilePosition'>
                  <MenuMobile />
                </div>
              </div>
            </Toolbar>

          </AppBar>

        </Slide >
      </Orientation>

    </DeviceOrientation >
  );

}


export default NavBar;