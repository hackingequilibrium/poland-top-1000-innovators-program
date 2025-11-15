import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Experts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 lg:p-12 border border-white/10">
            <div className="space-y-6 text-white">
              <h2 className="font-inter font-bold text-2xl lg:text-3xl">
                Poland in Silicon Valley – Top 1000 Innovators Summit
              </h2>
              
              <p className="font-inter text-lg">
                December 9–12, 2025 · Stanford · UC Berkeley · Triple Ring Innovation Center
              </p>
              
              <p className="font-inter text-base leading-relaxed">
                We're bringing 200 elite researchers from 12 Polish universities, each presenting breakthrough projects across eight critical sectors, for four intensive days in Silicon Valley. It's a unique opportunity to access one of Europe's most talented pools of scientists and engineers, explore cost-effective R&D partnerships, tap into €95 billion of EU funding, and engage with commercialization-ready innovations — all concentrated in one transformational week.
              </p>
              
              <p className="font-inter text-base leading-relaxed">
                The summit is designed to spark meaningful collaboration between these researchers and Silicon Valley professionals, entrepreneurs, investors, and academic partners. To build the strongest sector tracks and expert networks, we're gathering recommendations for subject-matter experts who should be included.
              </p>
              
              <p className="font-inter text-base leading-relaxed">
                Please submit one or multiple experts using the fields below.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experts;
