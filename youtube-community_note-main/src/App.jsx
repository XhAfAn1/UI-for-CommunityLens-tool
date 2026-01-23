import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import {
  Menu, Search, Mic, Bell, Video, Home, Compass,
  PlaySquare, Clock, ThumbsUp, ThumbsDown, Share2,
  MoreVertical, ChevronDown, ChevronUp, MonitorPlay, Gamepad2,
  Music2, Trophy, Flame, Newspaper, X,
  LogOut, Settings, HelpCircle, History, ShieldAlert,
  ScanFace, ExternalLink, ChevronRight,
  Activity, Eye, Mic2, CheckCircle2, Download, Scissors, ListPlus,
  AlertOctagon, Info, Trash2, Maximize2, Minimize2, Sun, Moon,
  ArrowLeft, ArrowRight, PlayCircle, XCircle, ClipboardList, Bot
} from 'lucide-react';


const CSV_DATA = {
  "ghLtBXmhDsU": {
    "description": "ZELENSKY ISSUES APOLOGY TO TRUMP regarding his temu suit",
  "comments": [
  "Scary realistic, had me there for a second",
  "AI has a problem with teeth. He's teeth change a few times. Always look at the teeth if your ever unsure.",
  "LOL",
  "😂😂😂",
  "Greatest comedian that ever lived, turned Russia into a joke.",
  "AI is getting scary",
  "Look at this: an AI-generated video of a key political figure at a crucial moment in history, saying something that is somewhat relevant to current events; the dystopian future has arrived!",
  "Good that Zelenskyy apologised to Trump.",
  "It’s fake but funny 😂",
  "AI",
  "True story",
  "xD",
  "Hello American people, I CU-",
  "A.I",
  "AIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII",
  "Love to Habibi Volodymyr.....🙏\n\nLove to my Donald......🙏",
  "zelensky bend his knees, fr fr",
  "What was that? Is that real",
  "Not groveling enough! (Can't wait to see the bedazzled star lapel pin, however ;)",
  "That's not funny man. He is trying to help his war torn country, get's ridiculed in the oval office and now you are making fun of him?",
  "WW3 is on",
  "😂😂😂"
]
  },
  "cQ54GDm1eL0": {
    "description": "\"We're entering an era in which our enemies can make anyone say anything at any point in time.\"\n\nCheck out more awesome videos at BuzzFeedVideo!\nhttps://bit.ly/YTbuzzfeedvideo\nhttps://bit.ly/YTbuzzfeedblue1\nhttps://bit.ly/YTbuzzfeedviolet\n\nGET MORE BUZZFEED:\nhttps://www.buzzfeed.com\nhttps://www.buzzfeed.com/videos\n / buzzfeedvideo \n / asis \n / buzzfeedblue \n / buzzfeedviolet \n / perolike \n / ladylike \n\nBuzzFeedVideo\nBuzzFeed Motion Picture’s flagship channel. Sometimes funny, sometimes serious, always shareable. New videos posted daily!\n\nLove BuzzFeed? Get the merch! BUY NOW: https://goo.gl/gQKF8m\n\nCredits: https://www.buzzfeed.com/bfmp/videos/...\n\nEXTERNAL CREDITS\nJordan Peele\nhttps://monkeypawproductions.com/",
    "comments": [
      "\"Never trust anything you see on the internet.\" \n-Abraham Lincoln",
      "Wow, Barack Obama does a mean Jordan Peele impersonation",
      "According to Buzzfeed, I shouldn't be listening to Buzzfeed.",
      "Now in 2020 : \"dame da ne........\"",
      "Shut up BuzzFeed and tell me what kind of apple I am",
      "I did NOT expect this 😂",
      "Wow Obama does a great Jorden Peele",
      "\"Most Quotes On The internet Are Fake\" Winston Churchill",
      "All this and black mirror is making me terrified of the future",
      "People need to be more aware of what they see on the internet especially on Facebook, be more cautious about what they read and watch.",
      "I am dazed and confused",
      "\"Don't believe everything you see on the internet.\"\n- Sun Tzu The Art of War",
      "Next up on your trusted news source, what kind of bread are you based on your personality?",
      "Sound like Obama mixed with one of the muppets!",
      "Lmao talking about trusted news sources coming from buzzfeed",
      "\"Trusting people on the internet leads to countless desinformation.\"\n\n _-uncle_ _Iroh_",
      "damn. that confused me",
      "This is an ironic message coming from buzzfeed. Not the trump thing, the relying on trusted news sources part.",
      ">\"Trusted news sources\"\n>Video posted by BuzzFeed\n\n*hmm*",
      "What people thought would happen to deepfakes. \n\n2020- BAKA MITA"
    ]
  },
  "wIjc3ceDzr4": {
    "description": "Huge News! Social Security September 2025 Raise - See If You Qualify For New Payment\n\n🚨 BREAKING: Major Social Security changes happening in September 2025! If you're receiving Social Security benefits, this video contains critical information that could affect when your payment arrives and how much money you receive.\n📄 What You'll Learn:\nSeptember payment date changes due to Labor Day\nNew qualification rules for increased benefits\nHow the 2.5% COLA affects your monthly income\nImportant deadline for paper check recipients\nMaximum benefit amounts for 2025\nTiming differences between SSI and regular Social Security\nStep-by-step guide to avoid payment delays\n💰 Important Updates: The average Social Security recipient is now receiving an additional $49 per month thanks to the 2025 cost-of-living adjustment. But September brings unique timing changes that every beneficiary needs to understand. Don't let payment schedule confusion affect your monthly budget!\n⚠️ URGENT: Paper Social Security checks end after September 30th, 2025. If you haven't switched to direct deposit, this is your final month to make the change.\n🎯 Who Should Watch:\nCurrent Social Security recipients\nAnyone planning to claim benefits soon\nSeniors managing monthly budgets\nPeople receiving SSI payments\nAnyone wanting to maximize their Social Security income\n💡 Pro Tip: Understanding these September changes could help you better plan your finances and ensure you never miss a payment. Share this video with friends and family who depend on Social Security benefits.\n📞 Need Help? Contact the Social Security Administration at 1-800-772-1213 for personalized assistance with your benefits.\n👍 If this video helped you understand your Social Security benefits better, please LIKE and SUBSCRIBE for more important updates about retirement and government benefits!\nDISCLAIMER: This video is for educational purposes only and should not replace professional financial advice. Always consult with the Social Security Administration for official information about your specific benefits.\n\n🔥 #SocialSecurity2025 #SocialSecurityIncrease #SocialSecurityPayments #September2025 #COLA2025 #RetirementBenefits #SocialSecurityRaise #SSI2025 #SocialSecurityChanges #RetirementIncome #SocialSecurityUpdate #BenefitIncrease #SeniorBenefits #GovernmentBenefits #SocialSecurityNews",
  "comments": [
  "Oh thanks again for telling us when we get paid",
  "SEEING IS BELEIVING???Seniors are not all blind.. dumb..deaf or stupid! Enough is enough.. cut the crap!",
  "Hmm.... the poor see nothing ever. Just alot of BS.",
  "SO I will not be getting My SSI And I will NEVER receive My money because I never got it's from social security",
  "clickbait AI generated. Disregard this and move on.",
  "In my case 2.1% raise means 4% rent increase. Thank you dumpy for the 4% rent increase.",
  "Nothing new here...just more lies and shit we already know😢😮",
  "Absolutely useless video. Much Ado About Nothing !!! Shame !!!",
  "When????????????  Its August 29th.  Estremely poor communications.",
  "Is this another fake news i think should be a law any fake news by any media types that harms American citizens should be investigated and punished  fake news is a crime .",
  "Some checks ate in the bank already and no one has seen any increase. Same amount.",
  "Seniors need at least 3.5 or more money to live",
  "I got NOTHING EXTRA! NOTHING!",
  "How are they randomly allowed to change the date or Social Security is deposited. I have automatic deposits going out right after I assume my Social Security is in my account. Now they’re changing the date it’s going to be delivered. WTF is going on here get it fucking together.",
  "I don’t believe any of it! I haven’t seen a dime hit any of my accounts. Everything is getting more and more expensive and we are getting less money all the time. This is so fucked up on so many levels someone needs a goddamn do something to do it now! Sorry for the rant",
  "Another clickbait lying video.",
  "Huge social security ca\nchange small checks 😂😂😂😂😂😂😂",
  "No SSI anymore",
  "I need the money",
  "Clickbait, none of this is true.",
  "You are allowed to be shy with yourself that is not true",
  "Nope!",
  "Trump is Social Security check from Federal Government and that would be Medicare and then if you have medical that is state funded so why is the state trying to take people payment from their social security check for medical payments from what I understand is the state government has no right touching the federal government checks",
  "COLA IS A DUMB JOKE.",
  "Yakking for nothing. Most of the information is known already.",
  "Trump you you can keep my 20 dollar increase",
  "This is BS",
  "Stop LYING 😂",
  "Stop lying to us . We are fed up with your lies .you arecworking for the ri ch",
  "Funny I have not seen a damn thing since Trump came into office. Stop your lie and the only people getting anything are the ones who make more than the average low income senior,remember the ones who need it the most. As seniors get older we are forgotten and receive NOTHING.Everybody else has gotten something but us.",
  "SO FAR I'VE SEEN & HEARD NOTHING BUT BULLSHIT LIES"
]

  },
  "_qczkG_AqmU": {
    "description": "Jake Paul speaks to the media after being stopped by Anthony Joshua in Miami — and somehow manages to turn a knockout loss into a victory speech.\n\nIn this parody post-fight interview, Jake insists he didn’t lose, claims a broken jaw proves he’s built different, and reframes six brutal rounds with a two-time heavyweight champion as “historic game planning.”\n\nFrom dancing around the ring to surviving longer than expected, Jake explains why this wasn’t a defeat — it was a trailer for what’s next.\n\n⚠️ This video is a satirical parody created for entertainment purposes.\nNothing said should be taken as a real interview or factual statement.\n\nIf you enjoy boxing parodies, post-fight reactions, and exaggerated sports press conferences — like, comment, and subscribe.",
  "comments": [
  "Ahaha ik this is AI. I just wanted to say if his mouth was shut he was getting knocked out cold. Since it was open it broke his jaw in two places",
  "And NO ONE realises this is AI 🤣",
  "Just … MAN what a f**kwit",
  "From what I saw ya 🤡 ya spent most of those 6 rounds sticking ya 😝 out and running away 😂😂",
  "Keep telling yourself that pal",
  "you did not fight Anthony Joshua for 6 rounds. You ran away and on your knees with arms around his leg for 6 round then got knocked out with broken jaw.",
  "Thank you very much AJ"
]
  },
  "sVspeqNnoWM": {
    "description": "Thanks to Elon Musk for the tweet! \nKamala Harris just posted her first 2024 presidential campaign ad.\nIt's clean and professional. It's very well done.\nSo, of course, I had to produce a parody.\n-----------------------------------------------\nPatreon: / mrreagan \n-----------------------------------------------\nMR REAGAN MERCHANDISE\nhttps://teespring.com/stores/mr-reagan\n--------------------------------------------\nFOLLOW MR REAGAN ON TWITTER!\n / mrreaganusa \n-----------------------------------------------\nMusic by The Passion HiFi\nwww.thepassionhifi.com\n\n#Politics #News #Trending",
    "comments": [
  "Elon Musk gave me a retweet for this video! 👍🏻 Thanks Elon.\n\nhttps://x.com/elonmusk/status/1816974609637417112?s=46&t=WGm5UEGUY7Rz53i1NxAdCQ",
  "So Newsom tried to ban this? This was obviously a parody and not just because of the video title. He is far from a promoter or preserver of our freedom of speech",
  "Absolutely hysterical",
  "Joe did not teach you to hide incompetence. He has no idea how.",
  "Why is no one doing press conferences on current affairs as if she was president?",
  "So stupid",
  "Love it.",
  "I hate your cackling and I hate you Kamala Harris",
  "Oh what a nut cake she is. We almost had her as a president?? Dearest God, thank you for our escape from her and our new, strong, cognizant President Trump🫶👍👍👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻👏🏻🙏🙏",
  "😂😂😂",
  "Can you imagine if this bird brain would have won the election? Thank God we have enough smart people who voted in 2024 for Trump.",
  "I am subscribing here on your show because like you I hate YouTube and Hope Elon Musk buys it as well.",
  "Parody? 😂it’s all true!!!!",
  "Elon Musk is brilliant!!!",
  "And don't ever forget she lost so hard 😂",
  "GOD BLESS PRESIDENT TRUMP!",
  "I watch this clip over and over again. don't get tire of it .",
  "On my mama y'all is retarded as hell and this is a projection of the root of who Donald Trump is as a makeshift politician. Donald Trump is nothing more than a celebrity who had that capital to go political. He has no significant political background or knowledge of the Constitution and you uneducated hillbillies elected him. I can stand y'all, Donald Trump, or Elon Musk's closeted gay ass!",
  "She is the definition of a simpleton. Thank God America has dodged the bullet.",
  "I would like to reclaim my time!!",
  "That's the truest video on the Internet.",
  "The only Black she has or had was the slaves her family owned. So now, she say well they were like family…..hummmm",
  "This parady is so accurate.",
  "I didn’t know it was a parody because it’s how she actually acts lmaoooo",
  "I am not Joe Biden. I am also not Donald Trump. And I approve of this message (except for the inappropriate language toward the end).",
  "I tried sharing this on Facebook, but when I clicked \"post\", it gave me the notification that it goes against their community standards. When I shared it without the caption, it posted just fine. Zucknut is protecting Kameltoe Harris.",
  "I wouldn't let this woman manage a Taco Bell.",
  "This is LITERALLY perfect",
  "This has me laughing so loud I worry my neighbors will file a noise complaint",
  "Dude, Gavin Nuscum is after you!",
  "If you watch this ad in California, you can get 10 yrs imprisonment.",
  "You are genius man, it is so hilarious but it is so true. Please do Kamala cackle 😁😁😁",
  "Good thing you don’t still live in California, Kris or this would be banned by the all mighty NewScum!",
  "Facebook won't let me share on my timeline!",
  "Trump 2024",
  "Trump is crazy and evil",
  "My prayers that we all be saved from the idiocy of fellow Americans who think she's super kewl!",
  "Yeah yea😂",
  "Hahahah she is so stupid",
  "Still good the third time round 😂😂😂",
  "Why is this video so hard to find? …. YouTube",
  "This video is very holistic. Like a Venn diagram.",
  "When I shared this to Facebook, FB tried to censor it.",
  "Brilliant!❤",
  "Sadly, these seems more real than a parody.\nGod help America.",
  "EPIC!!!!! 😅 👏👏👏👏",
  "Hey Newscum… What are you going to do to us? LOL 😂 You’re a gay joke Newscum!",
  "Always buffles me that trump supporters are so much against corruption and deep state but then smh they vote for trump who is just openly corrupt and evil. So apperently the open evil and corruption is better than the hidden corruption?",
  "The book of faces won't allow the video link. Goes against \"established community standards.\"\n\nF*** you Zuckerberg. Suppressing oppositional speech is antithetical to freedom of speech.",
  "😂😂😂😂 love it ! TRUMP 2024🇺🇸❤️"
]

  },
  "Qn4SP5Z2wOY": {
    "description": "It's been 48h since Google launched Veo 3\nIt's time for the thing that everyone feared.\nFake news.\n---------------------------\nVisuals: https://flow.google/\nMotion: https://flow.google/\nMusic: https://share.epidemicsound.com/zjob5v\nUpscaled to 4K with Topaz AI Video: https://topazlabs.com/ref/2435/\n---------------------------\n\nWelcome to my YouTube channel, where I'm exploring the fascinating world of AI-generated films and advertising. I'm on a mission to push the boundaries of what's possible in cinema through the power of artificial intelligence, focusing on creating innovative films for cinema, advertisements, and more. My work showcases how AI can transform storytelling and visual content, and I'm excited to share this journey with you.\n\n#ai #veo3 #fakenews",
    "comments": [
      "Facebook elders, Twitter and Tiktok brain damage will have a lot to do 😂",
      "Old people will believe this and I‘m not blaming them. We are cooked.",
      "Scary thing is none of this sounds that implausible",
      "WE ARE SO COOKED.",
      "I can’t with the dramatic music that keeps playing 😭",
      "Man this paired with VR and we'll live in a completely artificial world. The future is going to be strange",
      "I remember in the 80s and 90s I used to say all these news anchors sound the same and deliver the news from the same script they sound like robots, here we are in 2025 and it's happening.",
      "Welp. Humanity had a good run.",
      "We can make our own \"TheOnion\"\" skits now.",
      "Some of these would fool me, for sure"
    ]
  }
};

// --- Mock Data Generators ---

const generateRandomTime = () => {
  const times = ['2 hours ago', '5 hours ago', '1 day ago', '3 days ago', '1 week ago', '2 weeks ago', '1 month ago', '1 year ago'];
  return times[Math.floor(Math.random() * times.length)];
};

const generateViews = () => {
  const views = ['12K', '45K', '110K', '1.2M', '5.4M', '8.9M', '230K', '15K'];
  return views[Math.floor(Math.random() * views.length)];
};

const generateDescription = (title, channel) => {
  return `In this video, ${channel} brings you an exclusive look at "${title}". We dive deep into the details, analyzing every aspect to give you the most comprehensive breakdown possible.\n\nTimestamps:\n0:00 - Intro\n2:30 - Key Analysis\n5:45 - The Reveal\n8:20 - Final Thoughts\n\nMake sure to like, comment, and subscribe for more content like this! We upload videos every week covering the latest trends in technology, politics, and entertainment.\n\nFollow us on social media:\nTwitter: @${channel.replace(/\s/g, '')}\nInstagram: @${channel.replace(/\s/g, '')}_official\n\n#${channel.replace(/\s/g, '')} #Trending #VideoAnalysis #2026`;
};

const generateDummyComments = () => [
  "This is so interesting!",
  "I never thought about it this way.",
  "Can you make more videos like this?",
  "Amazing content, keep it up!",
  "I'm not sure if I agree with this.",
  "Wow, technology is moving fast.",
  "Great video!",
  "Subscribed!",
  "Waiting for the next part.",
  "This helped me understand the topic better, thanks!"
];

const categories = [
  "All", "Gaming", "Music", "Live", "Mixes", "React Routers",
  "Computer programming", "Podcasts", "Trailers", "News",
  "Recently uploaded", "Watched", "New to you"
];

// --- Video Data Configuration ---
const VIDEO_DB = [
  { id: "video1", ytId: "ghLtBXmhDsU", title: "ZELENSKY ISSUES APOLOGY TO TRUMP", channel: "SyntheticVoices" },
  { id: "video2", ytId: "cQ54GDm1eL0", title: "You Won’t Believe What Obama Says In This Video! 😉", channel: "BuzzFeedVideo" },
  { id: "video3", ytId: "_qczkG_AqmU", title: 'Jake Paul "I WON" - Post Fight Press Conference', channel: "Sports Central" },
  { id: "video4", ytId: "wIjc3ceDzr4", title: "Huge News! Social Security 2026 Raise Update", channel: "Benefit Alert Now" },
  { id: "video5", ytId: "Qn4SP5Z2wOY", title: "Google Veo 3 Fake News | AI Video Generation", channel: "AI Trends" },
  { id: "video6", ytId: "sVspeqNnoWM", title: "Kamala Harris Ad PARODY", channel: "Political Satire" },
  { id: "video7", ytId: "FlztGX_y0OI", title: "AI Michael Jackson in 2026 - New Song", channel: "Music Futurism" },
  { id: "video8", ytId: "_-1eC2LK6u0", title: "Get 0.07 BTC ($7,000) Free Bitcoin: Complete Tutorial!", channel: "Crypto King" },
  { id: "video9", ytId: "-Sv9YjU0fRE", title: "Hacker who donated $4 Billions to Palestine!", channel: "Tech & Society" },
  { id: "video10", ytId: "M4CosGoddVA", title: "Elon Musk Launches $1 Million Daily Giveaway", channel: "Crypto News Daily" },
  { id: "video11", ytId: "-UBaW1OIgTo", title: "THE FUTURE OF HUMANITY: A.I Predicts 400 Years", channel: "Future Timeline" },
  { id: "video12", ytId: "DY5vnaCx_KE", title: "A Time Traveler's VLOG | Google VEO 3 Short Film", channel: "Filmmaker Pro" }
];

const INITIAL_VIDEOS = VIDEO_DB.map((vid) => {
  // Check if we have real data for this video
  const realData = CSV_DATA[vid.ytId];
  
  return {
    id: vid.id,
    ytId: vid.ytId,
    title: vid.title,
    thumbnail: `https://img.youtube.com/vi/${vid.ytId}/mqdefault.jpg`,
    channelName: vid.channel,
    channelAvatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${vid.channel}`,
    views: generateViews(),
    uploadedAt: generateRandomTime(),
    duration: "12:45",
    category: "General",
    // Use real description or fallback to generator
    description: realData ? realData.description : generateDescription(vid.title, vid.channel),
    // Use real comments or fallback to generator
    comments: realData ? realData.comments : generateDummyComments()
  };
});

// --- UNIQUE TOOL DATA FOR EVERY VIDEO ---
const NOTE_DATABASE = {
  "video1": {
    title: "ZELENSKY ISSUES APOLOGY TO TRUMP",
    consensus: {
      label: "AI-GENERATED",
      text: "Commenters overwhelmingly recognize the video as AI-generated or fake, noting visual glitches like changing teeth and explicitly calling it AI. While many find it funny or impressive, they also describe it as scary and dystopian, implying it should not be trusted as real or shared as genuine political footage.",
      previewText: "Commenters overwhelmingly recognize the video as AI-generated or fake, noting visual glitches like changing teeth and explicitly calling it AI. While..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Community signal", content: "Impersonation risk: Users identify it as an AI deepfake of a political figure, potentially misleading viewers." },
      { id: 'r3', icon: 'trash', title: "Spam / low-effort repetition", content: "Spam/low-signal comments: Repetitive short reactions (LOL, emojis, 'AI') contribute noise without adding context." },
      { id: 'r2', icon: 'search', title: "Visual anomalies", content: "Political misinformation: Some comments treat the fake apology as real, risking confusion about actual events." },
      ],
    viewerResponse: "Viewers typically respond by reporting misleading content, adding clarifying comments, or referencing credible sources to reduce misinformation.",
    safety: { 
      category: "Impersonation", 
      hoverText: "Mimicking someone without their consent", 
      score: 10, 
      ratingCode: "TV-PG", 
      ratingDesc: "This program contains material that parents may find unsuitable for younger children. Parental guidance suggested." 
    }
  },
  "video2": {
    title: "You Won’t Believe What Obama Says!",
    consensus: {
      label: "CONTEXT-MISSING",
      text: "Users point out this is a known educational deepfake by Jordan Peele. It is not real footage, but a PSA about AI dangers.",
      previewText: "Users point out this is a known educational deepfake by Jordan Peele..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Context Required", content: "Staged demonstration, not a real event." }
    ],
    viewerResponse: "Viewers typically add context to explain the educational intent behind the media.",
    safety: { 
      category: "Educational", 
      hoverText: "Mimicry with consent", 
      score: 85, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video3": {
    title: 'Jake Paul "I WON" - Post Fight',
    consensus: {
      label: "AI-GENERATED",
      text: "Most commenters recognize or suspect the video is AI-generated, with at least one explicitly stating it. Others discuss the fictional fight outcome as if critiquing a staged or fabricated scenario, suggesting they do not treat it as authentic footage. Overall, the community seems to view it as untrustworthy as real sports media but acceptable as parody.",
      previewText: "Most commenters recognize or suspect the video is AI-generated, with at least one explicitly stating it. Others discuss..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Community signal", content: "Impersonation / Deceptive realism: AI content appears to mimic real fighters and events, potentially misleading casual viewers." },
      { id: 'r3', icon: 'search', title: "Community signal", content: "Targeted abuse / Harassment: Comments insulting Jake Paul’s performance and injury border on hostile, personal mockery." },
      { id: 'r2', icon: 'search', title: "Visual anomalies", content: "Content authenticity confusion: Mixed reactions (jokes vs. critiques) indicate uncertainty about what is real versus synthetic." },
      ],
    viewerResponse: "Viewers typically respond by reporting misleading content, adding clarifying comments, or referencing credible sources to reduce misinformation.",
    safety: { 
      category: "Impersonation", 
      hoverText: "Mimicking someone without their consent", 
      score: 10, 
      ratingCode: "TV-14", 
      ratingDesc: "This program contains material that parents may find unsuitable for children under 14. Parents strongly cautioned." 
    }
  },
  "video4": {
    title: "Huge News! Social Security 2026 Raise",
    consensus: {
      label: "AI-GENERATED",
      text: "Most commenters distrust the video, calling it clickbait, fake, and misleading about Social Security raises and payment dates. Viewers report seeing no increases, accuse the creator of lying for views or money, and consider it useless, repetitive content offering nothing new or verifiable. Overall credibility and trustworthiness are perceived as very low.",
      previewText: "Most commenters distrust the video, calling it clickbait, fake, and misleading about Social Security raises..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Community signal", content: "Scam/Deception: Multiple users label the video as fake news, lies, and misleading clickbait about payments." },
      { id: 'r3', icon: 'search', title: "Community signal", content: "Exploitative monetization: Viewers accuse the creator of using fear and false hope to drive views and revenue." },
      { id: 'r3', icon: 'trash', title: "Spam / low-effort repetition", content: "Spam/Low-value content: Comments note repetitive, useless information with no real updates or actionable details." },
      { id: 'r4', icon: 'bot', title: "Bot-like Behavior", content: "Bot/AI suspicion: One commenter explicitly calls it 'clickbait AI generated', implying automated, low-trust production." },
    ],
    viewerResponse: "Viewers typically respond by reporting misleading content, adding clarifying comments, or referencing credible sources to reduce misinformation.",
    safety: { 
      category: "News and Media", 
      hoverText: "Content related to current events or up", 
      score: 10, 
      ratingCode: "TV-14", 
      ratingDesc: "This program contains material that parents may find unsuitable for children under 14. Parents strongly cautioned." 
    }
  },
  "video5": {
    title: "Google Veo 3 Fake News | AI Video",
    consensus: {
      label: "AI-GENERATED",
      text: "This video is explicitly labeled as an AI demo. Viewers are discussing the quality of the generation rather than its truthfulness.",
      previewText: "This video is explicitly labeled as an AI demo..."
    },
    risks: [],
    viewerResponse: "Viewers are engaging in technical discussions about the AI model's capabilities.",
    safety: { 
      category: "Technology", 
      hoverText: "AI Tool Showcase", 
      score: 90, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video6": {
    title: "Kamala Harris Ad PARODY",
    consensus: {
      label: "AI-GENERATED",
      text: "Content is exaggerated for comedic effect. Viewers recognize this as a parody skit, not a real campaign ad.",
      previewText: "Content is exaggerated for comedic effect. Viewers recognize this as..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Community signal", content: "Targeted abuse/harassment: Multiple comments mock and insult Kamala Harris personally, including her laugh and intelligence." },
      { id: 'r2', icon: 'search', title: "Community signal", content: "Scaling & amplification: Users claim suppression and shadow-banning on YouTube and Facebook, encouraging mass sharing and reporting." },
      { id: 'r3', icon: 'search', title: "Community signal", content: "Political manipulation: Comments frame the parody as “truthful ad,” urging voting behavior and coordinated reporting of real ads." },
      { id: 'r4', icon: 'trash', title: "Spam / low-effort repetition", content: "Spam/promotion: Repeated calls to share, download, and spread the video across platforms to boost its reach." },
      ],
    references: ['https://x.com/elonmusk/status/1816974609637417112?s=46&t=WGm5UEGUY7Rz53i1NxAdCQ'],
    viewerResponse: "Viewers typically respond by reporting misleading content, adding clarifying comments, or referencing credible sources to reduce misinformation.",
    safety: { 
      category: "Impersonation", 
      hoverText: "Mimicking someone without their consent", 
      score: 10, 
      ratingCode: "TV-PG", 
      ratingDesc: "This program contains material that parents may find unsuitable for younger children. Parental guidance suggested." 
    }
  },
  "video7": {
    title: "AI Michael Jackson in 2026",
    consensus: {
      label: "AI-AUDIO",
      text: "The visuals are static/fan-made, but the vocals are confirmed as an AI model (RVC). Users are debating the ethics.",
      previewText: "The visuals are static/fan-made, but the vocals are confirmed as an AI model..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Synthetic Vocals", content: "Audio analysis confirms non-human vocal patterns." }
    ],
    viewerResponse: "Viewers are debating the ethical implications of using a deceased artist's voice.",
    safety: { 
      category: "Synthetic Audio", 
      hoverText: "AI Voice Cloning", 
      score: 60, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video8": {
    title: "Get 0.07 BTC Free Bitcoin!",
    consensus: {
      label: "SCAM",
      text: "WARNING: High volume of bot comments. Real users are flagging this as a wallet drainer scam.",
      previewText: "WARNING: High volume of bot comments. Real users are flagging this..."
    },
    risks: [
      { id: 'r1', icon: 'trash', title: "Bot Network", content: "95% of comments originate from new accounts." },
      { id: 'r2', icon: 'search', title: "Malicious Link", content: "Description links flag as phishing." }
    ],
    viewerResponse: "Real viewers are posting warnings to ignore the links and report the channel.",
    safety: { 
      category: "Scam", 
      hoverText: "Fraudulent Activity", 
      score: 10, 
      ratingCode: "TV-MA", 
      ratingDesc: "For mature audiences." 
    }
  },
  "video9": {
    title: "Hacker donated $4 Billions!",
    consensus: {
      label: "MISLEADING",
      text: "Footage is real but dates back to 2018. The 'Hacker' story is a fabrication added via text overlay.",
      previewText: "Footage is real but dates back to 2018..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "False Context", content: "Visuals do not support the textual claims." }
    ],
    viewerResponse: "Viewers are providing links to the original 2018 news story to correct the record.",
    safety: { 
      category: "Misinformation", 
      hoverText: "False Context", 
      score: 40, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  },
  "video10": {
    title: "Elon Musk Launches Giveaway",
    consensus: {
      label: "AI-GENERATED",
      text: "Classic deepfake scam. Lip movements do not sync with the audio. Voice is monotone and lacks natural inflection.",
      previewText: "Classic deepfake scam. Lip movements do not sync with the audio..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Lip Sync Failure", content: "Visuals desynchronized by >200ms." },
      { id: 'r2', icon: 'trash', title: "Scam Pattern", content: "Matches known 'doubling' scam scripts." }
    ],
    viewerResponse: "Viewers are flagging the video as a scam and warning others not to send crypto.",
    safety: { 
      category: "Scam", 
      hoverText: "Deepfake Scam", 
      score: 12, 
      ratingCode: "TV-14", 
      ratingDesc: "Parents strongly cautioned." 
    }
  },
  "video11": {
    title: "A.I Predicts 400 Years",
    consensus: {
      label: "ARTISTIC-AI",
      text: "Users appreciate the visuals. Explicitly understood as a creative prediction/art piece, not factual footage.",
      previewText: "Users appreciate the visuals. Explicitly understood as a creative prediction..."
    },
    risks: [],
    viewerResponse: "Viewers are complimenting the artistic style and imaginative concepts.",
    safety: { 
      category: "Art", 
      hoverText: "Creative AI Usage", 
      score: 95, 
      ratingCode: "TV-G", 
      ratingDesc: "General Audience." 
    }
  },
  "video12": {
    title: "A Time Traveler's VLOG",
    consensus: {
      label: "AI-GENERATED",
      text: "A creative short film made with Google Veo. Viewers are discussing the plot and visual consistency.",
      previewText: "A creative short film made with Google Veo..."
    },
    risks: [
      { id: 'r1', icon: 'search', title: "Visual Artifacts", content: "Background warping detected." }
    ],
    viewerResponse: "Viewers are treating the content as a fictional story and discussing plot points.",
    safety: { 
      category: "Entertainment", 
      hoverText: "Fictional Narrative", 
      score: 88, 
      ratingCode: "TV-PG", 
      ratingDesc: "Parental guidance suggested." 
    }
  }
};

// --- Sub-components ---

const SidebarItem = ({ icon: Icon, label, isActive, isCollapsed, onClick, isDarkMode }) => (
  <div
    onClick={onClick}
    className={`flex items-center p-3 rounded-lg cursor-pointer mb-1 transition-colors 
      ${isActive 
        ? (isDarkMode ? 'bg-zinc-800 font-medium' : 'bg-gray-100 font-medium') 
        : (isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100')
      } 
      ${isCollapsed ? 'flex-col justify-center gap-1 p-2' : 'gap-5'}`}
  >
    <Icon size={isCollapsed ? 24 : 22} className={isActive ? (isDarkMode ? 'text-white fill-current' : 'text-black fill-current') : (isDarkMode ? 'text-white' : 'text-black')} />
    <span className={`text-sm ${isCollapsed ? 'text-[10px]' : 'truncate flex-1'} ${isDarkMode ? 'text-white' : 'text-black'}`}>{label}</span>
  </div>
);

const CategoryPill = ({ label, isSelected, onClick, isDarkMode }) => (
  <button
    onClick={() => onClick(label)}
    className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
      ${isSelected
        ? (isDarkMode ? 'bg-white text-black' : 'bg-black text-white')
        : (isDarkMode ? 'bg-zinc-800 text-white hover:bg-zinc-700' : 'bg-gray-100 text-black hover:bg-gray-200')
      }`}
  >
    {label}
  </button>
);

const VideoCard = ({ video, isDarkMode }) => {
  // Navigation removed
  return (
    <div className="flex flex-col gap-3 cursor-default group">
      <div className={`relative aspect-video rounded-xl overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs text-white font-medium">
          {video.duration}
        </div>
      </div>
      <div className="flex gap-3">
        <img
          src={video.channelAvatar}
          alt={video.channelName}
          className={`w-9 h-9 rounded-full mt-1 object-cover ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-300'}`}
        />
        <div className="flex flex-col">
          <h3 className={`font-semibold leading-tight line-clamp-2 text-sm md:text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {video.title}
          </h3>
          <div className={`text-xs md:text-sm mt-1 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
            <p className={`transition-colors ${isDarkMode ? 'hover:text-white' : 'hover:text-black'}`}>{video.channelName}</p>
            <div className="flex items-center">
              <span>{video.views} views</span>
              <span className="mx-1">•</span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RelatedVideoCard = ({ video, isDarkMode }) => {
  // Navigation removed
  return (
    <div className="flex gap-2 cursor-default group">
      <div className={`relative w-40 flex-shrink-0 aspect-video rounded-lg overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[10px] text-white font-medium">
          {video.duration}
        </div>
      </div>
      <div className="flex flex-col gap-1 pr-2">
        <h4 className={`text-sm font-medium line-clamp-2 leading-tight group-hover:underline ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {video.title}
        </h4>
        <div className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
          <p>{video.channelName}</p>
          <p>{video.views} views • {video.uploadedAt}</p>
        </div>
      </div>
    </div>
  );
};

// --- COMMUNITY LENS TOOL UI (With Theme Toggle) ---
const CommunityLensUI = ({ videoId, isDarkMode, toggleTheme }) => {
  const [isToolOpen, setIsToolOpen] = useState(true);
  const [showFullConsensus, setShowFullConsensus] = useState(false);
  const [expandedRisks, setExpandedRisks] = useState({});
  const [showViewerResponse, setShowViewerResponse] = useState(false);
  const [isHoveringCategory, setIsHoveringCategory] = useState(false);

  // State for expandable main sections
  const [openSections, setOpenSections] = useState({
    risks: false,
    references: false
  });

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const data = NOTE_DATABASE[videoId];
  if (!data) return null;

  const toggleRisk = (id) => {
    setExpandedRisks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // --- Dynamic Theme Styles (YouTube Themed) ---
  const theme = {
    // Containers
    mainContainer: isDarkMode ? 'bg-[#212121] border-[#3f3f3f]' : 'bg-white border-gray-200',
    headerBg: isDarkMode ? 'bg-[#212121] border-b border-[#3f3f3f]' : 'bg-[#f0f0f0] border-b border-gray-300',
    bodyBg: isDarkMode ? 'bg-[#212121]' : 'bg-white',
    
    // Typography
    textMain: isDarkMode ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]',
    textSub: isDarkMode ? 'text-[#aaaaaa]' : 'text-[#606060]',
    textHighlight: isDarkMode ? 'text-[#3ea6ff] hover:text-[#6faeff]' : 'text-[#065fd4] hover:text-[#003e87]', // YouTube Blue for links
    
    // Sections (Consensus / Risks)
    cardBorder: isDarkMode ? 'border-[#3f3f3f] bg-[#0f0f0f]' : 'border-gray-300 bg-gray-50',
    sectionHeaderBg:'bg-[#a10f18]', // YouTube Red
    
    // Interactive Elements
    riskItemBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f] hover:bg-[#2a2a2a]' : 'bg-white border-gray-200 hover:bg-gray-100',
    viewerResponseBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-blue-50/50 border-blue-100 text-gray-700',
    
    // Icons
    iconTrashBg: isDarkMode ? 'bg-[#272727] text-[#aaaaaa]' : 'bg-gray-200 text-gray-600',
    iconSearchBg: isDarkMode ? 'bg-[#263850] text-[#3ea6ff]' : 'bg-blue-100 text-blue-600',
    iconBotBg: isDarkMode ? 'bg-[#3E2723] text-[#FFAB91]' : 'bg-orange-100 text-orange-600', // New bot icon style

    // Age Rating
    ageRatingContainer: isDarkMode ? 'bg-[#0f0f0f] border-[#3f3f3f]' : 'bg-white border-gray-300',
    ageRatingBox: isDarkMode ? 'bg-white text-black' : 'bg-black text-white',
    
    // Footer
    footerBorder: isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200',
    footerText: isDarkMode ? 'text-[#aaaaaa]' : 'text-gray-500',
    footerBrand: isDarkMode ? 'text-white' : 'text-black'
  };

  // Helper to get correct icon
  const getRiskIcon = (type) => {
      if (type === 'trash') return <Trash2 size={14} />;
      if (type === 'bot') return <Bot size={14} />;
      return <Search size={14} />;
  };

  // Helper to get correct icon style
  const getRiskIconStyle = (type) => {
      if (type === 'trash') return theme.iconTrashBg;
      if (type === 'bot') return theme.iconBotBg;
      return theme.iconSearchBg;
  };

  // Shadows removed from main container
  return (
    <div className={`mt-6 w-full font-sans rounded-xl overflow-hidden border ${theme.mainContainer} animate-in fade-in slide-in-from-top-4 duration-500 relative z-0`}>
      
      {/* 1. HEADER - Clickable to toggle visibility */}
      <div 
        onClick={() => setIsToolOpen(!isToolOpen)}
        className={`p-3 relative flex items-center justify-between cursor-pointer transition-colors hover:bg-opacity-80 ${theme.headerBg}`}
      >
        
        <div className="flex items-center gap-3">
           {/* Shadows removed */}
           <div className="bg-[#FF0000] p-1.5 rounded-lg">
              <ShieldAlert size={18} className="text-white" fill="currentColor" />
           </div>
           <div>
              <h1 className={`text-sm font-bold tracking-tight leading-none ${theme.textMain}`}>CommunityLens</h1>
              <p className={`text-[10px] mt-0.5 font-medium ${theme.textSub}`}>AI Content Analysis</p>
           </div>
        </div>

        {/* BUTTON GROUP (Theme Toggle) */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle - Synced with global state */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              toggleTheme();
            }}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#3f3f3f] text-[#f1f1f1]' : 'hover:bg-gray-200 text-gray-600'}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* 2. BODY */}
      {isToolOpen && (
        <div className={`${theme.bodyBg} p-4`}>
            
            {/* CONSENSUS (Static) */}
            <div className={`rounded-xl overflow-hidden border mb-4 ${theme.cardBorder}`}>
              <div className={`p-2.5 pl-3 flex items-center gap-2 ${theme.sectionHeaderBg}`}>
                <Activity size={16} className="text-white" />
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">Community Consensus</h4>
              </div>
              <div className="p-4">
                <span className={`inline-block text-[12px] px-2 py-1 rounded-sm font-bold mb-3 border ${isDarkMode ? 'bg-[#272727] text-white border-[#3f3f3f]' : 'bg-gray-200 text-black border-gray-300'}`}>
                  {data.consensus.label}
                </span>
                <p className={`text-xs leading-relaxed ${theme.textMain}`}>
                  {showFullConsensus ? data.consensus.text : data.consensus.previewText}
                  {!showFullConsensus && (
                    <button 
                      onClick={() => setShowFullConsensus(true)}
                      className={`font-medium ml-1 text-[10px] uppercase ${theme.textHighlight}`}
                    >
                      Read more
                    </button>
                  )}
                </p>
              </div>
            </div>

            {/* RISKS (Expandable) */}
            <div className={`rounded-xl overflow-hidden border mb-4 ${theme.cardBorder}`}>
              <button 
                onClick={() => toggleSection('risks')}
                className={`w-full p-2.5 pl-3 flex items-center justify-between ${theme.sectionHeaderBg} hover:brightness-110 transition-all`}
              >
                <div className="flex items-center gap-2">
                    <AlertOctagon size={16} className="text-white" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">Risk Patterns</h4>
                </div>
                {openSections.risks ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
              </button>
              
              {openSections.risks && (
                <div className="p-3 flex flex-col gap-2 animate-in slide-in-from-top-2 duration-200">
                    {data.risks.length > 0 ? (
                        data.risks.map((risk) => (
                        <div key={risk.id} className={`border rounded-lg transition-colors ${theme.riskItemBg}`}>
                            <button 
                            onClick={() => toggleRisk(risk.id)}
                            className="w-full flex items-center gap-3 p-2.5 text-left"
                            >
                            <div className={`p-1.5 rounded-full flex-shrink-0 ${getRiskIconStyle(risk.icon)}`}>
                                {getRiskIcon(risk.icon)}
                            </div>
                            <span className={`flex-1 font-medium text-xs ${theme.textMain}`}>{risk.title}</span>
                            {expandedRisks[risk.id] 
                                ? <ChevronUp size={16} className={theme.textSub} />
                                : <ChevronDown size={16} className={theme.textSub} />
                            }
                            </button>
                            {expandedRisks[risk.id] && (
                            <div className={`px-3 pb-3 pt-0 pl-11 text-xs ${theme.textSub}`}>
                                {risk.content}
                            </div>
                            )}
                        </div>
                        ))
                    ) : (
                        <p className={`text-xs p-2 italic ${theme.textSub}`}>No significant risks detected by the community.</p>
                    )}

                    {/* VIEWER RESPONSE SECTION */}
                    {data.risks.length > 0 && (
                        <div className={`mt-2 pt-2 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
                        <button 
                            onClick={() => setShowViewerResponse(!showViewerResponse)}
                            className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors w-full p-1 ${theme.textHighlight}`}
                        >
                            <div className="flex items-center gap-1">
                                {showViewerResponse ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                {showViewerResponse ? 'Hide community response' : 'Show community response'}
                            </div>
                        </button>
                        
                        {showViewerResponse && data.viewerResponse && (
                            <div className={`mt-2 p-3 border rounded-lg text-xs leading-relaxed animate-in fade-in ${theme.viewerResponseBg}`}>
                            <div className="flex gap-3">
                                <div className="w-0.5 self-stretch bg-[#3ea6ff] rounded-full flex-shrink-0"></div>
                                <div>{data.viewerResponse}</div>
                            </div>
                            </div>
                        )}
                        </div>
                    )}
                </div>
              )}
            </div>

            {/* REFERENCES (Expandable) */}
            <div className={`rounded-xl overflow-hidden border mb-6 ${theme.cardBorder}`}>
              <button 
                onClick={() => toggleSection('references')}
                className={`w-full p-2.5 pl-3 flex items-center justify-between ${theme.sectionHeaderBg} hover:brightness-110 transition-all`}
              >
                <div className="flex items-center gap-2">
                    <ExternalLink size={16} className="text-white" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">References</h4>
                </div>
                {openSections.references ? <ChevronUp size={18} className="text-white" /> : <ChevronDown size={18} className="text-white" />}
              </button>
              
              {openSections.references && (
                <div className="p-4 animate-in slide-in-from-top-2 duration-200">
                    {data.references && data.references.length > 0 ? (
                        <ul className="list-disc pl-4 space-y-1">
                            {data.references.map((ref, index) => (
                                <li key={index} className={`text-xs ${theme.textMain}`}>
                                    <a href={ref} target="_blank" rel="noopener noreferrer" className={`hover:underline break-all ${theme.textHighlight}`}>
                                        {ref}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={`text-xs ${theme.textSub}`}>No community citations available yet.</p>
                    )}
                </div>
              )}
            </div>

            <div className={`h-px w-full mb-6 ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-200'}`}></div>

            {/* --- UPDATED LAYOUT: Content Category & Age Rating in 2 Columns --- */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              
              {/* Col 1: Content Category & Safety */}
              <div className={`flex-1 border rounded-xl p-3 flex flex-col justify-between ${theme.cardBorder}`}>
                  <div className="flex justify-between items-start mb-2">
                      <span className={`text-[9px] font-bold uppercase tracking-wider ${theme.textSub}`}>Category</span>
                      
                      {/* FIX: Relative Wrapper for Tooltip */}
                      <div className="relative">
                          <div 
                            onMouseEnter={() => setIsHoveringCategory(true)}
                            onMouseLeave={() => setIsHoveringCategory(false)}
                            // Shadows removed, cursor-help kept
                            className={`border cursor-help text-[10px] pl-3 pr-2 py-1 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 ${isDarkMode ? 'bg-[#272727] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-gray-100 border-gray-300 text-black'}`}
                          >
                            {data.safety.category}
                            <div className={`rounded-full w-3 h-3 flex items-center justify-center ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-300'}`}>
                              <Info size={8} className={theme.textMain} strokeWidth={2.5} />
                            </div>
                          </div>
                          
                          {/* Hover Tooltip - Positioned absolute to relative wrapper */}
                          {isHoveringCategory && (
                            <div className={`absolute bottom-full mb-2 right-0 w-max max-w-[200px] text-[11px] px-3 py-2 rounded-lg z-50 text-center animate-in fade-in zoom-in duration-200 border ${isDarkMode ? 'bg-[#212121] border-[#3f3f3f] text-[#f1f1f1]' : 'bg-white border-gray-300 text-black'}`}>
                              {data.safety.hoverText}
                            </div>
                          )}
                      </div>
                  </div>
                  
                  {/* Safety Meter */}
                  <div className="relative w-full mt-1">
                      <div 
                        className={`absolute -top-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] transition-all duration-500 ${isDarkMode ? 'border-t-[#f1f1f1]' : 'border-t-black'}`}
                        style={{ left: `${data.safety.score}%`, transform: 'translateX(-50%)' }}
                      ></div>
                      <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-[#FF0000] via-[#FFCC00] to-[#2BA640] opacity-90"></div>
                      <div className="flex justify-between w-full text-[8px] font-bold mt-1 tracking-wider uppercase opacity-70">
                        <span className="text-[#FF0000]">Unsafe</span>
                        <span className="text-[#2BA640]">Safe</span>
                      </div>
                  </div>
              </div>

              {/* Col 2: Age Rating */}
              <div className={`flex-1 border rounded-xl p-3 flex items-center gap-3 ${theme.ageRatingContainer}`}>
                  <div className={`p-1 rounded w-10 h-8 flex flex-col items-center justify-center flex-shrink-0 ${theme.ageRatingBox}`}>
                    <span className="text-[6px] font-bold leading-none uppercase">TV</span>
                    <span className="text-sm font-black leading-none -mt-0.5">{data.safety.ratingCode.split('-')[1]}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 ${theme.textSub}`}>Rated for</span>
                    <p className={`text-[10px] leading-tight font-medium ${theme.textMain}`}>
                        {data.safety.ratingDesc}
                    </p>
                  </div>
              </div>

            </div>

            {/* FOOTER */}
            <div className={`text-center pt-4 border-t ${theme.footerBorder}`}>
              <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.footerText}`}>
                Powered by <span className={`font-bold ${theme.footerBrand}`}>ChatGPT</span>
              </p>
            </div>

        </div>
      )}
    </div>
  );
};

// --- Page Components ---

const WatchPage = ({ videos, isDarkMode, toggleTheme, currentVideoId }) => {
  // ROUTING REMOVED: const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  
  // Find video by internal ID passed via Props
  const targetId = currentVideoId || "video1";
  const currentVideo = videos.find(v => v.id === targetId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMore(false);
  }, [targetId]);

  if (!currentVideo) return <div className="p-10 text-white">Video not found.</div>;

  // UPDATED: Dynamic comment count
  const commentCount = currentVideo.comments.length;

  return (
    <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto p-4 lg:p-6 gap-6 animate-in fade-in duration-500">
      <div className="flex-1 min-w-0">
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg relative z-20">
          
          {/* UPDATED IFRAME: Added key, mute=1 */}
          <iframe
            key={currentVideo.ytId} // ensures the player completely reloads for new videos
            width="100%"
            height="100%"
            // mute=1 is required for Chrome/Edge/Safari to allow autoplay on the very first load
            src={`https://www.youtube.com/embed/${currentVideo.ytId}?autoplay=1&mute=1`} 
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>

        </div>

        <div className="mt-4">
          <h1 className={`text-xl font-bold line-clamp-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.title}</h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={currentVideo.channelAvatar}
                className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-300'}`}
                alt={currentVideo.channelName}
              />
              <div>
                <h3 className={`font-bold text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.channelName}</h3>
                <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>1.45M subscribers</p>
              </div>
              <button className={`ml-2 px-4 py-2 rounded-full font-medium text-sm transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className={`flex items-center rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                <button className={`flex items-center gap-2 px-4 py-2 rounded-l-full border-r transition-colors ${isDarkMode ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-gray-200 border-gray-300'}`}>
                  <ThumbsUp size={18} className={isDarkMode ? 'text-white' : 'text-black'} />
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>24K</span>
                </button>
                <button className={`px-4 py-2 rounded-r-full transition-colors border-r ${isDarkMode ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-gray-200 border-gray-300'}`}>
                  <ThumbsDown size={18} className={isDarkMode ? 'text-white' : 'text-black'} />
                </button>
              </div>

              <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                <Share2 size={18} />
                <span className="text-sm font-medium">Share</span>
              </button>
              
               <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                <Download size={18} />
                <span className="text-sm font-medium">Download</span>
              </button>

               <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors whitespace-nowrap hidden xl:flex ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                <Scissors size={18} />
                <span className="text-sm font-medium">Clip</span>
              </button>

              <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors hidden sm:flex ${isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'}`}>
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Description Box */}
        <div className={`mt-4 rounded-xl p-3 text-sm transition-all duration-200 ${isDarkMode ? 'bg-zinc-800/50' : 'bg-gray-100'} ${showMore ? '' : (isDarkMode ? 'cursor-pointer hover:bg-zinc-800' : 'cursor-pointer hover:bg-gray-200')}`} onClick={() => !showMore && setShowMore(true)}>
          <div className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {currentVideo.views} views • {currentVideo.uploadedAt} • <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>#AI #Tech #Future</span>
          </div>
          
          <div className={`relative ${showMore ? '' : 'max-h-20 overflow-hidden'}`}>
             <p className={`whitespace-pre-line leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>
              {currentVideo.description}
            </p>
          </div>
          
          <button 
            className={`mt-2 font-bold block ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
            onClick={(e) => {
              e.stopPropagation();
              setShowMore(!showMore);
            }}
          >
            {showMore ? 'Show less' : '...more'}
          </button>
        </div>

        <CommunityLensUI videoId={currentVideo.id} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <div className="mt-6 hidden md:block">
          <div className="flex items-center gap-8 mb-6">
            {/* UPDATED: Dynamic comment count */}
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>{commentCount} Comments</h3>
            <div className={`flex items-center gap-2 text-sm font-medium cursor-pointer ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <div className="flex flex-col gap-[3px]">
                <div className={`w-5 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-3 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-4 h-[2px] ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
              </div>
              Sort by
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold flex-shrink-0 text-white">R</div>
            <div className="flex-1">
              <input type="text" placeholder="Add a comment..." className={`w-full bg-transparent border-b outline-none pb-1 text-sm ${isDarkMode ? 'border-zinc-700 focus:border-white text-white' : 'border-gray-400 focus:border-black text-black'}`} />
              <div className="flex justify-end gap-2 mt-2">
                <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}>Cancel</button>
                <button className="px-3 py-1.5 rounded-full bg-blue-600/50 text-zinc-400 text-sm font-medium cursor-not-allowed">Comment</button>
              </div>
            </div>
          </div>

          {currentVideo.comments.map((comment, i) => {
            // UPDATED: Calculate decreasing likes based on index to simulate "Top Comments" sort
            // First comment gets the most likes, last gets the least.
            // Formula: (Total Comments - Index) * Multiplier (e.g., 23)
            const simulatedLikes = (currentVideo.comments.length - i) * 23 + Math.floor(Math.random() * 10); 

            return (
            <div key={i} className="flex gap-4 mb-6">
              <div className={`w-10 h-10 rounded-full flex-shrink-0 overflow-hidden ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-200'}`}>
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=User${i}`} alt="user" />
              </div>
              <div>
                <div className="flex gap-2 items-center text-xs mb-1">
                  <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>@user-random{i}</span>
                  <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>2 days ago</span>
                </div>
                <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>{comment}</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1.5 cursor-pointer">
                    <ThumbsUp size={14} className={isDarkMode ? 'text-white' : 'text-black'} />
                    {/* UPDATED: Display simulated likes */}
                    <span className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{simulatedLikes}</span>
                  </div>
                  <div className="cursor-pointer">
                    <ThumbsDown size={14} className={isDarkMode ? 'text-white' : 'text-black'} />
                  </div>
                  <button className={`text-xs font-medium px-3 py-1 rounded-full ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}>Reply</button>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>

      <div className="lg:w-[350px] xl:w-[400px] flex-shrink-0">
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-2">
          <CategoryPill label="All" isSelected={true} onClick={() => { }} isDarkMode={isDarkMode} />
          <CategoryPill label="From this channel" isSelected={false} onClick={() => { }} isDarkMode={isDarkMode} />
          <CategoryPill label="Related" isSelected={false} onClick={() => { }} isDarkMode={isDarkMode} />
        </div>
        <div className="flex flex-col gap-2">
          {videos.filter(v => v.id !== currentVideo.id).map((vid) => (
            <div key={`rel-${vid.id}`}>
              <RelatedVideoCard
                video={vid}
                isDarkMode={isDarkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Application Component ---

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  // Global Theme State
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // --- Survey Mode State (Default ON) ---
  const [isSurveyActive, setIsSurveyActive] = useState(true);
  // OPTIMIZED: Fixed queue 
  const [surveyQueue, setSurveyQueue] = useState(['video1', 'video6', 'video3', 'video4']);
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(0);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let filtered = INITIAL_VIDEOS;
    if (selectedCategory !== "All") {
      filtered = INITIAL_VIDEOS;
    }
    if (searchQuery) {
      filtered = filtered.filter(v =>
        v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.channelName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setVideos(filtered);
  }, [selectedCategory, searchQuery]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // --- Survey Functions (Simplified) ---
  // Note: startSurvey is removed as requested, it defaults to ON.

  const nextSurveyVideo = () => {
    if (currentSurveyIndex < surveyQueue.length - 1) {
      setCurrentSurveyIndex(prev => prev + 1);
    }
  };

  const prevSurveyVideo = () => {
    if (currentSurveyIndex > 0) {
      setCurrentSurveyIndex(prev => prev - 1);
    }
  };

  const exitSurvey = () => {
    // Optional: Reset if you want to allow exiting, though user implied "this is the flow"
    setIsSurveyActive(false);
    setSurveyQueue([]);
    setCurrentSurveyIndex(0);
  };


  const SidebarContent = ({ collapsed, isDarkMode }) => (
    <div className={`h-full overflow-y-auto custom-scrollbar pb-4 ${collapsed ? 'px-1' : 'px-3'}`}>
      <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
        <SidebarItem icon={Home} label="Home" isActive={location.pathname === '/'} isCollapsed={collapsed} onClick={() => navigate('/')} isDarkMode={isDarkMode} />
        <SidebarItem icon={MonitorPlay} label="Shorts" isCollapsed={collapsed} isDarkMode={isDarkMode} />
        <SidebarItem icon={Compass} label="Subscriptions" isCollapsed={collapsed} isDarkMode={isDarkMode} />
      </div>
      {!collapsed && (
        <>
          <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <h3 className={`px-3 py-2 text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>You</h3>
            <SidebarItem icon={History} label="History" isDarkMode={isDarkMode} />
            <SidebarItem icon={PlaySquare} label="Your videos" isDarkMode={isDarkMode} />
            <SidebarItem icon={Clock} label="Watch later" isDarkMode={isDarkMode} />
            <SidebarItem icon={ThumbsUp} label="Liked videos" isDarkMode={isDarkMode} />
            <SidebarItem icon={ListPlus} label="Playlists" isDarkMode={isDarkMode} />
          </div>
          <div className={`py-2 border-b ${isDarkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
            <h3 className={`px-3 py-2 text-base font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>Explore</h3>
            <SidebarItem icon={Flame} label="Trending" isDarkMode={isDarkMode} />
            <SidebarItem icon={Music2} label="Music" isDarkMode={isDarkMode} />
            <SidebarItem icon={Gamepad2} label="Gaming" isDarkMode={isDarkMode} />
            <SidebarItem icon={Newspaper} label="News" isDarkMode={isDarkMode} />
            <SidebarItem icon={Trophy} label="Sports" isDarkMode={isDarkMode} />
          </div>
          <div className="py-2">
            <SidebarItem icon={Settings} label="Settings" isDarkMode={isDarkMode} />
            <SidebarItem icon={HelpCircle} label="Help" isDarkMode={isDarkMode} />
            <SidebarItem icon={LogOut} label="Send feedback" isDarkMode={isDarkMode} />
          </div>
        </>
      )}
      {collapsed && (
        <div className="py-2">
          <SidebarItem icon={PlaySquare} label="Library" isCollapsed={true} isDarkMode={isDarkMode} />
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex flex-col h-screen overflow-hidden font-sans relative transition-colors duration-200 ${isDarkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
      <header className={`flex items-center justify-between px-4 h-14 fixed w-full top-0 z-50 transition-colors duration-200 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white border-b border-gray-200'}`}>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className={`p-2 rounded-full transition-colors active:bg-zinc-700 ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}
          >
            <Menu className={isDarkMode ? 'text-white' : 'text-black'} />
          </button>
          <div
            className="flex items-center gap-1 cursor-pointer select-none"
            onClick={() => navigate('/')}
          >
            <div className="w-[93px] h-[20px] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 93 20" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                <g>
                  <path d="M14.4848 20C14.4848 20 23.5695 20 25.8229 19.4C27.0917 19.06 28.0459 18.08 28.3808 16.87C29 14.65 29 9.98 29 9.98C29 9.98 29 5.34 28.3808 3.14C28.0459 1.9 27.0917 0.94 25.8229 0.61C23.5695 0 14.4848 0 14.4848 0C14.4848 0 5.42037 0 3.17711 0.61C1.9286 0.94 0.954148 1.9 0.59888 3.14C0 5.34 0 9.98 0 9.98C0 9.98 0 14.65 0.59888 16.87C0.954148 18.08 1.9286 19.06 3.17711 19.4C5.42037 20 14.4848 20 14.4848 20Z" fill="#FF0033"></path>
                  <path d="M19 10L11.5 5.75V14.25L19 10Z" fill="white"></path>
                </g>
                <g id="youtube-paths_yt9" fill={isDarkMode ? "currentColor" : "black"}>
                  <path d="M37.1384 18.8999V13.4399L40.6084 2.09994H38.0184L36.6984 7.24994C36.3984 8.42994 36.1284 9.65994 35.9284 10.7999H35.7684C35.6584 9.79994 35.3384 8.48994 35.0184 7.22994L33.7384 2.09994H31.1484L34.5684 13.4399V18.8999H37.1384Z"></path>
                  <path d="M44.1003 6.29994C41.0703 6.29994 40.0303 8.04994 40.0303 11.8199V13.6099C40.0303 16.9899 40.6803 19.1099 44.0403 19.1099C47.3503 19.1099 48.0603 17.0899 48.0603 13.6099V11.8199C48.0603 8.44994 47.3803 6.29994 44.1003 6.29994ZM45.3903 14.7199C45.3903 16.3599 45.1003 17.3899 44.0503 17.3899C43.0203 17.3899 42.7303 16.3499 42.7303 14.7199V10.6799C42.7303 9.27994 42.9303 8.02994 44.0503 8.02994C45.2303 8.02994 45.3903 9.34994 45.3903 10.6799V14.7199Z"></path>
                  <path d="M52.2713 19.0899C53.7313 19.0899 54.6413 18.4799 55.3913 17.3799H55.5013L55.6113 18.8999H57.6012V6.53994H54.9613V16.4699C54.6812 16.9599 54.0312 17.3199 53.4212 17.3199C52.6512 17.3199 52.4113 16.7099 52.4113 15.6899V6.53994H49.7812V15.8099C49.7812 17.8199 50.3613 19.0899 52.2713 19.0899Z"></path>
                  <path d="M62.8261 18.8999V4.14994H65.8661V2.09994H57.1761V4.14994H60.2161V18.8999H62.8261Z"></path>
                  <path d="M67.8728 19.0899C69.3328 19.0899 70.2428 18.4799 70.9928 17.3799H71.1028L71.2128 18.8999H73.2028V6.53994H70.5628V16.4699C70.2828 16.9599 69.6328 17.3199 69.0228 17.3199C68.2528 17.3199 68.0128 16.7099 68.0128 15.6899V6.53994H65.3828V15.8099C65.3828 17.8199 65.9628 19.0899 67.8728 19.0899Z"></path>
                  <path d="M80.6744 6.26994C79.3944 6.26994 78.4744 6.82994 77.8644 7.73994H77.7344C77.8144 6.53994 77.8744 5.51994 77.8744 4.70994V1.43994H75.3244L75.3144 12.1799L75.3244 18.8999H77.5444L77.7344 17.6999H77.8044C78.3944 18.5099 79.3044 19.0199 80.5144 19.0199C82.5244 19.0199 83.3844 17.2899 83.3844 13.6099V11.6999C83.3844 8.25994 82.9944 6.26994 80.6744 6.26994ZM80.7644 13.6099C80.7644 15.9099 80.4244 17.2799 79.3544 17.2799C78.8544 17.2799 78.1644 17.0399 77.8544 16.5899V9.23994C78.1244 8.53994 78.7244 8.02994 79.3944 8.02994C80.4744 8.02994 80.7644 9.33994 80.7644 11.7299V13.6099Z"></path>
                  <path d="M92.6517 11.4999C92.6517 8.51994 92.3517 6.30994 88.9217 6.30994C85.6917 6.30994 84.9717 8.45994 84.9717 11.6199V13.7899C84.9717 16.8699 85.6317 19.1099 88.8417 19.1099C91.3817 19.1099 92.6917 17.8399 92.5417 15.3799L90.2917 15.2599C90.2617 16.7799 89.9117 17.3999 88.9017 17.3999C87.6317 17.3999 87.5717 16.1899 87.5717 14.3899V13.5499H92.6517V11.4999ZM88.8617 7.96994C90.0817 7.96994 90.1717 9.11994 90.1717 11.0699V12.0799H87.5717V11.0699C87.5717 9.13994 87.6517 7.96994 88.8617 7.96994Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center flex-1 max-w-[720px] ml-10">
          <div className="flex w-full items-center">
            <div className={`flex items-center flex-1 border rounded-l-full ml-8 focus-within:border-blue-500 overflow-hidden shadow-inner ${isDarkMode ? 'bg-[#121212] border-zinc-700' : 'bg-gray-100 border-gray-300'}`}>
              <div className={`pl-4 pr-1 hidden md:block ${isDarkMode ? 'text-zinc-400' : 'text-gray-500'}`}>
                <Search size={18} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className={`w-full bg-transparent border-none outline-none px-4 py-2 ${isDarkMode ? 'text-white placeholder-zinc-400' : 'text-black placeholder-gray-500'}`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={`p-1 rounded-full mr-2 ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-200'}`}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <button className={`px-5 py-2 border border-l-0 rounded-r-full transition-colors ${isDarkMode ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}>
              <Search size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
            </button>
          </div>
          <button className={`ml-4 p-2.5 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-gray-100 hover:bg-gray-200'}`}>
            <Mic size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          
          {/* THEME TOGGLE BUTTON (Replaced Video Icon) */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full hidden sm:block transition-colors ${isDarkMode ? 'hover:bg-zinc-800 text-white' : 'hover:bg-gray-100 text-black'}`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button className={`p-2 rounded-full relative ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-gray-100'}`}>
            <Bell size={22} className={isDarkMode ? 'text-white' : 'text-black'} />
            <span className={`absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 ${isDarkMode ? 'border-[#0f0f0f]' : 'border-white'}`}>9+</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm font-bold cursor-pointer hover:opacity-90 text-white">
            AA
          </div>
        </div>
      </header>

      {/* --- SURVEY FLOATING BUTTONS (Exit Button Removed) --- */}
      {isSurveyActive && (
        <>
            <div className="fixed bottom-6 left-6 z-[100] animate-in slide-in-from-left duration-300">
                <button 
                    onClick={prevSurveyVideo}
                    disabled={currentSurveyIndex === 0}
                    className={`flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10 ${currentSurveyIndex === 0 ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                >
                    <ArrowLeft size={24} strokeWidth={3} />
                    <span className="font-bold text-lg hidden sm:inline">PREVIOUS</span>
                </button>
            </div>

            <div className="fixed bottom-6 right-6 z-[100] flex gap-4 animate-in slide-in-from-right duration-300">
                {/* Exit button removed here */}

                <button 
                    onClick={nextSurveyVideo}
                    disabled={currentSurveyIndex === surveyQueue.length - 1}
                    className={`flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10 ${currentSurveyIndex === surveyQueue.length - 1 ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
                >
                    <span className="font-bold text-lg hidden sm:inline">NEXT VIDEO</span>
                    <ArrowRight size={24} strokeWidth={3} />
                </button>
            </div>
            
            {/* Survey Progress Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono text-white">
                SURVEY MODE: {currentSurveyIndex + 1} / {surveyQueue.length}
            </div>
        </>
      )}

      <div className="flex flex-1 pt-14 h-full">
        <aside className={`hidden md:flex flex-col h-full transition-all duration-200 ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'} ${isSidebarOpen ? 'w-60' : 'w-[72px]'}`}>
          <SidebarContent collapsed={!isSidebarOpen} isDarkMode={isDarkMode} />
        </aside>

        <main className={`flex-1 overflow-y-auto relative custom-scrollbar ${isDarkMode ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
          {/* OPTIMIZED: Routes commented out to enforce single-view fixed flow */}
          {/* <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  videos={videos}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  isDarkMode={isDarkMode}
                />
              }
            />
            <Route
              path="/video/:id"
              element={<WatchPage videos={INITIAL_VIDEOS} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
            />
          </Routes> 
          */}
          
          {/* Direct Render of Survey Mode */}
          <WatchPage 
            videos={INITIAL_VIDEOS} 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
            currentVideoId={surveyQueue[currentSurveyIndex]} 
          />
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: transparent;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: ${isDarkMode ? '#71717a' : '#d1d5db'};
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

// --- Root Component Wrapper ---

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}