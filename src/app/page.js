import Blogs from "@/components/Blogs";
import Image from "next/image";

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts'); // Handle fetch error
  }
  
  const posts = await res.json();
  return (
    <div className="container mx-auto">
      <Blogs posts={posts}></Blogs>
    </div>
  );
}
