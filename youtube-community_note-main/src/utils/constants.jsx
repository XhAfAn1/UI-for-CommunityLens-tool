import { Home, Compass, PlaySquare, Clock, ThumbsUp, User, Gamepad2, Music2, Trophy, Flame, Newspaper, Lightbulb, Code, Radio, Clapperboard, Shirt, Sparkles, Smile, Dumbbell, Bitcoin } from "lucide-react";

export const categories = [
    { name: "New", icon: <Home /> },
    { name: "JS Mastery", icon: <Code /> },
    { name: "Coding", icon: <Code /> },
    { name: "ReactJS", icon: <Code /> },
    { name: "NextJS", icon: <Code /> },
    { name: "Music", icon: <Music2 /> },
    { name: "Education", icon: <Lightbulb /> },
    { name: "Podcast", icon: <Radio /> },
    { name: "Movie", icon: <Clapperboard /> },
    { name: "Gaming", icon: <Gamepad2 /> },
    { name: "Live", icon: <Radio /> },
    { name: "Sport", icon: <Trophy /> },
    { name: "Fashion", icon: <Shirt /> },
    { name: "Beauty", icon: <Sparkles /> },
    { name: "Comedy", icon: <Smile /> },
    { name: "Gym", icon: <Dumbbell /> },
    { name: "Crypto", icon: <Bitcoin /> },
];

export const sidebarItems = [
    { icon: Home, text: "Home", active: true },
    { icon: Flame, text: "Trending" },
    { icon: PlaySquare, text: "Subscriptions" },
    { icon: PlaySquare, text: "Library" },
    { icon: Clock, text: "History" },
    { icon: PlaySquare, text: "Your Videos" },
    { icon: Clock, text: "Watch Later" },
    { icon: ThumbsUp, text: "Liked Videos" },
];
