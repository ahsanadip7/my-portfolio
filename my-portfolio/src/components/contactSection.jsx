const ContactSection = () => {
    return (
      <div className="pt-10 bg-black">
        <div className="bg-gray-900 text-white p-8 md:p-12 w-11/12 mx-auto rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">Contact Information</h1>
  
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">Email:</span>
            <a
              href="mailto:ahsanadip7@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              ahsanadip7@gmail.com
            </a>
          </div>
  
          {/* Phone Number */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">Phone:</span>
            <a
              href="tel:+8801780924406"
              className="text-blue-400 hover:text-blue-300"
            >
              +8801780924406
            </a>
          </div>
  
          {/* WhatsApp Number (Optional) */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">WhatsApp:</span>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
               +8801780924406
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ContactSection;
  