import React from 'react';
import Form from '~/components/Form';

export default function ContactPage() {
    return (
        <div>
    <div className="bg-white min-h-screen py-12 !pl-5">
    <div className="max-w-7xl mx-auto flex flex-col gap-10 tracking-wider">
                    <p className='!text-3xl font-bold text-center'>Contact</p>
                    <div>
                        <h1 className="text-4xl font-bold">CONTACT INFORMATION</h1>
                        <p>We strive for optimal customer satisfaction. Please do not hesitate to contact our specialized customer service team via the contact details above or by filling out the contact form below. Your feedback is highly valuable to us. We aim to respond within 48 hours.</p>
                    </div>
                    <div >
                        <h2 className="!text-2xl font-semibold">{import.meta.env.VITE_COMPANY_NAME || 'Company Name Not Set'}
</h2>
                        <p className='flex flex-col gap-2'>
                            <span> Address: {import.meta.env.VITE_COMPANY_ADDRESS || 'Address Not Set'}
</span>
                            <span> Email: <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL || 'Email Not Set'}`}
 className="underline underline-offset-2">{import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL || 'Email Not Set'}
</a>   </span>
                            <span>
                                Phone: <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE || 'Phone Not Set'}`}
 className="underline underline-offset-2"> {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE || 'Phone Not Set'}</a>
                            </span>
                            <span>
                                Website: <a href="https://happyssnouts.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{import.meta.env.VITE_STORE_NAME || 'Store name Not Set'}</a>
                            </span>
                            <span>
                                Opening Hours: Monday to Friday - 9:00 AM to 5:00 PM
                            </span>
                        </p>
                    </div>
                    <div >
                        <h2 className="!text-2xl font-semibold">QUICK LINKS</h2>
                        <p className='flex flex-col gap-2'>
                            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL || 'Email Not Set'}`}
 className="underline underline-offset-2">Frequently Asked Questions</a>
                            <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE || 'Phone Not Set'}`}
 className=" underline underline-offset-2">Privacy Policy</a>
                            <a href="https://happyssnouts.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Terms of service</a>
                        </p>
                    </div>
                </div>
            <Form />
            </div>
        </div>
    );
} 