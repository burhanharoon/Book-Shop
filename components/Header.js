import React from "react";

export const Header = () => {
  return (
    <div class="navbar shadow-lg bg-white text-neutral-content w-full">
      <div class="flex-1 px-2 mx-2">
        <span class="text-lg font-bold text-black">My Book Shop</span>
      </div>
      <div class="flex-none hidden px-2 mx-2 lg:flex">
        <div class="flex items-stretch text-black">
          <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a class="btn btn-ghost btn-sm rounded-btn">My Books</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Browser</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Community</a>
        </div>
      </div>
      <div class="flex-none pr-2">
        <button class="btn btn-info">Sign up</button>
      </div>
      <div class="flex-none">
        <button class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
