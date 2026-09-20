import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const usmanWaheed = `${import.meta.env.BASE_URL}usman.jpg`;
const naeemAnwar  = `${import.meta.env.BASE_URL}Naeem.jpg`;
const sherAlam = `${import.meta.env.BASE_URL}sher.jpg`;
const qasim = `${import.meta.env.BASE_URL}qasim.jpg`;

const testimonials = [
{
  quote:
    "Working with Zohaib has been a great experience. His dedication to frontend development, attention to detail, and ability to turn designs into responsive, high-quality web experiences make him a valuable member of the team.",
  author: "Usman Waheed",
  role: "Co-Founder, Coding Caliber",
  avatar: usmanWaheed,
},
  {
  quote:
    "Zohaib is a very hardworking, dedicated, and committed professional. His passion for learning, willingness to take on challenges, and consistent effort truly stand out. I have no doubt that with his dedication and determination, InshaAllah, he will achieve all of his goals and reach great heights in his career.",
  author: "Naeem Anwar",
  role: "Founder, Coding Caliber",
  avatar: naeemAnwar,
},
  {
  quote:
    "Zohaib has a strong ability to understand requirements, adapt to new challenges, and turn ideas into practical solutions. What stands out most is his willingness to take responsibility and keep improving with every project. He has shown great potential as a developer, and I look forward to seeing how far he takes his career.",
  author: "Sher Alam",
  role: "Founder, ZNZ Technologies",
  avatar: sherAlam,
},
  {
  quote:
    "During his time with us, Zohaib consistently demonstrated a strong learning mindset and a genuine interest in improving his craft. He was always open to feedback, willing to take on new challenges, and committed to doing his best work. I was pleased to see his growth and professionalism throughout his time at CCJK Technologies.",
  author: "Qasim",
  role: "Manager, CCJK Technologies",
  avatar: qasim,
},
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};