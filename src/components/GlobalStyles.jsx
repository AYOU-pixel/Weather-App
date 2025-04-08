export default function GlobalStyles() {
    return (
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
  
        @keyframes falling {
          0% { transform: translateY(-30px); }
          100% { transform: translateY(calc(100vh + 30px)); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fadein 0.5s ease-out forwards;
        }
  
        .raindrop {
          animation: falling linear infinite;
        }
      `}</style>
    );
  }