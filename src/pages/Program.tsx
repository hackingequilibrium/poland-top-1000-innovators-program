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
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[44px] w-[1px] bg-[#0F1435]" />
                
                <div className="space-y-4">
                  {/* 7:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      7:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Registration Opens, Coffee & Light Bites</p>
                    </div>
                  </div>

                  {/* 8:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Opening Remarks</p>
                    </div>
                  </div>

                  {/* 8:35 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:35 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">PolSV Welcome Top 1000 Innovators of Poland in Silicon Valley</p>
                    </div>
                  </div>

                  {/* 8:40 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:40 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435] mb-2">Welcome Addresses:</p>
                      <ul className="font-inter text-sm text-[#0F1435] space-y-1">
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Deputy Prime Minister Gawkowski, Minister of Digital Affairs (via video)</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Head of Mission, Embassy of Poland in Washington, D.C.</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Consul General of the Republic of Poland in Los Angeles</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">San Francisco Bay Area & Poland Overview — Director of International Affairs, City of San Francisco</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* 9:30 AM - 10:40 AM Two Column Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Column - Timeline continues */}
                    <div className="space-y-4">
                      {/* 9:30 AM */}
                      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                          9:30 AM
                          <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                        </div>
                        <div className="flex-1 bg-[#F3F3F3] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Endless Innovation</p>
                        </div>
                      </div>

                      {/* 9:50 AM */}
                      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                          9:50 AM
                          <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                        </div>
                        <div className="flex-1 bg-[#F3F3F3] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Poland in Silicon Valley</p>
                        </div>
                      </div>

                      {/* 10:20 AM */}
                      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                          10:20 AM
                          <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                        </div>
                        <div className="flex-1 bg-[#F3F3F3] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: From Idea to Market</p>
                        </div>
                      </div>

                      {/* 10:40 AM */}
                      <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                        <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                          10:40 AM
                          <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                        </div>
                        <div className="flex-1 bg-[#F3F3F3] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Round Table spanning full height */}
                    <div className="bg-[#F3F3F3] p-4 flex items-center justify-center">
                      <p className="font-inter text-sm text-[#0F1435]">Round Table: Tech Transfer Officers Only</p>
                    </div>
                  </div>

                  {/* 11:10 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:10 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: US Patent Best Practice</p>
                    </div>
                  </div>

                  {/* 12:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Lunch</p>
                    </div>
                  </div>

                  {/* 12:45 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:45 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: International Academic Collaboration</p>
                    </div>
                  </div>

                  {/* 1:15 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      1:15 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Stanford Campus Walk</p>
                    </div>
                  </div>

                  {/* 2:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      2:30 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Academic Collaboration
                        </p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Industry Partnership
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3:45 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      3:45 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 4:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      4:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Poster Session</p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Meetup: Polish Students at Stanford</p>
                      </div>
                    </div>
                  </div>

                  {/* 6:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      6:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Gala Dinner — Keynote: Adm. (Ret.) James O. Ellis Jr., Chair, National Academy of Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[44px] w-[1px] bg-[#0F1435]" />
                
                <div className="space-y-4">
                  {/* 8:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Arrival, Coffee & Light Bites</p>
                    </div>
                  </div>

                  {/* 9:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Day 1 Retrospection</p>
                    </div>
                  </div>

                  {/* 9:15 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:15 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside chat: Artificial Intelligence Trends</p>
                    </div>
                  </div>

                  {/* 9:45 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:45 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI - Engineering, Regulation, Societal Impact</p>
                    </div>
                  </div>

                  {/* 10:15 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:15 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 11:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI in Life Science</p>
                    </div>
                  </div>

                  {/* 11:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI Enhanced On-Demand Work</p>
                    </div>
                  </div>

                  {/* 12:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Lunch</p>
                    </div>
                  </div>

                  {/* 1:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      1:30 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Assisting Development of US Patent
                        </p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Global Innovation Readiness
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2:45 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      2:45 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 3:15 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      3:15 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Assisting Development of US Patent
                        </p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Global Innovation Readiness
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 4:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      4:30 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Poster Session</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day3" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[44px] w-[1px] bg-[#0F1435]" />
                
                <div className="space-y-4">
                  {/* 8:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Arrival, Coffee & Light Bites</p>
                    </div>
                  </div>

                  {/* 9:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Day 2 Retrospection</p>
                    </div>
                  </div>

                  {/* 9:10 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:10 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435] mb-2">CITRIS & The Banatao Institute - Welcome Top 1000 Innovators</p>
                      <p className="font-inter text-sm text-[#0F1435]">Orbiting Innovation: Science and Collaboration in the New Space Era</p>
                    </div>
                  </div>

                  {/* 9:35 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:35 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Space & Aeronautics: The Next Frontier of Human Ambition</p>
                    </div>
                  </div>

                  {/* 10:10 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:10 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Science, Society, and the Ethics of the Future</p>
                    </div>
                  </div>

                  {/* 10:40 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:40 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 11:10 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:10 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Infrastructure Intelligence: Building Resilient Systems for a Complex World</p>
                    </div>
                  </div>

                  {/* 11:40 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:40 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Health & Robotics - Humanity & Technology</p>
                    </div>
                  </div>

                  {/* 12:10 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:10 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Public Private Partnerships & Endowment: the Berkeley Model</p>
                    </div>
                  </div>

                  {/* 12:40 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:40 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Lunch</p>
                    </div>
                  </div>

                  {/* 1:40 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      1:40 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by Assignment):<br />
                          Academic Collaboration
                        </p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by Assignment):<br />
                          Industry Partnership
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3:25 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      3:25 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Poster Session at Grimes Engineering Center</p>
                    </div>
                  </div>
                </div>
              </div>
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
