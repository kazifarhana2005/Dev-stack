
import techData from '../data/tech.json';

interface TechcardProps {
  onAdd: (tech: any) => void;
}

export default function Techcard({ onAdd }: TechcardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {techData.map((tech) => (
        <div 
          key={tech.id} 
          className="bg-white rounded-2xl p-6 border border-slate-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                {tech.badge && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                    {tech.badge}
                  </span>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              {tech.description}
            </p>
          </div>
          
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pt-4 border-t border-slate-100">
              <span>{tech.category}</span>
              <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-medium">
                {tech.difficulty}
              </span>
              <span className="flex items-center text-amber-500 font-bold">
                ★ {tech.rating}
              </span>
            </div>
            <button 
              onClick={() => onAdd(tech)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition text-sm shadow-sm cursor-pointer"
            >
                   Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}