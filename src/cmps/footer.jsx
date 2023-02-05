import { useState } from 'react';
import { ProjectAbout } from './project-about'
import Modal from '@mui/material/Modal';
import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return <section className="footer">
        <div className="main-footer main-layout">
            <div className="footer-details">
                <p>© 2023 Airbna, Inc.</p>
            </div>
            <div className="footer-settings">
                <div className='footer-about' onClick={handleOpen}>
                    <p>About the project</p>
                </div>
                {/* <div className='footer-lang'>
                    <LanguageIcon fontSize='small' />
                    <p>English (US)</p>
                    </div>
                    <div className='footer-currency'>
                    <span>$</span>
                    <p>USD</p>
                </div> */}
                <div className='footer-support'>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=bniv000@gmail.com;bnaya50@gmail.com;1alonavisar@gmail.com&su=Lets talk`} target='_blank' rel="noreferrer">
                        <p>Support & resources</p>
                    </a>
                </div>
            </div>
        </div>
        <Modal open={open} onClose={handleClose}>
            <ProjectAbout />
        </Modal>
    </section >
}