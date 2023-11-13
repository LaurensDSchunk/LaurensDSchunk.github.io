import { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState("");
  const currentUrl = window.location.href;

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };

  const textRows = message.split('\n').length;

  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="477e033b-55a0-4e22-923f-ec030cd12c9e"/>
        <input type="text" name="name" placeholder='Name' required />
        <input type="email" name="email" placeholder='Email' required />
        <textarea rows={textRows} placeholder='Message' name="message" required onChange={handleTextChange} value={message}></textarea>
        <div className="h-captcha" data-captcha="true"></div>
        <button type="submit">Send</button>
        <input type="hidden" name="redirect" value={currentUrl} />
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </div>
  )
}

export default Contact;