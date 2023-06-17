const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h2 className="text-white text-lg font-semibold mb-4">About</h2>
                <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo elit ac mauris dictum, sit amet rutrum ligula mollis.</p>
              </div>
              <div>
                <h2 className="text-white text-lg font-semibold mb-4">Links</h2>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                  <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
                  <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-lg font-semibold mb-4">Contact</h2>
                <p className="text-gray-300">123 Main Street<br />Hartford, CT 06010<br />Phone: (123) 456-7890<br />Email: Contact@connecticutcodes.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;