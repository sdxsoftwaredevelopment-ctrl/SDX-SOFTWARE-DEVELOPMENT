import { useState } from 'react';
import {
  Activity,
  Database,
  Layers,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: Activity,
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: TrendingUp,
  },
  {
    id: 'team',
    label: 'Team',
    icon: Users,
  },
];

const chartBars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const activities = [
  { user: 'Sarah Chen', action: 'deployed v2.4.1', time: '2m ago', color: 'bg-emerald-500' },
  { user: 'Marcus Lee', action: 'merged PR #482', time: '15m ago', color: 'bg-blue-500' },
  { user: 'Aria Patel', action: 'updated API keys', time: '1h ago', color: 'bg-amber-500' },
  { user: 'James Kim', action: 'created new workflow', time: '3h ago', color: 'bg-purple-500' },
];

const teamMembers = [
  { name: 'Sarah Chen', role: 'Lead Engineer', status: 'online', initials: 'SC', color: 'from-blue-500 to-blue-600' },
  { name: 'Marcus Lee', role: 'Product Manager', status: 'online', initials: 'ML', color: 'from-emerald-500 to-emerald-600' },
  { name: 'Aria Patel', role: 'Designer', status: 'away', initials: 'AP', color: 'from-amber-500 to-amber-600' },
  { name: 'James Kim', role: 'DevOps', status: 'offline', initials: 'JK', color: 'from-purple-500 to-purple-600' },
  { name: 'Lisa Wang', role: 'Engineer', status: 'online', initials: 'LW', color: 'from-cyan-500 to-cyan-600' },
  { name: 'Tom Garcia', role: 'QA Lead', status: 'away', initials: 'TG', color: 'from-red-500 to-red-600' },
];

export default function Platform() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { ref, visible } = useScrollReveal();

  return (
    <section id="platform" className="relative py-28 px-6 bg-[#0c1018] border-y border-[#1c2333]">
      <div ref={ref} className={`max-w-7xl mx-auto ${visible ? 'visible' : ''} reveal`}>
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Platform</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
            One workspace. <span className="gradient-text">Total clarity.</span>
          </h2>
          <p className="text-lg text-[#8a93a8] max-w-2xl mx-auto">
            See your entire operation in real-time. Switch between dashboards, analytics, and team management without leaving the page.
          </p>
        </div>

        {/* Browser frame */}
        <div className="relative rounded-2xl bg-[#111621] border border-[#1c2333] overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="flex items-center gap-2 px-4 py-3.5 border-b border-[#1c2333] bg-[#0c1018]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-amber-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1.5 rounded-md bg-[#111621] border border-[#1c2333] text-xs text-[#5a6378] flex items-center gap-2">
                <Database className="w-3 h-3" />
                app.nexus.io/dashboard
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex items-center gap-1 px-4 py-2 border-b border-[#1c2333] bg-[#0c1018]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/5 text-white'
                    : 'text-[#8a93a8] hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2">
              <button className="p-2 rounded-lg text-[#8a93a8] hover:text-white hover:bg-white/5 transition-colors">
                <Settings className="w-4 h-4" />
              </button>
              <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Deploy
              </button>
            </div>
          </div>

          {/* Content area */}
          <div className="p-6 min-h-[420px]">
            {activeTab === 'dashboard' && (
              <div className="animate-fade-in space-y-6">
                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Revenue', value: '$284.5K', change: '+12.3%', up: true },
                    { label: 'Users', value: '48,291', change: '+8.1%', up: true },
                    { label: 'Conversion', value: '3.2%', change: '-0.4%', up: false },
                    { label: 'MRR', value: '$92.1K', change: '+15.7%', up: true },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                      <div className="text-xs text-[#5a6378] uppercase tracking-wider mb-1">{stat.label}</div>
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className={`text-xs flex items-center gap-1 ${stat.up ? 'text-emerald-400' : 'text-red-400'}`}>
                        <TrendingUp className={`w-3 h-3 ${stat.up ? '' : 'rotate-180'}`} />
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="p-6 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="font-semibold">Revenue Overview</h4>
                      <p className="text-xs text-[#5a6378] mt-0.5">Last 12 months</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-[#8a93a8]">
                        <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> This year
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#8a93a8]">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#2a3344]" /> Last year
                      </span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-2 h-40">
                    {chartBars.map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                        <div className="w-full flex flex-col items-center justify-end h-full">
                          <div
                            className="w-full max-w-[28px] rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-blue-300 transition-all duration-300 relative"
                            style={{ height: `${height}%` }}
                          >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-white whitespace-nowrap font-medium">
                              ${Math.round(height * 2.8)}K
                            </div>
                          </div>
                          <div className="w-full max-w-[28px] h-1 rounded-b-sm bg-[#2a3344]" />
                        </div>
                        <span className="text-[10px] text-[#5a6378]">{months[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Page Views', value: '1.2M', sub: 'vs 980K last month' },
                    { label: 'Avg Session', value: '4m 32s', sub: 'vs 3m 51s last month' },
                    { label: 'Bounce Rate', value: '24.8%', sub: 'vs 31.2% last month' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-5 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                      <div className="text-xs text-[#5a6378] uppercase tracking-wider mb-2">{stat.label}</div>
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-xs text-emerald-400">{stat.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Line chart simulation */}
                <div className="p-6 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                  <h4 className="font-semibold mb-6">Traffic Sources</h4>
                  <div className="space-y-4">
                    {[
                      { source: 'Organic Search', value: 48, color: 'bg-blue-500' },
                      { source: 'Direct', value: 27, color: 'bg-emerald-500' },
                      { source: 'Social Media', value: 15, color: 'bg-amber-500' },
                      { source: 'Referral', value: 10, color: 'bg-purple-500' },
                    ].map((item) => (
                      <div key={item.source}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-[#8a93a8]">{item.source}</span>
                          <span className="font-medium">{item.value}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#1c2333] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                            style={{ width: `${item.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="animate-fade-in space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Team members */}
                  <div className="p-5 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                    <h4 className="font-semibold mb-4">Team Members</h4>
                    <div className="space-y-3">
                      {teamMembers.map((member) => (
                        <div key={member.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-xs font-bold text-white`}>
                            {member.initials}
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">{member.name}</div>
                            <div className="text-xs text-[#5a6378]">{member.role}</div>
                          </div>
                          <span className={`w-2 h-2 rounded-full ${
                            member.status === 'online' ? 'bg-emerald-500' : member.status === 'away' ? 'bg-amber-500' : 'bg-[#3a4358]'
                          }`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="p-5 rounded-xl bg-[#0c1018] border border-[#1c2333]">
                    <h4 className="font-semibold mb-4">Recent Activity</h4>
                    <div className="space-y-4">
                      {activities.map((activity, i) => (
                        <div key={i} className="flex gap-3">
                          <div className={`w-2 h-2 rounded-full ${activity.color} mt-2 flex-shrink-0`} />
                          <div>
                            <p className="text-sm">
                              <span className="font-medium">{activity.user}</span>{' '}
                              <span className="text-[#8a93a8]">{activity.action}</span>
                            </p>
                            <p className="text-xs text-[#5a6378] mt-0.5">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
