import React from "react";

const Testimonials = () => {
  return (
    <div className="pt-32 p-4  md:p-28">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Testimonials
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Danny Moonsoon",
            title: "CEO & Founder",
            testimonial: "I found my dream job within days of using ApplyAI.",
            imageUrl: "/Image/diimeji.jpg",
          },
          {
            name: "Abby Hollis",
            title: "Lead at Uniting VIC",
            testimonial:
              "Thanks to ApplyAI, I landed a job that perfectly matches my skills.",
            imageUrl: "/Image/Mykala.jpg",
          },
          {
            name: "Omar Farooq",
            title: "VP of Product Design",
            testimonial:
              "Thanks to ApplyAI, I landed a job that perfectly matches my skills.",
            imageUrl: "/Image/DomTate.jpg",
          },
        ].map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100 + 100}`}
            className="bg-slate-200 rounded-xl shadow-md p-6">
            <div className="flex flex-col items-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
              />
              <h5 className="text-lg font-bold">{item.name}</h5>
              <p className="text-sm mb-2">{item.title}</p>
              <p className="text-sm text-center text-slate-600">
                {item.testimonial}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
