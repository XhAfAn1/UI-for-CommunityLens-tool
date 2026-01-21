export const videos = [
    {
        id: "ghLtBXmhDsU",
        title: "President Zelensky Surrenders? (Leaked Footage Analysis)",
        thumbnail: "https://images.unsplash.com/photo-1639322537228-ad711699565d?q=80&w=1000&auto=format&fit=crop",
        channelName: "Global News 24/7",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=news",
        views: "1.2M",
        postedAt: "2 hours ago",
        duration: "1:15",
        category: "News",
        isDeepfake: true // Marker for our app logic
    },
    {
        id: "2",
        title: "Build a YouTube Clone in 1 Hour with React & Tailwind",
        thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
        channelName: "Code Master",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=code",
        views: "542K",
        postedAt: "1 day ago",
        duration: "1:02:45",
        category: "Tech"
    },
    {
        id: "3",
        title: "Top 10 AI Tools You Need in 2026",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        channelName: "Future Tech",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
        views: "890K",
        postedAt: "3 days ago",
        duration: "12:30",
        category: "Tech"
    },
    {
        id: "4",
        title: "Lofi Hip Hop Radio - Beats to Relax/Study to",
        thumbnail: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop",
        channelName: "Lofi Girl",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=music",
        views: "25K watching",
        postedAt: "LIVE",
        duration: "LIVE",
        category: "Music"
    },
    {
        id: "5",
        title: "Elden Ring: Shadow of the Erdtree - Official Trailer",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
        channelName: "Bandai Namco",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=game",
        views: "8.5M",
        postedAt: "1 week ago",
        duration: "3:05",
        category: "Gaming"
    },
    {
        id: "6",
        title: "Understanding Quantum Computing in 10 Minutes",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop",
        channelName: "Physics Explained",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=physics",
        views: "2.1M",
        postedAt: "2 weeks ago",
        duration: "10:15",
        category: "Education"
    },
    {
        id: "7",
        title: "Beautiful Norway - 4K Drone Footage",
        thumbnail: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
        channelName: "Travel World",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=travel",
        views: "450K",
        postedAt: "1 month ago",
        duration: "8:20",
        category: "Travel"
    },
    {
        id: "8",
        title: "How to Cook the Perfect Steak",
        thumbnail: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
        channelName: "Gordon Ramsay",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=food",
        views: "15M",
        postedAt: "1 year ago",
        duration: "15:45",
        category: "Food"
    },
    {
        id: "9",
        title: "SpaceX Starship Launch Highlights",
        thumbnail: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop",
        channelName: "SpaceX",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=space",
        views: "5.2M",
        postedAt: "5 days ago",
        duration: "4:50",
        category: "Tech"
    },
    {
        id: "10",
        title: "Best Coding Setup 2026",
        thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop",
        channelName: "Tech Reviewer",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=review",
        views: "320K",
        postedAt: "2 days ago",
        duration: "18:00",
        category: "Tech"
    },
    {
        id: "11",
        title: "Relaxing Rain Sounds for Sleep",
        thumbnail: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1000&auto=format&fit=crop",
        channelName: "Peaceful Mind",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sleep",
        views: "12M",
        postedAt: "8 months ago",
        duration: "8:00:00",
        category: "Music"
    },
    {
        id: "12",
        title: "Is This Real? Deepfake Detection Demo",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
        channelName: "AI Safety Labs",
        channelAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ai",
        views: "10K",
        postedAt: "Just now",
        duration: "2:15",
        category: "Tech"
    }
];

export const COMMUNITY_NOTES_DATA = {
    "ghLtBXmhDsU": {
        type: "manipulated",
        confidence: 99.8,
        breakdown: {
            audioScore: 99.9,
            videoScore: 98.5,
            timeline: [
                { start: 10, end: 25, type: 'fake' },
                { start: 45, end: 55, type: 'fake' }
            ]
        },
        findings: {
            lipSyncLatency: "145ms (High)",
            audioSpectrum: "Inconsistent noise floor",
            source: "Reuters Fact Check"
        }
    }
};
