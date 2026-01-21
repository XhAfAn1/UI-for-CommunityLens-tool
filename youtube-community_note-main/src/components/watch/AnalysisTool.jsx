import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, Activity, Mic, Video, ShieldAlert } from 'lucide-react';

export const AnalysisTool = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    if (!data) return null;

    return (
        <div className="mt-4 border border-red-500/50 bg-red-950/20 rounded-xl overflow-hidden backdrop-blur-sm">
            {/* Header / Summary */}
            <div
                className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-red-900/10 transition-colors"
                onClick={() => setExpanded(!expanded)}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/20 rounded-full animate-pulse">
                        <ShieldAlert className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-red-500 flex items-center gap-2">
                            Possibly Manipulated Media
                            <span className="text-xs bg-red-500/20 px-2 py-0.5 rounded text-red-400 font-mono">Deepfake Detected</span>
                        </h3>
                        <p className="text-sm text-red-200/70 mt-1">
                            AI analysis detected synthetic content with <span className="font-bold text-white">{data.confidence}% confidence</span>.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Visual Confidence Meter */}
                    <div className="flex-1 sm:w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-orange-500 to-red-600"
                            style={{ width: `${data.confidence}%` }}
                        ></div>
                    </div>
                    {expanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </div>
            </div>

            {/* Expandable Forensic Report */}
            {expanded && (
                <div className="p-4 border-t border-red-500/20 bg-black/20">

                    {/* Modality Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-800">
                            <div className="flex items-center gap-2 mb-3 text-blue-400">
                                <Mic className="w-5 h-5" />
                                <span className="font-semibold">Audio Analysis</span>
                            </div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-gray-400 text-sm">Synthetic Probability</span>
                                <span className="text-xl font-bold text-red-400">{data.breakdown.audioScore}%</span>
                            </div>
                            <p className="text-xs text-gray-500">
                                {data.findings.audioSpectrum}
                            </p>
                        </div>

                        <div className="bg-[#1f1f1f] p-4 rounded-lg border border-gray-800">
                            <div className="flex items-center gap-2 mb-3 text-purple-400">
                                <Video className="w-5 h-5" />
                                <span className="font-semibold">Video Analysis</span>
                            </div>
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-gray-400 text-sm">Synthetic Probability</span>
                                <span className="text-xl font-bold text-red-400">{data.breakdown.videoScore}%</span>
                            </div>
                            <p className="text-xs text-gray-500">
                                {data.findings.lipSyncLatency}
                            </p>
                        </div>
                    </div>

                    {/* Detection Timeline */}
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3 text-gray-300">
                            <Activity className="w-5 h-5" />
                            <span className="font-semibold">Manipulation Timeline</span>
                        </div>

                        {/* Timeline Visual */}
                        <div className="relative h-8 bg-[#1f1f1f] rounded w-full overflow-hidden flex items-center">
                            {/* Base track */}
                            <div className="absolute inset-0 w-full h-1 bg-gray-700 top-1/2 -translate-y-1/2 rounded"></div>

                            {/* Segments */}
                            {data.breakdown.timeline.map((segment, idx) => (
                                <div
                                    key={idx}
                                    className="absolute h-4 top-1/2 -translate-y-1/2 bg-red-500/80 rounded z-10 hover:bg-red-400 cursor-help transition-colors"
                                    style={{
                                        left: `${segment.start}%`,
                                        width: `${segment.end - segment.start}%`
                                    }}
                                    title={`Manipulation detected: ${segment.start}% - ${segment.end}%`}
                                ></div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                            <span>00:00</span>
                            <span>Video End</span>
                        </div>
                    </div>

                    {/* Source Verification */}
                    <div className="flex justify-end">
                        <div className="text-xs text-gray-400 bg-[#1f1f1f] px-3 py-1 rounded-full border border-gray-800">
                            Source Verification: <span className="text-blue-400">{data.findings.source}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
