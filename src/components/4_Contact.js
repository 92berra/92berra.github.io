import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        formData.append('service_id', 'service_174kouc');
        formData.append('template_id', 'template_q2p4kbm');
        formData.append('user_id', 'Y_d2L4V_yQ40dEvrj');

        fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
            method: 'POST',
            body: formData,
        })
        .then((response) => {
            if (response.ok) {
                alert('Success');
            } else {
                return response.json().then((error) => {
                    throw new Error(error);
                });
            }
        })
        .catch((error) => {
            alert('Failed ' + error.message);
        });
    };

    return (
        <div >
            <h1 className='ContentTitle'>CONTACT</h1>
            <div align='center'>
                <br/>
                Feel free to contact me! 😍
            </div>
            <div className="form-wrap my-4 p-4">
            <form ref={form} onSubmit={sendEmail} style={{ width: '100%' }} id="contact-form">
                <div id="tagArea" style={{ padding: '0 4px' }}></div>
                <div className="form-floating mb-3" style={{ maxWidth: '70%', margin: 'auto'}}>
                    <input type="text" className="form-control" id="inputName" name="name" aria-describedby="emailHelp" placeholder="Your name" />
                    <label htmlFor="inputName" className="form-label">Name</label>
                </div>
                <div className="form-floating mb-3" style={{ maxWidth: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <input type="email" className="form-control" id="inputEmail" name="email" aria-describedby="emailHelp" placeholder="Your email address" />
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3" style={{ maxWidth: '70%', margin: 'auto'}}>
                    <textarea className="form-control" style={{ height: '13rem', resize: 'none' }} name="message" id="floatingTextarea" placeholder="Comments"></textarea>
                    <label htmlFor="floatingTextarea">Message</label>
                </div>
                <div className="nav justify-content-center px-2">
                    <button type="submit" name="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
            <br/>
        </div>
        <br/>
        </div>
    );
}
