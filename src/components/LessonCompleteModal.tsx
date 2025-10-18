'use client';

import { useState, useEffect } from 'react';
import { Trophy, Target, Clock, TrendingUp, RotateCcw, ChevronRight, X } from 'lucide-react';


interface LessonCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
  onNextLesson: () => void;
  stats: {
    wpm: number;
    cpm: number;
    accuracy: number;
    errors: number;
    timeSpent: number;
    progressData: { time: number; wpm: number; cpm: number; accuracy: number }[];
  };
  lessonTitle: string;
  lessonNumber: number;
  totalLessons: number;
  previousStats?: {
    wpm: number;
    cpm: number;
    accuracy: number;
  }[];
}

export default function LessonCompleteModal({
  isOpen,
  onClose,
  onRetry,
  onNextLesson,
  stats,
  lessonTitle,
  lessonNumber,
  totalLessons,
  previousStats = []
}: LessonCompleteModalProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const getPerformanceRating = () => {
    const { wpm, accuracy } = stats;
    if (wpm >= 60 && accuracy >= 95) return { rating: 'Excellent', color: 'text-green-400', bgColor: 'bg-green-900/20' };
    if (wpm >= 40 && accuracy >= 90) return { rating: 'Good', color: 'text-blue-400', bgColor: 'bg-blue-900/20' };
    if (wpm >= 25 && accuracy >= 80) return { rating: 'Fair', color: 'text-yellow-400', bgColor: 'bg-yellow-900/20' };
    return { rating: 'Needs Practice', color: 'text-red-400', bgColor: 'bg-red-900/20' };
  };

  const performance = getPerformanceRating();

  // Prepare chart data from real-time progress data
  const chartData = stats.progressData.map((data, index) => ({
    time: index,
    accuracy: data.accuracy,
    cpm: data.cpm
  }));

  // If no progress data, fall back to lesson-based data
  if (chartData.length === 0) {
    const fallbackData = previousStats.map((stat, index) => ({
      time: index,
      accuracy: stat.accuracy,
      cpm: stat.cpm || stat.wpm * 5 // approximate CPM if missing
    }));
    fallbackData.push({
      time: lessonNumber - 1,
      accuracy: stats.accuracy,
      cpm: stats.cpm
    });
    chartData.push(...fallbackData);
  }

  // Generate dynamic SVG path for CPM line based on actual data
  const generateCPMPath = () => {
    if (chartData.length <= 1) return "M65,95.667C81.833,90.189,98.667,84.711,115.5,80.933C132.333,77.156,149.167,75.833,166,73C182.833,70.167,199.667,64.689,216.5,63.933C233.333,63.178,250.167,62.8,267,62.8C283.833,62.8,300.667,65.067,317.5,65.067C334.333,65.067,351.167,45.8,368,45.8C384.833,45.8,401.667,50.144,418.5,51.467C435.333,52.789,452.167,53.733,469,53.733C485.833,53.733,502.667,32.2,519.5,32.2C536.333,32.2,553.167,32.2,570,32.2";

    const chartWidth = 505;
    const chartHeight = 136;
    const startX = 65;
    const startY = 5;

    const maxCPM = Math.max(...chartData.map(d => d.cpm));
    const minCPM = Math.min(...chartData.map(d => d.cpm));
    const rangeCPM = maxCPM - minCPM || 1;

    return chartData.map((data, index) => {
      const x = startX + (index * chartWidth) / (chartData.length - 1);
      const normalized = (data.cpm - minCPM) / rangeCPM; // 0 → 1 scale
      const y = startY + chartHeight - normalized * chartHeight;
      return `${index === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('');
  };

  // Generate dynamic SVG path for Accuracy line based on actual data
  const generateAccuracyPath = () => {
    if (chartData.length <= 1) return "M65,59.4C81.833,57.133,98.667,54.867,115.5,54.867C132.333,54.867,149.167,57.133,166,57.133C182.833,57.133,199.667,55.244,216.5,53.733C233.333,52.222,250.167,49.578,267,48.067C283.833,46.556,300.667,46.178,317.5,44.667C334.333,43.156,351.167,39.756,368,39C384.833,38.244,401.667,38.622,418.5,37.867C435.333,37.111,452.167,36.356,469,34.467C485.833,32.578,502.667,26.533,519.5,26.533C536.333,26.533,553.167,28.233,570,29.933";

    const chartWidth = 505;
    const chartHeight = 136;
    const startX = 65;
    const startY = 5;

    const maxAcc = Math.max(...chartData.map(d => d.accuracy));
    const minAcc = Math.min(...chartData.map(d => d.accuracy));
    const rangeAcc = maxAcc - minAcc;

    return chartData.map((data, index) => {
      const x = startX + (index * chartWidth) / (chartData.length - 1);
      const normalized = rangeAcc === 0 ? (maxAcc === 100 ? 1 : 0.5) : (data.accuracy - minAcc) / rangeAcc;
      const y = startY + chartHeight - normalized * chartHeight;
      return `${index === 0 ? 'M' : 'L'}${x},${y}`;
    }).join('');
  };


  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Chart Tooltip */}
      <div
        id="chart-tooltip"
        className="fixed bg-gray-800 border border-gray-600 rounded-lg p-2 text-white text-sm pointer-events-none z-60 hidden"
        style={{ position: 'fixed' }}
      ></div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Lesson Complete!</h2>
                <p className="text-sm text-gray-400">{lessonTitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Performance Rating */}
        <div className="p-6 border-b border-gray-700">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${performance.bgColor} ${performance.color}`}>
            <Trophy className="w-4 h-4 mr-2" />
            {performance.rating}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <Target className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-lg font-bold text-white">{stats.wpm}</div>
              <div className="text-xs text-gray-400">WPM</div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-lg font-bold text-white">{stats.cpm}</div>
              <div className="text-xs text-gray-400">CPM</div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-lg font-bold text-white">{stats.accuracy}%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="flex items-center justify-center mb-1">
                <Target className="w-4 h-4 text-red-400" />
              </div>
              <div className="text-lg font-bold text-white">{stats.errors}</div>
              <div className="text-xs text-gray-400">Errors</div>
            </div>
          </div>



          {/* Performance Over Time Chart */}
          <div className="mb-6">
            <div className="bg-[#0d0d0d] rounded-lg p-6 mb-4 border border-[#2a2a2a]">
              <h3 className="text-orange-400 font-semibold mb-4">Performance Over Time</h3>
              {/* Legend below title */}
              <div className="flex items-center justify-center space-x-6 mb-4 bg-black/50 p-2 rounded">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-[2px] bg-green-500"></div>
                  <span className="text-xs text-green-400 font-mono">Accuracy (%)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-[2px] bg-red-500"></div>
                  <span className="text-xs text-red-400 font-mono">Speed (CPM)</span>
                </div>
              </div>
              <div className="h-[200px]">
                <svg
                  role="application"
                  tabIndex={0}
                  className="recharts-surface w-full h-full"
                  width={653}
                  height={200}
                  viewBox="0 0 653 200"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const chartWidth = 505;
                    const startX = 65;

                    const tooltip = document.getElementById('chart-tooltip');
                    if (!tooltip) return;

                    if (x >= startX && x <= startX + chartWidth && chartData.length > 1) {
                      const dataIndex = Math.round((x - startX) / chartWidth * (chartData.length - 1));
                      const data = chartData[dataIndex];
                      if (data) {
                        tooltip.innerHTML = `
                          <div style="
                            background-color: rgba(15,15,15,0.95);
                            border: 1px solid #333;
                            border-radius: 8px;
                            padding: 8px 12px;
                            font-family: monospace;
                            font-size: 13px;
                            color: #fff;
                            min-width: 140px;
                            text-align: left;
                          ">
                            <div style="color:#aaa; margin-bottom:4px;">Time: ${data.time}s</div>
                            <div><span style="color:#22c55e;">Accuracy</span>: ${data.accuracy}%</div>
                            <div><span style="color:#ef4444;">Speed</span>: ${data.cpm} CPM</div>
                          </div>
                        `;
                        tooltip.style.left = `${e.clientX + 15}px`;
                        tooltip.style.top = `${e.clientY - 45}px`;
                        tooltip.style.display = 'block';
                        tooltip.classList.add('show');
                      }
                    } else {
                      tooltip.classList.remove('show');
                      tooltip.style.display = 'none';
                    }
                  }}
                  onMouseLeave={() => {
                    const tooltip = document.getElementById('chart-tooltip');
                    if (tooltip) {
                      tooltip.classList.remove('show');
                      tooltip.style.display = 'none';
                    }
                  }}
                  onClick={(e) => {
                    // Don't change lessons on click - just show tooltip
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const chartWidth = 505;
                    const startX = 65;
                    const tooltip = document.getElementById('chart-tooltip');
                    if (!tooltip) return;

                    const dataIndex = Math.round((x - startX) / chartWidth * (chartData.length - 1));
                    const data = chartData[dataIndex];
                    if (data) {
                      tooltip.innerHTML = `
                        <div style="
                          background-color: rgba(15,15,15,0.95);
                          border: 1px solid #333;
                          border-radius: 8px;
                          padding: 8px 12px;
                          font-family: monospace;
                          font-size: 13px;
                          color: #fff;
                          min-width: 140px;
                        ">
                          <div style="color:#aaa; margin-bottom:4px;">Time: ${data.time}s</div>
                          <div><span style="color:#22c55e;">Accuracy</span>: ${data.accuracy}%</div>
                          <div><span style="color:#ef4444;">Speed</span>: ${data.cpm} CPM</div>
                        </div>
                      `;
                      tooltip.style.left = `${e.clientX + 15}px`;
                      tooltip.style.top = `${e.clientY - 45}px`;
                      tooltip.style.display = 'block';
                      tooltip.classList.add('show');
                    }
                  }}
                >
                  <title></title>
                  <desc></desc>
                  <defs>
                    <clipPath id="recharts19-clip">
                      <rect x="65" y="5" height="136" width="505"></rect>
                    </clipPath>
                  </defs>
                  <g className="recharts-cartesian-grid">
                    <g className="recharts-cartesian-grid-horizontal">
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="65" y1="141" x2="570" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="65" y1="107" x2="570" y2="107"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="65" y1="73" x2="570" y2="73"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="65" y1="5" x2="570" y2="5"></line>
                    </g>
                    <g className="recharts-cartesian-grid-vertical">
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="65" y1="5" x2="65" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="115.5" y1="5" x2="115.5" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="166" y1="5" x2="166" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="216.5" y1="5" x2="216.5" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="267" y1="5" x2="267" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="317.5" y1="5" x2="317.5" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="368" y1="5" x2="368" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="418.5" y1="5" x2="418.5" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="469" y1="5" x2="469" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="519.5" y1="5" x2="519.5" y2="141"></line>
                      <line strokeDasharray="3 3" stroke="#2a2a2a" fill="none" x="65" y="5" width="505" height="136" x1="570" y1="5" x2="570" y2="141"></line>
                    </g>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                    <line stroke="#666" className="recharts-cartesian-axis-line" fill="none" x1="65" y1="141" x2="570" y2="141"></line>
                    <g className="recharts-cartesian-axis-ticks">
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="65" y1="147" x2="65" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="65" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="65" dy="0.71em">0</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="115.5" y1="147" x2="115.5" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="115.5" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="115.5" dy="0.71em">1</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="166" y1="147" x2="166" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="166" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="166" dy="0.71em">2</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="216.5" y1="147" x2="216.5" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="216.5" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="216.5" dy="0.71em">3</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="267" y1="147" x2="267" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="267" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="267" dy="0.71em">4</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="317.5" y1="147" x2="317.5" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="317.5" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="317.5" dy="0.71em">5</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="368" y1="147" x2="368" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="368" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="368" dy="0.71em">6</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="418.5" y1="147" x2="418.5" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="418.5" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="418.5" dy="0.71em">7</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="469" y1="147" x2="469" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="469" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="469" dy="0.71em">8</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="519.5" y1="147" x2="519.5" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="519.5" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="519.5" dy="0.71em">9</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="570" y1="147" x2="570" y2="141"></line>
                        <text stroke="none" height="30" orientation="bottom" width="505" x="566.375" y="149" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="middle" fill="#666">
                          <tspan x="566.375" dy="0.71em">10</tspan>
                        </text>
                      </g>
                    </g>
                    <text offset="-5" x="317.5" y="176" className="recharts-text recharts-label" textAnchor="middle" fill="#666">
                      <tspan x="317.5" dy="0em">Time (seconds)</tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                    <line stroke="#666" className="recharts-cartesian-axis-line" fill="none" x1="65" y1="5" x2="65" y2="141"></line>
                    <g className="recharts-cartesian-axis-ticks">
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="59" y1="141" x2="65" y2="141"></line>
                        <text stroke="none" orientation="left" width="60" height="136" x="57" y="141" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                          <tspan x="57" dy="0.355em">0</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="59" y1="107" x2="65" y2="107"></line>
                        <text stroke="none" orientation="left" width="60" height="136" x="57" y="107" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                          <tspan x="57" dy="0.355em">30</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="59" y1="73" x2="65" y2="73"></line>
                        <text stroke="none" orientation="left" width="60" height="136" x="57" y="73" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                          <tspan x="57" dy="0.355em">60</tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <line stroke="#666" className="recharts-cartesian-axis-tick-line" fill="none" x1="59" y1="5" x2="65" y2="5"></line>
                        <text stroke="none" orientation="left" width="60" height="136" x="57" y="12" className="recharts-text recharts-cartesian-axis-tick-value" textAnchor="end" fill="#666">
                          <tspan x="57" dy="0.355em">120</tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g className="recharts-layer recharts-line">
                    <path stroke="#ef4444" strokeWidth="2" name="Speed (CPM)" fill="none" id="recharts-line-_r_2_" height="136" width="505" className="recharts-curve recharts-line-curve" strokeDasharray={`${chartData.length > 1 ? '0px 0px' : '518.4290771484375px 0px'}`} d={generateCPMPath()} strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  <g className="recharts-layer recharts-line">
                    <path stroke="#22c55e" strokeWidth="2" name="Accuracy (%)" fill="none" id="recharts-line-_r_3_" height="136" width="505" className="recharts-curve recharts-line-curve" strokeDasharray={`${chartData.length > 1 ? '0px 0px' : '507.1773681640625px 0px'}`} d={generateAccuracyPath()} strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                  {/* Data points */}
                  {chartData.length > 1 && chartData.map((data, index) => {
                    const chartWidth = 505;
                    const chartHeight = 136;
                    const startX = 65;
                    const startY = 5;
                    const maxCPM = Math.max(...chartData.map(d => d.cpm));
                    const minCPM = Math.min(...chartData.map(d => d.cpm));
                    const rangeCPM = maxCPM - minCPM || 1;

                    const maxAcc = Math.max(...chartData.map(d => d.accuracy));
                    const minAcc = Math.min(...chartData.map(d => d.accuracy));
                    const rangeAcc = maxAcc - minAcc || 1;

                    const x = startX + (index * chartWidth) / (chartData.length - 1);
                    const yAcc = startY + chartHeight - ((data.accuracy - minAcc) / rangeAcc) * chartHeight;
                    const yCpm = startY + chartHeight - ((data.cpm - minCPM) / rangeCPM) * chartHeight;

                    return (
                      <g key={`data-points-${index}`}>
                        <circle cx={x} cy={yAcc} r={4} fill="#22c55e" stroke="#111" strokeWidth="1" />
                        <circle cx={x} cy={yCpm} r={4} fill="#ef4444" stroke="#111" strokeWidth="1" />
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Lesson Progress</span>
                <span className="text-sm text-gray-400">{lessonNumber} / {totalLessons}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${(lessonNumber / totalLessons) * 100}%` }}
                />
              </div>
            </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button
              onClick={onRetry}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Lesson</span>
            </button>
            <button
              onClick={onNextLesson}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'][Math.floor(Math.random() * 5)],
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
