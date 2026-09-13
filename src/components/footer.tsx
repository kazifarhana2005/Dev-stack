

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
        
        
        <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              DS
            </div>
            <span className="font-bold text-lg bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Dev Stack
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-sm">
            Curated tools, technologies, and resources for developers to build great software.
          </p>
          <div className="flex space-x-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 transition">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition">LinkedIn</a>
          </div>
        </div>

  
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-4">PRODUCT</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition">Home</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Technologies</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-4">COMPANY</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition">About</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Careers</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-slate-900 text-sm mb-4">LEGAL</h4>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition">Terms of Service</a></li>
          </ul>
        </div>

      </div>

     
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-slate-600 transition">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}