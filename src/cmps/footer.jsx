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
                    <p>Support & resources</p>
                </div>
            </div>
        </div>
    </section>
}