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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto p-0 mb-8">
              <TabsTrigger 
                value="day1" 
                className="font-inter text-sm border border-[#0F1435] rounded-none bg-transparent data-[state=active]:bg-[#0F1435] data-[state=active]:text-white data-[state=active]:border-2 py-4 px-3 min-h-[100px]"
              >
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                  <span className="font-semibold">Day 1 - Dec 9</span>
                  <span className="text-xs font-normal h-8 flex items-center text-center leading-tight">Stanford<br />University</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="day2" 
                className="font-inter text-sm border border-[#0F1435] rounded-none bg-transparent data-[state=active]:bg-[#0F1435] data-[state=active]:text-white data-[state=active]:border-2 py-4 px-3 min-h-[100px]"
              >
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                  <span className="font-semibold">Day 2 - Dec 10</span>
                  <span className="text-xs font-normal h-8 flex items-center text-center leading-tight">Westin<br />SFO</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="day3" 
                className="font-inter text-sm border border-[#0F1435] rounded-none bg-transparent data-[state=active]:bg-[#0F1435] data-[state=active]:text-white data-[state=active]:border-2 py-4 px-3 min-h-[100px]"
              >
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                  <span className="font-semibold">Day 3 - Dec 11</span>
                  <span className="text-xs font-normal h-8 flex items-center text-center leading-tight">University of<br />California, Berkeley</span>
                </div>
              </TabsTrigger>
              <TabsTrigger 
                value="day4" 
                className="font-inter text-sm border border-[#0F1435] rounded-none bg-transparent data-[state=active]:bg-[#0F1435] data-[state=active]:text-white data-[state=active]:border-2 py-4 px-3 min-h-[100px]"
              >
                <div className="flex flex-col items-center justify-center gap-1 h-full">
                  <span className="font-semibold">Day 4 - Dec 12</span>
                  <span className="text-xs font-normal h-8 flex items-center text-center leading-tight">TripleRing,<br />Newark</span>
                </div>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-[92px] top-[4px] bottom-[4px] w-[1px] bg-[#0F1435]" />
                
                <div className="space-y-4">
                  {/* 7:30 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      7:30 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Registration Opens, Coffee & Light Bites</p>
                    </div>
                  </div>

                  {/* 8:30 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      8:30 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Opening Remarks</p>
                    </div>
                  </div>

                  {/* 8:35 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      8:35 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">PolSV Welcome Top 1000 Innovators of Poland in Silicon Valley</p>
                    </div>
                  </div>

                  {/* 8:40 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      8:40 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435] mb-2">Welcome Addresses:</p>
                      <ul className="font-inter text-sm text-[#0F1435] space-y-1 ml-4">
                        <li>• Deputy Prime Minister Gawkowski, Minister of Digital Affairs (via video)</li>
                        <li>• Head of Mission, Embassy of Poland in Washington, D.C.</li>
                        <li>• Consul General of the Republic of Poland in Los Angeles</li>
                        <li>• San Francisco Bay Area & Poland Overview — Director of International Affairs, City of San Francisco</li>
                      </ul>
                    </div>
                  </div>

                  {/* 9:30 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      9:30 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Endless Innovation</p>
                    </div>
                  </div>

                  {/* 9:50 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      9:50 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Poland in Silicon Valley</p>
                    </div>
                  </div>

                  {/* 10:20 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      10:20 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: From Idea to Market</p>
                    </div>
                  </div>

                  {/* 10:40 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      10:40 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 11:10 AM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      11:10 AM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: US Patent Best Practice</p>
                    </div>
                  </div>

                  {/* 12:00 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      12:00 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Lunch</p>
                    </div>
                  </div>

                  {/* 12:45 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      12:45 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: International Academic Collaboration</p>
                    </div>
                  </div>

                  {/* 1:15 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      1:15 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Stanford Campus Walk</p>
                    </div>
                  </div>

                  {/* 2:30 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      2:30 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Workshops (by assignment)</p>
                    </div>
                  </div>

                  {/* 3:45 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      3:45 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 4:00 PM - Poster Session */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      4:00 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Poster Session</p>
                    </div>
                  </div>

                  {/* 4:00 PM - Meetup */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      4:00 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Meetup: Polish Students at Stanford</p>
                    </div>
                  </div>

                  {/* 6:00 PM */}
                  <div className="flex gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] w-[72px] flex-shrink-0 relative z-10">
                      6:00 PM
                      <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Gala Dinner — Keynote: Adm. (Ret.) James O. Ellis Jr., Chair, National Academy of Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
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
