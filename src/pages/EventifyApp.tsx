import Header from "@/components/Header";
import Footer from "@/components/Footer";
import appStoreBadge from "@/assets/appstore.svg";
import googlePlayBadge from "@/assets/google_play.svg";
import eventifyStep2_1 from "@/assets/eventify-step2-1.png";
import eventifyStep2_2 from "@/assets/eventify-step2-2.png";
import eventifyStep2_3 from "@/assets/eventify-step2-3.png";
import eventifyStep3_1 from "@/assets/eventify-step3-1.png";
import eventifyStep3_2 from "@/assets/eventify-step3-2.png";
import eventifyStep4_1 from "@/assets/eventify-step4-1.png";
import eventifyStep4_2 from "@/assets/eventify-step4-2.png";
import eventifyStep5_1 from "@/assets/eventify-step5-1.png";
import eventifyStep5_2 from "@/assets/eventify-step5-2.png";
import eventifyStep5_3 from "@/assets/eventify-step5-3.png";
import eventifyStep6_1 from "@/assets/eventify-step6-1.png";
import eventifyStep6_2 from "@/assets/eventify-step6-2.png";
import eventifyStep6_3 from "@/assets/eventify-step6-3.png";
import eventifyStep7_1 from "@/assets/eventify-step7-1.png";
import eventifyStep7_2 from "@/assets/eventify-step7-2.png";
import eventifyStep7_0a from "@/assets/eventify-step7-0a.jpg";
import eventifyStep7_0b from "@/assets/eventify-step7-0b.jpg";

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

          {/* Step 2: Open and Search */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              2. Open the App and Search for the Event
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>When you launch the app, you will see a search bar.</p>
              <p>
                Type "Top 1000".<br />
                You will see the event Top 1000 Innovators of Poland in Silicon Valley.
              </p>
              <p>Tap on the event to open it.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep2_1} alt="Eventify app launch screen" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep2_2} alt="Eventify search screen" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep2_3} alt="Eventify event search results" className="h-96 rounded-lg shadow-md" />
            </div>
          </div>

          {/* Step 3: Log In */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              3. Log In to Access the Full Program
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>
                On the event screen, tap Login. Type in the same email address you used when registering for the summit. Make sure to check the Terms & Conditions box before continuing.
              </p>
              <p>
                After entering your email, you'll be asked to enter a passcode.<br />
                This is the passcode included in the welcome email you received from Eventify. Enter the code → tap Continue.
              </p>
              <p>
                If you didn't receive the email, please check your Spam/Junk folder.<br />
                If you still don't see it, tap "Resend OTP" or contact our team.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep3_1} alt="Eventify login screen" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep3_2} alt="Eventify passcode entry screen" className="h-96 rounded-lg shadow-md" />
            </div>
          </div>

          {/* Step 4: Navigating the App */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              4. Navigating the Eventify App During the Summit
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>
                Once you're logged in, you will land on the Event Homepage. From here you can access the full program, view speakers, discover suggested contacts, and start networking.
              </p>
              <p className="font-inter font-semibold text-[#0F1435]">
                Accessing the Event Schedule
              </p>
              <p>
                To view all sessions for the four-day summit:<br />
                Tap Schedules in the bottom navigation bar.<br />
                The program is divided by day (Tue 9, Wed 10, Thu 11, Fri 12).
              </p>
              <p>
                Tap each date to see the full list of sessions, their times, speakers, and locations.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep4_1} alt="Eventify event homepage" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep4_2} alt="Eventify schedules view" className="h-96 rounded-lg shadow-md" />
            </div>
          </div>

          {/* Step 5: Networking */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              5. Networking With Other Attendees
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>
                We strongly encourage you to use the app to meet people, find collaborators, and schedule conversations.
              </p>
              <p className="font-inter font-semibold text-[#0F1435]">
                Finding Attendees
              </p>
              <p>
                Tap Attendee List in the bottom menu.<br />
                Browse all participants or use the search bar to find someone by name, job title, or organization.
              </p>
              <p className="font-inter font-semibold text-[#0F1435]">
                Using Filters
              </p>
              <p>
                Filters help you find exactly the people you want to meet.<br />
                You can filter by: User group: Attendee, Speaker, Organizer, Exhibitor, Sponsor, Student, Attendee Bay Area.<br />
                Interests / Industries: AI, Space Engineering, Biomed, Materials, Energy, Humanities, etc.
              </p>
              <p className="font-inter font-semibold text-[#0F1435]">
                Viewing Profiles and Connecting
              </p>
              <p>
                Tap on a person's name to open their profile.
              </p>
              <p>
                There you can:<br />
                View their background, interests, and affiliation<br />
                Send a direct message<br />
                Tap Let's Meet to schedule a one-on-one meeting<br />
                Add private notes for yourself
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep5_1} alt="Eventify attendee list" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep5_2} alt="Eventify filters" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep5_3} alt="Eventify profile view" className="h-96 rounded-lg shadow-md" />
            </div>
          </div>

          {/* Step 6: Scheduling Meetings */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              6. Scheduling One-on-One Meetings
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>
                From a profile, tap Let's Meet.<br />
                Select the date (Dec 9–12).<br />
                Choose from available 15-minute meeting slots.
              </p>
              <p>
                Confirm the meeting. The other person will get a notification and once they accept your meeting will appear in My Agenda under the Schedules tab.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep6_1} alt="Eventify profile Let's Meet" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep6_2} alt="Eventify select date" className="h-96 rounded-lg shadow-md" />
              <img src={eventifyStep6_3} alt="Eventify available time slots" className="h-96 rounded-lg shadow-md" />
            </div>
          </div>

          {/* Step 7: Scanning Badges */}
          <div className="mt-8">
            <h2 className="font-inter font-extrabold text-base md:text-lg text-[#0F1435] mb-4">
              7. Scanning Someone's Badge During the Event
            </h2>
            <div className="font-inter font-light text-sm md:text-base text-[#797B8E] space-y-4 mb-6">
              <p>
                Every attendee will have a QR code printed on their badge.<br />
                This QR code links directly to their Eventify profile.
              </p>
              <p>
                You can use it to:
              </p>
              <p>
                Open their profile instantly<br />
                View their background, interests, and contact details<br />
                Send a message<br />
                Schedule a one-on-one meeting on the spot
              </p>
              <p className="font-inter font-semibold text-[#0F1435]">
                How to Scan a Badge
              </p>
              <p>
                Open the Eventify app.<br />
                Tap Scan in the bottom navigation bar.<br />
                Point your phone's camera at the QR code on the attendee's badge.
              </p>
              <p>
                Their profile will appear immediately — from there you can message them or book a meeting. This is the fastest way to connect with people during the summit, especially in busy networking areas.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <img src={eventifyStep7_0a} alt="Eventify Scan button location" className="h-80 rounded-lg shadow-md" />
              <img src={eventifyStep7_0b} alt="Attendee badge with QR code" className="h-80 rounded-lg shadow-md" />
              <img src={eventifyStep7_1} alt="Eventify QR scanner" className="h-80 rounded-lg shadow-md" />
              <img src={eventifyStep7_2} alt="Eventify profile after scan" className="h-80 rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventifyApp;
