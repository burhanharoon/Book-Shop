import React from "react";

export const Banner = () => {
  return (
    <div className="flex bg-base-300 w-full h-96">
      {/* Text */}
      <div className="flex flex-col w-2/4">
        <div className="flex flex-col">
          <span>2021 Reading Challenge</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            similique ut cum commodi dolore voluptatibus modi error fugiat,
            autem rem nulla accusantium. Nemo nostrum quasi a praesentium?
            Similique, at quo!
          </span>
        </div>

        {/* Button */}
        <div className="flex">
          <button class="btn btn-info">Learn More</button>{" "}
        </div>

        {/* Soical Icon */}
        <div className="flex">
          <a href="">
            <svg
              class="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a href="">
            <svg
              class="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </a>

          <a href="">
            <svg
              class="h-6 w-6 bg-info"
              viewBox="0 0 24 24"
              fill="text-info"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};