import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Techcard from "./components/Techcard";
import Footer from "./components/Footer";

export default function App() {
  const [selectedStack, setSelectedStack] = useState<any[]>([]);

  const handleAddToStack = (tech: any) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  const handleRemoveFromStack = (id: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />

        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            Explore the <span className="text-fuchsia-600">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mb-8">
            Pick one technology per category to build your ideal stack.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <Techcard onAdd={handleAddToStack} />
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm sticky top-6">
                <h3 className="font-bold text-slate-900 text-base mb-1">Your Stack</h3>
                <p className="text-xs text-slate-400 mb-4">
                  {selectedStack.length} technology selected
                </p>

                <div className="space-y-3 mb-4 min-h-[100px]">
                  {selectedStack.length === 0 ? (
                    <p className="text-xs text-slate-400 text-center py-6 border border-dashed border-slate-200 rounded-xl">
                      No technologies added yet.
                    </p>
                  ) : (
                    selectedStack.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                        <div className="flex items-center space-x-2">
                          <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                          <span className="font-medium text-slate-800">{item.name}</span>
                        </div>
                        <button 
                          onClick={() => handleRemoveFromStack(item.id)}
                          className="text-slate-400 hover:text-red-500 font-bold px-1 cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {selectedStack.length > 0 && (
                  <button 
                    onClick={handleRemoveAll}
                    className="w-full text-xs text-red-600 hover:bg-red-50 font-medium py-2 rounded-xl transition border border-red-100 cursor-pointer"
                  >
                    Remove All
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}