const Testimonials = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-semibold">Testimonials</p>
      <p className="mt-4">Here is what ppl say about us</p>
      <div className="grid  gap-4 mt-6 ">
        <div className="bg-slate-700 max-w-72 grid w-3/4 m-auto rounded-lg">
          <div className="grid grid-cols-[25%_75%] p-4 h-fit gap-4">
            <div className="w-full bg-slate-500 aspect-square rounded-full"></div>
            <div className="flex flex-col justify-center">
              <p className="font-semibold">Aurora</p>
              <p className="opacity-70 text-sm">Regular customer</p>
            </div>
          </div>
          <div className="p-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              neque dolores eum quasi facilis qui accusamus culpa cum doloribus
              magnam vitae maiores assumenda iure quam eveniet, ad, consequuntur
              laboriosam ipsum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
