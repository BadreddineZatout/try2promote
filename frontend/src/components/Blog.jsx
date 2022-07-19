import { useState } from "react";
import BlogCard from "./BlogCard";

function Blog() {
  const [blogs, setBlogs] = useState([1, 2, 3]);
  return (
    <div>
      <h1 className="ml-20 font-rambla text-3xl">Read our latest blog posts</h1>
      <div className="mx-auto flex w-11/12 flex-nowrap justify-center gap-x-4">
        {blogs.map((blog) => (
          <BlogCard key={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
