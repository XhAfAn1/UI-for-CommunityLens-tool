import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

const YouTubeCommunityNotesUI = () => {
  const [showConsensus, setShowConsensus] = useState(false);
  const [expandedRisks, setExpandedRisks] = useState({});

  const toggleRisk = (risk) => {
    setExpandedRisks(prev => ({
      ...prev,
      [risk]: !prev[risk]
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white">
      {/* YouTube Video Player Placeholder */}
      <div className="w-full aspect-video bg-black flex items-center justify-center mb-3">
        <div className="text-white text-xl">Video Player</div>
      </div>

      {/* Video Title and Stats */}
      <div className="px-6 py-3">
        <h1 className="text-xl font-semibold text-gray-900 mb-2">
          Huge News! Social Security September 2025 Raise - See If You Qualify For New Payment
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span className="font-medium">1,234,567 views</span>
          <span>•</span>
          <span>Sep 15, 2025</span>
        </div>
      </div>

      {/* Community Notes Section */}
      <div className="mx-6 mb-4 border border-blue-300 rounded-lg bg-blue-50">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base font-semibold text-gray-900">Community Notes on the Content being AIGC</h2>
              </div>
            </div>
          </div>

          {/* Community Consensus */}
          <div className="mb-3">
            <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gray-900">Community Consensus about the Content:</h3>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    AI-GENERATED
                  </span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Most commenters strongly distrust the video, calling it clickbait, lies, and fake news. Many report seeing no Social Security increase, accusing the creator of misleading seniors f!!
                </p>
                {!showConsensus && (
                  <button 
                    onClick={() => setShowConsensus(true)}
                    className="mt-2 text-sm text-blue-600 font-medium hover:underline"
                  >
                    See more
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Risk Patterns */}
          <div className="bg-white rounded-lg border border-gray-300">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Risk Patterns in the Content</h3>
              
              {/* Misinformation */}
              <div className="border border-gray-300 rounded-lg mb-2">
                <button
                  onClick={() => toggleRisk('misinfo')}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-900">Misinformation</span>
                  {expandedRisks.misinfo ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {/* Clickbait */}
              <div className="border border-gray-300 rounded-lg mb-2">
                <button
                  onClick={() => toggleRisk('clickbait')}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-900">Clickbait & Engagement Farming</span>
                  {expandedRisks.clickbait ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              {/* Exploitative Monetization */}
              <div className="border border-gray-300 rounded-lg">
                <button
                  onClick={() => toggleRisk('exploit')}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50"
                >
                  <span className="text-sm font-medium text-gray-900">Exploitative Monetization</span>
                  {expandedRisks.exploit ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              <a href="#" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1 mt-3">
                <ChevronDown className="w-4 h-4" />
                See how viewers generally address these risks
              </a>
            </div>
          </div>

          {/* References */}
          <div className="mt-3 bg-white rounded-lg border border-gray-300 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Community-provided references and citations</h3>
            <p className="text-sm text-gray-600">No references available.</p>
          </div>

          {/* Content Category */}
          <div className="mt-3 bg-white rounded-lg border border-gray-300 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Content Category</h3>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded">
                  News and Media
                </span>
                <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                  <Info className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-black"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-600">Unsafe</span>
              <span className="text-xs text-gray-600">Neutral</span>
              <span className="text-xs text-gray-600">Safe</span>
            </div>
          </div>

          {/* Age Rating */}
          <div className="mt-3 bg-white rounded-lg border border-gray-300 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">This Content is appropriate for:</h3>
            <div className="flex items-center gap-3 p-3 border-2 border-gray-900 rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center rounded">
                <div className="text-center">
                  <div className="text-xs font-bold">TV</div>
                  <div className="text-lg font-bold leading-none">14</div>
                </div>
              </div>
              <p className="text-sm text-gray-900">
                <strong>TV-14:</strong> This program contains material that parents may find unsuitable for children under 14. Parents strongly cautioned.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-3 border-t border-gray-300">
            <p className="text-xs text-gray-500 text-center">
              POWERED BY <span className="font-semibold">CHATGPT</span>
            </p>
          </div>
        </div>
      </div>

      {/* Channel Info and Description */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-red-500"></div>
          <div className="flex-1">
            <div className="font-semibold text-sm">Channel Name</div>
            <div className="text-xs text-gray-600">1.2M subscribers</div>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
            Subscribe
          </button>
        </div>
        <p className="text-sm text-gray-700">
          Video description goes here...
        </p>
      </div>
    </div>
  );
};

export default YouTubeCommunityNotesUI;