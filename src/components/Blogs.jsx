
import Link from 'next/link';
import React from 'react';

const Blogs = ({posts}) => {
    console.log(posts)
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
              <ul className="space-y-2 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.id}className="border p-2 uppercase " >
                    <Link href={`/blog/${post.id}`} className="hover:underline uppercase">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
        </div>
    );
};

export default Blogs;