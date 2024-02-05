"use client";
import { Avatar, IAvatar } from "@/components/Avatar";
import React, { ComponentProps } from "react";

interface ITestimonialProfilePic extends ComponentProps<"img"> {
  fallback: string;
}

const TestimonialProfilePic = ({
  src,
  alt,
  fallback,
  className,
}: ITestimonialProfilePic) => {
  return (
    <Avatar
      className={className}
      src={src}
      Fallback={() => (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-base font-medium text-gray-600">
          {fallback}
        </div>
      )}
      alt={alt || "image"}
    />
  );
};

export default TestimonialProfilePic;
