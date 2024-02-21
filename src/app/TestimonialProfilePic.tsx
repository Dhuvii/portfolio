"use client";
import { Avatar, IAvatar } from "@/components/Avatar";
import { cn } from "@/utilities/cn";
import React, { ComponentProps } from "react";

interface ITestimonialProfilePic extends ComponentProps<"img"> {
  fallback: string;
  wrapperClass?: string;
}

const TestimonialProfilePic = ({
  src,
  alt,
  fallback,
  className,
  wrapperClass,
}: ITestimonialProfilePic) => {
  return (
    <div className={cn("relative size-16", wrapperClass)}>
      <div className="relative z-20">
        <Avatar
          className={className}
          src={src}
          Fallback={() => (
            <div
              className={cn(
                "flex size-16 items-center justify-center rounded-full bg-gray-100 text-base font-medium text-gray-600",
                wrapperClass,
              )}
            >
              {fallback}
            </div>
          )}
          alt={alt || "image"}
        />
      </div>

      <div className="absolute inset-0 z-10 animate-pulse rounded-full bg-gray-600"></div>
    </div>
  );
};

export default TestimonialProfilePic;
