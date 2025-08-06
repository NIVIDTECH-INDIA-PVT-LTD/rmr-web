import React from 'react';
import Image from 'next/image';
import Blog1 from '/public/images/blog1.png';
import Blog2 from '/public/images/blog2.png';
import Blog3 from '/public/images/blog3.png';

// Blog posts data array
const blogPosts = [
  {
    image: Blog1,
    date: '20 June 2025',
    title: '5 Essential Strategies For Consult Sustainable Of Business Growth',
    link: '#',
  },
  {
    image: Blog2,
    date: '20 June 2025',
    title: 'The Importance For Networking For Business Consulting Success',
    link: '#',
  },
  {
    image: Blog3,
    date: '20 June 2025',
    title: 'Building For Business Consulting Strategies Navigate Uncertainty',
    link: '#',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 px-4 md:px-30 bg-white w-full">
      <div className="w-full text-center">
        {/* Main Heading */}
        <h2 className="text-lg font-semibold text-blue-600 mb-2">Blog</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-12">Stay Ahead With Our Articles</h1>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-0">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg overflow-hidden">
                <Image src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-blue-600 text-sm mb-2">{post.date}</p>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h3>
              <a href={post.link} className="text-red-600 hover:text-red-700 font-medium">
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
