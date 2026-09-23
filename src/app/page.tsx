"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystemTheme = () => {
      const savedTheme = window.localStorage.getItem("lingoai-theme");
      if (savedTheme) {
        return;
      }

      setIsDark(mediaQuery.matches);
      document.documentElement.dataset.theme = mediaQuery.matches ? "dark" : "light";
    };

    const frame = window.requestAnimationFrame(() => {
      const savedTheme = window.localStorage.getItem("lingoai-theme");
      const shouldUseDark = savedTheme ? savedTheme === "dark" : mediaQuery.matches;

      setIsDark(shouldUseDark);
      document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
    });

    mediaQuery.addEventListener("change", applySystemTheme);

    return () => {
      window.cancelAnimationFrame(frame);
      mediaQuery.removeEventListener("change", applySystemTheme);
    };
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem("lingoai-theme", nextIsDark ? "dark" : "light");
  }

  return (
    <main className="min-h-screen p-4 text-[var(--foreground)] sm:p-6 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1440px] overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(52,72,57,0.08)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4rem)]">
        <aside className="hidden w-[245px] shrink-0 flex-col justify-between border-r border-[var(--line)] bg-[var(--sidebar)] p-6 md:flex">
          <div>
            <div className="mb-12 flex items-center gap-2 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"><span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--night)] text-sm text-[var(--mint)]">L</span>lingo<span className="text-[var(--coral)]">AI</span></div>
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ink-muted)]">Workspace</p>
            <nav className="space-y-1" aria-label="Main navigation">{[["Overview", "01", true], ["AI Tutor", "02", false], ["My lessons", "03", false], ["Messages", "04", false], ["Assignments", "05", false]].map(([label, number, active]) => <a key={String(label)} href="#" className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${active ? "bg-white font-semibold shadow-sm" : "text-[var(--ink-muted)] hover:bg-white/70 hover:text-[var(--foreground)]"}`}><span>{label}</span><span className="text-[10px] opacity-50">{number}</span></a>)}</nav>
          </div>
          <div><div className="mb-4 rounded-2xl bg-[var(--night)] p-4 text-white"><p className="mb-8 text-xs text-[#b6c8bd]">Weekly progress</p><div className="flex items-end justify-between"><strong className="font-[family-name:var(--font-space-grotesk)] text-3xl">68%</strong><span className="mb-1 text-xs text-[#b6c8bd]">+12% this week</span></div><div className="mt-3 h-1.5 rounded-full bg-[var(--progress-track)]"><div className="h-full w-[68%] rounded-full bg-[var(--mint)]" /></div></div><a href="#" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-white/70"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e4c8b6] text-xs font-bold">AS</span><span>Alex Smith</span><span className="ml-auto text-xs">...</span></a></div>
        </aside>
        <section className="min-w-0 flex-1">
          <header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-5 sm:px-8"><div className="flex items-center gap-3 md:hidden"><span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[var(--night)] text-sm text-[var(--mint)]">L</span><span className="font-[family-name:var(--font-space-grotesk)] font-bold">lingo<span className="text-[var(--coral)]">AI</span></span></div><div className="hidden text-sm text-[var(--ink-muted)] md:block">Tuesday, September 23, 2026</div><div className="flex items-center gap-3"><button type="button" aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={isDark} title={isDark ? "Light theme" : "Dark theme"} onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm transition-colors hover:bg-[var(--card)]">{isDark ? "sun" : "moon"}</button><button aria-label="Notifications" className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-sm hover:bg-[var(--card)]">o<span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--coral)]" /></button><button className="rounded-full bg-[var(--night)] px-4 py-2 text-xs font-semibold text-white hover:bg-[#2c3d37]">Upgrade plan</button></div></header>
          <div className="p-5 sm:p-8 lg:p-10"><div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-semibold text-[var(--coral)]">Good morning, Alex</p><h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl">Keep your <span className="italic text-[#809c83]">momentum.</span></h1></div><a href="#" className="text-sm font-semibold underline decoration-[var(--coral)] decoration-2 underline-offset-4">View learning plan <span aria-hidden="true">-&gt;</span></a></div>
            <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]"><article className="relative min-h-[250px] overflow-hidden rounded-2xl bg-[var(--practice-surface)] p-6 sm:p-8"><div className="relative z-10 max-w-sm"><span className="rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--practice-badge)]">Continue practice</span><h2 className="mt-8 font-[family-name:var(--font-space-grotesk)] text-3xl font-medium leading-tight tracking-[-0.04em]">At the cafe:<br />ordering with confidence</h2><p className="mt-3 max-w-xs text-sm text-[var(--practice-text)]">A 12-minute roleplay for your B1 speaking goals.</p><button type="button" onClick={() => setSessionStarted(true)} className="mt-7 rounded-full bg-[var(--night)] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">{sessionStarted ? "Session started" : "Resume session"} <span className="ml-2">-&gt;</span></button></div><div className="absolute -bottom-14 -right-5 h-48 w-48 rounded-full border-[18px] border-white/35" /><div className="absolute -bottom-7 right-[-30px] h-32 w-32 rounded-full border-[12px] border-[var(--practice-border)]" /></article><article className="rounded-2xl bg-[var(--night)] p-6 text-white sm:p-8"><div className="flex items-start justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a7bbb0]">Lesson balance</span><span className="text-lg text-[var(--mint)]">+</span></div><div className="mt-12 flex items-end gap-2"><strong className="font-[family-name:var(--font-space-grotesk)] text-5xl font-medium tracking-[-0.08em]">8</strong><span className="mb-2 text-sm text-[#a7bbb0]">of 12 lessons</span></div><div className="mt-5 h-1.5 rounded-full bg-[var(--balance-track)]"><div className="h-full w-2/3 rounded-full bg-[var(--mint)]" /></div><a href="#" className="mt-5 inline-block text-xs font-semibold text-[var(--mint)] underline underline-offset-4">Manage subscription</a></article></div>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.86fr]"><section><div className="mb-4 flex items-center justify-between"><h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-[-0.03em]">Your next up</h2><a href="#" className="text-xs font-semibold text-[var(--ink-muted)]">See all</a></div><div className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--card)]"><div className="flex items-center gap-4 p-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffe4d8] text-sm font-bold text-[#b55b48]">01</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Past tenses: telling a story</p><p className="mt-1 text-xs text-[var(--ink-muted)]">Grammar · 15 min</p></div><span className="text-xs text-[var(--ink-muted)]">Today</span></div><div className="flex items-center gap-4 p-4"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e5e5f9] text-sm font-bold text-[#686aa0]">02</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Vocabulary checkpoint</p><p className="mt-1 text-xs text-[var(--ink-muted)]">Review · 8 min</p></div><span className="text-xs text-[var(--ink-muted)]">Tomorrow</span></div></div></section><section><div className="mb-4 flex items-center justify-between"><h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-medium tracking-[-0.03em]">Ask your AI tutor</h2><span className="h-2 w-2 rounded-full bg-[#76c477] shadow-[0_0_0_4px_#e0f5df]" /></div><div className="rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5"><p className="max-w-sm text-sm leading-6 text-[var(--ink-muted)]">&ldquo;I want to sound more natural when I talk about my weekend.&rdquo;</p><div className="mt-6 flex gap-2"><input aria-label="Ask your AI tutor" placeholder="Try a prompt..." className="min-w-0 flex-1 rounded-xl border border-[var(--line)] bg-[var(--input)] px-3 py-2.5 text-sm outline-none placeholder:text-[#a1aaa4] focus:border-[#9bc195]" /><button aria-label="Send prompt" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--coral)] text-white hover:bg-[#e86750]">-&gt;</button></div></div></section></div>
          </div>
        </section>
      </div>
    </main>
  );
}
