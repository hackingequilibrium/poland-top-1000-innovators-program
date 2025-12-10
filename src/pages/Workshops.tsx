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
                          <li>Your track (Deep Tech, Life Sciences, Energy)</li>
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
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Workbooks</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2 space-y-4">
                        <div>
                          <p className="font-bold text-[#0F1435] mb-2">Industry Partnership</p>
                          <div className="space-y-1">
                            <a href="/downloads/Building_Industry_Partnership_DEEP_TECH.docx" download className="block text-[#0F1435] hover:underline">Deep Tech</a>
                            <a href="/downloads/Life_Sciences_Workshop_Workbook.docx" download className="block text-[#0F1435] hover:underline">Life Sciences</a>
                            <a href="/downloads/Energy_Sustainability_Workshop_Workbook.docx" download className="block text-[#0F1435] hover:underline">Energy</a>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-[#0F1435] mb-2">Academic Collaboration</p>
                          <div className="space-y-1">
                            <a href="/downloads/Advancing_Academic_Collaboration_FOR_ALL_3_TRACKS.docx" download className="block text-[#0F1435] hover:underline">Workbook for all tracks</a>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="workshop3" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 3</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Table Assignment</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2 space-y-4">
                        <div>
                          <p className="font-bold text-[#0F1435] mb-2">Industry Partnership</p>
                          <div className="space-y-1">
                            <a href="/downloads/Industry_Partnership_DeepTech.xlsx" download className="block text-[#0F1435] hover:underline">Deep Tech</a>
                            <a href="/downloads/Industry_Partnership_Life_Sciences.xlsx" download className="block text-[#0F1435] hover:underline">Life Sciences</a>
                            <a href="/downloads/Industry_Partnership_Energy.xlsx" download className="block text-[#0F1435] hover:underline">Energy</a>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-[#0F1435] mb-2">Academic Collaboration</p>
                          <div className="space-y-1">
                            <a href="/downloads/Academic_Collaboration_DeepTech.xlsx" download className="block text-[#0F1435] hover:underline">Deep Tech</a>
                            <a href="/downloads/Academic_Collaboration_LifeSciences.xlsx" download className="block text-[#0F1435] hover:underline">Life Sciences</a>
                            <a href="/downloads/Academic_Collaboration_Energy.xlsx" download className="block text-[#0F1435] hover:underline">Energy</a>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-6">
              {/* Intro text */}
              <div className="mb-8">
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E]">
                  Welcome to Day 2 of workshops.
                </p>
                <p className="font-inter font-light text-sm md:text-base text-[#797B8E] mb-6">
                  Everything you need to find your workshop, prepare, and navigate your session is below.
                </p>

                {/* Workshop accordions */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="day2-workshop1" className="border-border">
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
                          <li>Your assigned workshop (Readiness or IP – Patent)</li>
                          <li>Your track (A EXPLORERS (TRL 1-3), B BUILDERS (TRL 4-6), C SCALERS (TRL 7-9))</li>
                          <li>Your table number</li>
                        </ul>
                        <a 
                          href="/downloads/Find_Your_Workshop_Day2.docx" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#0F1435] font-medium hover:underline"
                        >
                          → Download: Find Your Workshop (DOCX)
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="day2-workshop2" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 2</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Workbook</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        <a href="/downloads/Day2_Workshop_Guide.docx" download className="text-[#0F1435] font-medium hover:underline">
                          → Download: Workbook for all tracks (DOCX)
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="day2-workshop3" className="border-border">
                    <AccordionTrigger className="font-inter uppercase hover:no-underline">
                      <div className="text-left">
                        <span className="text-sm md:text-base text-[#D1D5DB] font-bold block">Step 3</span>
                        <span className="text-base md:text-lg text-[#0F1435] font-extrabold">Table Assignment</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="font-inter font-light text-sm md:text-base text-[#797B8E] leading-relaxed pt-2">
                        <a href="/downloads/Day2_Table_Assignments.xlsx" download className="text-[#0F1435] font-medium hover:underline">
                          → Download: Table assignment for all tracks (XLSX)
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="day3" className="mt-6">
              <div className="font-inter text-sm md:text-base text-[#797B8E]">
                Coming soon.
              </div>
            </TabsContent>

            <TabsContent value="day4" className="mt-6">
              <div className="font-inter text-sm md:text-base text-[#797B8E]">
                Coming soon.
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
