import React from "react";
import AboutImg from "/public/images/about.jpg";
import Image from "next/image";

const About = () => {
    return (
        <>
            <div className="flex justify-center">
                <Image
                    src={AboutImg}
                    alt="About Us"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out"
                    priority
                />
            </div>

            <section className="py-16 px-4 md:px-24 bg-white w-full">

                <h2 className="text-[#ed3b55] font-bold text-[21px] mb-2">WHO WE ARE</h2>
                {/* WHO WE ARE */}
                <div className="mb-8">
                    <h2 className="text-[36px] font-bold text-[#244A77] mb-4">Leading organization in market research</h2>
                    <p className="font-normal text-[16px] align-middle text-[#595959] leading-[30px]">
                        We are one of the leading organisation in market research, analysis & forecasting and consulting services provider for Fortune 500 companies. Our purpose is to provide essential statistical surveying information for your organization or association to build trust and solve important problems. <br />
                        Leverage the best of our research analysts and industry experts who hold a keen interest and enviable expertise of global, regional, and local market intelligence.
                    </p>
                </div>

                {/* WHAT WE DO */}
                <div className="mb-8">
                    <h2 className="text-[36px] font-bold text-[#244A77] mb-4">WHAT WE DO</h2>
                    <p className="font-normal text-[16px] align-middle text-[#595959] leading-[30px]">
                        We are well known to deliver high quality market research report services that cover all industry verticals, including chemicals and materials, healthcare, food and beverages, information & technology and consumer goods.<br />
                        RMR aim is to help clients to develop a set of practical and interlocking abilities and capabilities that reveal and maximize profitable use of data appropriate to their situation. We make sense of opportunities, gaps, complex situations, opinions, and information using our experienced skills and verified methodologies
                    </p>
                </div>

                {/* WHY CHOOSE US */}
                <div className="mb-8">
                    <h2 className="text-[36px] font-bold text-[#244A77] mb-4">WHY CHOOSE US</h2>
                    <p className="font-normal text-[16px] align-middle text-[#595959] leading-[30px]">
                        Our research and consulting services primarily focused to meet clients specific requirements in order to explore their practical growth strategies, strategic objective insights, and recommendations. RMR works with business leaders and market frontline users to develop internal processes and culture
                        that uses insights for profitable decision making.<br />

                        We identify and collect both relevant internal and external research data, and help upgrade necessary IT tools & infrastructures. We strategies our team to focus on speed to quick deliver consumer insights, sometimes in less than 10 days. We develop prediction and optimization models to deliver meaningful insights from raw and complex data sets<br />

                        We are highly committed to provide best possible solutions and recommendations to all our customers. We do arrangements for our clients to get connected with our skilled analyst who understand their research requirement accurately We have designed our business to take care of
                        clients business, based on their priority.
                    </p>
                </div>

                {/* OUR MISSION */}
                <div className="mb-8">
                    <h2 className="text-[36px] font-bold text-[#244A77] mb-4">OUR MISSION</h2>
                    <p className="font-normal text-[16px] align-middle text-[#595959] leading-[30px]">
                        Our mission is clear. We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage. We <br/>
                        believe in shaping the future. Together.
                    </p>
                </div>
            </section>

        </>
    );
};

export default About;
