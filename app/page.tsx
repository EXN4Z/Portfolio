"use client";

import Image from "next/image";
import React from "react";
import { SiWhatsapp } from "react-icons/si";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiInstagram,
} from "react-icons/si";
import { FaKey, FaServer, FaDatabase, FaCloudUploadAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type NavItem = { label: string; href: string };
type Project = {
  title: string;
  desc: string;
  tags: string[];
  cover?: string;
  link?: string;
  repo?: string;
};
type SkillGroup = { title: string; items: string[] };
type Experience = { role: string; place: string; time: string; points: string[] };

const profile = {
  name: "Febriyan Arbi Utama",
  headline: "Junior Web Developer (SMK Texmaco)",
  status: "Open for internship",
  email: "ajafebri807@gmail.com",
  whatsapp: "+6282128637082",
  github: "github.com/ExN4Z",
  instagram: "instagram.com/pebrian.deh",
  heroKicker: "JUNIOR DEVELOPER",
  heroTitle: "Build web apps with responsive UI and backend",
  heroDesc:
    "Saya membangun aplikasi web end-to-end untuk kebutuhan nyata: UI rapi, API sederhana tapi clean, database terstruktur, dan deploy siap dipakai.",
  focusChips: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
  stats: [
    { label: "Projects", value: "1" },
    { label: "Level", value: "SMK Kelas 2" },
    { label: "Focus", value: "Full Stack" },
  ],
};

const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const projects: Project[] = [
  {
    title: "Comic/Manga Reader",
    desc: "Aplikasi baca komik: manajemen komik → chapter → pages, upload gambar ke storage, UI reader cepat.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Storage", "CRUD", "Auth", "DB"],
    cover: "/images/project1.png",
    link: "https://flux-ink-verse.vercel.app/",
    repo: "https://github.com/EXN4Z/FluxInk-Verse",
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend (Basic–Intermediate)",
    items: ["JavaScript (basic)", "React (basic)", "Next.js (basic)", "Tailwind CSS (basic)"],
  },
  {
    title: "Backend / Database (Basic)",
    items: ["Node.js (basic)", "REST API concept", "Supabase (basic)", "Auth (basic)", "PostgreSQL/SQL (basic)"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Vercel Deploy (basic)", "Postman (basic)", "Figma (basic)"],
  },
];

const experiences: Experience[] = [
  {
    role: "Student Full Stack Developer (Personal Projects)",
    place: "Remote",
    time: "2026 — Present",
    points: [
      "Membangun web app end-to-end: UI → API → database → deploy.",
      "Implement fitur umum: auth basic, CRUD, upload file, pagination, loading states.",
      "Merapikan struktur folder, reusable components, dan menjaga clean code.",
    ],
  },
  {
    role: "Team Project (School / RPL)",
    place: "SMK",
    time: "2025 — Present",
    points: [
      "Kolaborasi kerja tim: pembagian tugas, merge via Git, dan dokumentasi fitur.",
      "Membuat fitur berbasis requirement (contoh: dashboard/admin, laporan, filter data).",
      "Belajar debugging, memperbaiki bug, dan meningkatkan UX (form validation basic).",
    ],
  },
];

function cn(...classes: (string | null | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function getIcon(label: string): React.ReactNode | null {
  const l = label.toLowerCase();
  const cls = (c: string) => `h-4 w-4 ${c}`;

  if (l.includes("next")) return <SiNextdotjs className={cls("text-black dark:text-white")} />;
  if (l.includes("react")) return <SiReact className={cls("text-[#61DAFB]")} />;
  if (l.includes("tailwind")) return <SiTailwindcss className={cls("text-[#38BDF8]")} />;
  if (l.includes("javascript")) return <SiJavascript className={cls("text-[#F7DF1E]")} />;

  if (l.includes("node")) return <SiNodedotjs className={cls("text-[#339933]")} />;
  if (l.includes("supabase")) return <SiSupabase className={cls("text-[#3ECF8E]")} />;
  if (l.includes("postgres")) return <SiPostgresql className={cls("text-[#4169E1]")} />;

  if (l.includes("sql") || l.includes("db")) return <FaDatabase className={cls("text-[#8B5CF6]")} />;
  if (l.includes("api")) return <FaServer className={cls("text-[#60A5FA]")} />;
  if (l.includes("auth")) return <FaKey className={cls("text-[#F59E0B]")} />;
  if (l.includes("storage") || l.includes("upload")) return <FaCloudUploadAlt className={cls("text-[#22C55E]")} />;

  if (l.includes("git")) return <SiGithub className={cls("text-[#181717] dark:text-white")} />;
  if (l.includes("vercel")) return <SiVercel className={cls("text-black dark:text-white")} />;
  if (l.includes("postman")) return <SiPostman className={cls("text-[#FF6C37]")} />;
  if (l.includes("figma")) return <SiFigma className={cls("text-[#A259FF]")} />;

  if (l.includes("instagram")) return <SiInstagram className={cls("text-[#E1306C]")} />;

  if (l.includes("email") || l.includes("gmail") || l.includes("mail"))
    return <MdEmail className={cls("text-[#EA4335]")} />;

  return null;
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300 backdrop-blur will-change-transform",
        "border-black/10 bg-gradient-to-b from-white via-white to-zinc-50/70",
        "dark:border-white/10 dark:bg-gradient-to-b dark:from-zinc-900/70 dark:via-zinc-900/35 dark:to-zinc-950/70",
        "dark:shadow-[0_18px_55px_rgba(0,0,0,0.45)]",
        "hover:-translate-y-[2px] hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
        className
      )}
    >
      {children}
    </div>
  );
}

function normalizeUrl(url: string) {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) return url;
  return `https://${url}`;
}

function Chip({
  children,
  icon,
  href,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode | null;
  href?: string;
}) {
  const className =
    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
    "border-black/10 bg-gradient-to-r from-black/5 to-black/10 text-black/70 " +
    "dark:border-white/10 dark:bg-gradient-to-r dark:from-white/5 dark:to-white/10 dark:text-zinc-200 " +
    "hover:opacity-90";

  const content = (
    <>
      {icon ? <span className="opacity-95">{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if (href) {
    const finalHref = normalizeUrl(href);
    const isExternal = finalHref.startsWith("http");

    return (
      <a
        href={finalHref}
        className={className}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}

function SectionTitle({
  kicker,
  title,
  desc,
  align = "left",
}: {
  kicker?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-6", align === "center" && "text-center")}>
      {kicker ? (
        <p className="text-xs font-semibold tracking-widest text-black/50 dark:text-zinc-400">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{title}</h2>
      {desc ? <p className="mt-2 text-sm text-black/60 dark:text-zinc-300">{desc}</p> : null}
    </div>
  );
}

function useInView(options?: IntersectionObserverInit) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -30% 0px", ...options }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold]);

  return { ref, inView };
}

function RevealSection({
  id,
  className,
  children,
  onActive,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
  onActive?: (href: string) => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.25, rootMargin: "0px 0px -35% 0px" });
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    if (inView) {
      setShown(true);
      onActive?.(`#${id}`);
    }
  }, [inView, id, onActive]);

  return (
    <section
      id={id}
      ref={(node) => {
        ref.current = node as HTMLElement | null;
      }}
      className={cn(
        "scroll-mt-24",
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out will-change-transform",
        shown ? "translate-y-0 opacity-100" : "motion-safe:translate-y-10 motion-safe:opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}

function StaggerWrap({
  show,
  index,
  children,
  className,
  step = 90,
}: {
  show: boolean;
  index: number;
  children: React.ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <div
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out will-change-transform",
        show ? "translate-y-0 opacity-100" : "motion-safe:translate-y-8 motion-safe:opacity-0",
        className
      )}
      style={{
        transitionDelay: `${Math.min(index * step, 700)}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [sending, setSending] = React.useState(false);
  const [status, setStatus] = React.useState<null | "success" | "error">(null);

  const [active, setActive] = React.useState<string>("#home");
  const handleActive = React.useCallback((href: string) => {
    setActive(href);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    setActive(href);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.replaceState(null, "", href);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  const projectsGrid = useInView({ threshold: 0.2, rootMargin: "0px 0px -25% 0px" });
  const skillsGrid = useInView({ threshold: 0.2, rootMargin: "0px 0px -25% 0px" });
  const expGrid = useInView({ threshold: 0.2, rootMargin: "0px 0px -25% 0px" });
  const contactGrid = useInView({ threshold: 0.2, rootMargin: "0px 0px -25% 0px" });

  return (
    <main className="relative min-h-screen text-black transition-colors duration-300 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-950 dark:to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>

      <header
        className="sticky top-0 z-30 border-b border-black/10 bg-white/50 backdrop-blur-xl transition-colors
                   dark:border-white/10 dark:bg-zinc-950/35"
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide">{profile.name}</p>
                <p className="text-[11px] text-black/50 dark:text-zinc-400">{profile.headline}</p>
              </div>
            </div>

            <nav className="hidden md:flex ml-80 gap-6 text-sm text-black/70 dark:text-zinc-300">
              {nav.map((n) => {
                const isActive = active === n.href;
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={(e) => handleNavClick(e, n.href)}
                    className={cn(
                      "relative hover:text-black dark:hover:text-white transition-colors",
                      isActive && "text-black dark:text-white font-semibold"
                    )}
                  >
                    {n.label}
                    <span
                      className={cn(
                        "absolute -bottom-2 left-0 h-[2px] w-full rounded-full transition-opacity",
                        "bg-black/80 dark:bg-white/80",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="rounded-xl border px-4 py-2 text-sm font-semibold transition-colors
                           border-black/15 bg-gradient-to-b from-white to-zinc-100 text-black hover:from-black hover:to-black hover:text-white
                           dark:border-white/15 dark:bg-gradient-to-b dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100
                           dark:hover:from-white dark:hover:to-white dark:hover:text-black"
              >
                Contact
              </a>
            </div>
          </div>
        </Container>
      </header>

      <RevealSection id="home" onActive={handleActive} className="py-10">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <StaggerWrap show={true} index={0} className="md:col-span-7">
              <Card className="p-8">
                <p className="text-xs font-semibold text-black/50 dark:text-zinc-400">{profile.heroKicker}</p>
                <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight whitespace-pre-line">
                  {profile.heroTitle}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-black/60 dark:text-zinc-300">{profile.heroDesc}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    onClick={(e) => handleNavClick(e, "#projects")}
                    className="rounded-xl px-5 py-3 text-sm font-semibold transition-opacity
                               bg-gradient-to-b from-black to-zinc-800 text-white hover:opacity-90
                               dark:from-white dark:to-zinc-200 dark:text-black"
                  >
                    View Projects
                  </a>
                  <a
                    href="#skills"
                    onClick={(e) => handleNavClick(e, "#skills")}
                    className="rounded-xl border px-5 py-3 text-sm font-semibold transition-colors
                               border-black/15 bg-gradient-to-b from-white to-zinc-100 text-black hover:from-black hover:to-black hover:text-white
                               dark:border-white/15 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100
                               dark:hover:from-white dark:hover:to-white dark:hover:text-black"
                  >
                    Tech Stack
                  </a>
                </div>
              </Card>
            </StaggerWrap>

            <StaggerWrap show={true} index={1} className="md:col-span-5">
              <Card className="overflow-hidden p-0">
                <div className="relative h-[340px] w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5">
                  <Image src="/images/foto.png" alt="Profile" fill className="max-w-60 mx-auto" priority />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.25),transparent_55%)]" />
                  <div
                    className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-xs text-zinc-100 backdrop-blur
                               dark:border-white/10 dark:bg-white/10 dark:text-zinc-100"
                  >
                    <p className="font-semibold">Availab le</p>
                    <p>{profile.status}</p>
                  </div>
                </div>
              </Card>
            </StaggerWrap>
          </div>
        </Container>
      </RevealSection>

      <RevealSection id="about" onActive={handleActive} className="py-10">
        <Container>
          <Card className="p-8">
            <SectionTitle
              kicker="ABOUT"
              title="About Me"
              desc="Versi junior (SMK kelas 2): jujur, jelas, dan fokus ke hal yang sudah pernah dikerjakan."
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="md:col-span-8 space-y-4 text-sm leading-6 text-black/70 dark:text-zinc-200">
                <p>
                  Halo! Saya <span className="font-semibold text-black dark:text-white">{profile.name}</span>, siswa SMK
                  (kelas 2) yang lagi fokus belajar fullstack web development. Saya suka bikin aplikasi yang beneran
                  jalan: UI rapi, data nyambung ke database, dan fitur penting bisa dipakai.
                </p>

                <p>
                  Saat ini saya nyaman pakai{" "}
                  <span className="font-semibold text-black dark:text-white">Next.js + Tailwind</span> untuk frontend,
                  dan <span className="font-semibold text-black dark:text-white">Supabase (PostgreSQL)</span> untuk
                  backend/database. Saya belum pro, tapi saya terbiasa baca dokumentasi, nyoba sampai jalan, dan fixing
                  bug sampai beres.
                </p>

                <p>
                  Project yang pernah saya buat contohnya: aplikasi baca komik (komik → chapter → pages) dengan upload
                  gambar ke storage, dan auth basic, dan CRUD admin. Dari situ saya belajar struktur data, relasi tabel,
                  dan bikin UI yang tetap enak dipakai.
                </p>

                <p>
                  Untuk magang, saya pengen ikut ngerjain task nyata: benerin bug, bikin page/komponen, nyambungin form
                  ke database, atau bantu nambah fitur yang sudah ada. Saya siap menerima arahan, catat feedback, dan
                  improve dari revisi.
                </p>
              </div>

              <div className="md:col-span-4 space-y-4">
                <div
                  className="rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-black/10 p-5
                             dark:border-white/10 dark:from-white/5 dark:to-white/10"
                >
                  <p className="text-sm font-semibold">What I can do now</p>
                  <ul className="mt-3 space-y-2 text-sm text-black/70 dark:text-zinc-200">
                    <li>• Bikin UI page + komponen sederhana</li>
                    <li>• CRUD basic (tambah/edit/hapus)</li>
                    <li>• Auth basic (login/register) kalau ada template</li>
                    <li>• Upload gambar ke storage + simpan link ke DB</li>
                    <li>• Pagination / loading state sederhana</li>
                  </ul>
                </div>

                <div
                  className="rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-black/10 p-5
                             dark:border-white/10 dark:from-white/5 dark:to-white/10"
                >
                  <p className="text-sm font-semibold">Currently learning</p>
                  <ul className="mt-3 space-y-2 text-sm text-black/70 dark:text-zinc-200">
                    <li>• Struktur folder & clean component</li>
                    <li>• SQL query lebih rapi (join, filter)</li>
                    <li>• Error handling & validation basic</li>
                    <li>• Deploy & env config biar aman</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {profile.stats.map((s, i) => (
                <StaggerWrap key={s.label} show={true} index={i} step={70}>
                  <div
                    className="rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-black/10 p-4
                               dark:border-white/10 dark:from-white/5 dark:to-white/10"
                  >
                    <p className="text-xs text-black/50 dark:text-zinc-400">{s.label}</p>
                    <p className="mt-1 text-lg font-extrabold">{s.value}</p>
                  </div>
                </StaggerWrap>
              ))}
            </div>
          </Card>
        </Container>
      </RevealSection>

      <RevealSection id="projects" onActive={handleActive} className="py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle kicker="WORK" title="Featured Projects" desc="Project yang saya buat." />
          </div>

          <div
            ref={(node) => {
              projectsGrid.ref.current = node as HTMLElement | null;
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {projects.map((p, i) => (
              <StaggerWrap key={p.title} show={projectsGrid.inView} index={i} step={110}>
                <Card className="overflow-hidden p-0">
                  <div className="relative h-40 w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5">
                    {p.cover ? <Image src={p.cover} alt={p.title} fill className="object-cover" /> : null}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_60%)]" />
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-semibold">{p.title}</p>
                    <p className="mt-2 text-sm leading-6 text-black/60 dark:text-zinc-300">{p.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Chip key={t} icon={getIcon(t)}>
                          {t}
                        </Chip>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <a
                        href={p.link ?? "https://flux-ink-verse.vercel.app/"}
                        className="text-sm font-semibold text-black hover:opacity-80 dark:text-zinc-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={p.repo ?? "https://github.com/EXN4Z/FluxInk-Verse"}
                        className="text-sm font-semibold text-black hover:opacity-80 dark:text-zinc-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repo
                      </a>
                    </div>
                  </div>
                </Card>
              </StaggerWrap>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection id="skills" onActive={handleActive} className="py-10">
        <Container>
          <SectionTitle
            kicker="STACK"
            title="Skills & Tech Stack"
            desc="Skill yang saya pakai sehari-hari (saya masih sering pakai AI/Google untuk bantu debugging)."
            align="center"
          />

          <div
            ref={(node) => {
              skillsGrid.ref.current = node as HTMLElement | null;
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {skillGroups.map((g, i) => (
              <StaggerWrap key={g.title} show={skillsGrid.inView} index={i} step={110}>
                <Card className="p-6">
                  <p className="text-sm font-semibold">{g.title}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <Chip key={it} icon={getIcon(it)}>
                        {it}
                      </Chip>
                    ))}
                  </div>
                </Card>
              </StaggerWrap>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection id="experience" onActive={handleActive} className="py-10">
        <Container>
          <SectionTitle kicker="CAREER" title="Experience" desc="Pengalaman belajar dan proyek yang pernah saya kerjakan." />

          <div
            ref={(node) => {
              expGrid.ref.current = node as HTMLElement | null;
            }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {experiences.map((e, i) => (
              <StaggerWrap key={e.role} show={expGrid.inView} index={i} step={120}>
                <Card className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{e.role}</p>
                      <p className="mt-1 text-xs text-black/50 dark:text-zinc-400">{e.place}</p>
                    </div>
                    <span
                      className="rounded-full border border-black/10 bg-gradient-to-b from-black/5 to-black/10 px-3 py-1 text-[11px] font-semibold text-black/60
                                 dark:border-white/10 dark:from-white/5 dark:to-white/10 dark:text-zinc-300"
                    >
                      {e.time}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70 dark:text-zinc-200">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Card>
              </StaggerWrap>
            ))}
          </div>
        </Container>
      </RevealSection>

      <RevealSection id="contact" onActive={handleActive} className="py-10">
        <Container>
          <SectionTitle kicker="CONTACT" title="Get In Touch" desc="Kontak untuk bertanya / menghubungi saya." />

          <div
            ref={(node) => {
              contactGrid.ref.current = node as HTMLElement | null;
            }}
            className="grid grid-cols-1 gap-6 md:grid-cols-12"
          >
            <StaggerWrap show={contactGrid.inView} index={0} className="md:col-span-5">
              <Card className="p-7">
                <p className="text-sm font-semibold">Contact Info</p>

                <div className="mt-4 space-y-3 text-sm text-black/70 dark:text-zinc-200">
                  <p className="flex items-center gap-2">
                    <MdEmail className="h-4 w-4 text-[#EA4335]" />
                    <span>Email: {profile.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <SiWhatsapp className="h-4 w-4 text-[#25D366]" />
                    <span>WhatsApp: {profile.whatsapp}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <SiGithub className="h-4 w-4 text-[#181717] dark:text-white" />
                    <span>GitHub: {profile.github}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <SiInstagram className="h-4 w-4 text-[#E1306C]" />
                    <span>Instagram: {profile.instagram}</span>
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Chip icon={getIcon("Email")} href={`mailto:${profile.email}`}>
                    Email
                  </Chip>
                  <Chip icon={getIcon("Git & GitHub")} href={profile.github}>
                    GitHub
                  </Chip>
                  <Chip icon={getIcon("Instagram")} href={profile.instagram}>
                    Instagram
                  </Chip>
                </div>
              </Card>
            </StaggerWrap>

            <StaggerWrap show={contactGrid.inView} index={1} className="md:col-span-7" step={140}>
              <Card className="p-7">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-black/60 dark:text-zinc-300">Name</label>
                    <input
                      name="name"
                      className="mt-2 w-full rounded-xl border border-black/15 bg-gradient-to-b from-white to-zinc-50 px-4 py-3 text-sm outline-none
                                 dark:border-white/15 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100"
                      placeholder="Nama kamu"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-black/60 dark:text-zinc-300">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-black/15 bg-gradient-to-b from-white to-zinc-50 px-4 py-3 text-sm outline-none
                                 dark:border-white/15 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100"
                      placeholder="contoh@gmail.com"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs font-semibold text-black/60 dark:text-zinc-300">Message</label>
                    <textarea
                      name="message"
                      className="mt-2 h-32 w-full rounded-xl border border-black/15 bg-gradient-to-b from-white to-zinc-50 px-4 py-3 text-sm outline-none
                                 dark:border-white/15 dark:from-zinc-950 dark:to-zinc-900 dark:text-zinc-100"
                      placeholder="Ajukan pertanyaan atau permintaan..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    {status === "success" && (
                      <p className="mb-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-200">
                        Pesan berhasil dikirim, Mohon bersabar menunggu balasan.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="mb-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-200">
                        Gagal mengirim pesan. Coba lagi.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full rounded-xl px-5 py-3 text-sm font-semibold transition-opacity
                                 bg-gradient-to-b from-black to-zinc-800 text-white hover:opacity-90 disabled:opacity-60
                                 dark:from-white dark:to-zinc-200 dark:text-black"
                    >
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </Card>
            </StaggerWrap>
          </div>
        </Container>
      </RevealSection>

      <footer className="mt-10 border-t border-black/10 bg-gradient-to-b from-zinc-200/70 to-zinc-100 py-10 transition-colors dark:border-white/10 dark:from-zinc-950 dark:to-black">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tracking-wide">{profile.name}</span>
              </div>

              <p className="mt-3 max-w-sm text-sm text-black/60 dark:text-zinc-300">
                Portfolio pribadi Febriyan Arbi Utama - Junior Web Developer (SMK Texmaco).
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <Chip icon={getIcon("Email")} href={`mailto:${profile.email}`}>
                  Email
                </Chip>

                <Chip icon={getIcon("Git & GitHub")} href={profile.github}>
                  GitHub
                </Chip>

                <Chip icon={getIcon("Instagram")} href={profile.instagram}>
                  Instagram
                </Chip>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold">Menu</p>
                <ul className="mt-3 space-y-2 text-sm text-black/60 dark:text-zinc-300">
                  {nav.map((n) => (
                    <li key={n.href}>
                      <a href={n.href} onClick={(e) => handleNavClick(e, n.href)} className="hover:text-black dark:hover:text-white">
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold">Focus</p>
                <ul className="mt-3 space-y-2 text-sm text-black/60 dark:text-zinc-300">
                  {["Web Apps", "REST API", "Database", "Auth & CRUD"].map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-black/50 dark:text-zinc-400">
            © {new Date().getFullYear()} — {profile.name}. All rights reserved.
          </div>
        </Container>
      </footer>
    </main>
  );
}