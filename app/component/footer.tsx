import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-600 pt-8 pb-6 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between text-center lg:text-left">
          <div className="mb-6 lg:mb-0 lg:w-1/2 px-4">
            <h4 className="text-3xl font-semibold mb-2">Let's keep in touch!</h4>
            <p className="  mb-4">
              Find us on any of these platforms, we respond in 1-2 business days.
            </p>
            <div className="flex justify-center lg:justify-start gap-2">
              <img src="images/logo.png" alt="" style={{ height: '100px', width: '100px' }} />
            </div>
          </div>

          <div className="flex flex-wrap lg:w-1/2 px-4 justify-center lg:justify-end gap-8">
            <div>
              <h5 className="uppercase  font-semibold mb-2">Useful Links</h5>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Github</a></li>
                <li><a href="#" className="hover:underline">Free Products</a></li>
              </ul>
            </div>
            <div>
              <h5 className="uppercase font-semibold mb-2">Other Resources</h5>
              <ul className=" space-y-1">
                <li><a href="#" className="hover:underline">MIT License</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-sm ">
          &copy; {new Date().getFullYear()} &nbsp; 
         Mahmadul Hasan
        </div>
      </div>
    </footer>
  );
};

export default Footer;
