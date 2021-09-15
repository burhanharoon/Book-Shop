import React from "react";

export const BestSellers = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full p-10">
        {/* Heading */}
        <div className="text-3xl font-bold">
          <span>Best Sellers</span>
        </div>
        {/* View More Button */}
        <div>
          <a href="#">View More</a>
        </div>
      </div>

      {/* Cards */}
      <div className=" mx-auto lg:flex justify-center grid grid-cols-2 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3">
        <div class="card bordered  bg-light-brown lg:m-5 md:m-4">
          <figure>
            <img src="https://www.getnow.pk/wp-content/uploads/2018/03/The-fault-in-our-stars-433x433.png" />
          </figure>
          <div class="card p-5">
            <div className="flex justify-between">
              <h2 class="font-semibold">The Fault in Our Stars</h2>
              <span className="pl-6 font-bold">$25</span>
            </div>
            <p className="text-xs">John Green</p>
            <div class="justify-between card-actions flex items-center">
              <div className="flex gap-2 items-center">
                <i className="fas fa-star text-warning" />
                <span>4.5</span>
              </div>
              <button class="btn btn-info">Add</button>
            </div>
          </div>
        </div>

        <div class="card bordered bg-light-brown lg:m-5 md:m-4">
          <figure>
            <img src="https://www.getnow.pk/wp-content/uploads/2018/03/Subtle-Art-Of-Not-Giving-A-FCk-433x433.png" />
          </figure>
          <div class="card p-5">
            <div className="flex justify-between">
              <h2 class="font-semibold">The Subtle Art of Not Giving a F*uk</h2>
              <span className="pl-6 font-bold">$25</span>
            </div>
            <p className="text-xs">Mark Manson</p>
            <div class="justify-between card-actions flex items-center">
              <div className="flex gap-2 items-center">
                <i className="fas fa-star text-warning" />
                <span>4.5</span>
              </div>
              <button class="btn btn-info">Add</button>
            </div>
          </div>
        </div>

        <div class="card bordered bg-light-brown lg:m-5 md:m-4">
          <figure>
            <img src="https://www.getnow.pk/wp-content/uploads/2018/03/7-433x433.png" />
          </figure>
          <div class="card p-5">
            <div className="flex justify-between">
              <h2 class="font-semibold">7 Habits of Highly Effective People</h2>
              <span className="pl-6 font-bold">$25</span>
            </div>
            <p className="text-xs">Jim Collins</p>
            <div class="justify-between card-actions flex items-center">
              <div className="flex gap-2 items-center">
                <i className="fas fa-star text-warning" />
                <span>4.5</span>
              </div>
              <button class="btn btn-info">Add</button>
            </div>
          </div>
        </div>

        <div class="card bordered bg-light-brown lg:m-5 md:m-4">
          <figure>
            <img src="https://www.getnow.pk/wp-content/uploads/2018/03/The-Deathly-Hallows-433x433.png" />
          </figure>
          <div class="card p-5">
            <div className="flex justify-between">
              <h2 class="font-semibold">Harry Potter & The Deathly Hallows</h2>
              <span className="pl-6 font-bold">$25</span>
            </div>
            <p className="text-xs">Dave Pilky</p>
            <div class="justify-between card-actions flex items-center">
              <div className="flex gap-2 items-center">
                <i className="fas fa-star text-warning" />
                <span>4.5</span>
              </div>
              <button class="btn btn-info">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
