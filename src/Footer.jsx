const Footer = () => {
  return (
    <div className="flex items-center justify-center py-8 bg-transparent dark:bg-[#181818]">
      <div className="text-lg font-bold text-gray-800 dark:text-gray-300 relative cursor-pointer group">
        <span className="relative z-10 dark:group-hover:text-primary group-hover:text-lightprimary transition duration-300">
          Created By Samir Niroula.
        </span>
        <span
          className="absolute bottom-0 left-0 w-full h-[2px] dark:bg-primary bg-lightprimary transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
          aria-hidden="true"
        ></span>
      </div>
    </div>
  );
};

export default Footer;
