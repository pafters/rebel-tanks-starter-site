import Description from "./frames/description/Description";
import Logo from "./frames/logo/Logo";
import Tutorial from "./frames/tutorial/Tutorial";
import GameTutorialMobile from './frames/gameTutorial/GameTutorial';
import Help from "./frames/help/Help";
import Footer from "./frames/footer/Footer";

import './main.css';

function Main() {
    return (
        <div className='logoFrameContainer' >
            <Logo />
            <div className="descriptionFrameContainer">
                <Description />
            </div>
            <div className="tutorialFrameContainer">
                <Tutorial />
            </div>
            <div className='mainFrameContentBckgr gameTutorFrameContainer'>
                <div >
                    <GameTutorialMobile />
                </div>
                {/* <div className="helpFrameContainer">
                    <Help />
                </div> */}
                <div>
                    <Footer />
                </div>

            </div>
        </div >

    );
}

export default Main;