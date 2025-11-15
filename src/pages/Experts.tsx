import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Experts = () => {
  return (
    <main className="min-h-screen bg-[#0F1435] flex flex-col">
      <Header simplified />
      
      <div className="flex-grow pt-[120px] pb-[100px] px-8 lg:px-[100px]">
        <div className="bg-white p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-[#0F1435]">
            <h2 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
              Suggest Silicon Valley based subject matter experts<br className="hidden md:block" /> for the Top 1000 innovators summit
            </h2>
            
            <p className="font-inter font-bold text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              December 9–12, 2025 · Stanford · UC Berkeley · Triple Ring Innovation Center
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              We're bringing 200 elite researchers from 12 Polish universities, each presenting breakthrough projects across eight critical sectors, for four intensive days in Silicon Valley.
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed mb-4">
              The summit is designed to spark meaningful collaboration between these researchers and Silicon Valley professionals, entrepreneurs, investors, and academic partners. To build the strongest sector tracks and expert networks, we're gathering recommendations for subject-matter experts who should be included.
            </p>
            
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed">
              Please submit one or multiple experts using the fields below.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Experts;
