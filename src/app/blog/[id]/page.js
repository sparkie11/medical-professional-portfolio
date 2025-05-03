'use client';

import { useParams } from 'next/navigation';
import blogs from '../../../data/blogs.json';

const BlogPostPage = () => {
  const { id } = useParams();
  const blog = blogs.blogs.find(blog => blog.id === id);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{blog.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
            <span className="mx-2">•</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">{blog.content}</p>
        </div>

        {blog.references && blog.references.length > 0 && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">References</h2>
            <ul className="list-disc pl-5">
              {blog.references.map((ref, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {ref.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </div>
  );
};

export default BlogPostPage;