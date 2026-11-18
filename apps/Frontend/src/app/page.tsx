import Link from "next/link";

/* ================= ICONS ================= */
const paths: Record<string, string> = {
  home: "M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10",
  users: "M17 20v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 10a4 4 0 100-8 4 4 0 000 8zM21 20v-2a4 4 0 00-3-3.87M16 4.13a4 4 0 010 7.75",
  wallet: "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zM16 12h.01M3 9h18",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  chat: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9zM13.7 21a2 2 0 01-3.4 0",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
  chevron: "M9 18l6-6-6-6",
  arrowUp: "M7 17L17 7M9 7h8v8",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
  check: "M20 6L9 17l-5-5",
  plus: "M12 5v14M5 12h14",
  more: "M12 12h.01M12 6h.01M12 18h.01",
};

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.75 }: { name: string; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

/* ================= DATA ================= */
const nav = [
  { name: "Overview", href: "/", icon: "home", active: true },
  { name: "HR", href: "/hr", icon: "users" },
  { name: "Payroll", href: "/payroll", icon: "wallet" },
  { name: "Performance", href: "/performance", icon: "chart" },
  { name: "PropChat", href: "/propchat", icon: "chat" },
];

const modules = [
  { name: "HR", href: "/hr", icon: "users", description: "Employees & recruitment", count: "248 people" },
  { name: "Payroll", href: "/payroll", icon: "wallet", description: "Salaries & disbursements", count: "May cycle open" },
  { name: "Performance", href: "/performance", icon: "chart", description: "Goals & reviews", count: "12 pending" },
  { name: "PropChat", href: "/propchat", icon: "chat", description: "Team communication", count: "34 new" },
];

const stats = [
  { label: "Total employees", value: "248", delta: "+12", note: "vs last month", icon: "users", spark: [3, 5, 4, 6, 5, 7, 8, 8] },
  { label: "Present today", value: "221", delta: "89%", note: "attendance rate", icon: "check", spark: [5, 6, 7, 6, 8, 7, 9, 8] },
  { label: "On leave", value: "14", delta: "—", note: "today", icon: "calendar", spark: [4, 3, 5, 4, 3, 4, 3, 4] },
  { label: "Open positions", value: "08", delta: "3", note: "closing soon", icon: "briefcase", spark: [2, 3, 3, 4, 5, 6, 7, 8] },
];

const activities = [
  { initials: "AK", name: "Ahmed Khan", action: "joined HR department", time: "10m ago" },
  { initials: "SA", name: "Sara Ali", action: "requested leave", time: "35m ago" },
  { initials: "UM", name: "Usman Malik", action: "completed onboarding", time: "1h ago" },
  { initials: "FZ", name: "Fatima Zahra", action: "updated profile", time: "2h ago" },
];

/* ================= SPARKLINE ================= */
function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  return (
    <div className="flex h-8 items-end gap-0.5">
      {data.map((v, i) => {
        const h = 8 + ((v - min) / range) * 22;
        return (
          <div
            key={i}
            className="w-1 rounded-sm bg-slate-900/80"
            style={{ height: `${h}px` }}
          />
        );
      })}
    </div>
  );
}

/* ================= PAGE ================= */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 md:flex">
      {/* ================= SIDEBAR ================= */}
      <aside className="fixed inset-y-0 hidden w-60 flex-col border-r border-slate-200 bg-white md:flex">
        {/* Brand */}
        <div className="flex h-14 items-center gap-2.5 border-b border-slate-200 px-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-[11px] font-bold text-white">
            H
          </div>
          <div className="leading-none">
            <p className="text-sm font-semibold tracking-tight">HRCORE</p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Workspace
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Workspace
          </p>
          <ul className="space-y-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[13px] font-medium transition ${
                    item.active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon name={item.icon} className="h-4 w-4 shrink-0" />
                  {item.name}
                  {item.active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-slate-900" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-200 p-3">
          <div className="flex items-center gap-2.5 rounded-md p-1.5 hover:bg-slate-50">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
              AD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold">Administrator</p>
              <p className="truncate text-[10px] text-slate-400">HR Manager</p>
            </div>
            <Icon name="more" className="h-3.5 w-3.5 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="min-w-0 flex-1 md:ml-60">
        {/* Topbar */}
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-5 backdrop-blur-md md:px-8">
          <div className="hidden items-center gap-2 text-[13px] text-slate-500 md:flex">
            <span>HRCORE</span>
            <Icon name="chevron" className="h-3 w-3" />
            <span className="font-medium text-slate-900">Overview</span>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2 md:flex-none">
            {/* Search */}
            <div className="relative hidden w-64 lg:block">
              <Icon
                name="search"
                className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search or jump to..."
                className="h-8 w-full rounded-md border border-slate-200 bg-white pl-8 pr-12 text-xs text-slate-700 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-100"
              />
              <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
                ⌘K
              </kbd>
            </div>

            <button
              aria-label="Notifications"
              className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
            >
              <Icon name="bell" className="h-3.5 w-3.5" />
              <span className="absolute right-1.5 top-1.5 h-1 w-1 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <button className="flex h-8 items-center gap-1.5 rounded-md bg-slate-900 px-2.5 text-xs font-medium text-white transition hover:bg-slate-800">
              <Icon name="plus" className="h-3 w-3" />
              New
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-[1200px] px-5 py-8 md:px-8">
          {/* ================= PAGE HEADER ================= */}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">
                Wednesday, 18 November
              </p>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-[28px]">
                Good morning, Administrator
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Here's what's happening across your organization today.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex h-9 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-700 transition hover:border-slate-300">
                <Icon name="calendar" className="h-3.5 w-3.5" />
                Nov 18, 2026
              </button>
              <Link
                href="/hr"
                className="flex h-9 items-center gap-1.5 rounded-md bg-slate-900 px-3.5 text-xs font-medium text-white transition hover:bg-slate-800"
              >
                Explore HR
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <section className="mb-8">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Icon name={s.icon} className="h-3.5 w-3.5" />
                      <p className="text-[11px] font-medium uppercase tracking-wide">
                        {s.label}
                      </p>
                    </div>
                    <Sparkline data={s.spark} />
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <p className="text-2xl font-semibold tracking-tight text-slate-900">
                      {s.value}
                    </p>
                    {s.delta !== "—" && (
                      <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                        <Icon name="arrowUp" className="h-2.5 w-2.5" />
                        {s.delta}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= MODULES + ACTIVITY ================= */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Modules */}
            <section className="lg:col-span-2">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Business modules
                </h2>
                <button className="text-[11px] font-medium text-slate-500 hover:text-slate-900">
                  View all
                </button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {modules.map((m) => (
                  <Link
                    key={m.href}
                    href={m.href}
                    className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-700">
                        <Icon name={m.icon} className="h-4 w-4" />
                      </div>
                      <Icon
                        name="arrowUp"
                        className="h-3.5 w-3.5 rotate-45 text-slate-300 transition group-hover:text-slate-900"
                      />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-slate-900">
                        {m.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-slate-500">
                        {m.description}
                      </p>
                      <p className="mt-2.5 text-[11px] font-medium text-slate-400">
                        {m.count}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Activity */}
            <section>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-slate-900">
                  Recent activity
                </h2>
                <button className="text-[11px] font-medium text-slate-500 hover:text-slate-900">
                  View all
                </button>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white">
                <ul className="divide-y divide-slate-100">
                  {activities.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-start gap-3 p-3 transition hover:bg-slate-50/60"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-700">
                        {a.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] leading-tight text-slate-700">
                          <span className="font-semibold text-slate-900">
                            {a.name}
                          </span>{" "}
                          {a.action}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-400">
                          {a.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-slate-100 p-2">
                  <button className="w-full rounded-md py-1.5 text-[11px] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900">
                    Show more activity
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-[11px] text-slate-400 sm:flex-row">
            <p>© 2026 HRCORE. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-700">Privacy</a>
              <a href="#" className="hover:text-slate-700">Terms</a>
              <a href="#" className="hover:text-slate-700">Status</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}