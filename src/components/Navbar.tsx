
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

      
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
            <span className="text-white text-sm font-bold">DS</span>
          </div>

          <span className="text-lg font-bold text-slate-800">
            Dev Stack
          </span>
        </div>


        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="font-medium brand-gradient-text">
            Home
          </a>

          <a href="#technologies" className="font-medium text-slate-700">
            Technologies
          </a>

          <a href="#projects" className="font-medium text-slate-700">
            Projects
          </a>

          <a href="#about" className="font-medium text-slate-700">
            About
          </a>

          <a href="#contact" className="font-medium text-slate-700">
            Contact
          </a>
        </div>

      
        <div className="flex items-center gap-5">
          <button className="font-medium text-slate-700">
            Sign In
          </button>

          <button className="brand-gradient text-white font-medium px-5 py-2 rounded-full">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar