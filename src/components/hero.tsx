import heroImage from '../assets/pic/banner-stack.png'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="brand-gradient text-white font-medium px-6 py-3 rounded-xl transition-all shadow-sm">
              Explore Technologies
            </button>

            <button className="border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-xl transition-all">
              Learn More
            </button>
          </div>
        </div>

      
        <div className="flex justify-center">
          <img 
            src={heroImage}
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}