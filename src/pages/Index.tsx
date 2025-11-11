import VideoHero from "@/components/VideoHero";

const Index = () => {
  return (
    <main className="bg-[#0F1435]">
      <VideoHero />
      <section className="px-4 md:px-12 lg:px-[100px] pt-20 pb-16">
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
