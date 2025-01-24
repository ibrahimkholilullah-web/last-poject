import React from 'react';

const page =async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts'); // Handle fetch error
  }
  
  const post = await res.json(); 
  console.log(post)
    return (
        <div className="container mx-auto p-4 min-h-screen border-2 flex justify-center items-center text-center ">
        <div className='w-8/12 mx-auto'>
        <p>Id No : {post.id}</p>
        <h1 className="text-2xl font-bold uppercase">{post.title}</h1>
        <p className="mt-4">{post.body}</p>
        </div>
      </div>
    );
};

export default page;