const clues = {
  case1: [
    {
      id: 1,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "Spot the Phishing Link..",
      prompt: `Aditya got this message.Click Everything that looks suspicious`,
      fakechat: [
        { from: "scammer", text: "🎉 Congrats! You've won 5000 gems!" },
        {
          from: "scammer",
          text: "Just enter your account email and password here to claim. 🔓",
        },
        { from: "user", text: "Is this official? 👀" },
        { from: "scammer", text: "Of course! We’re the game support bot." },
      ],
      options: [
        { text: "Claim now", correct: false },
        { text: "You’ve won 500 gems!", correct: false },
        { text: "http://dragonfree.gems-award.netlify.app", correct: true },
      ],
      success: "Correct! The fake domain is clearly suspicious.",
    },
    {
      id: 2,
      type: "type", // user types an input
      title: "Suggest a Strong Password..",
      prompt: "Aditya used 'aditya123' as his password. Suggest a better one:",
      validate: (input) =>
        input.length >= 8 &&
        /[A-Z]/.test(input) &&
        /[0-9]/.test(input) &&
        /[^a-zA-Z0-9]/.test(input),
      success: "Nice! That's much harder to guess than 'Aditya123'.",
    },
    {
      id: 3,
      type: "select", // multiple choice
      title: "Choose Smart Settings!..",
      prompt: "Which setting will protect Aditya’s account best?",
      options: [
        { text: "Use same password everywhere", correct: false },
        { text: "Enable Two-Factor Authentication", correct: true },
        { text: "Save password in browser", correct: false },
      ],
      success: "Yes! 2FA adds an extra layer of protection.",
      nextCta: "View Cyber Report",
    },
  ],
  case2: [
    {
      id: 1,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "Suspicious DM..",
      prompt: `Zara received this DM on Instagram:
      Click everything in this message that looks suspicious.`,
      fakechat: [
        {
          from: "scammer",
          text: "Hi Zara! 💫 We love your content and want to offer you a ₹10K collab.",
        },
        {
          from: "scammer",
          text: "Just fill this short form 👉 glamshyne-portal.netlify.app",
        },
        { from: "scammer", text: "Let us know once done 💖" },
        { from: "user", text: "Thank you! Just filled it" },
      ],
      options: [
        { text: "glamshyne-portal.netlify.app", correct: true },
        { text: "Compliments", correct: false },
        { text: "₹10K reward", correct: true },
        { text: "Don’t miss this!", correct: true },
        { text: "Emojis", correct: false },
      ],
      success:
        "You spotted the bait: fake domain, urgency, and unrealistic rewards.",
      nextCta: "View the Form Zara Filled",
    },
    {
      id: 2,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "The Scam Collab Form..",
      prompt: `Zara submitted the following information on the form:
  
  Instagram Handle:     @zara_creates  
  Email:                zara.creator01@gmail.com  
  Password:             ********  
  Recovery Email:       zara.alt@gmail.com  
  Phone Number:         +91-98765XXXXX  
  Follower Count:       17.2K
  
  Click the fields Zara should NOT have shared on a third-party site.`,
      options: [
        { text: "Follower Count", correct: false },
        { text: "Password", correct: true },
        { text: "Recovery Email", correct: true },
        { text: "Instagram Handle", correct: false },
        { text: "Email", correct: false },
        { text: "Phone Number", correct: true },
      ],
      success:
        "Zara gave away critical credentials. Let’s see what the hacker did next…",
      nextCta: "View Zara's Compromised Profile",
    },
    {
      id: 3,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "Signs of Hijack!..",
      prompt: `Zara's Instagram profile shows some suspicious changes:
  
  Changed Bio: "Crypto Expert 🚀 | DM for ROI Plans 📈"  
  Story: “🔥 2X your investment in 48 hours! DM now 💸”  
  Link: cryptoboost.cashfree.site  
  Posts: Only 3 remain, rest missing  
  Follower DMs: “Where’s your art reel?”, “Zara, is everything okay?”
  
  Click everything that proves Zara’s account was taken over.`,
      options: [
        { text: "Crypto Story", correct: true },
        { text: "Profile Picture", correct: false },
        { text: "Missing Posts", correct: true },
        { text: "Follower Confusion", correct: true },
        { text: "Old Post Likes", correct: false },
        { text: "Changed Bio", correct: true },
      ],
      success:
        "You uncovered the evidence. It’s time to help Zara recover her account.",
      nextCta: "🔐 Start Recovery Plan",
    },
    {
      id: 4,
      type: "select", // multiple choice
      title: "Recovery & Prevention",
      prompt: "Help Zara take back her account securely.",
      options: [
        { text: "Use recovery email for verification", correct: true },
        { text: "Turn on Two-Factor Authentication", correct: true },
        { text: "Reset password using official site", correct: true },
        { text: "Report scam link to Instagram", correct: true },
        { text: "Delete her account permanently", correct: false },
        { text: "Restore bio and story", correct: true },
        { text: "Post alert for followers about the hack", correct: true },
        { text: "Apologize to hacker", correct: false },
      ],
      success:
        "Zara has regained her account — and stopped the hacker from hurting others.",
      nextCta: "View Cyber Report",
    },
  ],
  case3: [
    {
      id: 1,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "Suspicious Download History..",
      prompt: `Rohan's download history shows the following:
  
  Downloads:
  - cyberclashpro.apk (40 MB)
  - free-mod-menu-cyber.exe (suspicious)
  
  Forum Post:
  [User404]: "No ads, no tracking. Best mod out there.
  Just allow permissions and you're good
  Tested on 3 phones. Trust me!"
  
  Download link: cybermods.gethacks.info
  
  Which of these should raise red flags?`,
      options: [
        { text: "File size", correct: false },
        { text: "Just allow permissions", correct: true },
        { text: "cybermods.gethacks.info", correct: true },
        { text: "Game name", correct: false },
        { text: "free-mod-menu-cyber.exe", correct: true },
      ],
      success:
        "This isn’t just a game — it’s a trap. Let’s check what it installed.",
      nextCta: "Check Installed Apps",
    },
    {
      id: 2,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: " Malicious Apps Detected",
      prompt: `Installed Apps:
   CyberClash Max (safe)
   SmartClean Booster
   FlashVPN Xtreme
   SystemLog Update v1.0
  InvisEye.apk (hidden)
  
  Permissions:
  SmartClean → full storage + background internet  
  InvisEye → camera, mic, background activity  
  VPN → location access, reroutes internet
  
  Click all apps that look suspicious.`,
      options: [
        { text: "SmartClean Booster", correct: true },
        { text: "FlashVPN Xtreme", correct: true },
        { text: "CyberClash Max", correct: false },
        { text: "SystemLog Update", correct: true },
        { text: "InvisEye", correct: true },
        { text: "CyberClash Max", correct: false },
      ],
      success: "These apps snuck in with the APK. Time to clean up!",
      nextCta: "Remove and Reset Permissions",
    },
    {
      id: 3,
      type: "select", // multiple choice
      title: "Cleanup Actions",
      prompt: "How should Rohan secure his phone now?",
      options: [
        { text: "Turn off Play Protect", correct: false },
        { text: "Uninstall all unknown apps", correct: true },
        { text: "Revoke suspicious permissions", correct: true },
        { text: "Run antivirus scan", correct: true },
        { text: "Switch to official Play Store versions", correct: true },
        { text: "Restart the phone", correct: false },
        { text: "Clear browser download history", correct: true },
      ],
      success:
        "Phone cleaned. But how can we make sure this never happens again?",
      nextCta: "View Cyber Report",
    },
  ],
  case4: [
    {
      id: 1,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "The Call Timeline",
      prompt: `Anya’s phone timeline shows the following:

| Date    | Ola Booking Made | Call Received | Number          |
|---------|------------------|---------------|------------------|
| Jan 10  | 4:42 PM          | 4:45 PM       | +91-93XXX77810   |
| Jan 17  | 7:03 AM          | 7:05 AM       | +91-93XXX77810   |
| Jan 29  | 9:15 PM          | 9:18 PM       | +91-93XXX77810   |
| Feb 9   | 2:30 PM          | 2:33 PM       | +91-93XXX77810   |

Connect the dots in Anya’s timeline to find the pattern.`,
      options: [
        { text: "Calls at random times", correct: false },
        { text: "Same number after every booking", correct: true },
        { text: "Calls within 2-3 mins of each booking", correct: true },
        { text: "Number not in Ola’s directory", correct: true },
      ],
      success:
        "Someone is monitoring her bookings — and calling within minutes.",
    },
    {
      id: 2,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "The Voice Behind the Number..",
      prompt: `Simulated Call Transcript:

“Hello Anya, Ola support here. Your driver is stuck, we need OTP confirmation to reassign. Please tell your code.”

“Also, if you could pay ₹50 via UPI, your pickup will be prioritized. Send here: @fast-ride123”

“No need to tell driver, ma’am. This is internal.”

Highlight the Red Flags in the Call.`,
      options: [
        { text: "Asking for OTP", correct: true },
        { text: "UPI to unknown ID", correct: true },
        { text: "Urgency in tone", correct: true },
        { text: "Offer for faster service", correct: false },
        { text: "Asking for secrecy", correct: true },
      ],
      success:
        "This is no support call. It’s social engineering. And it’s been repeating for months.",
    },
    {
      id: 3,
      type: "click", // type of interaction: 'click', 'type', 'select'
      title: "The Leak Source..",
      prompt: `Installed Apps:
- Ola 
- Uber
- Zomato
- Ride Tracker AI
- QuickNotify
- Savings Buddy

Permissions:
QuickNotify: Notification Access
Ride Tracker: Call Log & Messages 
Savings Buddy: Clipboard & Usage Data

Find which apps leaked her data.`,
      options: [
        { text: "Savings Buddy", correct: false },
        { text: "QuickNotify", correct: true },
        { text: "Ride Tracker AI", correct: true },
        { text: "Zomato", correct: false },
      ],
      success:
        "These apps are snooping on ride confirmations and alerting scammers.",
    },
    {
      id: 4,
      type: "select", // multiple choice
      title: "Take Back Control",
      prompt: "Choose the right actions to block the scam",
      options: [
        { text: "Revoke notification access from shady apps", correct: true },
        { text: "Delete all ride apps", correct: false },
        { text: "Uninstall Ride Tracker & QuickNotify", correct: true },
        { text: "Block and report +91-93XXX77810", correct: true },
        { text: "Report to TRAI/Google", correct: true },
        { text: "Call back the scammer", correct: false },
        { text: "Switch to DND for unknown numbers", correct: true },
        { text: "Enable caller ID filtering", correct: true },
        { text: "Share OTP if caller says Ola", correct: false },
      ],
      success:
        "Anya took her privacy back. The calls stopped. You just saved someone else from becoming a victim.",
      nextCta: "View Cyber Report",
    },
  ],
  case5: [
    {
      id: 1,
      type: "click",
      title: "Open Network Temptation",
      prompt: `Neha visited a cafe and saw this network:\n\n☕ FreeCoffee_WiFi_Public\n\nShe connected, browsed, and logged into her bank account.\n\nWhich signs should’ve warned her?`,
      options: [
        { text: "Open Wi-Fi with no password", correct: true },
        { text: "Cute coffee name", correct: false },
        { text: "No terms & conditions", correct: true },
        { text: "Strong signal", correct: false },
      ],
      success: "Public Wi-Fi without security can be a hotspot for data theft.",
      nextCta: "View What Happened Next",
    },
    {
      id: 2,
      type: "click",
      title: "The Hidden Attack",
      prompt: `After using the network, Neha received alerts:\n\n- Unusual login from Russia\n- UPI transaction of ₹9,000\n- Password change confirmation\n\nClick all that suggest her data was intercepted.`,
      options: [
        { text: "International login alert", correct: true },
        { text: "Transaction SMS", correct: true },
        { text: "Strong password used", correct: false },
        { text: "Auto logout", correct: false },
        { text: "Password change", correct: true },
      ],
      success: "Looks like a man-in-the-middle attack. Let’s fix the damage.",
    },
    {
      id: 3,
      type: "select",
      title: "Recover & Protect",
      prompt: "Help Neha recover safely.",
      options: [
        { text: "Reset bank & email passwords", correct: true },
        { text: "Enable 2FA on important accounts", correct: true },
        { text: "Use VPN on public Wi-Fi", correct: true },
        { text: "Avoid public Wi-Fi for banking", correct: true },
        { text: "Ignore alerts if bank returns money", correct: false },
      ],
      success: "Neha is back in control — and now much more cyber-smart!",
      nextCta: "View Cyber Report",
    },
  ],
  case6: [
    {
      id: 1,
      type: "click",
      title: "The Call Begins",
      prompt: `Arjun got a call:\n\n"Hello sir, I’m from Microsoft. Your system has viruses. Please download QuickFix.exe to clean it."\n\nWhat are the warning signs in this message?`,
      options: [
        { text: "Microsoft calling randomly", correct: true },
        { text: "Offering free help", correct: false },
        { text: "Request to download unknown file", correct: true },
        { text: "Speaking politely", correct: false },
      ],
      success:
        "Scammers often impersonate big companies. Let’s see what happened.",
    },
    {
      id: 2,
      type: "click",
      title: "Remote Access Scam",
      prompt: `Arjun allowed screen sharing and entered his bank password when asked to “check transaction logs”.\n\nClick the dangerous actions Arjun took.`,
      options: [
        { text: "Allowed screen access", correct: true },
        { text: "Entered banking info", correct: true },
        { text: "Closed laptop after call", correct: false },
        { text: "Said yes to refund offer", correct: true },
      ],
      success: "They weren’t fixing anything — they were robbing him.",
    },
    {
      id: 3,
      type: "select",
      title: "Recovery & Prevention",
      prompt: "What should Arjun do next?",
      options: [
        { text: "Disconnect internet immediately", correct: true },
        { text: "Uninstall the remote app", correct: true },
        { text: "Reset all passwords", correct: true },
        { text: "Ignore if nothing stolen", correct: false },
        { text: "Report to Cybercrime portal", correct: true },
      ],
      success: "Damage minimized. Arjun won’t fall for that again.",
      nextCta: "View Cyber Report",
    },
  ],
  case7: [
    {
      id: 1,
      type: "click",
      title: "Fake Profile Alert",
      prompt: `Priya's friend sends her this:Click suspicious Stuff`,
      fakechat: [
        {
          from: "friend",
          text: "Hey! Someone made a fake Insta of you — @priya.official.backup — and is DMing people for money.",
        },
      ],
      options: [
        { text: "Backup account without consent", correct: true },
        { text: "Same profile picture", correct: true },
        { text: "Random followers", correct: false },
        { text: "DMs asking for UPI transfers", correct: true },
      ],
      success: "Someone’s pretending to be Priya — and scamming her network.",
    },
    {
      id: 2,
      type: "select",
      title: "Take It Down!",
      prompt: "How can Priya act fast?",
      options: [
        { text: "Report impersonation to Instagram", correct: true },
        { text: "Ask friends to report the account", correct: true },
        { text: "Go private temporarily", correct: true },
        { text: "Post about fake profile in story", correct: true },
        { text: "Threaten the scammer via DM", correct: false },
      ],
      success: "The fake account was reported and taken down within a day.",
      nextCta: "View Cyber Report",
    },
  ],
  case8: [
    {
      id: 1,
      type: "click",
      title: "Too Good to Be True?",
      prompt: `Ravi received this email:\n\n“Your resume is shortlisted by Tesla India. Salary ₹18 LPA. Pay ₹2,000 onboarding fee to confirm interview slot.”\n\nSpot all the red flags.`,
      options: [
        { text: "High salary with low effort", correct: true },
        { text: "Upfront payment", correct: true },
        {
          text: "Generic sender email (tesla.hiring@gmail.com)",
          correct: true,
        },
        { text: "Spelling errors", correct: true },
        { text: "Referral required", correct: false },
      ],
      success: "Scammers prey on job-seekers. Let’s help Ravi avoid this.",
    },
    {
      id: 2,
      type: "type",
      title: "Draft a Safe Reply",
      prompt: "What should Ravi reply to avoid engagement but stay safe?",
      validate: (input) =>
        input.toLowerCase().includes("not interested") ||
        input.toLowerCase().includes("please remove me") ||
        input.toLowerCase().includes("this appears to be a scam"),
      success: "Perfect. No emotional response — just firm disengagement.",
    },
    {
      id: 3,
      type: "select",
      title: "Prevent Future Scams",
      prompt: "What can Ravi do to avoid such job scams?",
      options: [
        { text: "Verify company emails", correct: true },
        { text: "Never pay for interviews", correct: true },
        { text: "Use LinkedIn or official websites", correct: true },
        { text: "Share Aadhaar only after offer letter", correct: true },
        { text: "Click on every job link", correct: false },
      ],
      success: "Ravi now knows how to spot fake recruiters from miles away.",
      nextCta: "View Cyber Report",
    },
  ],
};
export default clues;
