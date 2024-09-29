const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-xl md:text-2xl relative font-extrabold text-primary dark:text-primary dark:after:bg-primary after:bg-lightprimary after:absolute after:h-1 after:w-0 after:-bottom-1 md:after:-bottom-3 after:left-0 hover:after:w-full after:transition-all after:duration-400 cursor-pointer">
          Code Editor
        </div>
      </div>
    </div>
  );
};

export default Navbar;
