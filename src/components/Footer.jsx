const Footer = () => {
  return (
    <>
      <footer className="w-full bg-primary-1 text-textColors-1 bottom-0 left-0">
        <div className="flex flex-col items-center justify-around h-[230px]">
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline">
              About Us
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
            <form className="">
            <label htmlFor="email" className=" block text-paragraph text-left mx-2 my-2">
              Sign up for our newsletter
            </label >
              <input
              id="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary-1 text-white rounded-r-md hover:bg-secondary-2"
              >
                Sign Up
              </button>
            </form>
          <div className="text-center text-sm texors-2">
            © 2025 Nehan Zafar. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
