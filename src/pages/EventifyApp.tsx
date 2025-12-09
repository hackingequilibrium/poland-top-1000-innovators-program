import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appStoreBadge from "@/assets/appstore.svg";
import googlePlayBadge from "@/assets/google_play.svg";

const EventifyApp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1435]">
      <Header simplified />
      
      <main className="flex-1 px-8 lg:px-[100px] pt-32 pb-16">
        <div className="max-w-4xl mx-auto bg-white p-8 lg:py-12 lg:px-16">
          <h1 className="font-inter font-extrabold text-lg md:text-xl lg:text-2xl text-[#0F1435] uppercase mb-6">
            How to Access the Eventify App for the Top 1000 Innovators Summit
          </h1>
          
          <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4">
            <p>
              If you're a participant, you should have received a welcome email from Eventify inviting you to activate your account. This email includes a passcode — this code works as your password for logging into the app.
            </p>
            <p>
              If you don't see the message, please check your Spam or Promotions folders. The email will come from an @eventify.io address.
            </p>
            <p className="pt-4">
              Follow the steps below to get started:
            </p>
          </div>

          {/* Step 1: Download */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              1. Download the Eventify App
            </h2>
            <p className="font-inter font-light text-sm md:text-base text-[#797B8E] mb-4">
              You can download the Eventify app using these links:
            </p>
            <div className="flex gap-4">
              <a 
                href="https://apps.apple.com/us/app/eventify/id1267750107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0F1435] p-3"
              >
                <img src={appStoreBadge} alt="Download on the App Store" className="h-16" />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.teks.eventify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#0F1435] p-3"
              >
                <img src={googlePlayBadge} alt="Get it on Google Play" className="h-16" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventifyApp;
