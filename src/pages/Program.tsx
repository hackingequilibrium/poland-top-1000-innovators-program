import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Program = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:py-12 lg:px-16">
          <h1 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
            Program
          </h1>
          
          {/* Content will be added here */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;
