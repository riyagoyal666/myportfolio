// import React from 'react'
// import './contact.css'
// import {MdOutlineEmail} from 'react-icons/md'

// import {BsWhatsapp} from  'react-icons/bs'
// import { useRef } from 'react';
// import emailjs from 'emailjs-com'

// const Contacts = () => {
//   const form = useRef()


//   const sendEmail = (e) => {
//     e.preventDefault();
  
//     emailjs
//       .sendForm('service_rz0y9vb', 'template_8detey7', form.current, 'user_kSaz_8uIYfIf_Ed34')
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
  
//     e.target.reset();
//   };
  
//   return (
//     <section id='contact'>
//       <h5>Get in Touch</h5>
//       <h2>Contact me</h2>

//       <div className="container contact">
//         <div className="contact_options">
//         <article className="contact_option">
//           <MdOutlineEmail className='contact_option-icon' />
//           <h4>Email</h4>
//           <h5>riyagoel037@gmail.com</h5>
//           <a href="mailto:riyagoel037@gmail.com" target='_blank'>Send a message</a>
//         </article>
       
//         <article className="contact_option">
//           <BsWhatsapp className='contact_option-icon' />
//           <h4>WhatsApp</h4>
//           <h5>+917302 ****</h5>
//           <a href="https://api.whatsapp.com/send?phone=7302703085" target='_blank'>Send a message</a>
//         </article>
//         </div>
//         <form ref={form} onSubmit={sendEmail}>
//           <input type="text" name="name" placeholder='Enter Full Name' required />
//           <input type="email" name="email" placeholder='Your Email' required />
//           <textarea name="message" rows="7" placeholder='Message' required></textarea>
//           <button typeof='submit' className='btn btn-primary'>Send</button>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Contacts;





import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form = useRef();

  // Enable EmailJS debug mode for more detailed information
  emailjs.init("user_kSaz_8uIYfIf_Ed34", null, { debug: true });

  const sendEmail = async (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log('Form Data:', form.current);

    if (!form.current) {
      console.error('Form is null or undefined');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_rz0y9vb',
        'template_8detey7',
        form.current,
        'user_kSaz_8uIYfIf_Ed34'
      );

      console.log('Email sent successfully:', result.text);
    } catch (error) {
      console.error('Error sending email:', error.text);
    }

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className='container contact'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>riyagoel037@gmail.com</h5>
            <a href='mailto:riyagoel037@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+917302 ****</h5>
            <a href='https://api.whatsapp.com/send?phone=7302703085' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
