
import Link from 'next/link';
import React from 'react';

const Blogs = ({posts}) => {
    console.log(posts)
    return (
        <div className='text-center px-6 container mx-auto'>
            <h1 className="text-3xl font-bold my-8 border-b-2 border-r-2 w-48 mx-auto pb-2 rounded-full  ">Blog Posts</h1>
              <ul className="space-y-2 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
                {posts.map((post) => (
                  <li key={post.id}className="border p-2 uppercase  rounded-xl p-2 " >
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