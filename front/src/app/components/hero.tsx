export const Hero: React.FC = () => {
  return (
    <div className="h-[calc(100vh-128px)] bg-red-500 bg-center bg-cover bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(/background.jpeg)] rounded-2xl mx-6 my-8 relative flex flex-col gap-y-8 justify-center px-8 sm:px-16 items-start">
      <h1 className="text-white text-3xl tracking-wider font-semibold w-full leading-tight sm:text-6xl sm:w-1/2">
        Discover the Heart of Ulaanbaatar.
      </h1>
      <button className="btn btn-primary text-xs sm:text-base font-bold text-slate-50">
        See plans for your next date
      </button>
    </div>
  );
};
