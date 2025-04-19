import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { path } from 'framer-motion/client';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
    const formRef = useRef();
    const variants = {
        initial: { x: 0, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.2 },
        },
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_yfu2moa', 'template_ibn1m1k', formRef.current, {
                publicKey: 'MNSEq5oU0PxR8GkCO',
            })
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Failed to send message.");
                }
            );
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="section container mx-auto text-white py-16 px-4 sm:flex flex-cols gap-10 items-center justify-center"
        >
            {/* Contact Info */}
            <motion.div variants={variants} className="sm:w-1/2 sm:mb-0 mb-20">
                <motion.h1 variants={variants} className="lg:text-7xl text-5xl font-bold mb-4">
                    Let's work together
                </motion.h1>
                <motion.div variants={variants} className="space-y-4 text-lg">
                    <motion.div variants={variants}>
                        <h2 className="font-semibold text-purple-400">Mail</h2>
                        <p className="text-white/80">sumrasamir027@gmail.com</p>
                    </motion.div>
                    <motion.div variants={variants}>
                        <h2 className="font-semibold text-purple-400">Address</h2>
                        <p className="text-white/80">Bhavnagar, Gujarat</p>
                    </motion.div>
                    <motion.div variants={variants}>
                        <h2 className="font-semibold text-purple-400">Phone</h2>
                        <p className="text-white/80">9316102936</p>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Contact Form */}
            <div className="sm:w-1/2 relative z-0">
                <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                >
                    <svg width="400px" height="400px" viewBox="0 0 24 24" fill="none">
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 4, ease: 'easeInOut' }}
                            viewport={{ once: true }}
                            d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"
                            className="stroke-purple-500 stroke-1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>


                <div className='z-50'>

                    <motion.form
                        ref={formRef}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 4, duration: 1 }}
                        className="w-full flex flex-col gap-5"
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <textarea
                            rows={6}
                            placeholder="Message"
                            name="message"
                            required
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md placeholder-white resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-semibold transition duration-300"
                        >
                            Submit
                        </button>
                    </motion.form>
                </div>
            </div>
            <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
        </motion.div>
    );
};

export default Contacts;
