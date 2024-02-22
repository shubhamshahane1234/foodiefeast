import React from "react";
import aboutus_img from "../../public/Assets/aboutus-img.jpg";

const About = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">
          About Our Food Ordering App
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={aboutus_img}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Welcome to our food ordering app, your ultimate destination for
              ordering delicious meals conveniently from your favorite local
              restaurants.
            </p>
            <p className="text-lg mb-4">
              Our mission is to connect food lovers with the best eateries in
              town, providing a seamless and enjoyable experience from ordering
              to delivery.
            </p>
            <p className="text-lg mb-4">
              With our user-friendly interface, you can browse through a wide
              selection of cuisines, view restaurant menus, and place orders
              effortlessly. Whether you're craving Italian pasta, mouthwatering
              sushi, or a hearty burger, we've got you covered.
            </p>
            <p className="text-lg mb-4">
              We prioritize quality and reliability, partnering only with
              top-rated restaurants known for their exceptional food and
              service. Our dedicated team works tirelessly to ensure that your
              orders are delivered promptly and accurately, so you can enjoy
              your favorite meals without any hassle.
            </p>
            <p className="text-lg mb-4">
              Thank you for choosing our food ordering app. We're committed to
              enhancing your dining experience and bringing culinary delights
              straight to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
