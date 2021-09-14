import React from "react";

export const AnotherBanner = () => {
  return (
    <div>
      <div className="flex bg-light-brown w-full h-96">
        <div className="flex justify-center w-2/4">
          <img src="/book.png" alt="" />
        </div>
        {/* Text */}
        <div className="flex flex-col w-2/4 gap-6 p-16">
          <span className="text-3xl font-bold text-navy-blue">
            Deals on Great Reads for 2020
          </span>
          <div className="flex flex-col text-navy-blue">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              similique ut cum commodi dolore voluptatibus modi error fugiat,
              autem rem nulla accusantium. Nemo nostrum quasi a praesentium?
              Similique, at quo!
            </span>
          </div>

          {/* Button */}
          <div className="flex">
            <button class="btn btn-info">View More</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
