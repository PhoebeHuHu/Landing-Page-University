import React from 'react'
import './contact.css'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c6025c74-4d80-44c9-bdc9-b24ca18a259b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aliquid hic obcaecati culpa! Ullam inventore quam dolore quibusdam in doloremque natus! Quaerat maxime exercitationem omnis est asperiores, iusto esse fuga.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />contact@university.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="" />77 Nassacgysetts Ave, Cambridge<br />MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name='name' id='name' placeholder='Enter your name' required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' placeholder='Enter your email' required />
                    <label htmlFor="message">Write your messages here</label>
                    <textarea name="message" rows='6' id='message' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact