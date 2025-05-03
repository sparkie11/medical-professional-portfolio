'use client';

import { useState } from 'react';
import Link from 'next/link';
import blogs from '../../data/blogs.json';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredBlogs = selectedCategory === 'all'
    ? blogs.blogs
    : blogs.blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Medical Blog</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="all">All Categories</option>
          {blogs.categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
            <div>
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{blog.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600">{blog.author}</span>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;