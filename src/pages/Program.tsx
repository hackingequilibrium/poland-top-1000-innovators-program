import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Program = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:py-12 lg:px-16">
          <div className="flex justify-between items-start mb-6">
            <h1 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] uppercase">
              Program
            </h1>
            
            <div className="hidden md:flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#F5EEDC] border border-[#0F1435]/10"></div>
                <span className="font-inter text-[#0F1435]">Plenary Talks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#F3DDD3] border border-[#0F1435]/10"></div>
                <span className="font-inter text-[#0F1435]">Fireside Chats</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#D7F0F0] border border-[#0F1435]/10"></div>
                <span className="font-inter text-[#0F1435]">Workshops</span>
              </div>
            </div>
          </div>
          
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
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[95px] w-[1px] bg-[#0F1435]" />
                
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

                  {/* 8:45 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      8:45 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435] mb-2">Welcoming Addresses:</p>
                      <ul className="font-inter text-sm text-[#0F1435] space-y-1">
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Deputy Prime Minister Gawkowski, Minister of Digital Affairs (via video)</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Head of Mission, Embassy of Poland in Washington, D.C.</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Prof. (Rector of Lodz University of Technology) Chairman, Conference of Rectors of Polish Technical Universities</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">Consul General of the Republic of Poland in Los Angeles</span></li>
                        <li className="flex gap-2"><span className="flex-shrink-0">•</span><span className="flex-1">San Francisco Bay Area & Poland Overview — Director of International Affairs, City of San Francisco</span></li>
                      </ul>
                    </div>
                  </div>

                  {/* 9:30 AM - 10:40 AM Two Column Section */}
                  {/* 9:30 AM to 10:40 AM section with Round Table */}
                  <div className="space-y-4">
                    {/* Desktop: Grid layout with Round Table on right */}
                    <div className="hidden md:grid md:grid-cols-2 gap-4">
                      {/* Left Column - Timeline continues */}
                      <div className="space-y-4">
                        {/* 9:30 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            9:30 AM
                            <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F5EEDC] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Endless Innovation</p>
                          </div>
                        </div>

                        {/* 10:00 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            10:00 AM
                            <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F5EEDC] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI Economy</p>
                          </div>
                        </div>

                        {/* 10:45 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            10:45 AM
                            <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F5EEDC] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: From Idea to Market</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Round Table spanning 9:30-10:40 */}
                      <div className="bg-[#F3F3F3] p-4 flex items-center justify-center">
                        <p className="font-inter text-sm text-[#0F1435]">Round Table: Tech Transfer Officers Only</p>
                      </div>
                    </div>


                    {/* Mobile: Sequential layout with Round Table after 9:30 AM */}
                    <div className="md:hidden space-y-4">
                      {/* 9:30 AM */}
                      <div className="flex flex-col gap-2">
                        <div className="font-inter text-sm font-semibold text-[#0F1435]">
                          9:30 AM
                        </div>
                        <div className="bg-[#F5EEDC] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Endless Innovation</p>
                        </div>
                      </div>

                      {/* Round Table - Mobile only, appears after 9:30 AM */}
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Round Table: Tech Transfer Officers Only</p>
                      </div>

                      {/* 10:00 AM */}
                      <div className="flex flex-col gap-2">
                        <div className="font-inter text-sm font-semibold text-[#0F1435]">
                          10:00 AM
                        </div>
                        <div className="bg-[#F5EEDC] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI Economy</p>
                        </div>
                      </div>

                      {/* 10:45 AM */}
                      <div className="flex flex-col gap-2">
                        <div className="font-inter text-sm font-semibold text-[#0F1435]">
                          10:45 AM
                        </div>
                        <div className="bg-[#F5EEDC] p-4">
                          <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: From Idea to Market</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 11:15 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:15 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Patents as Business Assets: Getting the Strategy Right</p>
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

                  {/* 12:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:30 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: International Academic Collaboration</p>
                      </div>
                  </div>

                  {/* 1:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      1:00 PM
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
                      <div className="bg-[#D7F0F0] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Advancing Academic Collaboration
                        </p>
                      </div>
                      <div className="bg-[#D7F0F0] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Building Industry Partnership
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

                  {/* 5:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      5:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">End of Day 1</p>
                    </div>
                  </div>

                  {/* 6:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      6:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Gala Dinner (by invitation) — Keynote: Adm. (Ret.) James O. Ellis Jr., Chair, National Academy of Engineering</p>
                    </div>
                  </div>

                  {/* Transportation footnote */}
                  <div className="mt-6 text-left md:ml-[112px]">
                    <p className="font-inter text-xs text-[#0F1435]">Transportation provided from Westin SFO hotel to and from the venue.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[45px] w-[1px] bg-[#0F1435]" />
                
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
                      <p className="font-inter text-sm text-[#0F1435]">Opening Remarks by Shana Penn</p>
                    </div>
                  </div>

                  {/* 9:15 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:15 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Welcome Address - Deputy Head of the Office in San Francisco - Delegation of the European Union to the United States</p>
                    </div>
                  </div>

                  {/* 9:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside chat: Artificial Intelligence Trends</p>
                      </div>
                  </div>

                  {/* 10:10 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:10 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F5EEDC] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: How to Understand Modern Artificial Intelligence</p>
                      </div>
                  </div>

                  {/* 10:50 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:50 AM
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
                      <div className="flex-1 bg-[#F5EEDC] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI in Healthcare</p>
                      </div>
                  </div>

                  {/* 11:50 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:50 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Poland in Silicon Valley</p>
                      </div>
                  </div>

                  {/* 12:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:30 PM
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
                      <div className="bg-[#D7F0F0] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Assisting Development of US Patent
                        </p>
                      </div>
                      <div className="bg-[#D7F0F0] p-4">
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
                      <div className="bg-[#D7F0F0] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">
                          Workshop (by assignment):<br />
                          Assisting Development of US Patent
                        </p>
                      </div>
                      <div className="bg-[#D7F0F0] p-4">
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

                  {/* 6:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      6:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Reception</p>
                    </div>
                  </div>

                  {/* 6:30 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      6:30 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Universities Coordinators meet Piotr Moncarz</p>
                    </div>
                  </div>

                  {/* 7:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      7:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">End of Day 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day3" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[80px] w-[1px] bg-[#0F1435]" />
                
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
                      <p className="font-inter text-sm text-[#0F1435] mb-2">CITRIS & The Banatao Institute Welcomes the Top 1000 Innovators</p>
                      <p className="font-inter text-sm text-[#0F1435]">Keynote: Orbiting Innovation: Science and Collaboration in the New Space Era</p>
                    </div>
                  </div>

                  {/* 9:35 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:35 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F5EEDC] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Keynote: Richmond Field Station: Innovation Campus</p>
                    </div>
                  </div>

                  {/* 10:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                    </div>
                  </div>

                  {/* 10:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3DDD3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Interview with Open AI Technical Lead Łukasz Kaiser</p>
                    </div>
                  </div>

                  {/* 11:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3DDD3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Panel: Infrastructure Intelligence: Building Resilient Systems for a Complex World</p>
                    </div>
                  </div>

                  {/* 11:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3DDD3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Panel: Health and Robotics, Humanity & Technology</p>
                    </div>
                  </div>

                  {/* 12:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F5EEDC] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Public Private Partnerships & Endowment</p>
                    </div>
                  </div>

                  {/* 12:15 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:15 PM
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
                    <div className="flex-1 bg-[#D7F0F0] p-4">
                      <p className="font-inter text-sm text-[#0F1435] mb-2">Academic & Industry Partnership Workshops:</p>
                      <ul className="font-inter text-sm text-[#0F1435] list-disc pl-5 space-y-1 mb-2">
                        <li>Energy & Sustainability</li>
                        <li>Life Sciences</li>
                        <li>Deeptech</li>
                      </ul>
                      <p className="font-inter text-sm text-[#0F1435]">Roundtable Tech Transfer</p>
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

                  {/* 3:05 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      3:05 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F5EEDC] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Innovation & Entrepreneurship at Berkeley</p>
                    </div>
                  </div>

                  {/* 3:20 PM & 3:45 PM - Desktop version with grid */}
                  <div className="hidden md:grid md:grid-cols-[72px_1fr] gap-2 md:gap-10">
                    {/* Timeline column for both times */}
                    <div className="">
                      <div className="font-inter text-sm font-semibold text-[#0F1435] relative z-10">
                        3:20 PM
                        <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                      </div>
                      <div className="font-inter text-sm font-semibold text-[#0F1435] relative z-10 mt-[40px]">
                        3:45 PM
                        <div className="absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                      </div>
                    </div>
                    
                    {/* Content columns */}
                    <div className="grid grid-cols-2 gap-4 auto-rows-min">
                      <div className="bg-[#F3F3F3] p-4 row-span-2 flex items-start">
                        <p className="font-inter text-sm text-[#0F1435]">Poster Session at Grimes Engineering Center</p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">7 x 3 minutes Pitch Session</p>
                      </div>
                      <div className="bg-[#F3F3F3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Meetup: Polish Students at Berkeley</p>
                      </div>
                    </div>
                  </div>

                  {/* 3:20 PM - Mobile version */}
                  <div className="md:hidden flex flex-col gap-2">
                    <div className="font-inter text-sm font-semibold text-[#0F1435]">
                      3:20 PM
                    </div>
                    <div className="bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">7 x 3 minutes Pitch Session</p>
                    </div>
                  </div>

                  {/* 3:45 PM - Mobile version */}
                  <div className="md:hidden flex flex-col gap-2">
                    <div className="font-inter text-sm font-semibold text-[#0F1435]">
                      3:45 PM
                    </div>
                    <div className="bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Meetup: Polish Students at Berkeley</p>
                    </div>
                  </div>

                  {/* 5:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      5:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">End of Day 3</p>
                    </div>
                  </div>

                  {/* Poster note (mobile only) */}
                  <div className="md:hidden mt-6 text-left">
                    <p className="font-inter text-sm text-[#0F1435]">Poster Session at Grimes Engineering Center 3:20PM - 4 PM</p>
                  </div>

                  {/* Transportation footnote */}
                  <div className="mt-6 text-left md:ml-[112px]">
                    <p className="font-inter text-xs text-[#0F1435]">Transportation provided from Westin SFO hotel to and from the venue.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="day4" className="mt-6">
              <div className="relative">
                {/* Timeline vertical line - desktop only */}
                <div className="hidden md:block absolute left-[84px] top-[8px] bottom-[105px] w-[1px] bg-[#0F1435]" />
                
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

                  {/* 9:00 AM to 3:10 PM - Special layout with spanning poster box */}
                  <div className="relative">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                      {/* Left column - Timeline and event boxes */}
                      <div className="flex-1 space-y-4 md:pr-2">
                        {/* 9:00 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            9:00 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F3F3F3] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Day 3 Retrospection</p>
                          </div>
                        </div>

                        {/* 9:10 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            9:10 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                            <div className="flex-1 bg-[#F3DDD3] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Framing the Day</p>
                            </div>
                        </div>

                        {/* 9:40 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            9:40 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                            <div className="flex-1 bg-[#F3DDD3] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: The Art of Commercialization</p>
                            </div>
                        </div>

                        {/* 10:10 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            10:10 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                            <div className="flex-1 bg-[#F3F3F3] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Networking Break</p>
                            </div>
                        </div>

                        {/* 10:30 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            10:30 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                            <div className="flex-1 bg-[#D7F0F0] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Workshop: From Idea to Prototype</p>
                            </div>
                        </div>

                        {/* 11:30 AM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            11:30 AM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                            <div className="flex-1 bg-[#D7F0F0] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Workshop: From Prototype to Product</p>
                            </div>
                        </div>

                        {/* 12:30 PM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            12:30 PM
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
                            <div className="flex-1 bg-[#D7F0F0] p-4">
                              <p className="font-inter text-sm text-[#0F1435]">Workshop: From Product to Market</p>
                            </div>
                        </div>

                        {/* 2:30 PM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            2:30 PM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F3F3F3] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Pitch Session</p>
                          </div>
                        </div>

                        {/* 3:30 PM */}
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                          <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                            3:30 PM
                            <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                          </div>
                          <div className="flex-1 bg-[#F3F3F3] p-4">
                            <p className="font-inter text-sm text-[#0F1435]">Closing Remarks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      4:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">Poster Session & Networking</p>
                    </div>
                  </div>

                  {/* 5:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      5:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                    <div className="flex-1 bg-[#F3F3F3] p-4">
                      <p className="font-inter text-sm text-[#0F1435]">End of Day 4</p>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-6 text-left md:ml-[112px]">
                    <p className="font-inter text-xs text-[#0F1435]">Posters on location by sector from 9 AM to 5 PM.</p>
                  </div>

                  {/* Transportation footnote */}
                  <div className="mt-2 text-left md:ml-[112px]">
                    <p className="font-inter text-xs text-[#0F1435]">Transportation provided from Westin SFO hotel to and from the venue.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Program;
