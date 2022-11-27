import './footer.css';

function Footer() {
    return (
        <div>
            <img className='wave' />
            <div className='footerLinkContainer'>
                <div className='footerLinkInnerContainer'>
                    {/* <a href='/help' className='footerTextContent'>ПОМОЧЬ ПРОЕКТУ</a> */}
                    {/* <a href='/contacts' className='footerTextContent footerLinkSpace'>КОНТАКТЫ</a> */}
                </div>


                <div className='footerEmailContainer'>
                    <p className='footerTextContent'>alxtrusov@gmail.com</p>
                </div>
            </div>
        </div >
    );
}

export default Footer;