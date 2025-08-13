import React from "react";
import Image from "next/image";
import blog1 from "images/blogOne.png";
import blog2 from "images/blog2.png";
import blog3 from "images/blog3.png";
import calendar from "images/icons/calendar.svg";

const blogPosts = [
  {
    image: blog1,
    date: "20 June 2025",
    title: "5 Essential Strategies For Consult Sustainable Of Business Growth",
    icon: calendar,
    link: "#",
  },
  {
    image: blog2,
    date: "20 June 2025",
    title: "The Importance For Networking For Business Consulting Success",
    icon: calendar,
    link: "#",
  },
  {
    image: blog3,
    date: "20 June 2025",
    title: "Building For Business Consulting Strategies Navigate Uncertainty",
    icon: calendar,
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 md:px-24 bg-white w-full">
      <div className="w-full text-center">
        <h2 className="font-figtree font-semibold text-[21px] leading-[100%] tracking-[0%] align-middle text-[#244A77] mb-2">
          Blog
        </h2>
        <h1 className="text-[39px] font-semibold leading-[100%] text-[#636262] mb-12">
          Stay Ahead With Our Articles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0px_0px_15px_0px_#A8A7A740] flex flex-col items-center text-center"
            >
              <div className="w-full h-auto bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-left">
                <div className="flex items-center mb-2">
                  <Image
                    src={post.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    className="mr-2 inline-block"
                  />
                  <p className="font-figtree font-medium text-[16px] leading-[100%] text-[#5A5A5A]">
                    {post.date}
                  </p>
                </div>

                <h3 className="font-figtree font-semibold text-[22px] leading-[100%] text-[#000] mb-4">
                  {post.title}
                </h3>

                <a
                  href={post.link}
                  className="font-semibold text-[16px] leading-[100%] align-middle underline text-[#CD4D4A]"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
