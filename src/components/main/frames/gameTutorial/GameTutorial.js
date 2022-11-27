
import './gameTutorial.css';

function GameTutorialMobile() {
    return (
        <div className='gameTutorContainer'>
            <div className='gameTutorSideBckgr' >
                <p className='textTitleFrstLvl whiteFontColor gameTutorStarterTextTitlePosition'>
                    ВЫБИРАЙ
                </p>
                <p className='textTitleScndLvl whiteFontColor'>СТОРОНУ</p>
            </div>

            <div className='teamInfoContainer'>
                <div className='teamBluePosition' >
                    <p className='textTitleFrstLvl whiteFontColor teamInfoDivSize'>КОМАНДА<br />СИНИХ</p>
                    <p className='whiteFontColor teamInfoDivSize'>
                        Личная армия магнатов<br />
                        и глав компаний,<br />
                        истинных правителей.<br />
                        Выбирая эту сторону,<br />
                        будьте готовы сражаться,<br />
                        в первую очередь,<br />
                        за приоритеты и<br />
                        ценности компании<br />
                        без каких-либо<br />
                        возражений.
                    </p>

                    <img className='teamBlue' />
                </div>
                <div>
                    <p className='textTitleFrstLvl whiteFontColor teamInfoDivSize'>КОМАНДА<br />КРАСНЫХ</p>
                    <p className='whiteFontColor teamInfoDivSize'>
                        Армия, собранная<br />
                        людьми, выросшими<br />
                        в гетто. Они стремятся<br />
                        уничтожить установленные<br />
                        порядки и улучшить<br />
                        свое положение.<br />
                        Выбирайте эту<br />
                        сторону, если<br />
                        готовы сражаться<br />
                        только за<br />
                        собственные идеалы<br />
                        и интересы.
                    </p>
                    <img className='teamRed' />
                </div>
            </div>
            <div className='gameplayOuterDiv'>
                <div className='gameplayInnerDiv' >
                    <p className='textTitleFrstLvl whiteFontColor gameTutorGameplayIndicator'>ИГРАЙ</p>
                    <img className='gameplay' />
                </div>
            </div>
            <div className='lvlUpOuterDiv'>
                <div className='lvlUpInnerDiv'>
                    <p className='textTitleFrstLvl whiteFontColor lvlUpIndicator' >ПОВЫШАЙ УРОВЕНЬ</p>
                    <div className='lvlUpImageContainer'>
                        <img className='lvlsUp' />
                        <img className='stonksArrow' />
                    </div>
                </div>
            </div>
            <div className='rankSystemContainer'>
                <p className='textTitleFrstLvl whiteFontColor rankSystemIndicator' >ПОЛУЧАЙ НОВЫЕ ЗВАНИЯ</p>
                <div className='rankSystemImange' >
                    <img className='rankSystem' />
                </div>
            </div>
        </div >
    );
}

export default GameTutorialMobile;