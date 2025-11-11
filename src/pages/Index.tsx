import VideoHero from "@/components/VideoHero";

const Index = () => {
  return (
    <main>
      <VideoHero />
      <section className="bg-[#0F1435] px-4 md:px-12 lg:px-[100px] -mt-4">
        <div className="bg-white py-16 px-8 md:px-16 lg:px-24">
          <h2 className="font-inter font-extrabold text-[48px] text-[#0F1435] text-left leading-tight uppercase">
            The Largest Polish Tech and Science
            Delegation Ever in Silicon Valley
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Index;
