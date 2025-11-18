import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Program = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:py-12 lg:px-16">
          <h1 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] mb-6 uppercase">
            Program
          </h1>
          
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="day1" className="font-inter text-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold">Day 1 - Dec 9</span>
                  <span className="text-xs font-normal">Stanford University</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="day2" className="font-inter text-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold">Day 2 - Dec 10</span>
                  <span className="text-xs font-normal">Westin SFO</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="day3" className="font-inter text-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold">Day 3 - Dec 11</span>
                  <span className="text-xs font-normal">University of California, Berkeley</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="day4" className="font-inter text-sm">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-semibold">Day 4 - Dec 12</span>
                  <span className="text-xs font-normal">TripleRing (Newark)</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-6">
              {/* Day 1 content */}
            </TabsContent>

            <TabsContent value="day2" className="mt-6">
              {/* Day 2 content */}
            </TabsContent>

            <TabsContent value="day3" className="mt-6">
              {/* Day 3 content */}
            </TabsContent>

            <TabsContent value="day4" className="mt-6">
              {/* Day 4 content */}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;
