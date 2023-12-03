export default function About() {
  return (
    <div>
      <div className="absolute top-[15%] left-[9.5%]">
        <h2 className="text-center text-3xl font-bold leading-normal text-gray-600/50 dark:text-gray-500/50">
          About us
        </h2>

        <hr className="pl-[96em] max-w-sm mx-auto shadow-2xl mt-2" />
      </div>

      <div className="flowbite-container">
        <div className="flowbite-row">
          <div className="flowbite-col-md-12">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg"
                alt="About Us"
                className="w-full mt-[10em] h-[68em] opacity-70"
              />
              <div className="absolute top-[1.2em] left-[10em] w-10/12 text-center text-white p-14 bg-black opacity-80">
                <h1 className="p-[0em] text-4xl font-extrabold text-white-900 dark:text-white">
                  Welcome to HouseRentals
                </h1>
                <p className="text-xl italic  font-semibold text-white-600/75 dark:text-white-500/75 p-[1em]">
                  At HouseRentals, we believe in turning every stay into a
                  memorable experience. Nestled at the intersection of comfort
                  and convenience, we take pride in providing exceptional house
                  rentals that feel like home away from home.
                </p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 mt-0"></hr>
                <h1 className="p-[0em] text-4xl font-extrabold text-white-900 dark:text-white">
                  Our Story
                </h1>
                <p className="text-xl italic  font-semibold text-white-600/75 dark:text-white-500/75 p-[1em]">
                  Founded with a passion for creating spaces where unforgettable
                  moments unfold, HouseRentals emerged from a simple idea: to
                  redefine the way you experience travel. With a commitment to
                  excellence and a genuine love for hospitality, we embarked on
                  a journey to curate a collection of handpicked houses, each
                  chosen for its distinctive charm and character.
                </p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 mt-0"></hr>
                <h1 className="p-[0em] text-4xl font-extrabold text-white-900 dark:text-white">
                  What Sets Us Apart
                </h1>
                <p className="text-xl italic  font-semibold text-white-600/75 dark:text-white-500/75 p-[1em]">
                  Exceptional Properties: Our houses are more than just spaces;
                  they are carefully selected havens designed to cater to the
                  diverse tastes and preferences of our guests. From cozy
                  cottages to modern urban retreats, we offer a range of options
                  to suit every traveler. Personalized Service: At [Your Company
                  Name], we understand that every guest is unique. That's why
                  our dedicated team is committed to delivering personalized
                  service, ensuring that your stay exceeds expectations. Whether
                  you're planning a family vacation or a solo retreat, we are
                  here to make your experience seamless and enjoyable. Local
                  Connections: We believe in the magic of discovering a
                  destination like a local. Our properties are strategically
                  located to provide you with an authentic experience, allowing
                  you to immerse yourself in the culture, history, and charm of
                  each location.
                </p>
                <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 mt-0"></hr>
                <h1 className="p-[0em] text-4xl font-extrabold text-white-900 dark:text-white">
                  Our Commitment to You
                </h1>
                <p className="text-xl italic dfont-semibold text-white-600/75 dark:text-white-500/75 p-[1em]">
                  From the moment you browse our listings to the day you check
                  out, HouseRentals is devoted to making your stay
                  exceptional. We strive to be more than just a house rental
                  site – we are your travel companion, dedicated to creating
                  memories that last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
