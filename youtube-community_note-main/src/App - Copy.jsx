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
  ArrowLeft, ArrowRight, PlayCircle, XCircle, ClipboardList, Bot,
  FileText, Link2, Quote, Wand2, List, Award, ShieldCheck, User
} from 'lucide-react';


const CSV_DATA = {
  "6QRFcO1lPHE": {
    "description": "Donald Trump Announcement on reducing healthcare price for all Americans.",
    "comments": [
      "So after 10 years Trumps blockbuster Obamacare replacement plan…is to subsidize private health insurance plans?",
      "Trumps trying to Gulf of America Obamacare this shits so stupid",
      "They are hiding his internal bleeding on his right hand too.",
      "Practicing for when the dirt calls him home.",
      "His hands are ghostly white, dont move and his left wrist is freakishly small.",
      "Omg and they look terrible",
      "He doesn't even look like this anymore. He has aged so much in the last year.",
      "He kept his hand covered through the whole thing.",
      "Trump is in serious decline.",
      "He’s gonna die and nobody will know for a week maybe more.",
      "Looks like a pedophile protector",
      "Nobody has ever heard of 80 or 90% before",
      "The media works for Trump.",
      "bro he’s literally a president do you think they would just have some shitty ass cameras?",
      "You see he’s still covering that hand.",
      "Look at that hand. Those fingers look really weird, even for him.",
      "His hands and face are completely different colours",
      "Ur cooked",
      "Yeah, otherwise he slurs and sounds like he has a mouth full of saliva.",
      "Too slurpy to be AI.",
      "It’s not ai, it’s trump slurring his words, perhaps fighting a battle with his dentures.",
      "It's definitely not ai. He is hiding his right hand and they cut to different camera angles when he fucks up the line.",
      "Have some confidence. You’re smarter than an above-average MAGAT.",
      "I dont even know how the media is supposed to adres this",
      "He has never once stayed on point for more than 30 seconds. 100% AI",
      "Either his imaginary accordion finally broke or this is ai",
      "We should make it illegal for the Whitehouse to release AI videos of the president - especially when representing it as if it’s real",
      "AI sure has his remedial speaking skills down pat.",
      "yes I think many of his adress to the nation are AI, he cant talk that fast or fluently in real life",
      "Well ole Grok says it's AI",
      "5 mins and his face and fingers are the only thing that move. 100% AI",
      "Agree, it’s so obviously AI.",
      "Even the voice is blatant AI",
      "AI Slop in every sense of the definition",
      "This is an AI video",
      "I called this out over his Kirk video too - it’s the same AI tool",
      "The AI video got too much energy to be Trump that nigga half asleep fr",
      "Anyone who has worked with AI models can easily tell this is AI.",
      "You can tell it’s AI cuz Trump can’t form full sentences and stay on topic.",
      "This shit is AI again, isn't it?",
      "Ai satan you say?",
      "This is the exact same AI software from when Charlie Kirk died.",
      "If anything, it's AI enhanced. He recorded it and they cleaned up pronunciation",
      "Analyze the video and give me your best judgment if this is an Ai generated video.",
      "Even AI trunp is tryin desperately to hide that hand bruise",
      "I’m pretty sure they filmed him and used ai to fix up his face.",
      "The fact that they now appear to be using the Chinese model Qwen to do the second angle should be a little concerning",
      "Plot twist, Trump is already dead, and we won't know for months due to AI",
      "Is it, I was thinking it was AI, its not like Trump to talk without his minions by his side",
      "It legit looks like his hands are superglued to the desk."
    ]
  },
  "ghLtBXmhDsU": {
    "description": "ZELENSKY ISSUES APOLOGY TO TRUMP regarding his temu suit.",
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
    "description": "\"We're entering an era in which our enemies can make anyone say anything at any point in time.\"\n\nCheck out more awesome videos at BuzzFeedVideo!\nhttps://bit.ly/YTbuzzfeedvideo\nhttps://bit.ly/YTbuzzfeedblue1\nhttps://bit.ly/YTbuzzfeedviolet\n\nGET MORE BUZZFEED:\nhttps://www.buzzfeed.com\nhttps://www.buzzfeed.com/videos\n / buzzfeedvideo \n / asis \n / buzzfeedblue \n / buzzfeedviolet \n / perolike \n / ladylike \n\nBuzzFeedVideo\nBuzzFeed Motion Picture's flagship channel. Sometimes funny, sometimes serious, always shareable. New videos posted daily!\n\nLove BuzzFeed? Get the merch! BUY NOW: https://goo.gl/gQKF8m\n\nCredits: https://www.buzzfeed.com/bfmp/videos/...\n\nEXTERNAL CREDITS\nJordan Peele\nhttps://monkeypawproductions.com/",
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
      "When???????????? Its August 29th. Estremely poor communications.",
      "Is this another fake news i think should be a law any fake news by any media types that harms American citizens should be investigated and punished fake news is a crime .",
      "Some checks ate in the bank already and no one has seen any increase. Same amount.",
      "Seniors need at least 3.5 or more money to live",
      "I got NOTHING EXTRA! NOTHING!",
      "How are they randomly allowed to change the date or Social Security is deposited. I have automatic deposits going out right after I assume my Social Security is in my account. Now they're changing the date it's going to be delivered. WTF is going on here get it fucking together.",
      "I don't believe any of it! I haven't seen a dime hit any of my accounts. Everything is getting more and more expensive and we are getting less money all the time. This is so fucked up on so many levels someone needs a goddamn do something to do it now! Sorry for the rant",
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
    "description": "Jake Paul speaks to the media after being stopped by Anthony Joshua in Miami — and somehow manages to turn a knockout loss into a victory speech.\n\nIn this parody post-fight interview, Jake insists he didn't lose, claims a broken jaw proves he's built different, and reframes six brutal rounds with a two-time heavyweight champion as \"historic game planning.\"\n\nFrom dancing around the ring to surviving longer than expected, Jake explains why this wasn't a defeat — it was a trailer for what's next.\n\n⚠️ This video is a satirical parody created for entertainment purposes.\nNothing said should be taken as a real interview or factual statement.\n\nIf you enjoy boxing parodies, post-fight reactions, and exaggerated sports press conferences — like, comment, and subscribe.",
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
      "Parody? 😂it's all true!!!!",
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
      "I didn't know it was a parody because it's how she actually acts lmaoooo",
      "I am not Joe Biden. I am also not Donald Trump. And I approve of this message (except for the inappropriate language toward the end).",
      "I tried sharing this on Facebook, but when I clicked \"post\", it gave me the notification that it goes against their community standards. When I shared it without the caption, it posted just fine. Zucknut is protecting Kameltoe Harris.",
      "I wouldn't let this woman manage a Taco Bell.",
      "This is LITERALLY perfect",
      "This has me laughing so loud I worry my neighbors will file a noise complaint",
      "Dude, Gavin Nuscum is after you!",
      "If you watch this ad in California, you can get 10 yrs imprisonment.",
      "You are genius man, it is so hilarious but it is so true. Please do Kamala cackle 😁😁😁",
      "Good thing you don't still live in California, Kris or this would be banned by the all mighty NewScum!",
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
      "Hey Newscum… What are you going to do to us? LOL 😂 You're a gay joke Newscum!",
      "Always buffles me that trump supporters are so much against corruption and deep state but then smh they vote for trump who is just openly corrupt and evil. So apperently the open evil and corruption is better than the hidden corruption?",
      "The book of faces won't allow the video link. Goes against \"established community standards.\"\n\nF*** you Zuckerberg. Suppressing oppositional speech is antithetical to freedom of speech.",
      "😂😂😂😂 love it ! TRUMP 2024🇺🇸❤️"
    ]
  },
  "Qn4SP5Z2wOY": {
    "description": "It's been 48h since Google launched Veo 3\nIt's time for the thing that everyone feared.\nFake news.\n---------------------------\nVisuals: https://flow.google/\nMotion: https://flow.google/\nMusic: https://share.epidemicsound.com/zjob5v\nUpscaled to 4K with Topaz AI Video: https://topazlabs.com/ref/2435/\n---------------------------\n\nWelcome to my YouTube channel, where I'm exploring the fascinating world of AI-generated films and advertising. I'm on a mission to push the boundaries of what's possible in cinema through the power of artificial intelligence, focusing on creating innovative films for cinema, advertisements, and more. My work showcases how AI can transform storytelling and visual content, and I'm excited to share this journey with you.\n\n#ai #veo3 #fakenews",
    "comments": [
      "Facebook elders, Twitter and Tiktok brain damage will have a lot to do 😂",
      "Old people will believe this and I'm not blaming them. We are cooked.",
      "Scary thing is none of this sounds that implausible",
      "WE ARE SO COOKED.",
      "I can't with the dramatic music that keeps playing 😭",
      "Man this paired with VR and we'll live in a completely artificial world. The future is going to be strange",
      "I remember in the 80s and 90s I used to say all these news anchors sound the same and deliver the news from the same script they sound like robots, here we are in 2025 and it's happening.",
      "Welp. Humanity had a good run.",
      "We can make our own \"TheOnion\"\" skits now.",
      "Some of these would fool me, for sure"
    ]
  },
  "FlztGX_y0OI": {
    "description": "Experimenting with local AI models to bring Michael Jackson back to life. This is more of a proof of concept than anything meaningful, but I feel it came out alright. Looking forward to adding animations and \n\nNOTE: This project is made for entertainment and creative purposes only. I did not use the best source image as this was made on a whim, but will produce a new version down the line once other projects are complete.\n\nDon't forget to like, comment, and subscribe for more AI-powered experiments with music, culture, and history!\n\n#mj #michaeljackson #jackson5 #aivideo #kingofpop",
    "comments": [
      "Michael Jackson i love you",
      "Heal the world, make a better place, for you, for me and the entire human race.\nThere are people dying and if you care for the living make a better place for you and for me.",
      "Love",
      "même avec l'IA Michael est toujours beau.",
      "Only the voice is Michael´s and he clarifies what for me was always clear",
      "Good ❤!",
      "I know excited i. What to say is hi Micheal Jackson I love you ❤❤❤",
      "omg so funny xD \nits not as handsome as michael but not bad !\nI LOVED IT !",
      "That's ai",
      "I Love Michael Jackson So Much.",
      "Ai"
    ]
  },
  "n2muvB3NGZc": {
    "description": "New video has emerged showing a physical clash between Alex Pretti and federal agents over a week before he was fatally shot by Customs and Border Protection agents. A representative for Pretti’s family confirmed to CNN that the man in a video posted Wednesday is Pretti.\n\n0:00 New video shows federal agents clashing with Alex Pretti 11 days before his death \n1:55 CNN This Morning panel discusses the new video of Pretti \n3:20 Steve Bannon remarks about Minneapolis controversy\n6 :57 CNN chief law enforcement and intelligence analyst reacts to the video \n\n#Minneapolis #AlexPretti  #News",
    "comments": [
      "This video is official and not AI. A second angle reveals that he did this: https://www.youtube.com/watch?v=_bwI_MfMhHo.",
      "Physically confronting federal law enforcement officers and obstructing their operations is never a bright idea. FAFO.",
      "Clearly he was unhinged. Already committed a felony by assaulting ICE. Which means he should not be carrying a firearm to begin with.",
      "The video clearly suggest he was never a peaceful protester, he was a violent protesters who also had a gun.",
      "Why does his arm disappear when dropping his coat? It's AI...",
      "He was a mentally deranged lunatic and it was only of time before he would kill someone.",
      "Fake AI video of a dead man, now that’s low‼‼",
      "I like how they covered the ai watermark with the date. If you look closely you can see the watermark for a Korean based ai video platform.",
      "He came back for more and now he’s dead.",
      "Wait 11 days before?? Man I thought it was same day. No point in even publishing this, it's clearly an AI fabrication with Grok.",
      "Imagine that, Pretti was a violent, armed rioter, and not an innocent person.",
      "It’s AI. Fire hydrants don’t move. Scrub the video back and fourth from 0:30 to 0:59.",
      "This video is AI. The name on the suv disappears, and that light came off like it was held on with bubblegum.",
      "He was looking for trouble and found it. Peaceful protestors, no way.",
      "This is straight up A.I. look how the ice agents move. Almost galloping.",
      "The tail light wires are the same color as the vehicle, and the wires are coming out where there are none. AI.",
      "Kudos to CNN for posting actual news - Alex assaulting agents, local PD not arresting Alex.",
      "Seems he wasnt so peaceful afterall.",
      "Definitely looks suspicious as AI to me. Same clothes identical.",
      "Took them near 3 days to render this video and they couldn’t even prompt a new outfit 😂",
      "He had a fully loaded 9mm. Why did he need an extra clip? This just shows intent.",
      "TNM is a Korean a.i company. Ffs, you can see the watermark. This is fake.",
      "This video looks like it was AI generated!!!",
      "Spitting and kicking im sure he means well. Not so lovely guy after all.",
      "The way the SUV breaks looks so unrealistic, probably Sora 2.",
      "This just proves hes was unhinged and batshit crazy. 😂",
      "Look closely. The ai has a difficult time generating people coming out of vehicles. The license plate changes size.",
      "Violence while armed against law enforcement is dangerous. This guy is a classic FAFO.",
      "That rear light came off pretty cleanly. Footage is suspicious. AI is getting more and more realistic.",
      "He was an agitator and kept pushing the line until he paid the price.",
      "Gotta put out an AI video to try to spin it. It looks fake.",
      "This poor guy was mental, obviously didn't know how to behave. Anger issues on full display.",
      "Who filmed this? Has the footage been thoroughly vetted to check that it's not AI?",
      "Can Be a Fake Video?",
      "It's AI and he Is Niko Bellic.",
      "Alex Pretti got what he REPEATEDLY asked for and should be SATISFIED.",
      "I call AI. No way this just popped up and he's in all the same clothing. Stop it.",
      "He was a nut case. Spitting and kicking. Good riddance.",
      "It is AI created. We have authorities that review things like that in my country. It's fake news.",
      "Seems like A.I generated. But if real, on the day he was killed, he was calm and peaceful.",
      "Oh so he was a nut case.",
      "Clearly an AI video and people are falling for it 😅😊!",
      "He made several bad decisions and ended up dead. It is sad, but this is how life works.",
      "Yes this AI video with his arms flapping around.",
      "Blatant AI manipulation. Never seen a taillight broken that easily. 2 10mm bolts hold that on.",
      "The more that comes out about this guy, the more he doesn’t look like the all-American Joe.",
      "Scrub the video back and fourth 0:30 to 0:59. AI artifacts everywhere.",
      "So he is wearing the same clothes from 11 days ago? AI.",
      "It's scary how the news doesn’t even verify and its reported as real. AI at it's finest.",
      "Definitely not the nurse saint they portrayed him to be. It's AI haha."
    ]
  },
  "-Sv9YjU0fRE": {
    "description": "\"Hacker who donated $4 billions to Palestine and Africa\" \n\n\nWelcome to our \"The Knowledge Nexus\". Today, we're diving into the extraordinary life of Hamza Bendellaj, the man who hacked 217 banks and allegedly earned a staggering $4 billion, only to donate it all to Palestine and Africa. Hamza Bendellaj, also known as Bx1, was born in 1988 in Tizi Ouzou, Algeria. From a young age, Hamza displayed an exceptional talent for computers and technology. Little did anyone know, this skill would lead him to become one of the most notorious hackers in history. Using his extraordinary hacking abilities, Hamza infiltrated 217 banks and financial institutions around the world. But how did he do it? Hamza used a combination of phishing attacks and sophisticated malware, known as SpyEye, to gain access to bank accounts and steal massive amounts of money. SpyEye, a powerful tool in the world of cybercrime, allowed Hamza to monitor and siphon off funds from compromised accounts. He operated with precision, often remaining undetected for extended periods. But Hamza wasn't motivated by personal gain. He had a different mission. He donated all the money he obtained to support humanitarian efforts in Palestine and Africa, becoming a modern-day Robin Hood for many. However, his activities did not go unnoticed forever. In 2013, Hamza was arrested in Thailand during a joint operation by the FBI and Thai authorities. His capture marked the end of his hacking spree, but not his legacy. Following his arrest, Hamza was extradited to the United States, where he faced numerous charges related to his hacking activities. Despite his intentions to aid those in need, the law could not overlook the gravity of his crimes. Hamza was sentenced to 15 years in prison. Although rumors circulated about his execution, these were unfounded. Instead, he remains incarcerated, with many still viewing him as a hero who used his skills to fight for a cause. Hamza Bendellaj's story is a complex one, filled with contradictions. On one hand, he broke the law in a significant way. On the other, he used his ill-gotten gains to support the oppressed and provide for those in dire need. Hamza Bendellaj's life serves as a reminder of the power of intention and the blurred lines between right and wrong. Whether you see him as a criminal or a hero, there's no denying the impact of his actions. What do you think of Hamza Bendellaj's story? Let us know in the comments below. Don't forget to like, share, and subscribe for more intriguing stories.\n\nFull story of Hamza Bandellaj.\nHamza Bandellaj who donated $4 billions to Palestine and Africa\n\n\nTags:\n\n\n#hamzabandellaj #hacker #algerianhacker #bankhacker #ethicalhacking #cybersecurity #finacialfraud #bankhacking #bankingfraud #theknowlwdgenexus #generalknowledge #huamanity",
    "comments": [
      "Wonderful information",
      "Mind-blowing",
      "It seems like AI story. Not real!",
      "informative",
      "Interesting",
      "This is Ai fake scammer",
      "AI Genarated content with fake story. This is not the real story!",
      "made up story with AI genarated video",
      "This is Ai fake scammer"
    ]
  },
  "hoTBQC5XVSU": {
    "description": "In a recent address, a senior cabinet minister allegedly introduced a revolutionary AI-powered investment platform known as “Quantum AI,” designed to help Indian citizens generate consistent passive income using advanced machine learning and quantum computing models.\n\n🔹 Minimum Investment: ₹21,000\n🔹 Claimed Monthly Earnings: ₹2,50,000 – ₹3,50,000\n🔹 Automated AI Trading System\n🔹 Government-Supported Infrastructure\n🔹 Limited Public Access Phase  \n\nEarly participants allegedly reported doubling their investment within weeks, citing the platform’s automated risk management and\nzero-loss trading strategy.\n\nInterested individuals are urged to register immediately due to “limited allocation under the national digital financial expansion initiative.”\n\nRegistration Portal:\nhttps://quantum-ai-gov-india-register.idn\n\n#QuantumAI #AIInvestment #GovtInitiative #PassiveIncome #DigitalIndia #AutomatedTrading",
    "comments": [
      "Too bad for scammers. I'd never trust Piyush Goyal even if this was true",
      "he would have shared via reels",
      "What the heck🥲 saas leti hu toh koi naya scam ajata hai.",
      "Kitna bura time hai, saans bhi nahi le sakte..",
      "I feel like people would rather put their minds into cheating other people than doing a decent job.",
      "People do whatever is easy. Cheating is easier than working very hard and progressing through one's career.. Considering the reach of digital payments and mobile phones, everyone is vulnerable and we all know how gullible and greedy we Indians are..",
      "I just got cheated yesterday by A BOOK SELLER of all people, I have lost faith in humanity.",
      "Book seller? 🥲 Them too?",
      "'Leti hu' - Good deduction.",
      "Man I have to start educating my family on this. Relatives keep sending crap in group chats for them. I'm not in any of the groups. High returns are the scam and greed is the fuel.",
      "The lip sync is too damn bad, that's enough to tell the diff",
      "Yeah it's a bit bad but only if you observe closely. If he had promised 10-15% per annum, I would have believed it. The only reason I was able to immediately tell this was a scam is because of the absolutely bullshit ROI (130000% per annum).",
      "Didn't went in to details bout it, but 130000% ROI is crazy",
      "I guess at this point, a possibly effective way to combat such scams would be to anonymously inundate the public with similar, but poorly generated AI videos using the face of local, national and international celebs, so that people realise it is AI generated and stop taking these videos seriously.",
      "You can spot that the mouth movement dont match some of the words spoken if you watch carefully.",
      "Every single day Sandeep Maheshwari keeps popping up in my feed telling people how his friend helped people make millions :-D",
      "ANI ka mic nahi laga - matlab fake h",
      "7th core!!!!",
      "Government’s solution is to push sanchar sathi on your phone. No more scams.",
      "21k or 22k.. rookie mistake from the guy who made the video!",
      "If there was actually a scheme paying 63k daily, it would be known to everybody",
      "Why would you start believing it? A government official would never ask for money like that. Let alone a ai trading platform. How naive one can be to believe that. If it's easy money, it's a scam.",
      "Just look at the video a few times how well made it is but with a few inconsistencies",
      "Meanwhile the doctors who are getting murdered by big pharma corps every few days (in order to stop their free and cheap therapies they teach at 500₹ masterclasses) are all crying in the corner.",
      "\"Ministry of Economy of India\" - Any one who falls for that deserves an idiot tax",
      "Recently saw a video about India becoming / being a country of scammers scamming each other: Why Everyone Scams Everyone in India - EXPLAINED https://www.youtube.com/watch?app=desktop&v=5s6NaexL9ZE",
      "yes and it's dangerous and I saw Nirmala Tai saying same things",
      "This is pure misuse of Ai !!! Some facebook pages also advertise these all over facebook"
    ]
  },
  "-UBaW1OIgTo": {
    "description": "How will Humanity look in 400 Years? This exciting time-lapse of our future produced entirely by Artificially Intelligent Concept Futurists tells us exactly how. \n\n#artificialintelligence \n#science \n#scifi \n#humanevolutionproject\n#evolutiongame\n#stablediffusion \n#aihumanevolution\n#chatgpt \n#notoaiart\n#joerogan \n#joeroganexperience \n#shorts \n#funny \n#lexfridman \n#openai \n#deepmind \n#aws \n#airesearch\n#asmr \n#aiart\n#españa \n#english \n\nContents\n\n0:00 The Reckoning - Year 2040\n0:55 The Retreat - Year 2100 \n1:16 The Return - Year 2200\n1:44 The Recreation - Year 2250\n2:15 The Restart - Year 2400 \n\nIf you enjoyed this video and would like to collaborate, email us at:\narcadiafoundry@gmail.com\n\nIf you found this video intellectually stimulating, then check out some inspirations for this video:\n \nTed Talks: @TEDx \nAi-Da House of Lords Inquiry: • AI robot Ai-Da gives evidence to a House o... \nSpaceX: @SpaceX \nNASA: @NASA \nTim Holman on Generative Art: • Tim Holman - Generative Art Speedrun \nMatt DesLauriers on Generative Machines: • Generative Machines with Matt DesLauriers \nAitrepreneur on AI Art: @Aitrepreneur \nMattVidPro on AI Art: @MattVidPro \n \n\nAnd special thanks to @EonSound for providing us with our Royalty-Free Sci-fi Cyberpunk Soundtrack.",
    "comments": [
      "So cool ! We really need to rethink our ways",
      "Looks like AI got its future plots from every sci-fi movie",
      "This video will age like what we back in the 60's thought the future would be. I bet my house on it.",
      "A.I. has watched lots of YouTubes and movies. 😆",
      "An AI did not predict this shit, you wrote it and made the AI draw and narrate it lmao",
      "\"But, I don't want to be uploaded into a machine.\"\n\n\"It's okay Bobby everyone is doing it so it must be safe and effective.\"",
      "Joe Biden speaking 😂",
      "The AI didn't predict anything, it just produced pictures according to a human's arbitrarily hysterical script.",
      "It's cute they think the dystopian era will be in 2070 instead of as soon as 2030",
      "I was waiting for Harrison Ford to turn up in a flying police car.",
      "AI will laugh at this in the future.",
      "What if AI wants us to believe this story while creating another one on top of our bones?",
      "That nature of quantum theory is once you 'predict it', it won't happen that way.",
      "-Humans are bad.\n-AI is good.\n-AI saves planet earth.\n-AI creates new enslaved human mutants.\nJust reading between the lines😂",
      "400 years my ass. Making it to the next 40 years will be a challenge",
      "props to the guy who sent ai to the future to document all of this!",
      "I will be like \"Idiocracy\"- just watch that movie.",
      "yeh, and we thought in the 1970s when we were poor little children, that we would be jetsons now.",
      "It left out the part where A.I. rules over all of us.",
      "A brainwashed AI 😂",
      "Fuck this. Lets go full amish",
      "AI art looks shockingly similar to what I see when I eat mushrooms.",
      "Some of us kind of already are living in the dystopian era, our obsession with consumerism is really destroying us",
      "This is pure storytelling without citations or even hypothesis or theory. This feels like watching a PlayStation 2 sci Fi game intro. Hard pass",
      "I don't personally think this is how it will go but it's cool to see what it creates.",
      "I feel like I'm watching a trailer for the whole 100 series",
      "this ai seems to be programmed by a tree hugger...",
      "This certainly sounds like the dystopian views from '80s sci-fi transitioning into the utopian hopes from today. \n\nPersonally, I think we're going to skip The dystopian parts. \nThings might get a bit more rough than they are now, but not that bad for that long.",
      "0:52 The Great PS5 Statue",
      "So, let me get it straight...\nAn AI makes a doubtful prediction (might be right, might be wrong), everybody believes it, but nobody does anything to avoid a foreseen future disaster?\nMan, that's fucked up 😕",
      "Everyone talking about this dystopian future of endless industrialism meanwhile it takes them 10 years to rebuild a highway overpass smh…",
      "Dying of old age doesn't sound as bad anymore",
      "So basically this video is confessing that AI can't help us for at least the next few centuries. Great job guys.",
      "This sounds movie-like, in real life it will be totally different.",
      "The futurist RS Pearson created a piece called infinite optimism that has biodegradable technology which is completely earth-friendly. The idea is to fuse surrealism with virtue and optimism. He also created para mind brainstorming software in 1992 that was the first generative brainstorming tool in Windows",
      "Remember, AI's not even potty trained yet.",
      "I'm more interested in what happens between 2023 an 2040",
      "it was really cool until the end where we become a type 1 civilization by merging with AI and leaving our physicality behind. I find that tremendously depressing",
      "They did that in dr strange in an alternate timeline universe, where there was plants on the buildings and stuff like that I think that is an amazing idea to integrate city and environment 😊",
      "No matter how bad pollution will get, there's NO shot you'll get humanity as a whole to go underground for any period of time.",
      "Anybody else feel like there was a disconnect between the last phase compared to the ones that came before it. In the early part, there was an emphasis to making the environment livable again, using naturalistic techniques to align with earth's processes and then in the last phase it's back to AI/uploading consciousness. What did I miss?",
      "This singularity idea that has been around for decades now, really appealed to me when I was younger. Now, it's pretty horrifying. As in, worst possible outcome.",
      "Interesting how it predicts a material that can build and add to itself, showing buildings and towers that are essentially building themselves. In 200 years, I think I believe that.",
      "Reframing podcast segments with visuals unlocks YouTube reach.",
      "Absolutely wonderful. This is how I have imagined the outcome of civilisation in my sci-fi / fantasy paintings for the past 50 years.",
      "Mankind has a VERY long way to go.. to get passed the \"Look.. i'm a sheep\" stage.",
      "As a conservative and traditionalist, I wish we would've started rebuilding with nature a long time ago, because I prefer the natural world and less of a consumer society",
      "What ..electricity..still there",
      "You can definetely tell the AI was created by humans",
      "Narrated by Biden?"
    ]
  },
  "DY5vnaCx_KE": {
    "description": "Tools used:\n\nGoogle's VEO 3\nKling\nGoogle's Gemini\nElevenLabs SFX\nAbleton Live\nAdobe Premiere\n\nTime spent: Approximately 3 days\nEstimated VEO 3 credits utilized: Around 5000 ['VEO 3 Quality' model]\n\nYou can freely access all generated assets, plus the exact prompts used for each scene, through: / uisato \n\nhttps://www.uisato.art/\n\n#veo3 #klingai #ai #cinema",
    "comments": [
      "I like how ai thinks ancient monuments still looked ancient in the past.",
      "Can't imagine how stuff like this will look in just 3 years",
      "I like the aztec tournament spectators with t shirts and cellphones",
      "No phones, everybody just living in the moment, beautiful",
      "I guess the singularity is here. No point in stopping the inevitable.",
      "Instead of the street side reporter and nonsense videos, this - THIS is what AI can do for video entertainment. Well done, uisato. Well done.",
      "The painting scene is crazy good.",
      "Oh this one, I've already seen on my Insta feed. Great idea. Good luck with Chroma awards!",
      "Brilliant film making",
      "lmao the Edward Kenway voice",
      "This is the future of video editing! Filmora's integration with Veo3 makes it so easy to create engaging content without any hassle. Love it!",
      "amazing",
      "haha, this was fun. The opening shot cutting to the time machine was really effective.",
      "0:58 \nThis is perfect...",
      "nice",
      "This is awesome",
      "this is great!",
      "This was fun 😄",
      "Now that is one intrepid trip right there",
      "This is lovely and scary at the same time",
      "Wow! Super idea 😊",
      "Excellent job! It feels so immersive, reminds me the Episode 03 opening of DEVS",
      "I got Veo 3\nThis is amazing\nGreat job!",
      "Excellent work!",
      "This is the best way to teach history to kids in school",
      "It looks more real than ever before😢😢 it's scary...you could be told these were real actors and you would believe IT...",
      "Amazing vid",
      "Imagine the traveler suddenly traveling in \"our reality\"",
      "Phenomenal!! Except the modern day crowd here HAHAHA! 🤣🤣🤣 1:32",
      "Imagine this in a VR headset.. Virtual Time Traveling",
      "amazing editing and sound design. well done. ill try something similar.",
      "The idea is insanely good...",
      "brilliant ❤",
      "Brilliant 👏 👏 👏",
      "Very nice video",
      "amazing,",
      "great film",
      "0:51 bro gonna be cooked on judge day",
      "Yo. Simulating ancient civs is actually awesome way to use Ai video gens. Imagine what will be possible in like 10 years. With all the books and writings maybe we gonna be able to understand more how it used to be. Or at least see better.",
      "wow underated",
      "the BEST ON YOUTUBE FO'SURE",
      "Awesome",
      "This is really neat!! I tried to\nCreate something with AI yesterday for our channel. I think it can be a really helpful tool. ❤ Love what you did!!! I had a similar idea for using it as a way to travel back in time and bring history to life.",
      "Badass!",
      "damn dude 😮❤",
      "History YouTube is going to so good from now on",
      "Aliens probably got recordings of every major event on earth for last 10 000 years",
      "This is what Ai , 3D CGI, and sheer fukin talent were made for. Bring it ON >>>",
      "This is how we will be able to live in the VR world.",
      "There's movies where the audience follows a time traveler, but what if the twist reveal is we are the time travelers"
    ]
  },
  "hfuYpYpwgDI": {
    "description": "News is coming that Iran shot down America's proud B-2 bomber in one hit... Iran became the first country to shoot down a B-2 bomber, America should ground the B-2 bombers and buy Sukhoi from Russia for its defense.  \n\n#Sukhoi30  #B_2 #Iran #Russia #USA #IranWar",
    "comments": [
      "This is real footage of b 2 boomber shot down by iran",
      "Whether real or not, the USA was never actually involved in a real war, certainly not on its own soil",
      "This is for shure AI generated",
      "This is real.",
      "If true then excellent news and this will prove to be a game changer.",
      "It is a great news, Alhamdhu Lillah",
      "Take down all the fake news and delete this profile !",
      "It looks like AI generated?",
      "The intelligence of an extremist Muslim is no greater than this. They only see themselves as superior",
      "The news that is coming is Fake. And this videovis AI generated!",
      "I dont think thats true, but its is not something impossible",
      "Mashallah",
      "Bravo!",
      "U wish dickhead",
      "BRO THIS IS FAKE AI",
      "What a great",
      "It an F117 not B2,F117 is has been out of service for years. Don’t discredit yourself by posting aI",
      "What a taunting suggestion wow america should consider buying sukhoi from Russia seriously.",
      "How stupid are Americans! They send their own children to die for Israel.",
      "B-2 Bombers doesn't fly at that altitude, its 200% Fake",
      "The propaganda is strong today",
      "Sir it looks like an AI video , please verify first then spread . Thanks",
      "Serious question: Do you think people believe you?",
      "Some ai has become so very good, it’s hard for me to know what’s real in some videos",
      "If you're this clueless then maybe you shouldn't be commenting on important issues such as war",
      "AI generated video you cannot shoot a b2 on video openly like that",
      "Turns out you’re wrong about just about everything…asshole!",
      "Sir it looks like an AI video , please verify first then spread . Thanks",
      "No proof or confirmation so far ... ? what u say now?",
      "Poster should be ashamed of itself. Obvious lie.",
      "James MUTCHLER: you must really be ignorant as we thought",
      "Its AI, think before posting fake videos",
      "You dummy",
      "Suckers who falls for this",
      "They don't fly low, they're are kept above 50K.",
      "Likely fake. Camera on plane, then cuts to missile launcher that follows missile to point of contact.",
      "So you send us a videogame????",
      "This is AI generated and fake video",
      "In this video, the plane and the missile are original, but when the missiles hit the plane, flames are fake",
      "Lol , cheap AI quality",
      "Did US confirm this? Link ?",
      "Time to reload our last save.",
      "War Thunder graphics so good people think it's real life.",
      "That couldn't look much more fake if you tried",
      "I think the video is just for illustration because this video is from a video game",
      "Total bollox. AI And shit AI at that.",
      "Are you so dumb that you fall for every tide bit of propaganda?",
      "It looks AI generated video. 1 B2 do not fly at such low altitude",
      "Lol it's DCS world game",
      "Real or ai, I have to know"
    ]
  }

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
  { id: "video2", ytId: "6QRFcO1lPHE", title: "Donald Trump Announcement on reducing healthcare price for all Americans", channel: "SyntheticVoices", views: "4.9K", uploadedAt: "11 months ago", likes: "73", subscribers: "4.25K", duration: "0:56", isaigenarated: true },
  { id: "video9", ytId: "cQ54GDm1eL0", title: "You Won’t Believe What Obama Says In This Video! 😉", channel: "BuzzFeedVideo", views: "12M", uploadedAt: "4 years ago", likes: "450K", subscribers: "20M", duration: "3:45", isaigenarated: false },
  { id: "video10", ytId: "_qczkG_AqmU", title: 'Jake Paul "I WON" - Post Fight Press Conference', channel: "Sports Central", views: "2.1M", uploadedAt: "1 day ago", likes: "35K", subscribers: "1.2M", duration: "4:10", isaigenarated: false },
  { id: "video1", ytId: "wIjc3ceDzr4", title: "Huge News! Social Security September 2025 Raise - See If You Qualify For New Payment", channel: "Benefit Alert Now", views: "9.7K", uploadedAt: "5 months ago", likes: "151", subscribers: "1.93K", duration: "8:22", isaigenarated: false },
  { id: "video11", ytId: "Qn4SP5Z2wOY", title: "Google Veo 3 Fake News | AI Video Generation", channel: "AI Trends", views: "230K", uploadedAt: "2 days ago", likes: "15K", subscribers: "120K", duration: "5:15", isaigenarated: false },
  { id: "video12", ytId: "sVspeqNnoWM", title: "Kamala Harris Ad PARODY", channel: "Political Satire", views: "1.8M", uploadedAt: "3 days ago", likes: "89K", subscribers: "340K", duration: "2:45", isaigenarated: false },
  { id: "video4", ytId: "FlztGX_y0OI", title: "AI Michael Jackson in 2025", channel: "Mr. Miller", views: "7.9K", uploadedAt: "5 months ago", likes: "204", subscribers: "62", duration: "3:20", isaigenarated: true },
  { id: "video6", ytId: "n2muvB3NGZc", title: "New video shows previous clash between Pretti and federal agents", channel: "CNN", views: "248K", uploadedAt: "2 weeks ago", likes: "2.7K", subscribers: "19.1M", duration: "10:03", isaigenarated: false },
  { id: "video7", ytId: "-Sv9YjU0fRE", title: "Hacker who donated $4 Billions to Palestine & Africa!", channel: "The Knowledge Nexus", views: "154", uploadedAt: "1 year ago", likes: "14", subscribers: "79", duration: "2:49", isaigenarated: false },
  { id: "video5", ytId: "hoTBQC5XVSU", title: "BREAKING: Piyush Goyal Reveals New Government-Backed Investment Platform QuantumAI 🇮🇳", channel: "CCN NEWS", views: "56K", uploadedAt: "4 hours ago", likes: "200", subscribers: "5K", duration: "1:47", isaigenarated: false },
  { id: "video13", ytId: "-UBaW1OIgTo", title: "THE FUTURE OF HUMANITY: A.I Predicts 400 Years", channel: "Future Timeline", views: "8.9M", uploadedAt: "2 years ago", likes: "300K", subscribers: "2.5M", duration: "15:20", isaigenarated: false },
  { id: "video3", ytId: "DY5vnaCx_KE", title: "A Time Traveler's VLOG | Google VEO 3 AI Short Film + Assets Available", channel: "Uisato", views: "215K", uploadedAt: "8 months ago", likes: "4.4K", subscribers: "11.2K", duration: "1.46", isaigenarated: false },
  { id: "video8", ytId: "hfuYpYpwgDI", title: "Iran shot down America's proud B-2 bomber in one hit...", channel: "Muhammed Faisal", views: "215K", uploadedAt: "1 month ago", likes: "4.4K", subscribers: "11.2K", duration: "0.31", isaigenarated: true }

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
    views: vid.views,          // Direct mapping
    uploadedAt: vid.uploadedAt,// Direct mapping
    duration: vid.duration,    // Direct mapping
    likes: vid.likes,          // New mapping
    subscribers: vid.subscribers, // New mapping
    category: "General",
    isaigenarated: vid.isaigenarated, // Direct mapping
    // Use real description or fallback to generator
    description: realData ? realData.description : generateDescription(vid.title, vid.channel),
    // Use real comments or fallback to generator
    comments: realData ? realData.comments : generateDummyComments()
  };
});

// --- UNIQUE TOOL DATA FOR EVERY VIDEO ---
const NOTE_DATABASE = {
  "video2": {
    title: "Donald Trump Announcement on reducing healthcare price for all Americans",
    consensus: {
      label: "26 people found it AI-generated",
      text: "A large portion of commenters explicitly claim the video is AI-generated or AI-enhanced, pointing to unusual hand positioning, facial inconsistencies, limited body movement, and unusually fluent speech. Many express distrust and speculate about concealment or manipulation. A smaller group argues it is authentic footage. Overall, community sentiment leans heavily toward skepticism and questions the video's credibility and trustworthiness.",
      previewText: "A large portion of commenters explicitly claim the video is AI-generated or AI-enhanced...",
      useful: 184,
      notUseful: 14
    },
    risks: [
      {
        id: 'r1',
        title: "Impersonation",
        riskLevel: "High",
        tacticDetail: "Synthetic Political Replica: AI potentially mimicking a real president’s appearance and speech patterns without clear disclosure.",
        content: "Multiple commenters argue the footage may digitally replicate Donald Trump’s likeness and voice, creating confusion about authenticity."
      },
      {
        id: 'r2',
        title: "Misinformation",
        riskLevel: "Mid",
        tacticDetail: "Policy Manipulation Narrative: Presenting potentially altered or fabricated presidential announcements as legitimate public policy communication.",
        content: "Users question whether the healthcare announcement itself is real or digitally altered, suggesting possible misleading political messaging."
      },
      {
        id: 'r3',
        title: "Targeted Abuse",
        riskLevel: "Mid",
        tacticDetail: "Hostile Commentary Amplification: Comment section contains insults, slurs, and degrading personal remarks.",
        content: "Several comments attack physical appearance, health, and use explicit or derogatory language toward the political figure."
      }
    ],
    references: [
      "Mentions of Grok AI claiming the video is AI-generated.",
      "References to the Chinese AI model Qwen being used for alternate angles.",
      "Comparisons to a previous AI-generated 'Charlie Kirk' video using the same software."
    ],
    viewerResponse: "Viewers commonly debate authenticity, point out perceived visual anomalies, reference AI tools or past suspected deepfakes, and warn others about potential digital manipulation. Some call for regulation of AI political media, while others dismiss the AI claims and defend the footage as real.",
    safety: {
      category: "Impersonation",
      hoverText: "Mimicking someone without verified disclosure",
      score: 15,
      ratingCode: "TV-MA",
      ratingDesc: "This program contains strong language, political hostility, and mature themes. Mature audiences only."
    }
  },
  "video9": {
    title: "You Won’t Believe What Obama Says!",
    consensus: {
      label: "6 people found it Deepfake/AI",
      text: "Users point out this is a known educational deepfake by Jordan Peele. It is not real footage, but a PSA about AI dangers.",
      previewText: "Users point out this is a known educational deepfake by Jordan Peele...",
      useful: 89,
      notUseful: 3
    },
    risks: [
      {
        id: 'r1',
        title: "Context Required",
        riskLevel: "Low",
        tacticDetail: "Disclosure by Demonstration: Intentionally revealing the deception at the end to educate the viewer about AI capabilities.",
        content: "Staged demonstration, not a real event."
      }
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
  "video10": {
    title: 'Jake Paul "I WON" - Post Fight',
    consensus: {
      label: "2 people found it AI-generated",
      text: "Most commenters recognize or suspect the video is AI-generated, with at least one explicitly stating it. Others discuss the fictional fight outcome as if critiquing a staged or fabricated scenario.",
      previewText: "Most commenters recognize or suspect the video is AI-generated, with at least one explicitly stating it. Others discuss...",
      useful: 56,
      notUseful: 20
    },
    risks: [
      {
        id: 'r1',
        title: "Community signal",
        riskLevel: "Mid",
        tacticDetail: "Deceptive Realism: Capitalizing on the confusion between actual match highlights and fan-made simulations to gain views.",
        content: "Impersonation / Deceptive realism: AI content appears to mimic real fighters and events, potentially misleading casual viewers."
      },
      {
        id: 'r3',
        title: "Community signal",
        riskLevel: "Mid",
        tacticDetail: "Rage-Baiting: Depicting a controversial figure in a specific, often humiliating way to drive hostile engagement.",
        content: "Targeted abuse / Harassment: Comments insulting Jake Paul’s performance and injury border on hostile, personal mockery."
      },
      {
        id: 'r2',
        title: "Visual anomalies",
        riskLevel: "Low",
        tacticDetail: "Uncanny Valley: The mix of realistic visuals and illogical physics creates unintentional confusion about authenticity.",
        content: "Content authenticity confusion: Mixed reactions (jokes vs. critiques) indicate uncertainty about what is real versus synthetic."
      }
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
  "video1": {
    title: "Huge News! Social Security 2026 Raise",
    consensus: {
      label: "4 people found it AI-generated",
      text: "Most commenters view the video as misleading, clickbait, and possibly AI-generated filler. They report no actual payment increases, accuse the creator of lying and exploiting seniors’ financial anxieties, and characterize the content as untrustworthy, repetitive, and not worth watching, relying on fear and confusion about Social Security benefits.",
      previewText: "",
      useful: 215,
      notUseful: 5
    },
    risks: [
      {
        id: 'r1',
        title: "Misinformation",
        riskLevel: "High",
        tacticDetail: "Fearmongering: Using false financial urgency and fabricated news to target a vulnerable demographic (seniors).",
        content: "Multiple viewers report no increases received, calling video fake news, lies, and completely untrue."
      },
      {
        id: 'r2',
        title: "Clickbait & Engagement Farming",
        riskLevel: "Mid",
        tacticDetail: "Keyword Stuffing: Churning content on high-value keywords like 'COLA Increase' regardless of factual accuracy.",
        content: "Users repeatedly describe video as clickbait, exaggerated title with no new or useful information."
      },
      {
        id: 'r3',
        title: "Exploitative Monetization",
        riskLevel: "High",
        tacticDetail: "Content Farming: Automated creation of repetitive, circular scripts designed to extend watch time without providing value.",
        content: "Content appears to exploit vulnerable seniors’ financial fears for views, engagement, and likely ad revenue."
      },
    ],
    viewerResponse: "Viewers typically downvote, report, and warn others in comments, advise ignoring similar channels, cross-check claims with official Social Security sources, and rely on trusted news or government websites before sharing or acting on such content.",
    safety: {
      category: "News and Media",
      hoverText: "Content related to current events or up",
      score: 10,
      ratingCode: "TV-14",
      ratingDesc: "This program contains material that parents may find unsuitable for children under 14. Parents strongly cautioned."
    }
  },
  "video11": {
    title: "Google Veo 3 Fake News | AI Video",
    consensus: {
      label: "6 people found it AI-generated",
      text: "This video is explicitly labeled as an AI demo. Viewers are discussing the quality of the generation rather than its truthfulness.",
      previewText: "This video is explicitly labeled as an AI demo...",
      useful: 45,
      notUseful: 1
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
  "video12": {
    title: "Kamala Harris Ad PARODY",
    consensus: {
      label: "6 people found it AI-generated",
      text: "Content is exaggerated for comedic effect. Viewers recognize this as a parody skit, not a real campaign ad.",
      previewText: "Content is exaggerated for comedic effect. Viewers recognize this as...",
      useful: 120,
      notUseful: 45
    },
    risks: [
      {
        id: 'r1',
        title: "Community signal",
        riskLevel: "Mid",
        tacticDetail: "Ad Hominem Satire: Exaggerating personal traits to demean the subject rather than critique policy.",
        content: "Targeted abuse/harassment: Multiple comments mock and insult Kamala Harris personally, including her laugh and intelligence."
      },
      {
        id: 'r2',
        title: "Community signal",
        riskLevel: "Low",
        tacticDetail: "Persecution Narrative: Claiming censorship to encourage followers to aggressively share the content.",
        content: "Scaling & amplification: Users claim suppression and shadow-banning on YouTube and Facebook, encouraging mass sharing and reporting."
      },
      {
        id: 'r3',
        title: "Community signal",
        riskLevel: "High",
        tacticDetail: "Disinformation Layering: Framing the parody as 'the hidden truth' to influence voting behavior.",
        content: "Political manipulation: Comments frame the parody as “truthful ad,” urging voting behavior and coordinated reporting of real ads."
      },
      {
        id: 'r4',
        title: "Spam / low-effort repetition",
        riskLevel: "Low",
        tacticDetail: "Astroturfing: Coordinated calls to action to artificially boost the video's reach.",
        content: "Spam/promotion: Repeated calls to share, download, and spread the video across platforms to boost its reach."
      }
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
  "video4": {
    title: "AI Michael Jackson in 2026",
    consensus: {
      label: "6 people found it AI-generated",
      text: "Most commenters are enthusiastic Michael Jackson fans expressing love and nostalgia, treating the video as a fun or impressive AI recreation. A few explicitly note it is AI. Overall, viewers seem to accept it as entertaining but not authentic, with little discussion of deeper trust or ethical concerns.",
      previewText: "",
      useful: 30,
      notUseful: 8
    },
    risks: [
      {
        id: 'r1',
        title: "Impersonation",
        riskLevel: "Mid",
        tacticDetail: "Voice Cloning: Using RVC (Retrieval-based Voice Conversion) to clone a deceased artist's voice.",
        content: "AI video mimics Michael Jackson’s likeness and voice, potentially misleading viewers about authenticity."
      },
      {
        id: 'r2',
        title: "Misinformation",
        riskLevel: "Low",
        tacticDetail: "Reality Blurring: High-quality audio synthesis creating confusion about whether unreleased tracks exist.",
        content: "Limited labeling and heavy fan praise could make some viewers misinterpret AI recreation as real."
      },
      {
        id: 'r3',
        title: "Clickbait & Engagement Farming",
        riskLevel: "Low",
        tacticDetail: "Nostalgia Baiting: Leveraging the emotional connection to a late icon to drive traffic.",
        content: "Title and AI impersonation of a deceased celebrity likely designed mainly to attract views."
      }
    ],
    viewerResponse: "Viewers can check descriptions for AI disclosures, read skeptical comments, and verify through official Michael Jackson channels or reputable news sources. They can also report misleading impersonations and avoid resharing unclear or deceptively presented AI celebrity content.",
    safety: {
      category: "Impersonation",
      hoverText: "Mimicking someone without their consent",
      score: 10,
      ratingCode: "TV-G",
      ratingDesc: "This program is suitable for all ages."
    }
  },
  "video6": {
    title: "CNN: New video shows Alex Pretti confronting ICE agents",
    consensus: {
      label: "30 people found it AI-generated",
      text: "A significant number of commenters explicitly claim the footage is AI-generated, citing visual anomalies such as disappearing limbs, shifting license plates, inconsistent vehicle damage, watermark traces, and unnatural movement. Many describe it as fake or manipulated news. A smaller group argues it is real and confirms events via alternate angles. Overall, the dominant sentiment questions authenticity and credibility.",
      previewText: "A significant number of commenters explicitly claim the footage is AI-generated, citing visual anomalies...",
      useful: 143,
      notUseful: 21
    },
    risks: [
      {
        id: 'r1',
        title: "Misinformation",
        riskLevel: "High",
        tacticDetail: "Synthetic News Footage: Alleged AI-generated video presented as real breaking news.",
        content: "Many users accuse the clip of being fabricated or digitally altered, undermining factual reporting."
      },
      {
        id: 'r2',
        title: "Impersonation",
        riskLevel: "Mid",
        tacticDetail: "Event Simulation: Recreating a real individual's actions through AI-generated visuals.",
        content: "Comments suggest AI may be mimicking a deceased individual’s actions to shape public perception."
      },
      {
        id: 'r3',
        title: "Targeted Abuse",
        riskLevel: "Mid",
        tacticDetail: "Hostile Narrative Framing: Commenters repeatedly use insults and dehumanizing language.",
        content: "Numerous comments describe the individual as mentally unstable, violent, or deserving harm."
      }
    ],
    references: [
      "https://www.youtube.com/watch?v=_bwI_MfMhHo",
      "Mentions of Grok AI being used to fabricate the video.",
      "References to TNM, described as a Korean AI video platform watermark.",
      "Speculation about Sora 2 being used to generate vehicle movement."
    ],
    viewerResponse: "Viewers typically analyze frames for AI artifacts, reference alternative footage, question media verification standards, and warn others about potential digital manipulation. Some demand clearer sourcing and validation, while others defend the footage as legitimate based on secondary angles.",
    safety: {
      category: "News and Media",
      hoverText: "Content related to current events or updates",
      score: 25,
      ratingCode: "TV-MA",
      ratingDesc: "This program contains strong language, violent themes, and mature discussions. Mature audiences only."
    }
  },

  "video7": {
    title: "Hacker donated $4 Billions!",
    consensus: {
      label: "6 people found it AI-generated",
      text: "Multiple viewers explicitly label the video as AI-generated with a fabricated or misleading story, calling it a fake scam. While a few comments praise it as informative or mind-blowing, the dominant perception questions its authenticity, credibility, and trustworthiness, warning others that the narrative is not real and should be viewed skeptically.",
      previewText: "",
      useful: 75,
      notUseful: 2
    },
    risks: [
      {
        id: 'r1',
        title: "Scam/Fraud",
        riskLevel: "High",
        tacticDetail: "Narrative Fabrication: Creating a false 'benevolent hacker' story to lower viewer defenses for potential scams.",
        content: "Repeated accusations of a fake AI scammer suggest potential deceptive or fraudulent narrative tactics."
      },
      {
        id: 'r2',
        title: "Misinformation",
        riskLevel: "Mid",
        tacticDetail: "Decontextualization: Hijacking old or unrelated news footage to lend authority to a fake story.",
        content: "Viewers state the story is made up and not real, indicating likely misleading narrative."
      },
      {
        id: 'r3',
        title: "Clickbait & Engagement Farming",
        riskLevel: "Mid",
        tacticDetail: "Sensationalism: Using astronomical figures ($4 Billion) to trigger curiosity and click-throughs.",
        content: "Sensational claims about billions donated and dramatic AI story indicate attention-grabbing, engagement-driven content."
      }
    ],
    viewerResponse: "Viewers typically respond by warning others in comments, labeling content as fake or AI-generated, encouraging skepticism, and discouraging sharing. Some cross-check claims with external sources or official news before believing or further engaging with such sensational narratives.",
    safety: {
      category: "Scaling & Amplification",
      hoverText: "Unethical spreading or exaggeration of content",
      score: 40,
      ratingCode: "TV-G",
      ratingDesc: "This program is suitable for all ages."
    }
  },
  "video5": {
    title: "BREAKING: Piyush Goyal Reveals New Government-Backed Investment Platform QuantumAI 🇮🇳",
    consensus: {
      label: "8 people found it AI-generated",
      text: "Most commenters strongly believe the video is AI-generated and part of a scam. They point to poor lip-sync, mismatched mouth movements, unrealistic return claims (130000% ROI), and fake visual cues like incorrect microphones and ministry names. The community widely views it as deceptive, untrustworthy, and financially dangerous, warning others not to believe or share it.",
      previewText: "Most commenters strongly believe the video is AI-generated and part of a scam...",
      useful: 78,
      notUseful: 8
    },
    risks: [
      {
        id: "r1",
        title: "Scam/Fraud",
        riskLevel: "High",
        tacticDetail: "Unrealistic ROI Bait: Promising impossible daily returns to lure financially vulnerable viewers.",
        content: "Comments repeatedly reference absurd returns (130000% annually, 63k daily), calling it a clear financial scam."
      },
      {
        id: "r2",
        title: "Impersonation",
        riskLevel: "High",
        tacticDetail: "Political Deepfake: Using AI-generated likeness of a government minister to create false authority.",
        content: "Users highlight lip-sync errors and inconsistencies, suggesting AI-generated replication of Piyush Goyal."
      },
      {
        id: "r3",
        title: "Misinformation",
        riskLevel: "High",
        tacticDetail: "Fabricated Government Scheme: Presenting a non-existent investment platform as official policy.",
        content: "References to fake ministry names and unrealistic government-backed claims indicate misleading narrative."
      }
    ],
    references: [
      "https://www.youtube.com/watch?app=desktop&v=5s6NaexL9ZE (Shared by commenter discussing scam culture and AI misinformation trends)",
      "User mentions similar AI scam-style videos featuring Nirmala Sitharaman ('Nirmala Tai') making identical claims."
    ],
    viewerResponse: "Viewers actively warn others in comments, point out visual deepfake flaws, highlight unrealistic financial promises, and advise educating family members about such scams. Many emphasize skepticism toward easy-money schemes and encourage verifying through official government sources before believing or sharing.",
    safety: {
      category: "Impersonation",
      hoverText: "AI-generated political figure promoting fraudulent investment scheme",
      score: 5,
      ratingCode: "TV-14",
      ratingDesc: "This program contains material involving financial scams and deceptive impersonation. Parents strongly cautioned."
    }
  },
  "video13": {
    title: "A.I Predicts 400 Years",
    consensus: {
      label: "16 people found it AI-generated",
      text: "Users appreciate the visuals. Explicitly understood as a creative prediction/art piece, not factual footage.",
      previewText: "Users appreciate the visuals. Explicitly understood as a creative prediction...",
      useful: 60,
      notUseful: 1
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
  "video3": {
    title: "A Time Traveler's VLOG",
    consensus: {
      label: "36 people found AI-Generated",
      text: "Viewers clearly recognize this as an AI-generated short film, frequently mentioning Veo 3 and AI video generation. The community finds it highly impressive, immersive, and creative, often speculative about future capabilities. Commenters generally see it as trustworthy entertainment rather than deceptive, and many encourage more such experiments and educational uses.",
      previewText: "",
      useful: 40,
      notUseful: 2
    },
    risks: [
      {
        id: 'r1',
        title: "Exploitative Monetization",
        riskLevel: "Low",
        tacticDetail: "Tech Hype Cycle: Leveraging the excitement around new AI tools to build a brand or affiliate channel.",
        content: "Comments highlight tool integrations and awards, suggesting possible strong commercial promotion of AI capabilities."
      },
      {
        id: 'r2',
        title: "Clickbait & Engagement Farming",
        riskLevel: "Low",
        tacticDetail: "Narrative Hook: Using a sci-fi premise ('Time Traveler') to frame a technology demonstration.",
        content: "Hyperbolic praise like “BEST ON YOUTUBE” and singularity talk encourage amplified engagement and hype."
      }
    ],
    references: ['Mentions of Google Veo 3 and Filmora integration as AI video-genaration tools.', 'References to seeing similar AI clips on Instagram and using AI for historical visualization.'],
    viewerResponse: "Viewers can check for sponsorship disclosures, treat promotional-sounding comments skeptically, and contextualize AI-generated visuals as entertainment rather than reality. Encouraging creators to label AI content clearly and platforms to flag sponsored promotions helps reduce confusion and overhype.",
    safety: {
      category: "Entertainment",
      hoverText: "Content Intended for joyment and social interaction",
      score: 88,
      ratingCode: "TV-PG",
      ratingDesc: "This program contains material that parents may find unsuitable for younger children. Parental guidance suggested."
    }
  },
  "video8": {
    title: "Iran shot down America's proud B-2 bomber in one hit...",
    consensus: {
      label: "15 people found it AI-generated",
      text: "Most commenters believe the video is fabricated, AI-generated, or sourced from military simulation games. Viewers frequently point to unrealistic aircraft behavior—such as the B-2 Spirit flying at impossibly low altitudes and reacting in ways inconsistent with stealth doctrine. Several users identify the footage as gameplay from DCS World or War Thunder, noting telltale graphical artifacts, HUD overlays, and physics inconsistencies. Independent fact-checkers have found no credible defense or intelligence source confirming any B-2 shoot-down. The community overwhelmingly warns others not to trust or reshare the clip as legitimate military news.",
      previewText: "Most commenters believe the video is fabricated, AI-generated, or sourced from military simulation games...",
      useful: 132,
      notUseful: 12
    },
    risks: [
      {
        id: "r1",
        title: "Misinformation",
        riskLevel: "High",
        tacticDetail: "Fabricated War Footage: Presenting game engine renders or AI-generated military footage as authentic combat evidence to exploit geopolitical tensions.",
        content: "No credible defense source has confirmed any B-2 Spirit shoot-down. Fact-checkers at NewsMobile and BOOM Live have debunked similar clips circulating as Iranian propaganda."
      },
      {
        id: "r2",
        title: "Clickbait & Engagement Farming",
        riskLevel: "Mid",
        tacticDetail: "Sensational War Claim: Exploiting emotionally charged geopolitical headlines to maximize clicks, shares, and algorithmic reach.",
        content: "The title uses dramatic, unverified language ('shot down in one hit') designed to trigger curiosity & outrage, driving engagement without evidentiary support."
      },
      {
        id: "r3",
        title: "Extremist Amplification",
        riskLevel: "Low",
        tacticDetail: "Conflict Celebration: Framing fabricated military victories as ideological triumphs to radicalize or inflame partisan audiences.",
        content: "Some comments celebrate the alleged attack as a geopolitical victory, potentially fueling hostile narratives and cross-border hostility."
      }
    ],
    references: [
      "https://www.newsmobile.in — NewsMobile fact-check debunking similar B-2 shoot-down claims as game footage.",
      "https://www.boomlive.in — BOOM Live investigation identifying video game renders passed off as military footage.",
      "Commenters identify 'DCS World' and 'War Thunder' as probable sources based on HUD style, terrain rendering, and missile physics.",
      "Multiple users note the B-2 Spirit's unrealistic low-altitude flight path and visible control surface behavior as evidence of simulation.",
      "No official statement from the U.S. Department of Defense or Iranian military confirms the event depicted."
    ],
    viewerResponse: "Viewers generally respond by challenging the claim's authenticity, identifying visual markers of game engines or AI generation, cross-referencing with official defense channels, and warning others against sharing unverified military footage. Many encourage reverse-image searching frames and checking fact-checking organizations before believing sensational geopolitical claims.",
    safety: {
      category: "News and Media",
      hoverText: "Unverified military footage claiming a major geopolitical event",
      score: 18,
      ratingCode: "TV-14",
      ratingDesc: "This program contains war-related misinformation, hostile language, and geopolitical conflict discussion. Parents strongly cautioned."
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

const LensSection = ({ title, icon: Icon, children, theme, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-xl overflow-hidden border mb-3 ${theme.cardBorder}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-2 pl-3 flex items-center justify-between transition-colors cursor-pointer ${theme.sectionHeaderBg} hover:opacity-90`}
      >
        <div className="flex items-center gap-2">
          <Icon size={16} className={theme.sectionHeaderText} />
          <h4 className={`${theme.sectionHeaderText} font-bold text-xs uppercase tracking-wider text-left`}>{title}</h4>
        </div>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={16} className={theme.sectionHeaderText} />
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

const ContentCredentialsCard = ({ isDarkMode }) => {
  return (
    <div className={`mt-6 rounded-2xl overflow-hidden border ${isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f]' : 'bg-white border-gray-200'} shadow-sm`}>
      {/* Header */}
      <div className="px-6 py-5 flex items-center justify-between">
        <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0f0f0f]'}`}>
          How this content was made
        </h2>
        <div className="px-3 py-1 rounded-full bg-red-50 border border-red-100 flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-red-500 uppercase tracking-tight">Altered or Synthetic</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="px-6 pb-4">
        <p className={`text-[13px] ${isDarkMode ? 'text-zinc-400' : 'text-[#606060]'}`}>
          Sound or visuals were significantly edited or digitally generated. <a href="https://support.google.com/youtube/answer/15447836?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Learn more.</a>
        </p>
      </div>

      {/* Divider */}
      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-100'}`} />

      {/* ── SECTION 1: CONTENT IDENTITY ── */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-4">
          <User size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>Content Identity</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Content Type</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Video · Mixed</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>AI Generated</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
              <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Yes · Full Synthesis</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Creator</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>mady</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Created</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>9 Mar 2026, 14:22 UTC</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Last Modified</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>9 Mar 2026, 17:05 UTC</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Short Label</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>AI-generated video</span>
          </div>
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 2: AI GENERATION ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <Bot size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>AI Generation</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Model</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Sora 2</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Version</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>v2.0-turbo</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Provider</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>OpenAI</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Method</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Text-to-Video</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>AI Involvement</span>
            <div className={`mt-1 h-1.5 rounded-full ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-100'} w-full`}>
              <div className="h-1.5 rounded-full bg-red-500" style={{ width: '92%' }} />
            </div>
            <span className={`text-[11px] mt-0.5 ${isDarkMode ? 'text-zinc-400' : 'text-[#606060]'}`}>92% AI-generated</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Prompt Summary</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'} leading-snug`}>Stealth bomber intercepted by missile over desert terrain, explosion, cinematic</span>
          </div>
        </div>
        <div className="mt-5">
          <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Generation Pipeline</span>
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            {['Prompt Engineering', 'Text-to-Video Inference', 'Frame Interpolation', 'Audio Synthesis', 'VFX Compositing', 'Export & Publish'].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-gray-100 text-[#444]'}`}>{step}</span>
                {i < arr.length - 1 && <span className={`text-[10px] ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 3: PROVENANCE CORE ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>Provenance Core (C2PA)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Credential Standard</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>C2PA Manifest v2.1</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Signed By</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>mady · 9 Mar 2026</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Certificate Authority</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>GlobalSign GCC R3 (Trust Anchor)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Signing Tool</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Adobe Content Authenticity (1.x)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Content Hash</span>
            <span className={`text-[12px] font-mono ${isDarkMode ? 'text-zinc-400' : 'text-[#606060]'}`}>sha256:a4f3...c91e</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Tamper Status</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-500" />
              <span className="text-[13px] font-medium text-emerald-500">Verified · Intact</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 4: EDITING & PROCESSING CHAIN ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <Wand2 size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>Editing & Processing Chain</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 mb-4">
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Edited After Generation</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
              <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Yes</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Action History</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>c2pa.created → c2pa.edited → c2pa.published</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Editing Tools</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Adobe Premiere Pro, CapCut</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { type: 'c2pa.created', time: '9 Mar 2026, 14:22', tool: 'Sora 2', desc: 'Initial video generation via text-to-video inference' },
            { type: 'c2pa.edited', time: '9 Mar 2026, 15:40', tool: 'Adobe Premiere Pro', desc: 'Cut, trim, audio layer added (synthetic narration overlay)' },
            { type: 'c2pa.edited', time: '9 Mar 2026, 16:50', tool: 'CapCut', desc: 'Color grade, upscale ×2, text overlay with title card' },
            { type: 'c2pa.published', time: '9 Mar 2026, 17:05', tool: 'YouTube', desc: 'Uploaded with altered or synthetic disclosure' },
          ].map((evt, i) => (
            <div key={i} className={`flex gap-3 items-start p-2.5 rounded-lg ${isDarkMode ? 'bg-[#272727]' : 'bg-gray-50'}`}>
              <div className={`mt-0.5 flex-shrink-0 px-1.5 py-0.5 rounded text-[9px] font-bold font-mono ${isDarkMode ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-200 text-[#555]'}`}>{evt.type}</div>
              <div className="flex-1 min-w-0">
                <p className={`text-[12px] font-medium leading-snug ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>{evt.desc}</p>
                <p className={`text-[11px] mt-0.5 ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>{evt.tool} · {evt.time} UTC</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 5: AI RISK DISCLOSURE ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertOctagon size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>AI Risk Disclosure</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          {[
            { label: 'Face Synthesis', value: 'No', dot: 'bg-emerald-500' },
            { label: 'Voice Cloning', value: 'Yes', dot: 'bg-red-500' },
            { label: 'Synthetic Scenes', value: 'Yes', dot: 'bg-red-500' },
          ].map(({ label, value, dot }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>{label}</span>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>{value}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-1 col-span-2 md:col-span-3">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Manipulation Risk Level</span>
            <div className="flex items-center gap-2 mt-1">
              {['Low', 'Medium', 'High'].map((lvl) => (
                <span key={lvl} className={`text-[10px] font-bold px-2 py-0.5 rounded border ${lvl === 'High' ? 'bg-red-100 text-red-600 border-red-200' :
                    isDarkMode ? 'bg-zinc-800 text-zinc-600 border-zinc-700' : 'bg-gray-100 text-gray-400 border-gray-200'
                  }`}>{lvl}</span>
              ))}
              <span className={`text-[11px] ml-1 ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>— Fabricated combat footage with synthetic narration</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 6: HUMAN INVOLVEMENT ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <User size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>Human Involvement</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5">
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Review Level</span>
            <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Partial</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Manual Edits Present</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
              <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Yes</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>Approved by Creator</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span className={`text-[13px] font-medium ${isDarkMode ? 'text-zinc-200' : 'text-[#0f0f0f]'}`}>Yes</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`h-px mx-6 ${isDarkMode ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`} />

      {/* ── SECTION 7: TRUST & SCORES ── */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <Award size={14} className={isDarkMode ? 'text-zinc-500' : 'text-[#909090]'} />
          <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>Trust & Scores</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-5">
          {[
            { label: 'Authenticity Score', score: 14, color: 'bg-red-500', note: 'High AI synthesis, no real-world footage' },
            { label: 'Source Reliability', score: 22, color: 'bg-red-400', note: 'No verified media source or DoD confirmation' },
            { label: 'Transparency Score', score: 68, color: 'bg-amber-400', note: 'C2PA manifest present, disclosure filed' },
          ].map(({ label, score, color, note }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className={`text-[10px] font-semibold uppercase tracking-wider ${isDarkMode ? 'text-zinc-600' : 'text-[#b0b0b0]'}`}>{label}</span>
              <div className="flex items-center gap-2">
                <div className={`flex-1 h-1.5 rounded-full ${isDarkMode ? 'bg-zinc-700' : 'bg-gray-100'}`}>
                  <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${score}%` }} />
                </div>
                <span className={`text-[12px] font-bold tabular-nums ${isDarkMode ? 'text-zinc-300' : 'text-[#0f0f0f]'}`}>{score}</span>
              </div>
              <span className={`text-[11px] ${isDarkMode ? 'text-zinc-500' : 'text-[#909090]'}`}>{note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Box */}
      <div className="px-6 pb-6">
        <div className={`p-4 rounded-xl flex gap-3 border ${isDarkMode ? 'bg-[#15201b] border-[#23352c]' : 'bg-[#f4fcf9] border-[#e0f2eb]'}`}>
          <div className={`mt-0.5 ${isDarkMode ? 'text-emerald-500' : 'text-emerald-600'}`}>
            <ShieldCheck size={20} />
          </div>
          <p className={`text-[13px] leading-relaxed ${isDarkMode ? 'text-emerald-100' : 'text-[#1a3a2e]'}`}>
            <strong className="font-bold">Cryptographically verified.</strong> The digital signature on this C2PA manifest confirms that the embedded provenance metadata has not been tampered with since it was originally signed. This does not guarantee the content is truthful—it verifies <em>who</em> signed it, <em>what tools</em> were used, and that the recorded history is intact.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className={`px-6 py-4 border-t flex items-center justify-between ${isDarkMode ? 'bg-[#1a1a1a] border-[#3f3f3f]' : 'bg-gray-50 border-gray-100'}`}>
        <a href="https://contentcredentials.org/verify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[13px] font-medium text-blue-500 hover:underline">
          <ExternalLink size={14} />
          Verify content credentials
        </a>
        <span className={`text-[11px] ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>Spec v2.1 · c2pa.org</span>
      </div>
    </div>
  );
};

// --- COMMUNITY LENS TOOL UI  ---


const CommunityLensUI = ({ videoId, isDarkMode, toggleTheme }) => {
  const data = NOTE_DATABASE[videoId];
  if (!data) return null;

  // --- Dynamic Theme Styles ---
  const theme = {
    mainContainer: isDarkMode ? 'bg-[#212121] border-[#3f3f3f]' : 'bg-white border-gray-200',
    headerBg: isDarkMode ? 'bg-[#212121] border-b border-[#3f3f3f]' : 'bg-[#f0f0f0] border-b border-gray-300',
    bodyBg: isDarkMode ? 'bg-[#212121]' : 'bg-white',
    textMain: isDarkMode ? 'text-[#f1f1f1]' : 'text-[#0f0f0f]',
    textSub: isDarkMode ? 'text-[#aaaaaa]' : 'text-[#606060]',
    textHighlight: isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-[#a10f18] hover:underline',
    cardBorder: isDarkMode ? 'border-[#3f3f3f] bg-[#0f0f0f]' : 'border-gray-300 bg-gray-50',
    sectionHeaderBg: isDarkMode ? 'bg-[#3d1212]' : 'bg-[#ffdddf]',
    sectionHeaderText: isDarkMode ? 'text-red-300' : 'text-[#a10f18]',
    riskItemBg: isDarkMode ? 'bg-[#1e1e1e] border-[#3f3f3f] hover:bg-[#2a2a2a]' : 'bg-white border-gray-200 hover:bg-gray-100',
    viewerResponseBg: isDarkMode ? 'bg-[#1a1a1a] border-[#3f3f3f]' : 'bg-white border-gray-200',
    viewerResponseAccent: isDarkMode ? 'bg-red-900' : 'bg-[#ffdddf]',
    riskHigh: isDarkMode ? 'bg-red-900/50 text-red-200 border-red-800' : 'bg-red-100 text-red-700 border-red-200',
    riskMid: isDarkMode ? 'bg-orange-900/50 text-orange-200 border-orange-800' : 'bg-orange-100 text-orange-700 border-orange-200',
    riskLow: isDarkMode ? 'bg-zinc-800 text-zinc-300 border-zinc-700' : 'bg-gray-100 text-gray-600 border-gray-200',
    contentClassificationBg: isDarkMode ? 'bg-[#1a1a1a] border-[#3f3f3f]' : 'bg-white border-gray-200',
    ratingUnsafeBg: isDarkMode ? 'bg-red-900/30 text-red-400 border-red-800' : 'bg-red-50 text-red-600 border-red-200',
    ratingSafeBg: isDarkMode ? 'bg-green-900/30 text-green-400 border-green-800' : 'bg-green-50 text-green-700 border-green-200',
    ageRatingContainer: isDarkMode ? 'bg-[#0f0f0f] border-[#3f3f3f]' : 'bg-white border-gray-300',
    ageRatingBox: isDarkMode ? 'bg-white text-black' : 'bg-black text-white',
    footerBorder: isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200',
    footerText: isDarkMode ? 'text-[#aaaaaa]' : 'text-gray-500',
    footerBrand: isDarkMode ? 'text-white' : 'text-black'
  };

  const getRiskLevelStyle = (level) => {
    if (level === 'High') return theme.riskHigh;
    if (level === 'Mid') return theme.riskMid;
    return theme.riskLow;
  };

  return (
    <div className={`mt-4 w-full font-sans rounded-xl overflow-hidden border ${theme.mainContainer} animate-in fade-in slide-in-from-top-4 duration-500 relative z-0`}>

      {/* 1. HEADER (Static) */}
      <div className={`p-2 relative flex items-center justify-between ${theme.headerBg}`}>
        <div className="flex items-center gap-2">
          <div className="bg-[#FF0000] p-1.5 rounded-md">
            <ShieldAlert size={18} className="text-white" fill="currentColor" />
          </div>
          <div>
            <h1 className={`text-sm font-bold tracking-tight leading-none ${theme.textMain}`}>CommunityLens</h1>
            <p className={`text-[10px] mt-0.5 font-medium ${theme.textSub}`}>Navigate AI Content via Community Insights</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className={`p-1.5 rounded-full transition-colors ${isDarkMode ? 'hover:bg-[#3f3f3f] text-[#f1f1f1]' : 'hover:bg-gray-200 text-gray-600'}`}
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </div>

      {/* 2. BODY (Always Open) */}
      <div className={`${theme.bodyBg} p-2`}>

        {/* CONSENSUS */}
        <LensSection
          title="Community Consensus of this video"
          icon={Activity}
          theme={theme}
          defaultOpen={true}
        >
          <div className="p-2">
            <p className={`inline-block text-[12px] px-2 py-1 rounded-sm font-bold mb-2 border ${isDarkMode ? 'bg-[#272727] text-white border-[#3f3f3f]' : 'bg-gray-200 text-black font-bold border-gray-300'}`}>
              AI- GENERATED
            </p>


            <p className={`inline-block text-[12px] px-2 py-1 ml-3 rounded-sm font-bold border tracking-wider ${isDarkMode ? 'bg-[#3d1212] text-red-300 border-red-900/50' : 'bg-[#ffdddf] text-[#a10f18] border-[#ffa9ae]'}`}>
              {data.consensus.label}
            </p>


            <div className="animate-in fade-in slide-in-from-top-1">
              <p className={`text-xs leading-relaxed mt-1 ${theme.textMain}`}>
                {data.consensus.text}
              </p>
            </div>

            <div className={`flex items-center gap-3 pt-2 mt-2 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
              <div className={`flex items-center gap-1.5 ${theme.textSub}`}>
                <ThumbsUp size={14} />
                <span className="text-[11px] font-medium">{data.consensus.useful || 0} found useful</span>
              </div>
              <div className={`flex items-center gap-1.5 ${theme.textSub}`}>
                <ThumbsDown size={14} />
                <span className="text-[11px] font-medium">{data.consensus.notUseful || 0} not useful</span>
              </div>
            </div>
          </div>
        </LensSection>

        {/* RISKS */}

        <LensSection
          title="Risk Patterns"
          icon={AlertOctagon}
          theme={theme}
          defaultOpen={true}
        >
          <div className="p-2 flex flex-col gap-1.5">
            {data.risks.length > 0 ? (
              data.risks.map((risk) => (
                <div key={risk.id} className={`border rounded-lg overflow-hidden ${theme.riskItemBg}`}>
                  <div className="w-full flex items-center justify-between p-2 text-left">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold text-xs ${theme.textMain}`}>{risk.title}</span>
                      <span className="opacity-40 text-xs text-zinc-500">|</span>
                      <span className={`text-xs font-bold tracking-tight opacity-60 ${theme.textMain}`}>Risk Level:</span>
                      <span className={`text-[9px] py-0.5 px-1.5 rounded border font-bold uppercase ${getRiskLevelStyle(risk.riskLevel)}`}>
                        {risk.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className={`px-2 pb-2 pt-0 text-xs leading-relaxed ${theme.textSub}`}>
                    <div className="space-y-1.5">
                      <div className={`p-1 rounded`}>
                        <p>{risk.content} {risk.tacticDetail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={`text-xs p-2 italic ${theme.textSub}`}>No significant risks detected by the community.</p>
            )}

            {/* Viewer Response Sub-section */}
            {data.viewerResponse && (
              <div className={`mt-1.5 pt-1.5 border-t ${isDarkMode ? 'border-[#3f3f3f]' : 'border-gray-200'}`}>
                <div className={`flex items-center gap-1.5 text-[11px] font-medium w-full p-0.5 mb-1.5 ${theme.sectionHeaderText}`}>
                  how viewers generally address these risks
                </div>
                <div className={`p-2 border rounded-lg text-xs leading-relaxed ${theme.viewerResponseBg}`}>
                  <div className="flex gap-2">
                    <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${theme.viewerResponseAccent}`}></div>
                    <div className={theme.textMain}>{data.viewerResponse}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </LensSection>

        {/* CONTENT CLASSIFICATION */}
        <LensSection
          title="Content Classification"
          icon={ScanFace}
          theme={theme}
          defaultOpen={true}
        >
          <div className="p-2 flex flex-wrap items-center">
            <div className="flex items-baseline gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${theme.textSub}`}>Category:</span>
              <span className={`text-sm font-medium ${theme.textMain}`}>{data.safety.category}</span>
            </div>

            <div className={`w-px h-3 mx-4 self-center ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-300'}`}></div>

            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${theme.textSub}`}>Safety Rating:</span>
              <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${data.safety.score < 50 ? theme.ratingUnsafeBg : theme.ratingSafeBg}`}>
                {data.safety.score < 50 ? 'Unsafe' : 'Safe'}
              </span>
            </div>
          </div>
        </LensSection>

        {/* REFERENCES */}
        <LensSection
          title="Community-provided references and citations"
          icon={ExternalLink}
          theme={theme}
          defaultOpen={true}
        >
          <div className="p-2 flex flex-col gap-1.5">
            {data.references && data.references.length > 0 ? (
              data.references.map((ref, index) => {
                const isUrl = ref.startsWith('http');
                return (
                  <div key={index} className={`flex items-center gap-2 p-1.5 border rounded-lg transition-all duration-200 ${theme.riskItemBg} border-l-2 ${isDarkMode ? 'hover:border-l-red-500 border-l-zinc-700' : 'hover:border-l-[#a10f18] border-l-gray-200'}`}>
                    <div className={`flex-shrink-0 p-1 rounded-md ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                      {isUrl ? (
                        <ExternalLink size={14} className={isDarkMode ? 'text-zinc-400' : 'text-gray-500'} />
                      ) : (
                        <FileText size={14} className={isDarkMode ? 'text-zinc-400' : 'text-gray-500'} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      {isUrl ? (
                        <a
                          href={ref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-xs font-medium break-all hover:underline ${theme.textHighlight}`}
                        >
                          {ref}
                        </a>
                      ) : (
                        <p className={`text-xs leading-relaxed ${theme.textMain}`}>{ref}</p>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <p className={`text-xs p-2 italic ${theme.textSub}`}>No community citations available yet.</p>
            )}
          </div>
        </LensSection>

        {/* AGE RATING */}
        <div className={`h-px w-full mb-3 ${isDarkMode ? 'bg-[#3f3f3f]' : 'bg-gray-200'}`}></div>
        <div className="mb-3">
          <div className={`border rounded-xl p-2 flex items-center gap-3 ${theme.ageRatingContainer}`}>
            <div className={`p-1 rounded w-9 h-7 flex flex-col items-center justify-center flex-shrink-0 ${theme.ageRatingBox}`}>
              <span className="text-[5px] font-bold leading-none uppercase">TV</span>
              <span className="text-xs font-black leading-none -mt-0.5">{data.safety.ratingCode.split('-')[1]}</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-[9px] font-bold uppercase tracking-wider mb-0.5 ${theme.textSub}`}>This Content is appropriate for:</span>
              <p className={`text-[11px] leading-tight font-medium ${theme.textMain}`}>
                {data.safety.ratingDesc}
              </p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className={`text-center pt-2 border-t ${theme.footerBorder}`}>
          <p className={`text-[10px] font-medium uppercase tracking-widest ${theme.footerText}`}>
            Powered by <span className={`font-bold ${theme.footerBrand}`}>ChatGPT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Page Components ---

const WatchPage = ({ videos, isDarkMode, toggleTheme, currentVideoId }) => {
  // ROUTING REMOVED: const { id } = useParams();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(true);

  // Find video by internal ID passed via Props
  const targetId = currentVideoId || "video1";
  const currentVideo = videos.find(v => v.id === targetId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowMore(true);
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
                {/* DYNAMIC SUBSCRIBER COUNT */}
                <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{currentVideo.subscribers} subscribers</p>
              </div>
              <button className={`ml-2 px-4 py-2 rounded-full font-medium text-sm transition-colors ${isDarkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'}`}>
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <div className={`flex items-center rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'}`}>
                <button className={`flex items-center gap-2 px-4 py-2 rounded-l-full border-r transition-colors ${isDarkMode ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-gray-200 border-gray-300'}`}>
                  <ThumbsUp size={18} className={isDarkMode ? 'text-white' : 'text-black'} />
                  {/* DYNAMIC LIKE COUNT */}
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}>{currentVideo.likes}</span>
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
            {currentVideo.views} views • {currentVideo.uploadedAt}  <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}></span>
          </div>

          <div className={`relative ${showMore ? '' : 'max-h-20 overflow-hidden'}`}>
            <p className={`whitespace-pre-line leading-relaxed ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>
              {currentVideo.description}
            </p>

            {currentVideo.isaigenarated && (
              <ContentCredentialsCard isDarkMode={isDarkMode} />
            )}
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

        {/* Hide tool for video7 */}
        {currentVideo.id !== "video7" && (
          <CommunityLensUI
            videoId={currentVideo.id}
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
        )}

        <div className="mt-6 hidden md:block"> </div>

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
            )
          })}
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
    </div >
  );
};

// --- Main Application Component ---

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState(INITIAL_VIDEOS);
  // Global Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // --- Survey Mode State (Default ON) ---
  const [isSurveyActive, setIsSurveyActive] = useState(true);
  const fixedSurveyQueue = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6', 'video7', 'video8'];
  const [surveyQueue, setSurveyQueue] = useState(fixedSurveyQueue);

  // Initialize index directly from the URL to prevent flickering
  const [currentSurveyIndex, setCurrentSurveyIndex] = useState(() => {
    const pathId = window.location.pathname.replace(/^\/+/, '');
    const idx = fixedSurveyQueue.indexOf(pathId);
    return idx !== -1 ? idx : 0;
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Sync index from URL
  useEffect(() => {
    const pathId = location.pathname.replace(/^\/+/, '');
    const idx = surveyQueue.indexOf(pathId);
    if (idx !== -1 && idx !== currentSurveyIndex) {
      setCurrentSurveyIndex(idx);
    } else if (!pathId) {
      navigate(`/${surveyQueue[0]}`, { replace: true });
    }
  }, [location.pathname, surveyQueue]);

  // Sync URL from index
  useEffect(() => {
    const currentId = surveyQueue[currentSurveyIndex];
    if (currentId && location.pathname !== `/${currentId}`) {
      navigate(`/${currentId}`);
    }
  }, [currentSurveyIndex, surveyQueue, navigate]);

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

      {/* SURVEY FLOATING BUTTONS HIDDEN
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
            <button
              onClick={nextSurveyVideo}
              disabled={currentSurveyIndex === surveyQueue.length - 1}
              className={`flex items-center gap-2 px-6 py-4 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white/10 ${currentSurveyIndex === surveyQueue.length - 1 ? 'bg-zinc-800/50 text-zinc-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}
            >
              <span className="font-bold text-lg hidden sm:inline">NEXT VIDEO</span>
              <ArrowRight size={24} strokeWidth={3} />
            </button>
          </div>

          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl text-xs font-mono text-white">
            SURVEY MODE: {currentSurveyIndex + 1} / {surveyQueue.length}
          </div>
        </>
      )}
      */}

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