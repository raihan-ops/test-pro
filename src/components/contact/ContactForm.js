"use client";

import Spinner from "@/components/common/Spinner";
import {useState} from "react";

const ContactForm = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        // Add your form submission logic here

    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8"
        >
            <div className="mb-4">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Please enter your name"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    aria-label="name"
                    aria-required={true}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Please enter your email"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    aria-label="email"
                    aria-required={true}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Please enter message here"
                    rows="4"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    aria-label="message"
                    aria-required={true}
                />
            </div>

            <div className="mb-4">
                <button
                    type="submit"
                    className="default-btn flex-center w-full bg-emerald-700 text-white hover:bg-emerald-600"
                >
                    {loading && <Spinner/>}
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
