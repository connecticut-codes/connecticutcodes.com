import React from 'react';

const postsData = [
  {
    id: 'post-1',
    image: './example-image',
    title: 'Example Post',
    excerpt: 'This is a sample blog post'
  }
]

const Blog = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postsData.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={post.image} alt={post.title} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

