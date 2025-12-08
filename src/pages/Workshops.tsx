import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Workshops = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:py-12 lg:px-16">
          <div className="flex justify-between items-start mb-6">
            <h1 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] uppercase">
              Workshops
            </h1>
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
              {/* Intro text */}
              <div className="mb-8">
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E]">
                  Welcome to Day 1 of workshops.
                </p>
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E] mb-6">
                  Everything you need to find your workshop, prepare, and navigate your session is below.
                </p>

                {/* Workshop accordions */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="workshop1" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 1</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Find your workshop</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        <p className="mb-2">Use the lookup sheet to see:</p>
                        <ul className="list-disc ml-5 mb-4 space-y-1">
                          <li>Your assigned workshop (Industry or Academia)</li>
                          <li>Your theme (Deep Tech, Life Sciences, Energy)</li>
                          <li>Your table number</li>
                        </ul>
                        <a 
                          href="/downloads/Day1_Workshop_Assignments.pdf" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#0F1435] font-medium hover:underline"
                        >
                          → Download: Find Your Workshop (PDF)
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="workshop2" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 2</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Advancing Academic Collaboration</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        Discover models for international co-development, research exchange, and joint innovation programs. Silicon Valley academic leaders serving as moderators will engage directly with Poland's leading universities to co-design future partnerships, explore joint IP opportunities, and open channels for talent exchange and shared infrastructure that connect the Bay Area with Poland's most dynamic research ecosystems.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="workshop3" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 3</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Global Innovation Readiness</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        This hands-on workshop empowers Polish innovators, scientists, and university spin-offs to expand their reach and competitiveness on the global stage. Participants will assess and strengthen the key dimensions that determine international success — from intellectual property protection and funding strategies to team development, customer engagement, technology validation, and business scalability.
                      </p>
                      <p className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        By the end of the session, participants will have a clearer view of their project's readiness for international collaboration, investment, and market entry — and a practical roadmap to accelerate their journey from local innovation to global impact.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                      <p className="font-inter text-sm text-[#0F1435]">Day 1 Retrospection</p>
                    </div>
                  </div>

                  {/* 9:15 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:15 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside chat: Artificial Intelligence Trends</p>
                      </div>
                  </div>

                  {/* 9:45 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:45 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F5EEDC] p-4">
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
                      <div className="flex-1 bg-[#F5EEDC] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: AI in Life Science</p>
                      </div>
                  </div>

                  {/* 11:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F5EEDC] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: The AI Economy</p>
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
                      <p className="font-inter text-sm text-[#0F1435] mb-2">Grimes Engineering Center - Welcome Top 1000 Innovators</p>
                      <p className="font-inter text-sm text-[#0F1435]">Orbiting Innovation: Science and Collaboration in the New Space Era</p>
                    </div>
                  </div>

                  {/* 9:35 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      9:35 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Space & Aeronautics: The Next Frontier of Human Ambition</p>
                      </div>
                  </div>

                  {/* 10:00 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:00 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Science, Society, and the Ethics of the Future</p>
                      </div>
                  </div>

                  {/* 10:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      10:30 AM
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
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Infrastructure Intelligence: Building Resilient Systems for a Complex World</p>
                      </div>
                  </div>

                  {/* 11:30 AM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      11:30 AM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F3DDD3] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Fireside Chat: Health & Robotics - Humanity & Technology</p>
                      </div>
                  </div>

                  {/* 12:00 PM */}
                  <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                    <div className="font-inter text-sm font-semibold text-[#0F1435] md:w-[72px] flex-shrink-0 relative z-10">
                      12:00 PM
                      <div className="hidden md:block absolute top-1 -right-[16px] w-2 h-2 rounded-full bg-[#0F1435]" />
                    </div>
                      <div className="flex-1 bg-[#F5EEDC] p-4">
                        <p className="font-inter text-sm text-[#0F1435]">Plenary Talk: Public Private Partnerships & Endowment: the Berkeley Model</p>
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

export default Workshops;
