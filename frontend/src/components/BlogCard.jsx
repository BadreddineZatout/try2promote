import React from "react";
import blog_pic from "../assets/blog-pic.png";

function BlogCard() {
  return (
    <div className="flex w-1/4 flex-col gap-y-5 px-10 pt-10 pb-20 font-rambla shadow-xl">
      <div>
        <img src={blog_pic} />
      </div>
      <div className="text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className="flex justify-between">
        <div>May 20th 2020</div>
        <div className="font-semibold text-Chestnut">Read more</div>
      </div>
    </div>
  );
}

export default BlogCard;
