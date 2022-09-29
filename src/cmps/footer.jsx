import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {

    return <section className="footer">
        <div className="main-footer main-layout">
            <div className="footer-details">
                <p>© 2022 Airbna, Inc.</p>
            </div>
            <div className="footer-settings">
                {/* <div className='footer-lang'>
                    <LanguageIcon fontSize='small' />
                    <p>English (US)</p>
                </div>
                <div className='footer-currency'>
                    <span>$</span>
                    <p>USD</p>
                </div> */}
                <div className='footer-support'>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=bniv000@gmail.com;aaa@aaa.com&su=Lets talk`} target='_blank'>
                        <p>Support & resources</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
}