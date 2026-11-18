'use client';

import { useState } from 'react';
import PortalShell from '../../../../components/PortalShell';
import { ActionButton, PageIntro, SectionCard } from '../../../../components/PortalUI';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({ announcements: true, assignments: true, leave: true, email: false });
  const toggle = (key) => setSettings((current) => ({ ...current, [key]: !current[key] }));
  return <PortalShell role="student" eyebrow="Account" title="Settings"><PageIntro eyebrow="Preferences" title="Choose how the portal keeps you informed." description="These settings are local until the school notification service is connected." /><SectionCard title="Notifications" description="You can change these preferences at any time."><div className="divide-y divide-slate-100">{[['announcements','School announcements','Important notices and schedule changes'],['assignments','Assignment reminders','Due dates and teacher feedback'],['leave','Leave request updates','Warden decisions and gate instructions'],['email','Email summaries','A weekly summary sent to your registered email']].map(([key,title,description]) => <div key={key} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"><div><p className="text-sm font-bold text-slate-900">{title}</p><p className="mt-1 text-xs text-slate-500">{description}</p></div><button onClick={() => toggle(key)} className={`relative h-6 w-11 rounded-full transition ${settings[key] ? 'bg-emerald-600' : 'bg-slate-300'}`} aria-label={`Toggle ${title}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${settings[key] ? 'left-6' : 'left-1'}`} /></button></div>)}</div><div className="mt-6 flex items-center gap-3">{saved && <span className="text-xs font-semibold text-emerald-700">Preferences saved for this session.</span>}<ActionButton onClick={() => setSaved(true)} tone="primary">Save preferences</ActionButton></div></SectionCard></PortalShell>;
}
