import React, { useState } from 'react';
import '../styles/style.scss';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactPage = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('default_service', 'template_r2ck6ks', e.target, 'user_Bcv95WkS1DoWQZumlaX3V')
            .then((result) => {
                if (result.status === 200) {
                    setStatus(true)
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false)
                    }, 4000)
                }
            }, (error) => {
                setStatus(false)
                setOpen(true);
                setTimeout(() => {
                    setOpen(false)
                }, 4000)

            });
        e.target.reset();
    };

    return (
        <section id='contact_section' >
            <form id="contact" onSubmit={sendEmail} >
                <h1 >Contact</h1>
                <div className="contact-form">
                    <div className='contact-item' >
                        <label htmlFor="name-label">Name</label>
                        <input type="text" name="name" placeholder='Name' required />
                    </div>
                    <div className='contact-item' >
                        <label htmlFor="email-label">E-Mail</label>
                        <input type="email" name="email" placeholder='E-Mail' required />
                    </div>
                    <div className='contact-item' >
                        <label htmlFor="message-label">Your Message</label>
                        <textarea placeholder='Your Message' name="message" id="" cols="30" rows="10" required ></textarea>
                    </div>
                    <div className="contact-item">
                        <button type="submit"> Send </button>
                    </div>
                </div>
            </form>
            <Stack spacing={2} sx={{ width: '100%' }}>

                <Snackbar open={open} autoHideDuration={6000} >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        <h2 className='status-text'>
                            {status ? 'Form is successful !!' : 'Form Error'}
                        </h2>
                    </Alert>
                </Snackbar>
            </Stack>
        </section>
    )
}

export default ContactPage
