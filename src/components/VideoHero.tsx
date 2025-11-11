import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/30 backdrop-blur-[1px]" />
      
      {/* Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6 tracking-tight">
            Welcome to the Future
          </h1>
          <p className="text-xl md:text-2xl text-hero-text/90 mb-8 max-w-2xl mx-auto">
            Experience innovation like never before
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-hero-text/30 text-hero-text hover:bg-hero-text/10 hover:border-hero-text/50 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-[var(--transition-smooth)]"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-hero-text/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-hero-text/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
