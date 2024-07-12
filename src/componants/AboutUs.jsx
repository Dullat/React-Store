const AboutUs = () => {
  return (
    <div className="p-4">
      <p className="text-3xl font-semibold">Who are we</p>
      <div className="mt-4">
        <p>
          We are the one who let{" "}
          <b className="dark:text-slate-50 text-blue-600">you</b> decide what
          you realy want. Our mission is to serve the user in best way as
          posible.
        </p>
        <p className="opacity-70 mt-4 text-sm">
          WE ENSURE YOU GET PRODUCT ON AFFORDABLE PRICE AND GET DELIVERY ON-TIME
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6 ">
          <div className="bg-slate-700 aspect-square rounded-full max-w-52 grid content-center w-3/4 m-auto">
            <p className="text-center text-lg font-semibold">ON-Time</p>
          </div>
          <div className="bg-slate-700 aspect-square rounded-full max-w-52 grid content-center w-3/4 m-auto">
            <p className="text-center text-lg font-semibold">Trusted</p>
          </div>
          <div className="bg-slate-700 aspect-square rounded-full max-w-52 grid content-center w-3/4 m-auto">
            <p className="text-center text-lg font-semibold">Refund</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
