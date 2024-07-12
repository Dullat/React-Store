import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-semibold">Testimonials</p>
      <p className="mt-4">Here is what ppl say about us</p>
      <div className="flex text-white gap-4 lg:overflow-auto no-scrollbar">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
