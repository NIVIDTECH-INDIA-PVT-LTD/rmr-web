import React, { useState } from "react";
import Image from "next/image";
import ContactImg from "/public/images/contact.jpg";
import OfficeIcon from "/public/images/icons/info_icon-1.png";

const offices = [
    {
        id: 1,
        title: "Registered Office",
        address:
            "Root Market Research, Transport Nagar, Lucknow, UP, 226012, India",
    },
    {
        id: 2,
        title: "Working Office",
        address: "Root Market Research, Kadipur, Gurgaon, Haryana, 228145, India",
    },
    {
        id: 3,
        title: "Office Location",
        address:
            "Root Market Research, Orchid Lake, Bangalore, Karnataka, 560103, India",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};

        if (!formData.name.trim()) tempErrors.name = "Name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Enter a valid email";
        }
        if (!formData.phone) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            tempErrors.phone = "Enter a valid 10-digit phone number";
        }
        if (!formData.company.trim())
            tempErrors.company = "Company name is required";
        if (!formData.message.trim())
            tempErrors.message = "Message cannot be empty";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully 🚀");
            // Api call
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <Image
                    src={ContactImg}
                    alt="About Us"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-24">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-12 text-center">
                    How can we help you?
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {offices.map(({ id, title, address }) => (
                        <div
                            key={id}
                            className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 border border-[#E0E6EF] hover:shadow-lg transition"
                            style={{ boxShadow: "0 0 15px 0 rgba(17, 12, 79, .1)" }}
                        >
                            <div className="w-full h-full flex items-center justify-center mb-4">
                                <Image
                                    src={OfficeIcon}
                                    alt="Office Icon"
                                    width={50}
                                    height={50}
                                    className="object-contain h-35 w-35"
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#244A77] mb-3">
                                {title}
                            </h3>
                            <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed">
                                {address}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-12 text-center">
                        Get a Free Quote
                    </h3>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E6EF] px-4 py-3 rounded-lg shadow-[1px_2px_5px_0px_rgba(242,242,242,1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E6EF] px-4 py-3 rounded-lg shadow-[1px_2px_5px_0px_rgba(242,242,242,1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E6EF] px-4 py-3 rounded-lg shadow-[1px_2px_5px_0px_rgba(242,242,242,1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E6EF] px-4 py-3 rounded-lg shadow-[1px_2px_5px_0px_rgba(242,242,242,1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                                />
                                {errors.company && (
                                    <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-[#E0E6EF] px-4 py-3 rounded-lg shadow-[1px_2px_5px_0px_rgba(242,242,242,1)] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                            ></textarea>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-30 bg-[#244A77] text-white font-medium py-3 rounded-lg hover:bg-[#1b3659] transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
