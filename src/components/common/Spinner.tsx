const Spinner = () => {
  return (
    <div className="flex">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full absolute
border-8 border-solid border-gray-200"
        ></div>
        <div
          className="w-12 h-12 rounded-full animate-spin absolute
border-8 border-solid border-yellow-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
