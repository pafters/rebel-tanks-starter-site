
import './tutorial.css';

function Tutorial() {
    return (
        <div className='tutorialBckgrContainer' >
            <div style={{ textAlign: 'center', alignItems: 'center' }}>
                <div className='tutorItemContainer'>
                    <p className='textTitleFrstLvl tutorTextTitle'>
                        УСТАНОВИ ПРИЛОЖЕНИЕ
                        <br />
                        “Rebel Tanks”
                        <br />
                        НА СВОЕМ ТВ
                    </p>
                    <img className='frame tvFrame' />

                </div>

                <div className='tutorItemContainer'>
                    <p className='textTitleFrstLvl tutorTextTitle whiteFontColor' >
                        СКАНИРУЙ
                        <br />
                        QR-КОД С ЭКРАНА ТВ
                    </p>
                    <img className='frame tvQRScan' />
                </div>

                <div className='tutorItemContainer'>
                    <p className='textTitleFrstLvl tutorTextTitle whiteFontColor' >
                        ПОВЕРНИ ТЕЛЕФОН
                    </p>
                    <img className='frame phoneRotate' />
                </div>
            </div>

        </div>

    );
}

export default Tutorial;