import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = ({target: {name, value}}) => {
    setForm({...form, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
          'service_2riuhks',
          'template_obrb7oh',
          {
            from_name: form.name,
            to_name: 'Luciano',
            from_email: form.email,
            to_email: 'hi@lucianomb.it',
            message: form.subject + ' | ' + form.message
          },
          'tZF0ySLbTUgh0BLcL'
      )

      setLoading(false);

      alert('Message sent successfully!');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);

      console.error(error);

      alert('Oops my bad. Something went wrong. Please try again later or send an email to hi@lucianomb.it');
    }

  }

  return <div className='h-full bg-primary/30'>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      {/*text & form*/}
      <div className="flex flex-col w-full max-w-[700px]">
        {/*text*/}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'>
          Let&apos;s <span className='text-accent '>connect.</span>
        </motion.h2>
        {/*form*/}
        <motion.form ref={formRef} onSubmit={handleSubmit}
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto' action="">
          {/*input group*/}
          <div className="flex gap-x-6 w-full">
            <input
              name='name'
              value={form.name}
              onChange={handleChange}
              required
              type="text" placeholder='Name' className='input'/>
            <input
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              type="email" placeholder='Email' className='input'/>
          </div>
          <input
            name='subject'
            value={form.subject}
            onChange={handleChange}
            required
            type="text" placeholder='Subject' className='input'/>
          <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Message" className='textarea'></textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
