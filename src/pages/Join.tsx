import { useEffect } from "react";
import SEO from "../components/SEO";

const slackLinks = [
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3z84cihls-N08pzDeb9wfiheaHrpEtpQ",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3yt25qzb8-lZ3Whd2VXbsLE1PV_hiUFw",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3yeukbb4z-ZQRLBXIbi52Zc7rpeScZkQ",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3x5fjijoh-yZnSi6OE5E01R_4fz8klXA",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3x0d6d5ky-3WnGTFZLumBFnbLr2KKv1A",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3x1jt5gb6-fBy_O9h88tfCbUu3dcFcOQ",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3wuiewzfr-QzTk2lSkhXkfCbmjmEFuEg",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3x5o1wb2t-gJYfaqdtdkYtONc0D8EqSQ",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3xnau66za-127ftLOqqEbzz2U5uxztng",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3xotyfo1y-wdmSncS8Rpbsmg2dagqBvA",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3xu6fx3it-qzaLJzZbbdkQhaVefel1Nw",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3y3cgfwms-ovP~f7zLpdmXmynmcBIvng",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3ykl7ch8g-Ogebfjksr4jJzBHztFKpqA",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3y5wf74sj-G0b~aGeEcCRZtp7ULpD9NA",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3yba0vp7a-mHzicNgMraqvbNIvQosysA",
  "https://join.slack.com/t/zuupgroup/shared_invite/zt-3yanuu9jr-FDlUsyq1d57pF~v6bKOcbQ",
];

const Join = () => {
  useEffect(() => {
    const randomLink = slackLinks[Math.floor(Math.random() * slackLinks.length)];
    window.location.href = randomLink;
  }, []);

  return (
    <>
      <SEO title="Join Zuup Slack" noindex={true} path="/join" />
      <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Cool background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative z-10 flex flex-col items-center gap-6 animate-pulse">
        <h1 
          className="text-4xl md:text-6xl font-bold text-foreground"
          style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
        >
          Redirecting to <span className="text-primary">Zuup HQ...</span>
        </h1>
        <p className="text-muted-foreground text-xl">Strap in, we're taking off! 🚀</p>
      </div>
    </div>
    </>
  );
};

export default Join;
