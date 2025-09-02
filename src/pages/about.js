import React, { useState } from "react";
import AboutImg from "/public/images/about.jpg";
import Image from "next/image";

const About = () => {
    const cards = [
        {
            id: 1,
            title: "Published 1000+ Reports",
            desc: "Published over 1,000 quality market research report to cater high growth niche market research.",
            icon: "/images/icons/about-icon-3.png",
        },
        {
            id: 2,
            title: "12+ years of expertise",
            desc: "We have 12+ years of expertise in business intelligence",
            icon: "/images/icons/about-icon-2.png",
        },
        {
            id: 3,
            title: "100+ Team Experts",
            desc: "We have 100+ professional market experts in our team",
            icon: "/images/icons/about-icon-1.png",
        },
    ];

    const sections = [
        {
            id: 1,
            heading: "WHAT WE DO",
            desc: `We are well known to deliver high quality market research report services that cover all industry verticals, including chemicals and materials, healthcare, food and beverages, information & technology and consumer goods.
RMR aim is to help clients to develop a set of practical and interlocking abilities and capabilities that reveal and maximize profitable use of data appropriate to their situation. We make sense of opportunities, gaps, complex situations, opinions, and information using our experienced skills and verified methodologies`,
        },
        {
            id: 2,
            heading: "WHY CHOOSE US",
            desc: `Our research and consulting services primarily focused to meet clients specific requirements in order to explore their practical growth strategies, strategic objective insights, and recommendations. RMR works with business leaders and market frontline users to develop internal processes and culture that uses insights for profitable decision making.
We identify and collect both relevant internal and external research data, and help upgrade necessary IT tools & infrastructures. We strategies our team to focus on speed to quick deliver consumer insights, sometimes in less than 10 days. We develop prediction and optimization models to deliver meaningful insights from raw and complex data sets
We are highly committed to provide best possible solutions and recommendations to all our customers. We do arrangements for our clients to get connected with our skilled analyst who understand their research requirement accurately We have designed our business to take care of clients business, based on their priority.`,
        },
        {
            id: 3,
            heading: "OUR MISSION",
            desc: `Our mission is clear. We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage. We 
believe in shaping the future. Together.`,
        },
    ];

    const formFields = [
        { id: "name", type: "text", placeholder: "Full Name" },
        { id: "email", type: "email", placeholder: "Email" },
        { id: "phone", type: "tel", placeholder: "Phone" },
        { id: "subject", type: "text", placeholder: "Subject" },
    ];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        formFields.forEach((field) => {
            if (!formData[field.id].trim()) {
                newErrors[field.id] = `${field.placeholder} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log("Form submitted ✅", formData);
            alert("Form submitted successfully!");
            setFormData({ name: "", email: "", phone: "", subject: "" });
        }
    };


    return (
        <>
            {/* Top Image */}
            <div className="flex justify-center">
                <Image
                    src={AboutImg}
                    alt="About Us"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            <section className="py-12 sm:py-16 px-4 sm:px-8 lg:px-24 bg-white w-full">
                <h2 className="text-[#CD4D4A] font-bold text-lg sm:text-xl mb-2">WHO WE ARE</h2>

                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-4">
                        Leading organization in market research
                    </h2>
                    <p className="text-[#5A5A5A] text-sm sm:text-base lg:text-lg font-medium whitespace-pre-line leading-relaxed">
                        We are one of the leading organisation in market research, analysis & forecasting and consulting services provider for Fortune 500 companies. Our purpose is to provide essential statistical surveying information for your organization or association to build trust and solve important problems. <br />
                        Leverage the best of our research analysts and industry experts who hold a keen interest and enviable expertise of global, regional, and local market intelligence.
                    </p>
                </div>

                {sections.map((sec) => (
                    <div key={sec.id} className="mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77] mb-4">
                            {sec.heading}
                        </h2>
                        <p className="text-[#5A5A5A] text-sm sm:text-base lg:text-lg font-medium whitespace-pre-line leading-relaxed">
                            {sec.desc}
                        </p>
                    </div>
                ))}
            </section>

            <div className="pb-12 sm:pb-16 px-4 sm:px-8 lg:px-24 mx-auto">
                <div
                    className="flex flex-col lg:flex-row bg-white/90 transition-all duration-300 rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 0 15px 0 rgba(17, 12, 79, .1)" }}
                >
                    <div className="flex-1 flex flex-col gap-6 px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77]">Nurturing Strategies</h3>
                        <p className="text-[#5A5A5A] text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                            Cover industry ecosystem include syndicate research, CxO report consulting and market tracking
                        </p>

                        {cards.map((card) => (
                            <div
                                key={card.id}
                                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
                            >
                                <img src={card.icon} alt={card.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                                <div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#244A77]">{card.title}</h3>
                                    <p className="text-[#5A5A5A] text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex-1 bg-[#F6FAFF] px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#244A77]">Get Free Quote</h2>
                        <p className="mt-2 mb-6 text-[#5A5A5A] text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                            From banking and insurance to wealth management and securities distribution financial
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {formFields.map((field) => (
                                <div key={field.id} className="flex flex-col">
                                    <input
                                        type={field.type}
                                        name={field.id}
                                        placeholder={field.placeholder}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        className="p-3 border-none rounded-md placeholder:text-[#a5a4a4] bg-white focus:outline-none focus:ring-2 focus:ring-[#244A77]"
                                    />
                                    {errors[field.id] && (
                                        <span className="text-red-500 text-sm mt-1">{errors[field.id]}</span>
                                    )}
                                </div>
                            ))}
                            <button
                                type="submit"
                                className="bg-[#244A77] hover:bg-blue-900 text-white font-semibold py-3 rounded-lg mt-2 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
