import { createFileRoute } from '@tanstack/react-router'
import { Fragment, useEffect, useState, type CSSProperties, type ReactNode } from 'react'
import {
  Zap,
  Target,
  BarChart2,
  Users,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ArrowDown,
  Lightbulb,
  Globe,
  TrendingUp,
  Award,
  BookOpen,
  MessageSquare,
  Leaf,
  Shield,
  Star,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Heart,
  UserCheck,
  Crown,
  Rocket,
  Route as RouteIcon,
  Funnel,
  Search,
  RefreshCw,
  Network,
  CalendarDays,
  UsersRound,
  Handshake,
  BadgeDollarSign,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: GreentechPage,
})

// ─── Scroll Reveal Hook ────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Sticky Nav ────────────────────────────────────────────────────────
function StickyNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const getNavGroup = (sectionId: string) => {
    if (sectionId === 'home') return 'home'
    if (sectionId === 'intro') return 'about'
    if (sectionId === 'challenge' || sectionId === 'competitors') return 'analysis'
    if (sectionId === 'survey' || sectionId === 'conversion') return 'insights'
    if (sectionId === 'marketing' || sectionId === 'membership') return 'strategy'
    if (sectionId === 'conclusion' || sectionId === 'recommendations') return 'final'
    return 'home'
  }

  useEffect(() => {
    const sections = [
      'home', 'intro', 'challenge', 'marketing',
      'competitors', 'survey', 'conversion', 'membership',
      'conclusion', 'recommendations'
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(getNavGroup(entry.target.id))
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#intro', label: 'About' },
    { href: '#challenge', label: 'Analysis' },
    { href: '#survey', label: 'Insights' },
    { href: '#membership', label: 'Strategy' },
    { href: '#conclusion', label: 'Final' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        activeSection === 'home'
          ? 'pointer-events-none opacity-0 -translate-y-3'
          : 'pointer-events-auto opacity-100 translate-y-0 glass-nav-scrolled shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center justify-center gap-2 w-full">
            {navLinks.map((link) => {
              const id = link.label.toLowerCase()
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-1.5 py-0.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    activeSection === id
                      ? 'text-white'
                      : 'text-gray-600 hover:text-teal-700'
                  }`}
                  style={activeSection === id ? { background: '#0D7377' } : {}}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 rounded-lg"
            style={{ color: '#0D7377' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden border-t bg-white px-4 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
                style={{ color: '#0D7377' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// ─── Hero Section ──────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}background.jpg)`
  }}
/>

{/* Dark overlay */}
<div className="absolute inset-0 bg-black/72" />
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full opacity-10" style={{ background: 'rgba(255,255,255,0.3)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 left-[6%] w-96 h-96 rounded-full opacity-10" style={{ background: 'rgba(255,255,255,0.2)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
        {/* Logo mark */}
        <div className="pulse-logo inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 overflow-hidden">
         <img
  src={`${import.meta.env.BASE_URL}greentech-logo.png`}
  alt="Greentech Alliance logo"
  className="w-full h-full object-contain"
/>
        </div>

        <a
          href="#matilha-divider"
          className="tag tag-teal mb-2 inline-flex mx-auto"
          style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <Leaf size={12} /> MATILHA GROUP
        </a>

        <h1
          className="font-extrabold text-white mb-6 leading-tight mt-6"
          style={{ textShadow: '0 6px 24px rgba(0,0,0,0.38)' }}
        >
  <span className="block text-4xl sm:text-5xl md:text-6xl">
    Greentech Alliance
  </span>
  <span
    className="block text-base sm:text-lg md:text-xl font-medium mt-3"
    style={{ color: '#FFD95A', fontFamily: "'Azeret Mono', 'Nunito', system-ui, sans-serif", letterSpacing: '-0.015em', textShadow: '0 4px 18px rgba(0,0,0,0.32)' }}
  >
    Building the Future of Climate-Tech Communities
  </span>
</h1>

<p
  className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
  style={{ color: 'rgba(255,255,255,0.92)', textShadow: '0 4px 18px rgba(0,0,0,0.28)' }}
>
  A strategic capstone exploring how Greentech Alliance can evolve from a fast-growing network into a structured, high-value global platform—driven by clear positioning, member insight, and scalable growth.
</p>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { href: '#intro', label: 'Explore the Project', primary: true },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
              style={
                btn.primary
                  ? { background: '#F4D03F', color: '#1A2332', boxShadow: '0 4px 20px rgba(244,208,63,0.4)' }
                  : { background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }
              }
            >
              {btn.label}
            </a>
          ))}
        </div>

        {/* Preview sections */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {[
            {
              icon: <Target size={18} />,
              title: 'About & Challenge',
              body: 'Greentech Alliance is a global climate-tech community navigating the shift from informal growth to structured scale.',
              href: '#intro',
              cta: 'Learn more',
              color: 'white',
              bodyColor: 'rgba(255,255,255,0.88)',
            },
            {
              icon: <BarChart2 size={18} />,
              title: 'Our Findings',
              body: 'Our research revealed a clear gap:\nvalue exists, but it is not yet clearly defined or consistently communicated to members.',
              href: '#challenge',
              cta: 'View Analysis & Insights',
              color: 'white',
              bodyColor: 'rgba(255,255,255,0.88)',
            },
            {
              icon: <Lightbulb size={18} />,
              title: 'Our Strategy',
              body: 'A value-driven approach focused on stronger positioning, deeper engagement, and a sustainable membership model.',
              href: '#membership',
              cta: 'View Strategy',
              color: 'white',
              bodyColor: 'rgba(255,255,255,0.88)',
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="card-hover rounded-[24px] p-5 text-left flex flex-col h-full min-h-[205px]"
              style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)' }}
            >
              <div className="flex items-center gap-2 mb-2.5" style={{ color: item.color }}>
                <span>{item.icon}</span>
                <h3 className="text-lg" style={{ color: item.color }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm mb-4 flex-1 whitespace-pre-line" style={{ color: item.bodyColor, lineHeight: '1.65' }}>
                {item.body}
              </p>
              <span className="inline-flex items-center gap-2 text-sm mt-auto" style={{ color: item.color }}>
                {item.cta}
                <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 animate-bounce text-center flex flex-col items-center"
      >
        <p className="mb-1 text-[10px] uppercase" style={{ letterSpacing: '0.18em', fontFamily: 'Space Mono, monospace' }}>
          Scroll Down
        </p>
        <ChevronDown size={24} />
      </a>
    </section>
  )
}

// ─── Section Header Helper ─────────────────────────────────────────────
function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  const isGreentechTitle = title === 'GREENTECH ALLIANCE'

  return (
    <div className={`text-center reveal ${isGreentechTitle ? 'mb-0 pt-0' : 'mb-12'}`}>
      <span className="tag tag-teal mb-3 inline-flex">{tag}</span>
      {title ? (
        <h2
          className={isGreentechTitle ? 'text-4xl sm:text-5xl md:text-6xl font-extrabold mb-0' : 'text-3xl md:text-4xl font-extrabold mb-4'}
          style={{ color: isGreentechTitle ? '#0D7377' : '#1A2332' }}
        >
          {title}
        </h2>
      ) : null}
      {subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: '#718096' }}>{subtitle}</p>}
    </div>
  )
}

// ─── Bridge Text ───────────────────────────────────────────────────────
function BridgeText({ children }: { children: ReactNode }) {
  return (
    <div className="bridge-text reveal max-w-3xl mx-auto mt-12">
      <p>{children}</p>
    </div>
  )
}

// ─── Intro Section ─────────────────────────────────────────────────────
function IntroSection() {
  const teamMembers = [
    {
      name: 'Aasiyah Rasheed',
      role: 'MARKETING LEAD',
      bio: 'Major in Marketing. Value proposition development, marketing strategy design, member engagement planning, and positioning Greentech Alliance to drive awareness and conversion.',
      color: '#0D7377',
      image: 'aasiyah.jpeg',
    },
    {
      name: 'Lais Garcia',
      role: 'PROJECT LEAD',
      bio: 'Major in Supply Chain Management. Project coordination, client communication with Greentech Alliance, team alignment, and ensuring timely delivery of all strategic recommendations.',
      color: '#0D7377',
      image: 'lais.jpg',
    },
    {
      name: 'Nikka Stephens',
      role: 'DIGITAL STRATEGY LEAD',
      bio: 'Major in Supply Chain Management. Website design and development, digital strategy alignment, platform experience design, and presenting project insights through an engaging user interface.',
      color: '#0D7377',
      image: 'nikka.jpg',
    },
    {
      name: 'John Salinas',
      role: 'FINANCIAL ANALYST',
      bio: 'Major in Accounting. Conversion rate study, pricing strategy evaluation, revenue modeling, and financial analysis to support a sustainable paid membership model.',
      color: '#0D7377',
      image: 'john.jpg',
    },
    {
      name: 'Yashpreet Kaur Sohi',
      role: 'RESEARCH ANALYST',
      bio: 'Major in Supply Chain Management. Market research, data collection, competitive analysis, and generating insights to support strategic decision-making and recommendations.',
      color: '#0D7377',
      image: 'yash.jpg',
    },
  ]

 return (
    <section id="intro" className="section-pad section-gradient-teal">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="About the Company"
          title=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-6 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            Greentech{' '}
            <span style={{ color: '#0D7377' }}>Alliance</span>
          </h3>
        </div>

        <div className="flex flex-col gap-6 mb-14 mt-4">
          <div className="reveal reveal-left">
            <div
              className="relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 py-10 md:py-12"
              style={{ background: 'linear-gradient(135deg, #0a5c60 0%, #0D7377 45%, #14BDAC 100%)' }}
            >
              <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 72%)' }} />
              <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.18) 0%, rgba(244,208,63,0) 72%)' }} />
              <div className="relative max-w-4xl mx-auto">
            <p style={{ color: 'rgba(255,255,255,0.96)', lineHeight: '1.8' }}>
              Greentech Alliance is a volunteer-run, global climate technology community. It builds ecosystems that connect technology, policy, and capital to support the development and deployment of solutions addressing climate change and sustainable development challenges worldwide.
            </p>

            <p className="mt-4" style={{ color: 'rgba(255,255,255,0.88)', lineHeight: '1.8' }}>
              At the time of this capstone engagement, Greentech Alliance was preparing for its formal platform launch — a pivotal moment requiring a clear strategy, a defined value proposition, and a strong understanding of what prospective members truly need and value.
            </p>
              </div>
            </div>
          </div>

          <div
            className="reveal reveal-right relative overflow-hidden rounded-[28px] border p-8 md:p-10 max-w-4xl mx-auto"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(240,253,244,0.97) 55%, rgba(232,245,238,0.95) 100%)',
              borderColor: 'rgba(46,204,113,0.16)',
              boxShadow: '0 30px 68px rgba(39,174,96,0.16), 0 10px 26px rgba(26,35,50,0.07)',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #27ae60 0%, #14BDAC 100%)' }} />
            <div className="absolute top-6 right-6 h-24 w-24 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.2) 0%, rgba(244,208,63,0) 70%)' }} />
            <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}greentech-logo.png`}
                alt="Greentech Alliance logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="font-bold text-xl" style={{ color: '#1A2332' }}>
                Project Summary
              </h3>
            </div>
            <p style={{ color: '#4A5568', lineHeight: '1.75' }}>
              Greentech Alliance has over 5,000 members connected through informal channels like Slack and WhatsApp, free of charge.
            </p>

            <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              As it formally expands into Canada and helps launch Calgary's first Climate Week, the organisation is entering a critical growth phase.
            </p>

            <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              The main challenge is to scale sustainably without losing its core strengths — accessibility, trust, and engagement — while:
            </p>

            <ul className="mt-3 list-disc pl-6" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              <li>Migrating members to a dedicated platform</li>
              <li>Introducing a paid membership model for the first time</li>
              <li>Integrating 2,000 new members from an international merger</li>
              <li>Maintaining alignment across regions and sectors</li>
            </ul>

            <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              Overall, the project focuses on transforming a fast-growing informal network into a structured and scalable global community.
            </p>
            </div>
          </div>
        </div>

        <div id="matilha-divider" className="reveal max-w-4xl mx-auto mb-8 scroll-mt-20">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0) 0%, rgba(13,115,119,0.28) 100%)' }} />
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(13,115,119,0.14)',
                color: '#0D7377',
              }}
            >
              <Leaf size={16} />
            </div>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.28) 0%, rgba(13,115,119,0) 100%)' }} />
          </div>
        </div>

        {/* Team */}
        <div id="team" className="max-w-4xl mx-auto mb-14 scroll-mt-20">
          <div className="reveal">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl text-center mb-10 leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            Matilha Team{' '}
            <span style={{ color: '#0D7377' }}>Members</span>
          </h3>
          <div
            className="mx-auto rounded-[28px] border px-6 py-6 md:px-8 md:py-7"
            style={{
              maxWidth: '880px',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(240,253,250,0.94) 100%)',
              borderColor: 'rgba(13,115,119,0.14)',
              boxShadow: '0 24px 54px rgba(13,115,119,0.12), 0 8px 22px rgba(26,35,50,0.05)',
            }}
          >
            <p
              className="text-center mb-3"
              style={{
                color: '#0D7377',
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'Space Mono, monospace',
              }}
            >
              Matilha means "wolf pack" in Portuguese.
            </p>
            <p className="text-base md:text-lg text-center" style={{ color: '#4A5568', lineHeight: '1.9' }}>
              Wolves are widely known for their ability to work collectively, communicate effectively, and protect one another, making the pack stronger than any individual member alone. A wolf pack is built on trust, coordination, and a shared purpose, where each member plays a role that contributes to the group&apos;s survival and success.
            </p>
          </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-2 mt-12">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-[28px] p-6 text-center border overflow-hidden relative`}
              style={{
                background: `linear-gradient(160deg, rgba(255,255,255,0.99) 0%, ${member.color}0B 100%)`,
                borderColor: `${member.color}22`,
                boxShadow: '0 16px 34px rgba(16,39,52,0.08)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: `linear-gradient(90deg, ${member.color} 0%, ${member.color}aa 100%)` }} />
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full" style={{ background: `radial-gradient(circle, ${member.color}18 0%, ${member.color}00 72%)` }} />
              <img
                src={`${import.meta.env.BASE_URL}${member.image}`}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover relative"
                style={{ border: `3px solid ${member.color}`, boxShadow: `0 12px 24px ${member.color}24` }}
              />
              <h4 className="font-bold text-[15px] mb-1 leading-tight" style={{ color: '#1A2332' }}>{member.name}</h4>
              <p
                className="inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-semibold mb-3"
                style={{ color: member.color, background: `${member.color}12` }}
              >
                {member.role}
              </p>
              <p className="text-xs" style={{ color: '#5B6878', lineHeight: '1.72' }}>{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Challenge Section ─────────────────────────────────────────────────
function ChallengeSection() {
  const problems = [
    {
      icon: <Lightbulb size={22} />,
      title: 'Project Focus',
      desc: 'Design a sustainable growth and governance model for a rapidly expanding global climate-tech community as it formalizes operations in Canada and introduces a paid membership model.',
      color: '#0D7377',
    },
    {
      icon: <AlertTriangle size={22} />,
      title: 'Business Challenge',
      desc: 'This organisation must transition from an informal, volunteer-run network of 5,000+ global members to a structured, financially sustainable organisation without losing accessibility, trust, or cohesion.',
      color: '#2ECC71',
    },
  ]

  return (
    <section id="challenge" className="section-pad bg-[#E4F0F0]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="The Challenge"
          title=""
        />

        <div
          className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-12 text-center"
        >
          <p
            className="mb-6"
            style={{
              color: '#0D7377',
              fontSize: '0.82rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            Capstone Core Problem
          </p>
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            How might we build{' '}
            <span style={{ color: '#F4D03F' }}>engagement and trust</span>{' '}
            among a community of individuals who care about{' '}
            <span style={{ color: '#2ECC71' }}>sustainability</span>{' '}
            so that they are willing to pay?
          </h3>
        </div>

        <div
          className="reveal relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 py-10 md:py-12 -mt-4 mb-12"
          style={{
            background: 'linear-gradient(135deg, #04292d 0%, #0a4f54 36%, #0D7377 68%, #14919B 100%)',
            boxShadow: '0 34px 78px rgba(13,115,119,0.24), 0 12px 28px rgba(26,35,50,0.08)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, rgba(244,208,63,0.95) 0%, rgba(20,189,172,0.9) 52%, rgba(255,255,255,0.25) 100%)' }} />
          <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 16% 22%, rgba(244,208,63,0.14) 0%, rgba(244,208,63,0) 24%), radial-gradient(circle at 82% 24%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 24%), radial-gradient(circle at 72% 78%, rgba(46,204,113,0.12) 0%, rgba(46,204,113,0) 26%)' }} />
          <div className="relative max-w-5xl mx-auto space-y-4 text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.85' }}>
            <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#ffffff', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
              How the Challenge Became Clear
            </h3>
            <p>
              After reading the problem and challenge stated by our Industry Partner, our group had the first introduction meeting with Charles Newton Price, one of the founders and our main contact.
            </p>
            <p>
              Charles is an accomplished, results-oriented leader, technology professional, and entrepreneur with over seventeen years of combined experience in software development, wireless technologies, manufacturing, e-learning, mobile payments, international business development, go-to-market process, strategic marketing, investor relations, and capital raising. He is also passionate about technology and philanthropy, and has co-founded and served as a board member of three non-profits. He earned an MBA from Ivey and both an MS and BS in Electrical and Computer Engineering from the University of Calgary.
            </p>
            <p>
              The following week, Charles introduced us to Luiz Pion, the Head of Marketing for Greentech Alliance. From it, we understood that this was more than a growth challenge.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div
                className="rounded-[24px] border px-5 py-5 md:px-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 14px 28px rgba(5,46,51,0.14)',
                }}
              >
                <div className="mb-4 h-1.5 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #F4D03F 0%, rgba(255,255,255,0.45) 100%)' }} />
                <p
                  className="text-sm md:text-base"
                  style={{
                    color: '#ffffff',
                    lineHeight: '1.8',
                  }}
                >
                  <strong style={{ color: '#F4D03F' }}>As a team, we quickly aligned on the core issue:</strong> Greentech Alliance is transitioning from an informal, volunteer-driven network into a structured organisation.
                </p>
              </div>

              <div
                className="rounded-[24px] border px-5 py-5 md:px-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 14px 28px rgba(5,46,51,0.14)',
                }}
              >
                <div className="mb-4 h-1.5 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #F4D03F 0%, rgba(255,255,255,0.45) 100%)' }} />
                <p
                  className="text-sm md:text-base"
                  style={{
                    color: '#ffffff',
                    lineHeight: '1.8',
                  }}
                >
                  <strong style={{ color: '#F4D03F' }}>From a business perspective, this raised a critical question:</strong> How do you introduce structure, monetization, and scale a business model without breaking engagement and trust?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-4 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-[28px] p-7 md:p-8 border h-full overflow-hidden relative`}
              style={{
                background: `linear-gradient(160deg, rgba(255,255,255,0.99) 0%, ${p.color}0A 100%)`,
                borderColor: `${p.color}20`,
                boxShadow: '0 18px 36px rgba(16,39,52,0.08)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: `linear-gradient(90deg, ${p.color} 0%, ${p.color}aa 100%)` }} />
              <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full" style={{ background: `radial-gradient(circle, ${p.color}14 0%, ${p.color}00 72%)` }} />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-[16px] flex items-center justify-center text-white"
                  style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${p.color}cc 100%)`, boxShadow: `0 12px 24px ${p.color}30` }}
                >
                  {p.icon}
                </div>
                <h3 className="font-bold text-xl leading-tight" style={{ color: '#1A2332' }}>{p.title}</h3>
              </div>
              <p className="text-sm md:text-base" style={{ color: '#5B6878', lineHeight: '1.8' }}>{p.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Marketing Section ─────────────────────────────────────────────────
function MarketingSection() {
  return (
    <section id="marketing" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Marketing Analysis"
        />

        <div
          className="reveal relative overflow-hidden rounded-[30px] px-8 py-10 md:px-12 md:py-12 mb-14 -mt-6"
          style={{
            background: 'linear-gradient(135deg, #072f32 0%, #0a5559 38%, #0D7377 66%, #1f9d68 100%)',
            boxShadow: '0 24px 54px rgba(13,115,119,0.24)',
          }}
        >
          <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at 18% 22%, rgba(46,204,113,0.18) 0%, rgba(46,204,113,0) 30%), radial-gradient(circle at 82% 26%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 24%), radial-gradient(circle at 72% 78%, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 24%)' }} />
          <div className="absolute -top-16 right-10 h-40 w-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.18) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-center">
            <div className="max-w-4xl">
            <h3 className="text-3xl md:text-5xl mb-5" style={{ color: '#ffffff', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
              Unlocking the True Value of Greentech Alliance
            </h3>
            <p className="text-lg md:text-xl italic mb-4" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
              "We realized early that the biggest marketing challenge wasn’t awareness, it was clarity. Members needed to see the value before we could tell the story."
            </p>
            <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.86)', lineHeight: '1.8' }}>
              This is why we decided to create a strong value proposition in attempts to portray the value the founders saw with the value members were seeing.
            </p>
            <a
              href="#marketing-analysis-start"
              className="inline-flex items-center gap-2 mt-6 text-sm"
              style={{ color: '#F4D03F' }}
            >
              Scroll down to see our analysis
              <ChevronDown size={16} />
            </a>
          </div>
            <div className="relative hidden lg:flex items-center justify-center min-h-[260px]">
              <div
                className="absolute left-[48%] top-[45%] h-px w-[30%] -translate-y-1/2 rotate-[-32deg]"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.38), rgba(255,255,255,0.08))' }}
              />
              <div
                className="absolute left-[22%] top-[46%] h-px w-[27%] -translate-y-1/2 rotate-[30deg]"
                style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.36), rgba(255,255,255,0.05))' }}
              />
              <div
                className="absolute left-[22%] top-[56%] h-px w-[28%] -translate-y-1/2 rotate-[-22deg]"
                style={{ background: 'linear-gradient(90deg, rgba(46,204,113,0.08), rgba(46,204,113,0.42), rgba(46,204,113,0.08))' }}
              />
              <div
                className="absolute left-[49%] top-[56%] h-px w-[27%] -translate-y-1/2 rotate-[24deg]"
                style={{ background: 'linear-gradient(90deg, rgba(244,208,63,0.08), rgba(244,208,63,0.44), rgba(244,208,63,0.08))' }}
              />

              <div
                className="absolute left-[10%] top-[18%] flex h-14 w-14 items-center justify-center rounded-full border"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}
              >
                <Leaf size={22} color="#2ECC71" />
              </div>
              <div
                className="absolute right-[9%] top-[18%] flex h-14 w-14 items-center justify-center rounded-full border"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}
              >
                <TrendingUp size={22} color="#F4D03F" />
              </div>
              <div
                className="absolute left-[14%] bottom-[12%] flex h-14 w-14 items-center justify-center rounded-full border"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}
              >
                <Lightbulb size={22} color="#F4D03F" />
              </div>
              <div
                className="absolute right-[12%] bottom-[12%] flex h-14 w-14 items-center justify-center rounded-full border"
                style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.16)' }}
              >
                <Globe size={22} color="#2ECC71" />
              </div>

              <div
                className="relative flex h-24 w-24 items-center justify-center rounded-full border slow-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.22)',
                  boxShadow: '0 10px 40px rgba(7,47,50,0.25)',
                }}
              >
                <Users size={34} color="#ffffff" />
                <div className="absolute -inset-4 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />
                <div className="absolute -inset-8 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.05)' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14 items-stretch">
          <div id="marketing-analysis-start" className="reveal reveal-left h-full scroll-mt-24">
            <div className="callout-teal mb-6 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #14BDAC 100%)' }} />
              <p
                className="mb-3"
                style={{
                  color: '#0D7377',
                  fontSize: '0.8rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                The Marketing Challenge
              </p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377 0%, #14BDAC 100%)', boxShadow: '0 12px 24px rgba(13,115,119,0.2)' }}>
                  <Lightbulb size={20} color="white" />
                </div>
                <h3 className="font-bold text-xl" style={{ color: '#1A2332' }}>Identifying the Real Problem</h3>
              </div>
              <p style={{ color: '#4A5568', lineHeight: '1.75' }}>
                We realized very early in our project that Greentech Alliance was facing a marketing issue. Initially, we believed the main marketing goal revolved around informing members about the new platform.
              </p>
              <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
                However, we soon figured out something much more important: Greentech Alliance needed a solid value proposition to do any marketing at all.
              </p>
              <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
                So, we started to draw a strategy to communicate it.
              </p>
              <div
                className="mt-5 rounded-[22px] border px-5 py-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,115,119,0.1) 0%, rgba(46,204,113,0.1) 100%)',
                  borderColor: 'rgba(13,115,119,0.14)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                <p style={{ color: '#1A2332', lineHeight: '1.7' }}>
                  <strong style={{ color: '#0D7377' }}>The bigger issue:</strong> Greentech Alliance needed a strong value proposition before any marketing could work.
                </p>
              </div>
            </div>

            <div className="callout-green relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #2ECC71 0%, #0D7377 100%)' }} />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(46,204,113,0.18) 0%, rgba(13,115,119,0.14) 100%)', color: '#27ae60', boxShadow: '0 12px 24px rgba(39,174,96,0.14)' }}>
                  <MessageSquare size={18} />
                </div>
                <h4 className="font-bold text-xl" style={{ color: '#1A2332' }}>How to Communicate Value</h4>
              </div>

              <div className="relative">
                <div className="absolute left-[38px] top-6 bottom-6 w-0.5" style={{ background: 'linear-gradient(180deg, #2ECC71, #0D7377)' }} />
                <div className="space-y-4">
                  {[
                    'Identify Core Message',
                    'Create Message Framework',
                    'Competitive Advantage',
                  ].map((label, index) => (
                    <div key={label} className="grid grid-cols-[76px_minmax(0,1fr)] items-center gap-6 relative">
                      <div className="flex justify-center">
                        <div
                          className="min-w-[76px] h-12 rounded-xl px-3 flex items-center justify-center text-[11px]"
                          style={{
                            background: '#DDF3EA',
                            border: '1px solid rgba(13,115,119,0.18)',
                            color: '#0D7377',
                            fontFamily: 'Space Mono, monospace',
                          }}
                        >
                          Step {index + 1}
                        </div>
                      </div>
                      <div className="card-hover rounded-[18px] border bg-white px-4 py-4 min-h-[56px] flex items-center shadow-sm" style={{ borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                        <p className="font-semibold text-sm" style={{ color: '#1A2332' }}>{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-right h-full">
            <div
              className="rounded-[28px] border p-7 md:p-8 h-full flex flex-col justify-center overflow-hidden relative"
              style={{
                background: 'linear-gradient(160deg, rgba(255,255,255,0.99) 0%, rgba(233,248,243,0.94) 100%)',
                borderColor: 'rgba(13,115,119,0.12)',
                boxShadow: '0 18px 40px rgba(13,115,119,0.1)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #2ECC71 100%)' }} />
              <h3 className="font-bold text-2xl mb-2 text-center" style={{ color: '#1A2332' }}>What Members Really Gain</h3>
              <p className="font-semibold mb-6 text-center" style={{ color: '#0D7377' }}>Our Core Value Proposition</p>

              <div className="space-y-4 mb-6">
                <div className="card-hover rounded-[22px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#0D7377' }}>
                    <Users size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1" style={{ color: '#1A2332' }}>Partnership & Networking</p>
                    <p className="text-sm" style={{ color: '#718096', lineHeight: '1.65' }}>
                      Connecting members through relationships, collaboration, and community-building opportunities.
                    </p>
                  </div>
                </div>

                <div className="card-hover rounded-[22px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#2ECC71' }}>
                    <Lightbulb size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1" style={{ color: '#1A2332' }}>Project Development</p>
                    <p className="text-sm" style={{ color: '#718096', lineHeight: '1.65' }}>
                      Helping ideas grow through shared expertise, collaboration, and practical support.
                    </p>
                  </div>
                </div>

                <div className="card-hover rounded-[22px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#F4D03F' }}>
                    <TrendingUp size={20} color="#1A2332" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1" style={{ color: '#1A2332' }}>Funding</p>
                    <p className="text-sm" style={{ color: '#718096', lineHeight: '1.65' }}>
                      Unlocking access to funding pathways, visibility, and growth opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-[22px] px-5 py-5 md:px-6"
                style={{
                  background: 'linear-gradient(135deg, #0b3f42 0%, #0D7377 55%, #1f9d68 100%)',
                  boxShadow: '0 14px 36px rgba(13,115,119,0.16)',
                }}
              >
                <p
                  className="mb-2"
                  style={{
                    color: 'rgba(255,255,255,0.76)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  Value Statement
                </p>
                <p className="text-base md:text-lg" style={{ color: '#ffffff', lineHeight: '1.8' }}>
                  "Greentech Alliance is a sustainability network that connects you with partners, expertise, and funding to turn ideas into impactful, scalable solutions to make the world a better place."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#27ae60' }}>
              <CheckCircle2 size={20} color="white" />
            </div>
            <div>
              <p
                style={{
                  color: '#0D7377',
                  fontSize: '0.78rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontFamily: 'Space Mono, monospace',
                }}
              >
                Tactics / Action Plan
              </p>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Turning Strategy into Action</h3>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #0D7377, #2ECC71)' }} />
            <div className="space-y-5">
              {[
                {
                  title: 'Email Campaign',
                  iconBg: '#0D7377',
                  icon: <Mail size={18} color="white" />,
                  content: (
                    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      {[
                        'Identifies The Problem.',
                        'Positions Greentech Alliance As The Answer.',
                        'Provides Proof/Testimonial.',
                        'Invites The Recipient To An Information Session Or Webinar.',
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="rounded-[16px] border px-4 py-4 flex min-h-[164px] flex-col"
                          style={{
                            background: 'linear-gradient(135deg, rgba(13,115,119,0.04) 0%, rgba(46,204,113,0.05) 100%)',
                            borderColor: '#E8ECEF',
                          }}
                        >
                          <div
                            className="mb-3 inline-flex min-w-[62px] h-9 rounded-xl px-3 items-center justify-center text-[11px]"
                            style={{
                              background: '#DDF3EA',
                              border: '1px solid rgba(13,115,119,0.18)',
                              color: '#0D7377',
                              fontFamily: 'Space Mono, monospace',
                            }}
                          >
                            Email #{index + 1}
                          </div>
                          <p className="text-sm flex-1" style={{ color: '#4A5568', lineHeight: '1.65' }}>{item}</p>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  title: 'One Pager for Decision Makers',
                  iconBg: '#F4D03F',
                  icon: <BookOpen size={18} color="#1A2332" />,
                  desc: 'A clear, visual one-pager that summarizes the value proposition, audience fit, and why Greentech Alliance matters now.',
                },
                {
                  title: 'Direct Outreach',
                  iconBg: '#0D7377',
                  icon: <Users size={18} color="white" />,
                  desc: 'Personalised outreach that builds trust through direct conversation, warm connections, and relationship-led engagement.',
                },
                {
                  title: 'Emotional Aspect',
                  iconBg: '#2ECC71',
                  icon: <Heart size={18} color="white" />,
                  desc: 'Messaging that connects to purpose, urgency, and the emotional motivation behind sustainability-driven action.',
                },
                {
                  title: 'PR Strategy',
                  iconBg: '#14BDAC',
                  icon: <MessageSquare size={18} color="white" />,
                  desc: 'Public-facing storytelling that strengthens visibility, reinforces credibility, and expands community awareness.',
                },
                {
                  title: 'Social Media Creation',
                  iconBg: '#0a5c60',
                  icon: <Leaf size={18} color="white" />,
                  desc: 'Branded social content that translates the value proposition into accessible, repeatable messaging across channels.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 pl-14 relative">
                  <div
                    className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                  <div className="bg-white rounded-xl p-4 border flex-1" style={{ borderColor: '#E8ECEF', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                    <p className="font-semibold text-sm mb-2" style={{ color: '#1A2332' }}>{item.title}</p>
                    {'content' in item ? item.content : (
                      <p className="text-sm" style={{ color: '#718096', lineHeight: '1.7' }}>{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="reveal rounded-[28px] px-8 py-8 md:px-10 md:py-10"
          style={{
            background: 'linear-gradient(135deg, rgba(244,208,63,0.12) 0%, rgba(255,255,255,0.92) 52%, rgba(13,115,119,0.08) 100%)',
            border: '1px solid rgba(244,208,63,0.18)',
          }}
        >
          <p
            className="mb-3"
            style={{
              color: '#0D7377',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            The Unanswered Question
          </p>
          <h3 className="text-2xl md:text-3xl mb-4" style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
            What is the Next Step?
          </h3>
          <p className="text-sm md:text-base mb-5" style={{ color: '#4A5568', lineHeight: '1.8' }}>
            To better understand and to base ourselves on facts, the team started to research how other alliances operate and communicate value.
          </p>
          <div
            className="rounded-[22px] px-5 py-5 md:px-6"
            style={{
              background: 'rgba(255,255,255,0.72)',
              border: '1px solid rgba(13,115,119,0.12)',
            }}
          >
            <p style={{ color: '#1A2332', lineHeight: '1.8' }}>
              Our team analyzed both local and global competitors. We identified the three most structured ecosystems and extracted their strongest practices. Through this process, a clear pattern emerged: <strong style={{ color: '#0D7377' }}>Successful communities do not just connect people, they deliver measurable outcomes.</strong>
            </p>
          </div>
          <a
            href="#competitors"
            className="inline-flex items-center gap-2 mt-5 text-sm"
            style={{ color: '#0D7377' }}
          >
            See the Research Results
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Competitor Research Section ──────────────────────────────────────
function CompetitorSection() {
  return (
    <section id="competitors" className="section-pad bg-[#E1F0EA]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Competitor Research"
          subtitle=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-10 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            A network connects people.{' '}
            <span style={{ color: '#0D7377' }}>An ecosystem creates results.</span>
          </h3>
        </div>

        <div
          className="reveal rounded-[28px] border p-7 md:p-8 mb-10 -mt-2 overflow-hidden relative"
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.99) 0%, rgba(238,249,246,0.95) 100%)',
            borderColor: 'rgba(13,115,119,0.12)',
            boxShadow: '0 18px 40px rgba(13,115,119,0.08)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #14BDAC 52%, #2ECC71 100%)' }} />
          <p
            className="mb-3"
            style={{
              color: '#0D7377',
              fontSize: '0.8rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontFamily: 'Space Mono, monospace',
            }}
          >
            Looking at Others
          </p>
          <h3 className="text-2xl md:text-3xl mb-6" style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
            What Successful Ecosystems Do Differently
          </h3>

          <div className="grid gap-6 mb-8">
            <div className="rounded-[24px] p-5 border" style={{ background: 'linear-gradient(135deg, rgba(13,115,119,0.1) 0%, rgba(20,189,172,0.06) 100%)', borderColor: 'rgba(13,115,119,0.08)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377 0%, #14BDAC 100%)', boxShadow: '0 12px 24px rgba(13,115,119,0.16)' }}>
                  <MapPin size={18} color="white" />
                </div>
                <h4 className="text-lg font-bold" style={{ color: '#1A2332' }}>Local Players</h4>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  ['Foresight Canada', 'Turns connections into real outcomes like funding and growth.', 'People engage because they know what they will gain.'],
                  ['Green Economy Canada', 'Focuses on measurable impact and real progress.', 'People stay because they see results.'],
                  ['Smart Prosperity Institute', 'Delivers value through insights and research.', 'Value does not always need constant interaction.'],
                  ['Diversity & Sustainability', 'Builds community through identity, inclusion, and sustainability-centred belonging.', 'Shared values can strengthen retention and long-term engagement.'],
                ].map(([name, body, note]) => (
                  <div key={name} className="card-hover h-full rounded-[20px] border bg-white px-4 py-4" style={{ borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border" style={{ borderColor: 'rgba(13,115,119,0.16)', color: '#0D7377', background: 'rgba(13,115,119,0.04)' }}>
                          <MapPin size={14} />
                        </span>
                        <p className="font-semibold" style={{ color: '#1A2332' }}>{name}</p>
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#4A5568', lineHeight: '1.65' }}>{body}</p>
                      <p className="text-sm pt-1" style={{ color: '#0D7377', lineHeight: '1.65' }}>• {note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] p-5 border" style={{ background: 'linear-gradient(135deg, rgba(46,204,113,0.1) 0%, rgba(255,255,255,0.78) 100%)', borderColor: 'rgba(46,204,113,0.1)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-[14px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #2ECC71 0%, #14BDAC 100%)', boxShadow: '0 12px 24px rgba(39,174,96,0.16)' }}>
                  <Globe size={18} color="white" />
                </div>
                <h4 className="text-lg font-bold" style={{ color: '#1A2332' }}>Global Players</h4>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Climate Tech Cities', 'Connects climate ecosystems across cities.', 'Expands opportunities globally.'],
                  ['Climate & Capital Connect', 'Offers curated 1:1 networking and paid membership.', 'People pay for direct, meaningful connections.'],
                  ['Climate Tech Coalition', 'Creates exclusive networks with investor matchmaking.', 'Exclusivity increases perceived value.'],
                ].map(([name, body, note]) => (
                  <div key={name} className="card-hover h-full rounded-[20px] border bg-white px-4 py-4" style={{ borderColor: 'rgba(46,204,113,0.1)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border" style={{ borderColor: 'rgba(46,204,113,0.18)', color: '#27ae60', background: 'rgba(46,204,113,0.05)' }}>
                          <Globe size={14} />
                        </span>
                        <p className="font-semibold" style={{ color: '#1A2332' }}>{name}</p>
                      </div>
                      <p className="text-sm mb-2" style={{ color: '#4A5568', lineHeight: '1.65' }}>{body}</p>
                      <p className="text-sm pt-1" style={{ color: '#27ae60', lineHeight: '1.65' }}>• {note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] mt-10 mb-10">
          <div
            className="reveal rounded-[28px] border p-7 md:p-8 overflow-hidden relative"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.99) 0%, rgba(238,249,246,0.94) 100%)',
              borderColor: 'rgba(13,115,119,0.12)',
              boxShadow: '0 18px 38px rgba(13,115,119,0.08)',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #2ECC71 100%)' }} />
            <h3 className="text-2xl md:text-3xl mb-5" style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
              It&apos;s Not a Member Problem: It&apos;s a Value Problem
            </h3>
            <p className="text-sm md:text-base mb-5" style={{ color: '#4A5568', lineHeight: '1.8' }}>
              When we compare Greentech Alliance to others, one thing becomes clear:
            </p>
            <div className="space-y-2 mb-6">
              <p style={{ color: '#1A2332' }}>• Others design systems that deliver value</p>
              <p style={{ color: '#1A2332' }}>• Greentech Alliance provides access, but not always outcomes</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mb-6">
              <div className="card-hover rounded-[22px] border p-5" style={{ borderColor: 'rgba(46,204,113,0.14)', background: 'linear-gradient(135deg, rgba(46,204,113,0.1) 0%, rgba(255,255,255,0.92) 100%)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} style={{ color: '#2ECC71' }} />
                  <p className="font-semibold" style={{ color: '#1A2332' }}>Others</p>
                </div>
                <div className="space-y-2 text-sm" style={{ color: '#4A5568' }}>
                  <p>• Structured experiences</p>
                  <p>• Clear outcomes</p>
                  <p>• Targeted value</p>
                </div>
              </div>

              <div className="card-hover rounded-[22px] border p-5" style={{ borderColor: 'rgba(244,208,63,0.18)', background: 'linear-gradient(135deg, rgba(244,208,63,0.12) 0%, rgba(255,255,255,0.92) 100%)', boxShadow: '0 12px 24px rgba(16,39,52,0.05)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <Users size={18} style={{ color: '#0D7377' }} />
                  <p className="font-semibold" style={{ color: '#1A2332' }}>Greentech Alliance</p>
                </div>
                <div className="space-y-2 text-sm" style={{ color: '#4A5568' }}>
                  <p>• Open network</p>
                  <p>• Informal interaction</p>
                  <p>• Undefined pathways</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-[22px] border px-5 py-5"
              style={{
                background: 'linear-gradient(135deg, rgba(13,115,119,0.08) 0%, rgba(46,204,113,0.08) 100%)',
                borderColor: 'rgba(13,115,119,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.65)',
              }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0D7377' }}>
                Strategic Takeaway
              </p>
              <p className="text-sm md:text-base font-medium" style={{ color: '#1A2332', lineHeight: '1.75' }}>
                The issue is not that members lack interest. The issue is that value is not yet structured in a way members can clearly experience.
              </p>
            </div>
          </div>

          <div
            className="reveal rounded-[26px] px-7 py-7 md:px-8 md:py-8"
            style={{
              background: 'linear-gradient(135deg, #0b3f42 0%, #0D7377 56%, #1f9d68 100%)',
              boxShadow: '0 18px 40px rgba(13,115,119,0.18)',
            }}
          >
            <p className="text-sm md:text-base mb-4" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
              From a strategic perspective, we concluded that Greentech Alliance is planning to provide strong access through their new platform (Mighty Network) but lacks structured pathways to results such as funding, partnerships, and growth.
            </p>
            <p className="text-sm md:text-base mb-4" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
              This insight shifted our direction: The gap was not in the network itself; it was in how value is and was being delivered.
            </p>
            <div
              className="rounded-[20px] border px-5 py-5 mt-5"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)',
                borderColor: 'rgba(255,255,255,0.16)',
              }}
            >
              <p className="mb-3" style={{ color: '#F4D03F', fontWeight: 700 }}>
                So, one question remained:
              </p>
              <p className="text-lg md:text-xl" style={{ color: '#ffffff', lineHeight: '1.7', fontWeight: 700 }}>
                Do members really want what Greentech Alliance is offering?
              </p>
            </div>
            <p className="text-sm md:text-base mt-5" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
              This insight led us to create a survey and conduct a conversion study.
            </p>
            <a
              href="#survey"
              className="inline-flex items-center gap-2 mt-5 text-sm"
              style={{ color: '#F4D03F' }}
            >
              Continue to the Survey
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Bar Chart Placeholder ─────────────────────────────────────────────
function BarChartPlaceholder({ title, labels }: { title: string; labels: string[] }) {
  const heights = [65, 82, 45, 91, 58, 73, 38]
  const types = ['', 'accent', '', 'green', '', '', 'accent']
  return (
    <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E8ECEF' }}>
      <p className="font-semibold text-sm mb-4" style={{ color: '#1A2332' }}>{title}</p>
      <div className="chart-bar mb-3">
        {labels.map((label, i) => (
          <div key={label} className="flex flex-col items-center flex-1 gap-1" style={{ height: '100%', justifyContent: 'flex-end' }}>
            <div className={`chart-bar-item ${types[i % types.length]} w-full`} style={{ height: `${heights[i % heights.length]}%` }} />
          </div>
        ))}
      </div>
      <div className="flex gap-1 justify-around">
        {labels.map((label) => (
          <p key={label} className="text-xs text-center flex-1" style={{ color: '#9CA3AF', fontSize: '10px' }}>{label}</p>
        ))}
      </div>
      <p className="text-xs text-center mt-3 italic" style={{ color: '#9CA3AF' }}>— Insert survey chart here —</p>
    </div>
  )
}

function PieChartPlaceholder({ title }: { title: string }) {
  const legendItems = [
    { label: 'Strongly Agree', color: '#0D7377', pct: '38%' },
    { label: 'Agree', color: '#2ECC71', pct: '24%' },
    { label: 'Neutral', color: '#F4D03F', pct: '16%' },
    { label: 'Disagree', color: '#14BDAC', pct: '13%' },
    { label: 'Strongly Disagree', color: '#9CA3AF', pct: '9%' },
  ]
  return (
    <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E8ECEF' }}>
      <p className="font-semibold text-sm mb-4" style={{ color: '#1A2332' }}>{title}</p>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="pie-chart flex-shrink-0" />
        <div className="flex flex-col gap-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <span className="text-xs" style={{ color: '#4A5568' }}>{item.label}</span>
              <span className="text-xs font-bold ml-auto pl-4" style={{ color: '#1A2332' }}>{item.pct}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-center mt-3 italic" style={{ color: '#9CA3AF' }}>— Insert survey chart here —</p>
    </div>
  )
}

function HBarChartPlaceholder({ title, rows }: { title: string; rows: { label: string; pct: number; type?: string }[] }) {
  return (
    <div className="bg-white rounded-2xl border p-6" style={{ borderColor: '#E8ECEF' }}>
      <p className="font-semibold text-sm mb-5" style={{ color: '#1A2332' }}>{title}</p>
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="flex justify-between mb-1">
              <span className="text-xs" style={{ color: '#4A5568' }}>{row.label}</span>
              <span className="text-xs font-bold" style={{ color: '#1A2332' }}>{row.pct}%</span>
            </div>
            <div className="bg-gray-100 rounded-full h-6 overflow-hidden">
              <div className={`h-bar ${row.type || ''}`} style={{ width: `${row.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-3 italic" style={{ color: '#9CA3AF' }}>— Insert survey chart here —</p>
    </div>
  )
}

// ─── Survey Section ────────────────────────────────────────────────────
function SurveySection() {
  const [openQuestion, setOpenQuestion] = useState<string | null>('q1')

  const surveyQuestions = [
    {
      id: 'q1',
      number: '01',
      text: 'How strongly do you align with the Greentech Alliance network’s sustainability mission?',
      detail: '“To connect people, knowledge, and technology to accelerate a just transition to a regenerative and sustainable world.”',
    },
    {
      id: 'q2',
      number: '02',
      text: 'How often do you currently utilize any form of communication platform and/or channels to connect with people in the alliance?',
      detail: '(Teams, Slack, WhatsApp, etc.)',
    },
    {
      id: 'q3',
      number: '03',
      text: 'Would you consider joining an enhanced Premium Greentech Alliance membership that includes exclusive industry events, networking with other decision-makers, and access to specialized resources?',
    },
    {
      id: 'q4',
      number: '04',
      text: 'When the Alliance migrates to a closed and well-structured platform (Mighty Networks) and becomes paid, what would you most likely do?',
    },
    {
      id: 'q5',
      number: '05',
      text: 'How much would you be willing to contribute annually to move the community into an exclusive HUB (Mighty Networks) that makes global communication with Greentech Alliance members more efficient and easier for you?',
    },
    {
      id: 'q6',
      number: '06',
      text: 'Approximately what is your company’s annual revenue?',
    },
    {
      id: 'q7',
      number: '07',
      text: 'Which of the following features would make a full Greentech Alliance membership more attractive than a basic listing?',
    },
    {
      id: 'q8',
      number: '08',
      text: 'How valuable would the following be for your business growth?',
    },
    {
      id: 'q9',
      number: '09',
      text: 'Which of the following services or opportunities would provide the most value for you and/or your organisation within the Greentech Alliance network?',
    },
  ]

  const missionAlignment = [
    ['Very strongly', 18],
    ['Strongly', 4],
    ['Moderately', 0],
    ['Slightly', 0],
    ['Not strongly', 1],
  ]

  const platformUsage = [
    ['Daily', 5],
    ['Weekly', 4],
    ['2–3 times a month', 2],
    ['Monthly', 5],
    ['Rarely', 6],
    ['Never', 1],
  ]

  const premiumInterest = [
    ['Yes', 13],
    ['No', 2],
    ['Not sure', 8],
  ]

  const paidBehavior = [
    ['Join immediately', 2],
    ['Consider joining', 14],
    ['Wait and see', 4],
    ['Only attend free events', 2],
    ['Disengage', 1],
  ]

  const willingnessToPay = [
    ['Less than 100 USD annually', 12],
    ['100–325 USD', 6],
    ['326–550 USD', 2],
    ['551–775 USD', 1],
    ['1001+ USD', 1],
  ]

  const featurePreferences = [
    ['Curated partner introductions', 14],
    ['Exclusive events and workshops', 10],
    ['Access to proprietary data/resources', 10],
    ['1:1 advisory session', 7],
    ['Priority placement in promotional campaigns', 3],
  ]

  const servicePreferences = [
    ['Mentorship from trusted experts', 15],
    ['Fundraising support', 13],
    ['Policy & advocacy support', 9],
    ['Brainstorming / idea support', 6],
    ['Premium visibility opportunities', 6],
    ['Technical guidance', 5],
  ]

  function SurveyResultCard({
    title,
    badge,
    badgeStyle,
    children,
    className = '',
  }: {
    title: string
    badge: string
    badgeStyle: CSSProperties
    children: ReactNode
    className?: string
  }) {
    return (
      <div className={`survey-dashboard-card ${className}`.trim()}>
        <div className="survey-card-head">
          <h5 className="survey-card-title">{title}</h5>
          <span className="survey-insight-badge" style={badgeStyle}>{badge}</span>
        </div>
        {children}
      </div>
    )
  }

  function ResultBars({
    title,
    badge,
    rows,
    accent,
    badgeStyle,
    trackColor = '#E7EEF0',
    rowColors,
    highlightLabel,
  }: {
    title: string
    badge: string
    rows: Array<[string, number]>
    accent: string
    badgeStyle: CSSProperties
    trackColor?: string
    rowColors?: string[]
    highlightLabel?: string
  }) {
    const max = Math.max(...rows.map(([, value]) => value))
    return (
      <SurveyResultCard title={title} badge={badge} badgeStyle={badgeStyle}>
        <div className="survey-bar-list">
          {rows.map(([label, value], index) => {
            const fillColor = rowColors?.[index] || accent
            const isHighlighted = highlightLabel ? label === highlightLabel : index === 0
            return (
              <div key={label} className={`survey-bar-row ${isHighlighted ? 'is-highlighted' : ''}`}>
                <div className="survey-bar-meta">
                  <span className="survey-bar-label">{label}</span>
                  <span className="survey-bar-value">{value}</span>
                </div>
                <div className="survey-bar-track" style={{ background: trackColor }}>
                  <div
                    className="survey-bar-fill"
                    style={{
                      width: `${(value / max) * 100}%`,
                      background: `linear-gradient(90deg, ${fillColor} 0%, ${fillColor}dd 100%)`,
                      boxShadow: isHighlighted ? `0 10px 22px ${fillColor}2e` : `0 8px 18px ${fillColor}18`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </SurveyResultCard>
    )
  }

  function StatColumns({
    title,
    badge,
    rows,
    colors,
  }: {
    title: string
    badge: string
    rows: Array<[string, number]>
    colors: string[]
  }) {
    const max = 15
    return (
      <SurveyResultCard
        title={title}
        badge={badge}
        badgeStyle={{ background: 'rgba(244,208,63,0.16)', color: '#8B6B00' }}
        className="h-full flex flex-col w-full"
      >
        <div className="survey-chart-shell survey-chart-shell--columns">
          <div className="flex items-end justify-between gap-3 h-full min-h-[176px] mb-0">
            {rows.map(([label, value], index) => (
              <div key={label} className="flex-1 min-w-0 h-full grid grid-rows-[130px_68px] items-end">
                <div className="w-full h-[130px] pt-4 flex items-end justify-center">
                  <div className="w-full max-w-[58px] flex flex-col justify-end items-center">
                    <p className="text-xs font-bold text-center mb-2" style={{ color: '#1A2332' }}>{value}</p>
                    <div
                      className="w-full rounded-t-[18px] min-h-[12px] transition-all duration-700"
                      style={{
                        height: `${Math.max(12, Math.round((value / max) * 116))}px`,
                        background: `linear-gradient(180deg, ${colors[index % colors.length]} 0%, ${colors[index % colors.length]}cc 100%)`,
                        boxShadow: `0 10px 24px ${colors[index % colors.length]}24`,
                      }}
                    />
                  </div>
                </div>
                <p
                  className="text-[11px] text-center flex items-start justify-center pt-4 px-1"
                  style={{ color: '#4A5568', lineHeight: '1.3', textWrap: 'balance' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SurveyResultCard>
    )
  }

  function StatDonut({
    title,
    badge,
    rows,
    colors,
    centerLabel,
  }: {
    title: string
    badge: string
    rows: Array<[string, number]>
    colors: string[]
    centerLabel: string
  }) {
    const total = rows.reduce((sum, [, value]) => sum + value, 0)
    let start = 0
    const stops = rows.map(([, value], index) => {
      const end = start + (value / total) * 100
      const stop = `${colors[index % colors.length]} ${start}% ${end}%`
      start = end
      return stop
    })

    const yesCount = rows[0]?.[1] ?? 0
    return (
      <SurveyResultCard
        title={title}
        badge={badge}
        badgeStyle={{ background: 'rgba(46,204,113,0.14)', color: '#1B8F52' }}
      >
        <div className="survey-donut-layout survey-donut-layout--balanced">
          <div
            className="survey-donut survey-donut--large"
            style={{ background: `conic-gradient(${stops.join(', ')})` }}
          >
            <div className="survey-donut-inner">
              <div className="text-center">
                <p className="text-xs" style={{ color: '#718096' }}>{centerLabel}</p>
                <p className="text-2xl font-bold" style={{ color: '#1A2332' }}>{Math.round((yesCount / total) * 100)}%</p>
                <p className="text-xs font-semibold" style={{ color: '#1B8F52' }}>Yes</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-3 w-full max-w-[220px]">
            {rows.map(([label, value], index) => (
              <div key={label} className="survey-donut-legend">
                <div className="w-3.5 h-3.5 rounded-full" style={{ background: colors[index % colors.length] }} />
                <span className="text-sm" style={{ color: '#4A5568' }}>{label}</span>
                <span className="text-sm font-bold ml-auto" style={{ color: '#1A2332' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </SurveyResultCard>
    )
  }

  function StatGridCard({
    title,
    badge,
    description,
    stats,
    rangeText,
  }: {
    title: string
    badge: string
    description: string
    stats: Array<[string, string]>
    rangeText: string
  }) {
    return (
      <SurveyResultCard
        title={title}
        badge={badge}
        badgeStyle={{ background: 'rgba(13,115,119,0.10)', color: '#0A5C60' }}
      >
        <p className="text-sm mb-5" style={{ color: '#718096', lineHeight: '1.8' }}>
          {description}
        </p>
        <div className="survey-stat-grid">
          {stats.map(([label, value]) => (
            <div key={label} className="survey-stat-box">
              <p className="survey-stat-label">{label}</p>
              <p className="survey-stat-value">{value}</p>
            </div>
          ))}
        </div>
        <div className="survey-range-box">
          <p className="survey-range-label">Range</p>
          <p className="survey-range-text">{rangeText}</p>
        </div>
      </SurveyResultCard>
    )
  }

  return (
    <section id="survey" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Member Survey" />

        <div
          className="reveal relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 py-10 md:py-12 mb-12 -mt-6"
          style={{
            background: 'linear-gradient(135deg, #05383b 0%, #0a5c60 48%, #0D7377 100%)',
            boxShadow: '0 30px 70px rgba(13,115,119,0.22), 0 10px 26px rgba(26,35,50,0.08)',
          }}
        >
          <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="relative max-w-5xl mx-auto lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10 lg:items-start">
            <div>
              <h3 className="text-2xl md:text-3xl mb-5" style={{ color: '#ffffff', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}>
                Survey with Greentech Alliance Members
              </h3>
              <p className="text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.85' }}>
                To validate our assumptions, our team designed a survey for members to provide direct insights.
              </p>
              <p className="text-sm md:text-base mt-3" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.85' }}>
                Given the limited timeline, we focused on clear and objective questions, addressing:
              </p>
              <div className="grid gap-3 md:grid-cols-3 mt-5 mb-6">
                {[
                  ['Value Perception', 'How members currently understand and interpret the value of being part of the community.'],
                  ['Community Expectations', 'What members would like to see, experience, and gain from the Alliance moving forward.'],
                  ['Willingness to Pay', 'Whether members would consider paying to belong to the Alliance and under what conditions.'],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="card-hover rounded-[22px] border px-4 py-4 overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 100%)',
                      borderColor: 'rgba(255,255,255,0.18)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), 0 12px 24px rgba(5,46,51,0.12)',
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1" style={{ background: 'linear-gradient(90deg, rgba(244,208,63,0.92) 0%, rgba(20,189,172,0.9) 100%)' }} />
                    <p className="text-sm font-semibold mb-1" style={{ color: '#F4D03F', lineHeight: '1.5' }}>{title}</p>
                    <p className="text-sm" style={{ color: '#ffffff', lineHeight: '1.7' }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:flex min-h-[240px] items-start justify-center pt-2">
              <div className="absolute right-6 top-2 h-36 w-36 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 72%)' }} />
              <div
                className="absolute left-6 top-8 w-[210px] rounded-[24px] border p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.18)',
                  boxShadow: '0 14px 32px rgba(7,47,50,0.22)',
                }}
              >
                <div className="mb-4 h-3 w-24 rounded-full" style={{ background: 'rgba(255,255,255,0.22)' }} />
                <div className="space-y-3">
                  {[true, true, false].map((checked, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-md border flex items-center justify-center" style={{ borderColor: 'rgba(255,255,255,0.3)', background: checked ? (index === 0 ? '#F4D03F' : '#14BDAC') : 'transparent' }}>
                        {checked ? <div className="h-2 w-2 rounded-full" style={{ background: '#05383b' }} /> : null}
                      </div>
                      <div className="h-2.5 flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.22)' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="absolute right-2 top-28 w-[140px] rounded-[22px] border p-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(244,208,63,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                  borderColor: 'rgba(255,255,255,0.16)',
                  boxShadow: '0 12px 28px rgba(7,47,50,0.22)',
                }}
              >
                <div className="mb-3 h-3 w-16 rounded-full" style={{ background: 'rgba(255,255,255,0.26)' }} />
                <div className="flex items-end gap-2 h-20">
                  <div className="w-5 rounded-t-md" style={{ height: '42%', background: '#14BDAC' }} />
                  <div className="w-5 rounded-t-md" style={{ height: '68%', background: '#F4D03F' }} />
                  <div className="w-5 rounded-t-md" style={{ height: '54%', background: '#2ECC71' }} />
                  <div className="w-5 rounded-t-md" style={{ height: '82%', background: '#ffffff' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2" style={{ color: '#1A2332' }}>Administration</h4>
            <p className="text-sm md:text-base max-w-3xl" style={{ color: '#718096', lineHeight: '1.8' }}>
              The survey was distributed to a targeted group of active Greentech Alliance members to gather early insight into engagement, perceived value, and premium membership potential.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Target Group', 'The survey was directed to approximately 285 active Greentech Alliance members within one of the community’s most engaged WhatsApp groups.', <Users size={20} color="white" />, '#0D7377'],
              ['Survey Lead', 'Charles Newton Price shared the survey through the Alliance’s own member channel, helping maintain trust and a more natural distribution path.', <MessageSquare size={20} color="white" />, '#14BDAC'],
              ['Responses', '23 responses were collected, though some respondents were founders or internal members rather than external community participants alone.', <BarChart2 size={20} color="white" />, '#2ECC71'],
              ['Participation', 'Participation was voluntary, allowing the team to gather early directional insight into engagement, value perception, and paid membership potential.', <Target size={20} color="#1A2332" />, '#F4D03F'],
            ].map(([title, body, icon, color]) => (
              <div
                key={title as string}
                className="card-hover rounded-[24px] border p-5 bg-white overflow-hidden relative"
                style={{
                  background: `linear-gradient(160deg, rgba(255,255,255,0.99) 0%, ${color as string}0A 100%)`,
                  borderColor: `${color as string}22`,
                  boxShadow: '0 14px 30px rgba(16,39,52,0.07)',
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: `linear-gradient(90deg, ${color as string} 0%, ${color as string}bb 100%)` }} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-[14px] flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${color as string} 0%, ${color as string}cc 100%)`, boxShadow: `0 12px 22px ${color as string}30` }}>
                    {icon as ReactNode}
                  </div>
                  <p className="font-bold" style={{ color: '#1A2332' }}>{title}</p>
                </div>
                <p className="text-sm" style={{ color: '#5B6878', lineHeight: '1.75' }}>{body}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="reveal mb-10">
          <div className="mx-auto flex max-w-5xl items-center gap-4">
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.04), rgba(13,115,119,0.28), rgba(13,115,119,0.04))' }} />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border" style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(13,115,119,0.16)', boxShadow: '0 6px 14px rgba(13,115,119,0.08)' }}>
              <Leaf size={18} style={{ color: '#0D7377' }} />
            </div>
            <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.04), rgba(13,115,119,0.28), rgba(13,115,119,0.04))' }} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2" style={{ color: '#1A2332' }}>Survey Questions</h4>
              <p className="text-sm md:text-base max-w-3xl" style={{ color: '#718096', lineHeight: '1.8' }}>
                The survey focused on mission alignment, current engagement, willingness to pay, and the types of value members would find most meaningful.
              </p>
            </div>

            <div className="space-y-4">
              {surveyQuestions.map((question) => {
                const isOpen = openQuestion === question.id
                return (
                  <div
                    key={question.id}
                    className="card-hover rounded-[24px] border bg-white overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(160deg, rgba(255,255,255,0.99) 0%, rgba(242,249,248,0.96) 100%)',
                      borderColor: isOpen ? 'rgba(13,115,119,0.18)' : '#E8ECEF',
                      boxShadow: isOpen ? '0 16px 34px rgba(13,115,119,0.12)' : '0 10px 24px rgba(16,39,52,0.05)',
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1" style={{ background: isOpen ? 'linear-gradient(90deg, #0D7377 0%, #14BDAC 100%)' : 'linear-gradient(90deg, rgba(13,115,119,0.18) 0%, rgba(20,189,172,0.16) 100%)' }} />
                    <button className="w-full flex items-start gap-4 px-5 py-5 text-left" onClick={() => setOpenQuestion(isOpen ? null : question.id)}>
                      <div className="min-w-[52px] h-[52px] rounded-xl flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(20,189,172,0.08) 100%)', color: '#0D7377', fontFamily: 'Space Mono, monospace', fontWeight: 700 }}>
                        Q{question.number}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="font-semibold" style={{ color: '#1A2332', lineHeight: '1.65' }}>{question.text}</p>
                      </div>
                      <div className="pt-2" style={{ color: '#9CA3AF' }}>
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>
                    {isOpen ? (
                      <div className="px-5 pb-5">
                        <div className="ml-[68px] rounded-[18px] border px-4 py-4" style={{ borderColor: 'rgba(13,115,119,0.1)', background: 'linear-gradient(135deg, rgba(248,250,251,1) 0%, rgba(240,248,247,1) 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)' }}>
                          <p className="text-sm" style={{ color: '#4A5568', lineHeight: '1.75' }}>
                            {question.detail || 'This question was included to help validate assumptions around engagement, value delivery, and the transition toward a premium membership model.'}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="reveal mb-10">
            <div className="mx-auto flex max-w-5xl items-center gap-4">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.04), rgba(13,115,119,0.28), rgba(13,115,119,0.04))' }} />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border" style={{ background: 'rgba(255,255,255,0.7)', borderColor: 'rgba(13,115,119,0.16)', boxShadow: '0 6px 14px rgba(13,115,119,0.08)' }}>
                <Leaf size={18} style={{ color: '#0D7377' }} />
              </div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.04), rgba(13,115,119,0.28), rgba(13,115,119,0.04))' }} />
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-2" style={{ color: '#1A2332' }}>Results Overview</h4>
              <p className="text-sm md:text-base max-w-4xl" style={{ color: '#718096', lineHeight: '1.8' }}>
                The findings revealed strong mission alignment, low ongoing engagement, and interest in premium value, but also hesitation around immediate paid conversion.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 mb-10 items-stretch">
              {[
                ['Strong Mission Alignment', '18 of 23 respondents said they align “very strongly” with Greentech Alliance’s sustainability mission, while 4 said “strongly.”'],
                ['Limited Ongoing Engagement', 'Most respondents do not engage frequently in alliance communication channels. The largest group selected “rarely” (6), while only 5 selected “daily.”'],
                ['Premium Interest Exists', '13 of 23 respondents said they would consider joining an enhanced premium membership, while 8 were unsure and 2 said no.'],
                ['Value Is Outcome-Driven', 'Members showed the strongest interest in curated partner introductions, exclusive events, investor access, mentorship, and fundraising-related support.'],
              ].map(([title, body]) => (
                <div
                  key={title as string}
                  className="card-hover rounded-[26px] border p-6 bg-white h-full overflow-hidden relative"
                  style={{
                    background: 'linear-gradient(160deg, rgba(255,255,255,0.99) 0%, rgba(240,248,247,0.96) 100%)',
                    borderColor: 'rgba(13,115,119,0.1)',
                    boxShadow: '0 14px 30px rgba(16,39,52,0.06)',
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #14BDAC 45%, #2ECC71 100%)' }} />
                  <p className="font-bold mb-2" style={{ color: '#1A2332' }}>{title}</p>
                  <p className="text-sm" style={{ color: '#5B6878', lineHeight: '1.75' }}>{body}</p>
                </div>
              ))}
            </div>

            <div
              className="survey-feature-banner rounded-[32px] p-7 md:p-8 mb-10"
              style={{
                background: 'linear-gradient(135deg, #0c4d50 0%, #0d6d72 54%, #167d62 100%)',
                boxShadow: '0 20px 44px rgba(13,115,119,0.16)',
              }}
            >
              <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr] xl:items-start min-h-[500px]">
                <div>
                  <div className="mb-6">
                    <h5 className="text-[1.35rem] font-bold mb-2" style={{ color: '#ffffff' }}>Most Valued Features</h5>
                    <p className="text-sm md:text-[15px]" style={{ color: 'rgba(255,255,255,0.84)', lineHeight: '1.85' }}>
                      The strongest signals point toward high-value, outcome-oriented benefits rather than generic community access.
                    </p>
                  </div>
                  <p className="font-semibold mb-4 text-sm md:text-[15px]" style={{ color: '#F4D03F' }}>
                    For business growth, the <span style={{ color: '#FFF4C3' }}>highest-ranked items</span> were:
                  </p>
                  <div className="space-y-3 text-sm md:text-[15px]" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
                    <p><span style={{ color: '#F4D03F', fontWeight: 700 }}>01</span> Exclusive industry events & networking opportunities</p>
                    <p><span style={{ color: '#F4D03F', fontWeight: 700 }}>02</span> Feature opportunities on Alliance channels (spotlights, articles)</p>
                    <p><span style={{ color: '#F4D03F', fontWeight: 700 }}>03</span> Access to investor introductions / capital partners</p>
                    <p><span style={{ color: '#F4D03F', fontWeight: 700 }}>04</span> Workshops, masterclasses, or mentorship programs</p>
                    <p><span style={{ color: '#F4D03F', fontWeight: 700 }}>05</span> Access to specialized resources for impact reporting or climate science validation</p>
                  </div>
                </div>

                <div className="survey-feature-card h-full flex self-stretch">
                  <StatColumns
                    title="Most Valuable Services & Opportunities"
                    badge="Mentorship leads the demand"
                    rows={servicePreferences}
                    colors={['#F4D03F', '#2ECC71', '#14BDAC', '#8ED8B4', '#BDEADD', '#DDE8E7']}
                  />
                </div>

                <div className="survey-feature-card xl:col-span-2">
                  <ResultBars
                    title="Membership Feature Preferences"
                    badge="Top feature: Partner introductions"
                    rows={featurePreferences}
                    accent="#F4D03F"
                    badgeStyle={{ background: 'rgba(244,208,63,0.16)', color: '#8B6B00' }}
                    trackColor="#F4F7F7"
                    rowColors={['#F4D03F', '#E8C53A', '#D6B335', '#CBA82F', '#B89728']}
                    highlightLabel="Curated partner introductions"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <div className="grid gap-5 lg:grid-cols-2 items-stretch">
                <ResultBars
                  title="Mission Alignment"
                  badge="78% strongly align"
                  rows={missionAlignment}
                  accent="#0D7377"
                  badgeStyle={{ background: 'rgba(13,115,119,0.10)', color: '#0A5C60' }}
                  trackColor="#EAF0F1"
                  rowColors={['#0D7377', '#14BDAC', '#BFD8D8', '#D9E8E8', '#E8ECEF']}
                  highlightLabel="Very strongly"
                />
                <ResultBars
                  title="Communication Platform Usage"
                  badge="Engagement is mostly occasional"
                  rows={platformUsage}
                  accent="#14BDAC"
                  badgeStyle={{ background: 'rgba(20,189,172,0.12)', color: '#0D7377' }}
                  trackColor="#EAF0F1"
                  rowColors={['#8ED8D1', '#7DD0C8', '#BFE7E2', '#6DC8C0', '#14BDAC', '#DCE8EA']}
                  highlightLabel="Rarely"
                />
              </div>

              <div className="grid gap-5 lg:grid-cols-2 items-stretch">
                <StatDonut
                  title="Interest in Premium Membership"
                  badge="57% would join"
                  rows={premiumInterest}
                  colors={['#2ECC71', '#E8ECEF', '#A7DFAE']}
                  centerLabel="Share saying"
                />
                <ResultBars
                  title="Likely Behaviour if Platform Becomes Paid"
                  badge="Most would consider joining"
                  rows={paidBehavior}
                  accent="#0D7377"
                  badgeStyle={{ background: 'rgba(13,115,119,0.10)', color: '#0A5C60' }}
                  trackColor="#EDF2F3"
                  rowColors={['#70D2C7', '#0D7377', '#A7D8D8', '#DCE6E8', '#E8ECEF']}
                  highlightLabel="Consider joining"
                />
              </div>

              <div className="grid gap-5 lg:grid-cols-2 items-stretch">
                <ResultBars
                  title="Willingness to Pay"
                  badge="Price sensitivity is high"
                  rows={willingnessToPay}
                  accent="#F4D03F"
                  badgeStyle={{ background: 'rgba(244,208,63,0.18)', color: '#8B6B00' }}
                  trackColor="#F7F1D8"
                  rowColors={['#F4D03F', '#E9BE2D', '#DDAF22', '#D09F19', '#C78F12']}
                  highlightLabel="Less than 100 USD annually"
                />

                <StatGridCard
                  title="Company Revenue Snapshot"
                  badge="Directional context only"
                  description="Only 10 respondents answered this question, so this serves as directional context rather than a complete financial profile."
                  stats={[
                    ['Mean', '2,434,000'],
                    ['Median', '450,000'],
                    ['Min', '0'],
                    ['Max', '20,000,000'],
                  ]}
                  rangeText="Min-Max: 0 to 20,000,000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Conversion Study Section ──────────────────────────────────────────
function ConversionSection() {
  const steps = [
    {
      number: '01',
      title: 'Focus on the Right Members',
      text: 'Not everyone will pay. Start with the most engaged 20% and focus first on members most likely to convert.',
      icon: <UserCheck size={18} />,
      color: '#0D7377',
    },
    {
      number: '02',
      title: 'Build Real Premium Value',
      text: 'Paid membership should offer direct access, exclusive opportunities, and a high-quality curated network — not more content, but better outcomes.',
      icon: <Crown size={18} />,
      color: '#F4D03F',
    },
    {
      number: '03',
      title: 'Start Small (Founding Members)',
      text: 'Launch with top users first, offer early pricing, and build exclusivity before expanding more broadly.',
      icon: <Rocket size={18} />,
      color: '#2ECC71',
    },
    {
      number: '04',
      title: 'Improve Platform Experience',
      text: 'Success depends on organized content, better interaction design, and clear member journeys across the platform.',
      icon: <RouteIcon size={18} />,
      color: '#14BDAC',
    },
    {
      number: '05',
      title: 'Use Free as a Funnel',
      text: 'The free community should show success stories, preview premium value, and create curiosity: free attracts, paid transforms.',
      icon: <Funnel size={18} />,
      color: '#1A5F7A',
    },
  ]

  const stats = [
    { label: 'Conversion benchmark', value: '2–8%', note: 'Typical range for open-to-paid community conversion' },
    { label: 'Time to first value', value: '< 7 days', note: 'Critical window to deliver a meaningful early win' },
    { label: 'Churn risk without value prop', value: '3× higher', note: 'Poor differentiation sharply increases early drop-off' },
  ]

  return (
    <section id="conversion" className="section-pad bg-[#E4F0F0]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Conversion Study"
          subtitle=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-6 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            Launch Readiness{' '}
            <span style={{ color: '#0D7377' }}>& Path to Conversion.</span>
          </h3>
        </div>

        <p className="reveal max-w-4xl mx-auto mb-10 text-center text-sm md:text-base" style={{ color: '#718096', lineHeight: '1.85' }}>
          This section examines what may happen if Greentech Alliance launches the platform as it is today, and the key conditions needed to support stronger conversion and long-term success.
        </p>

        <div
          className="reveal max-w-4xl rounded-[24px] border-l-4 px-6 py-6 md:px-8 md:py-7 mb-12"
          style={{
            borderColor: '#0D7377',
            background: 'linear-gradient(90deg, rgba(13,115,119,0.12) 0%, rgba(20,189,172,0.08) 48%, rgba(228,240,240,0.85) 82%, rgba(228,240,240,0) 100%)',
          }}
        >
          <p className="text-[15px] md:text-[17px]" style={{ color: '#1A2332', lineHeight: '1.9' }}>
            After identifying low engagement as a critical barrier, our team conducted a conversion study to understand how Greentech Alliance can successfully transition from a free to a paid model.
          </p>
          <p className="text-[15px] md:text-[17px] mt-3" style={{ color: '#355061', lineHeight: '1.9' }}>
            Our objective was not only to understand conversion rates, but to use these insights to guide our final recommendations on pricing and the launch strategy of the new platform - <strong>Mighty Networks</strong>.
          </p>
        </div>

        <div className="mb-7">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#1A2332' }}>Turning Engagement into Conversion</h3>
        </div>

        <div className="relative mb-12">
          <div
            className="hidden xl:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(13,115,119,0.10), rgba(13,115,119,0.4), rgba(13,115,119,0.12))' }}
          />

          <div className="space-y-5 md:space-y-6">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${Math.min(index + 1, 5)} grid gap-4 items-center xl:grid-cols-[1fr_88px_1fr]`}
                >
                  <div className={`hidden xl:flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    {isLeft ? (
                      <div
                        className="card-hover w-full max-w-[520px] rounded-[24px] border p-5 bg-white h-full"
                        style={{
                          borderColor: '#E3EAED',
                          boxShadow: '0 10px 24px rgba(16,39,52,0.05)',
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="inline-flex h-9 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-bold"
                            style={{ background: `${step.color}18`, color: step.color }}
                          >
                            {step.number}
                          </span>
                          <h4 className="text-base md:text-[17px] font-bold" style={{ color: step.color, lineHeight: '1.35' }}>{step.title}</h4>
                        </div>
                        <p className="text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>{step.text}</p>
                      </div>
                    ) : (
                      <div className="w-full max-w-[420px]" />
                    )}
                  </div>

                  <div
                    className="card-hover rounded-[24px] border p-5 bg-white h-full xl:hidden"
                    style={{
                      borderColor: '#E3EAED',
                      boxShadow: '0 10px 24px rgba(16,39,52,0.05)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex h-9 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-bold"
                        style={{ background: `${step.color}18`, color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h4 className="text-base md:text-[17px] font-bold" style={{ color: step.color, lineHeight: '1.35' }}>{step.title}</h4>
                    </div>
                    <p className="text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>{step.text}</p>
                  </div>

                  <div className="hidden xl:flex items-center justify-center h-full xl:col-start-2">
                    <div className="relative flex h-full min-h-[116px] items-center justify-center">
                      <div
                        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
                        style={{ background: 'linear-gradient(180deg, rgba(13,115,119,0.12), rgba(13,115,119,0.45), rgba(13,115,119,0.12))' }}
                      />
                      <div
                        className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border bg-white"
                        style={{ borderColor: 'rgba(13,115,119,0.16)', boxShadow: '0 8px 18px rgba(13,115,119,0.08)' }}
                      >
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full"
                          style={{ background: `${step.color}18`, color: step.color }}
                        >
                          {step.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`hidden xl:flex ${!isLeft ? 'justify-start' : 'justify-end'}`}>
                    {!isLeft ? (
                      <div
                        className="card-hover w-full max-w-[520px] rounded-[24px] border p-5 bg-white h-full"
                        style={{
                          borderColor: '#E3EAED',
                          boxShadow: '0 10px 24px rgba(16,39,52,0.05)',
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="inline-flex h-9 min-w-[52px] items-center justify-center rounded-full px-3 text-xs font-bold"
                            style={{ background: `${step.color}18`, color: step.color }}
                          >
                            {step.number}
                          </span>
                          <h4 className="text-base md:text-[17px] font-bold" style={{ color: step.color, lineHeight: '1.35' }}>{step.title}</h4>
                        </div>
                        <p className="text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>{step.text}</p>
                      </div>
                    ) : (
                      <div className="w-full max-w-[420px]" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="reveal rounded-[28px] px-6 py-8 md:px-10 md:py-10 mb-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #0A5C60 0%, #0D7377 58%, #157B63 100%)',
            boxShadow: '0 18px 38px rgba(13,115,119,0.16)',
          }}
        >
          <p className="text-sm uppercase tracking-[0.18em] mb-3" style={{ color: 'rgba(255,255,255,0.74)' }}>
            One key insight emerged from our research
          </p>
          <p className="text-xl md:text-2xl font-bold mb-3" style={{ color: '#ffffff', lineHeight: '1.5' }}>
            <strong>Conversion is not driven by access — it is driven by perceived value and outcomes.</strong>
          </p>
          <p className="text-[15px] md:text-base max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.86)', lineHeight: '1.9' }}>
            Through our research, we identified what drives paid membership adoption and used those insights to align pricing and platform migration with member behaviour and expectations.
          </p>
        </div>

        <div className="mb-7 text-center">
          <h3 className="text-xl md:text-2xl font-bold" style={{ color: '#1A2332' }}>How Success Would Look Like</h3>
        </div>

        <div
          className="relative rounded-[30px] p-4 md:p-6 mb-14"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(245,249,249,0.92) 100%)',
            border: '1px solid rgba(13,115,119,0.08)',
            boxShadow: '0 14px 34px rgba(16,39,52,0.05)',
          }}
        >
        <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <div className="relative flex h-[260px] w-12 items-center justify-center">
              <div
                className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
                style={{ background: 'linear-gradient(180deg, rgba(13,115,119,0.08), rgba(13,115,119,0.28), rgba(239,68,68,0.18))' }}
              />
              <div
                className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border bg-white text-xs font-bold"
                style={{ borderColor: 'rgba(13,115,119,0.16)', color: '#0D7377', boxShadow: '0 10px 24px rgba(13,115,119,0.10)' }}
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(20,189,172,0.10) 100%)' }}
                >
                  VS
                </span>
              </div>
            </div>
          </div>

          <div className="reveal reveal-left card-hover rounded-[24px] p-7 border" style={{ borderColor: '#86efac', background: 'linear-gradient(135deg, #f2fcf6 0%, #ebfaf1 100%)', boxShadow: '0 10px 24px rgba(39,174,96,0.08)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#27ae60' }}>
                <TrendingUp size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>If Done Right</h3>
            </div>
            <p className="text-sm mb-5" style={{ color: '#4C6B5A', lineHeight: '1.8' }}>
              Members experience visible value and stronger reasons to engage.
            </p>
            <ul className="space-y-4">
              {[
                ['Active member engagement', 'Signals momentum and stronger participation.'],
                ['Value becomes visible', 'Members can clearly recognize what the platform delivers.'],
                ['Stronger relationships', 'Trust and collaboration deepen over time.'],
                ['Paid membership feels worth it', 'The offer feels justified because outcomes are clear.'],
              ].map(([lead, rest], index) => (
                <li
                  key={lead}
                  className="flex gap-3 text-sm rounded-[18px] px-4 py-4"
                  style={{
                    color: '#3E5B4A',
                    lineHeight: '1.85',
                    background: index === 3 ? 'rgba(46,204,113,0.12)' : 'rgba(255,255,255,0.58)',
                    border: index === 3 ? '1px solid rgba(46,204,113,0.24)' : '1px solid rgba(39,174,96,0.10)',
                  }}
                >
                  <span className="mt-1 flex-shrink-0" style={{ color: '#27ae60' }}><CheckCircle2 size={17} /></span>
                  <span
                    style={
                      index === 3
                        ? {
                            color: '#1B8F52',
                            fontWeight: 800,
                            fontSize: '1rem',
                            background: 'rgba(46,204,113,0.10)',
                            borderRadius: '999px',
                            padding: '0',
                            display: 'inline-block',
                          }
                        : undefined
                    }
                  >
                    <strong>{lead}</strong> {index === 3 ? '' : ` ${rest}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-right card-hover rounded-[24px] p-7 border" style={{ borderColor: '#f3b3b3', background: 'linear-gradient(135deg, #fff7f7 0%, #fff2f2 100%)', boxShadow: '0 10px 24px rgba(239,68,68,0.07)' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#ef4444' }}>
                <Shield size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>If Not</h3>
            </div>
            <p className="text-sm mb-5" style={{ color: '#7B5A5A', lineHeight: '1.8' }}>
              Low engagement continues and conversion remains weak.
            </p>
            <ul className="space-y-4">
              {[
                ['Members stay passive', 'Activity remains limited and momentum stalls.'],
                ['Value remains unclear', 'The platform feels accessible but not compelling.'],
                ['Paid model struggles', 'Conversion becomes difficult without visible reasons to upgrade.'],
              ].map(([lead, rest]) => (
                <li
                  key={lead}
                  className="flex gap-3 text-sm rounded-[18px] px-4 py-4 min-h-[78px]"
                  style={{
                    color: '#6D4B4B',
                    lineHeight: '1.85',
                    background: 'rgba(255,255,255,0.62)',
                    border: '1px solid rgba(239,68,68,0.10)',
                  }}
                >
                  <span className="mt-1 flex-shrink-0" style={{ color: '#ef4444' }}><AlertTriangle size={17} /></span>
                  <span><strong>{lead}</strong> {` ${rest}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>

      </div>
    </section>
  )
}

// ─── Membership & Pricing Section ─────────────────────────────────────
function MembershipSection() {
  const cards = [
    {
      name: 'Programs & Experiences',
      sub: 'Optional Value Expansion',
      color: '#14BDAC',
      featured: false,
      desc: 'Beyond membership, Greentech Alliance offers optional programs that deepen value and create meaningful outcomes.',
      features: [
        'Workshops, training sessions, and masterclasses',
        'Curated events and industry experiences',
        'Mix of free and paid opportunities',
        'Reinvests into the platform without raising membership cost',
      ],
      valueLabel: 'WHY THIS MATTERS',
      valueTag: 'Drives deeper engagement and perceived value',
      icon: <UsersRound size={22} />,
    },
    {
      name: 'One Core Membership Model',
      sub: 'Accessible • Commitment-Based',
      color: '#0D7377',
      featured: true,
      desc: 'A single membership providing equal access to the Greentech Alliance network — built on trust, engagement, and shared value.',
      features: [
        'Full access to the core network',
        'Access to events and collaboration',
        'Clear and accessible entry point',
        'Signals commitment without barriers',
      ],
      valueLabel: 'CORE BENEFIT',
      valueTag: 'Ensures fairness, clarity, and accessibility',
      icon: <BadgeDollarSign size={22} />,
    },
    {
      name: 'Ecosystem Partnerships',
      sub: 'Strategic Support',
      color: '#2ECC71',
      featured: false,
      desc: 'Strategic partnerships help strengthen the platform and expand opportunities across the ecosystem.',
      features: [
        'Collaboration with ecosystem partners and institutions',
        'Support for programs, research, and initiatives',
        'Strengthens long-term platform sustainability',
        'Keeps membership focused on participation, not monetization',
      ],
      valueLabel: 'STRATEGIC IMPACT',
      valueTag: 'Enables growth through collaboration and support',
      icon: <Handshake size={22} />,
    },
  ]

  return (
    <section id="membership" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Membership & Pricing"
          subtitle=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-6 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            Membership Structure{' '}
            <span style={{ color: '#0D7377' }}>& Strategic Pricing.</span>
          </h3>
        </div>

        <div
          className="reveal rounded-[30px] px-8 py-10 md:px-12 md:py-12 mb-12"
          style={{
            background: 'linear-gradient(180deg, rgba(234,246,245,0.92) 0%, rgba(240,249,246,0.98) 100%)',
            border: '1px solid rgba(13,115,119,0.08)',
            boxShadow: '0 16px 34px rgba(16,39,52,0.05)',
          }}
        >
          <div className="mb-5 h-1.5 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #14BDAC 100%)' }} />
          <h3
            className="text-2xl md:text-3xl mb-8"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            Designed for Sustainable Growth
          </h3>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                [
                  'What we explored',
                  'A tiered membership model was initially explored based on common competitor practices and value segmentation strategies.',
                  '#14BDAC',
                  <Search size={18} />,
                ],
                [
                  'What changed',
                  'After aligning with the industry partner, the preferred direction became a single base membership that ensures equal access to the core network.',
                  '#0D7377',
                  <RefreshCw size={18} />,
                ],
                [
                  'What this means',
                  'Additional value is delivered through optional programs, events, and partnerships rather than multiple pricing tiers.',
                  '#2ECC71',
                  <Network size={18} />,
                ],
              ].map(([label, body, accent, icon]) => (
                <div
                  key={label as string}
                  className="card-hover rounded-[22px] px-5 py-5 bg-white"
                  style={{
                    borderTop: `3px solid ${accent as string}`,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                      style={{ background: `${accent as string}14`, color: accent as string }}
                    >
                      {icon as ReactNode}
                    </div>
                    <p
                      className="text-sm md:text-[15px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap"
                      style={{ color: '#0D7377', lineHeight: '1.35', fontFamily: 'Space Mono, monospace' }}
                    >
                      {label as string}
                    </p>
                  </div>
                  <p className="text-sm md:text-[15px]" style={{ color: '#355061', lineHeight: '1.85' }}>
                    {body as string}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-[24px] px-6 py-7 text-center"
              style={{
                background: 'linear-gradient(135deg, #0D7377 0%, #14BDAC 45%, #2ECC71 100%)',
                boxShadow: '0 18px 36px rgba(13,115,119,0.16)',
              }}
            >
              <p className="text-lg md:text-[20px] font-semibold" style={{ color: '#ffffff', lineHeight: '1.8' }}>
                Pricing should protect the value of the network while enabling sustainable growth.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <div
              key={card.name}
              className={`pricing-card card-hover reveal reveal-delay-${i + 1} bg-white border ${card.featured ? 'featured' : ''}`}
              style={{
                borderColor: card.featured ? card.color : '#E8ECEF',
                boxShadow: card.featured ? `0 10px 34px ${card.color}24` : i === 2 ? '0 2px 16px rgba(46,204,113,0.05)' : '0 2px 16px rgba(0,0,0,0.06)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: card.color }}>
                {card.icon}
              </div>
              {card.featured ? (
                <p
                  className="text-[11px] uppercase tracking-[0.18em] mb-3"
                  style={{ color: '#0D7377', fontFamily: 'Space Mono, monospace' }}
                >
                  Core Model
                </p>
              ) : null}
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1A2332' }}>{card.name}</h3>
              <p className="text-sm font-semibold mb-3" style={{ color: card.color }}>{card.sub}</p>
              {card.featured ? (
                <p
                  className="text-sm font-semibold mb-4"
                  style={{
                    color: '#0D7377',
                    background: 'linear-gradient(135deg, rgba(13,115,119,0.08) 0%, rgba(20,189,172,0.06) 100%)',
                    border: '1px solid rgba(13,115,119,0.10)',
                    borderRadius: '999px',
                    padding: '10px 14px',
                  }}
                >
                  Equal access. Clear value. No barriers.
                </p>
              ) : null}
              <p className="text-sm mb-6" style={{ color: '#718096', lineHeight: '1.75' }}>{card.desc}</p>
              <ul className="space-y-3 mb-7">
                {card.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm" style={{ color: '#4A5568' }}>
                    <CheckCircle2 size={16} style={{ color: card.color, flexShrink: 0, marginTop: '2px' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div
                className="mt-auto pt-5"
                style={{ borderTop: '1px solid rgba(148,163,184,0.18)' }}
              >
                <div
                  className="rounded-[16px] px-4 py-4"
                  style={{
                    background: card.featured
                      ? 'linear-gradient(135deg, rgba(13,115,119,0.08) 0%, rgba(20,189,172,0.06) 100%)'
                      : 'linear-gradient(135deg, rgba(248,250,251,0.98) 0%, rgba(242,247,247,0.96) 100%)',
                    border: '1px solid rgba(148,163,184,0.14)',
                  }}
                >
                  <p
                    className="text-[11px] uppercase tracking-[0.18em] mb-2"
                    style={{ color: card.color, fontFamily: 'Space Mono, monospace' }}
                  >
                    {card.valueLabel}
                  </p>
                  <p
                    className="text-sm md:text-[15px]"
                    style={{ color: '#4F6272', lineHeight: '1.7' }}
                  >
                    {card.valueTag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Trust', 'Members pay because they see value — not because they have to.', '#0D7377', <Shield size={16} />],
            ['Sustainability', 'Multiple revenue streams support long-term investment in the community.', '#2ECC71', <TrendingUp size={16} />],
            ['Fair & Accessible', 'Support behind the scenes keeps membership simple and accessible.', '#14BDAC', <Heart size={16} />],
          ].map(([title, body, color, icon], index) => (
            <div
              key={title as string}
              className={`reveal reveal-delay-${index + 1} rounded-[22px] border p-5 bg-white h-full text-center`}
              style={{ borderColor: '#E8ECEF', boxShadow: '0 8px 20px rgba(16,39,52,0.045)' }}
            >
              <div className="flex items-center justify-center gap-2 mb-3" style={{ color: color as string }}>
                {icon as ReactNode}
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: color as string }}>
                  {title as string}
                </p>
              </div>
              <p className="text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>{body as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Conclusion Section ────────────────────────────────────────────────
function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="section-pad"
      style={{
        background:
          'radial-gradient(circle at 12% 12%, rgba(20,189,172,0.13) 0, transparent 26%), radial-gradient(circle at 88% 14%, rgba(46,204,113,0.12) 0, transparent 22%), linear-gradient(180deg, #E8F6F1 0%, #DDF1EB 52%, #EAF6F2 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Conclusion"
          subtitle=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-5 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            What the Research{' '}
            <span style={{ color: '#0D7377' }}>Reveals</span>
          </h3>
        </div>

        <div
          className="reveal relative mb-12 overflow-hidden rounded-[34px] border border-white/20 px-7 py-8 md:px-9 md:py-10"
          style={{
            background:
              'radial-gradient(circle at 12% 18%, rgba(255,255,255,0.18) 0, transparent 28%), radial-gradient(circle at 88% 20%, rgba(255,255,255,0.12) 0, transparent 22%), linear-gradient(135deg, #0D7377 0%, #14919B 45%, #14BDAC 100%)',
            boxShadow: '0 18px 42px rgba(13,115,119,0.18)',
          }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-25">
            <div className="absolute right-10 top-10 h-28 w-28 rounded-full border border-white/40" />
            <div className="absolute right-24 top-28 h-16 w-16 rounded-full border border-white/35" />
            <div className="absolute bottom-8 right-12 h-24 w-24 rounded-full border border-white/30" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.95fr] lg:items-stretch">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                The Turning Point
              </p>
              <h3 className="text-2xl md:text-[32px] font-bold mb-4" style={{ color: '#ffffff', lineHeight: '1.2' }}>
                From Community Growth to Real Value
              </h3>
              <div className="space-y-4 text-sm md:text-[15px]" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.85' }}>
                <p>
                  Greentech Alliance has already built a global network of over 5,000 members across climate, technology, and policy.
                </p>
                <p className="font-semibold" style={{ color: '#ffffff' }}>
                  But the challenge has changed:
                </p>
                <div className="space-y-3">
                  {[
                    'It is no longer about getting people to join.',
                    'It is about giving them a reason to stay, engage, and eventually pay.',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full" style={{ background: '#F4D03F' }} />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[28px] px-6 py-6 md:px-7 md:py-7 backdrop-blur-sm" style={{ background: 'linear-gradient(135deg, rgba(242,250,248,0.96) 0%, rgba(230,245,240,0.94) 100%)', border: '1px solid rgba(255,255,255,0.38)', boxShadow: '0 12px 28px rgba(8,35,40,0.12)' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-3" style={{ color: '#0D7377' }}>
                Key Insight
              </p>
              <p className="text-base md:text-[19px] font-semibold" style={{ color: '#16313A', lineHeight: '1.7' }}>
                Founders do not yet clearly understand what members truly want, value, or are willing to pay for.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[
                  {
                    label: 'Current Risk',
                    text: 'Growth keeps expanding while member expectations remain unclear.',
                  },
                  {
                    label: 'Strategic Need',
                    text: 'Clarity on value must come before pricing, engagement, and conversion decisions.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border px-4 py-4"
                    style={{ borderColor: 'rgba(13,115,119,0.12)', background: 'rgba(255,255,255,0.75)' }}
                  >
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: '#0D7377' }}>
                      {item.label}
                    </p>
                    <p className="text-sm" style={{ color: '#3D5563', lineHeight: '1.7' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mb-12 items-stretch">
          {[
            {
              title: 'Engagement Reality',
              lines: [
                'Members are joining, but not actively participating.',
                'Conversations exist, but rarely lead to meaningful outcomes.',
                'Value is present — but not consistently experienced.',
              ],
              accent: 'linear-gradient(135deg, #0D7377 0%, #14BDAC 100%)',
              tint: 'linear-gradient(180deg, rgba(13,115,119,0.2) 0%, rgba(247,255,253,0.98) 42%, rgba(255,255,255,0.98) 100%)',
              badge: 'Observed Pattern',
              lineTint: 'linear-gradient(135deg, rgba(13,115,119,0.1) 0%, rgba(255,255,255,0.92) 100%)',
            },
            {
              title: 'The Value Gap',
              lines: [
                'The Alliance is operating on internal assumptions of value, rather than validated member behaviour.',
                'Different member groups have different needs — but the experience does not clearly reflect them.',
              ],
              accent: 'linear-gradient(135deg, #14919B 0%, #2ECC71 100%)',
              tint: 'linear-gradient(180deg, rgba(244,208,63,0.22) 0%, rgba(255,252,241,0.98) 40%, rgba(255,255,255,0.98) 100%)',
              badge: 'Strategic Friction',
              lineTint: 'linear-gradient(135deg, rgba(244,208,63,0.14) 0%, rgba(255,255,255,0.92) 100%)',
            },
            {
              title: 'Conversion Insight',
              lines: [
                'Free access drives growth, but not commitment.',
                'People do not pay for access — they pay for outcomes.',
              ],
              accent: 'linear-gradient(135deg, #2ECC71 0%, #14BDAC 100%)',
              tint: 'linear-gradient(180deg, rgba(46,204,113,0.2) 0%, rgba(248,255,251,0.98) 42%, rgba(255,255,255,0.98) 100%)',
              badge: 'Commercial Signal',
              lineTint: 'linear-gradient(135deg, rgba(46,204,113,0.12) 0%, rgba(255,255,255,0.92) 100%)',
            },
          ].map((card, index) => (
            <div
              key={card.title}
              className={`reveal reveal-delay-${index + 1} group relative flex h-full flex-col overflow-hidden rounded-[30px] border p-6 backdrop-blur-sm card-hover`}
              style={{
                boxShadow: '0 18px 40px rgba(16,39,52,0.09)',
                background: card.tint,
                borderColor: 'rgba(255,255,255,0.82)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: card.accent }} />
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full blur-2xl opacity-70" style={{ background: card.accent }} />
              <div className="relative mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#0D7377' }}>
                    {card.badge}
                  </p>
                  <h3 className="text-lg md:text-[21px] font-bold" style={{ color: '#1A2332', lineHeight: '1.35' }}>
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.85' }}>
                {card.lines.map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border px-4 py-3 backdrop-blur-sm"
                    style={{ borderColor: 'rgba(255,255,255,0.76)', background: card.lineTint }}
                  >
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal relative mb-12 overflow-hidden rounded-[34px] border p-7 md:p-9 backdrop-blur-sm"
          style={{
            boxShadow: '0 18px 40px rgba(16,39,52,0.08)',
            background:
              'radial-gradient(circle at 18% 20%, rgba(20,189,172,0.08) 0, transparent 24%), radial-gradient(circle at 84% 18%, rgba(46,204,113,0.08) 0, transparent 22%), linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(246,252,249,0.96) 100%)',
            borderColor: 'rgba(255,255,255,0.82)',
          }}
        >
          <div className="pointer-events-none absolute inset-y-10 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#0D7377]/25 to-transparent lg:block" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#0D7377]/10 bg-white text-xs font-semibold tracking-[0.18em] text-[#0D7377] lg:flex">
            VS
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
            <div className="rounded-[28px] border border-[#0D7377]/10 bg-gradient-to-br from-[#EAF8F7] via-white to-[#F7FDFC] p-6" style={{ boxShadow: '0 12px 26px rgba(16,39,52,0.06)' }}>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377 0%, #14BDAC 100%)' }}>
                  <AlertTriangle size={18} color="#fff" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#0D7377' }}>
                  What We Observed
                </p>
              </div>
              <div className="space-y-4 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>
                {[
                  'Low engagement levels',
                  'Limited participation in the survey',
                  'Weak connection between members and outcomes',
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-4 rounded-[20px] px-4 py-4" style={{ border: '1px solid rgba(13,115,119,0.08)', background: 'linear-gradient(135deg, rgba(13,115,119,0.1) 0%, rgba(255,255,255,0.98) 100%)' }}>
                    <div className="text-sm font-bold leading-none" style={{ color: '#14919B' }}>
                      0{idx + 1}
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-8" />

            <div className="rounded-[28px] border border-[#F4D03F]/15 bg-gradient-to-br from-[#FFF9E8] via-white to-[#FFFEF7] p-6" style={{ boxShadow: '0 12px 26px rgba(16,39,52,0.06)' }}>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #F4D03F 0%, #2ECC71 100%)' }}>
                  <CheckCircle2 size={18} color="#fff" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#B68A00' }}>
                  What Competitors Do Well
                </p>
              </div>
              <div className="space-y-4 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.8' }}>
                {[
                  'Deliver clear and structured value',
                  'Focus on outcomes such as funding, partnerships, and growth',
                  'Create intentional engagement systems',
                ].map((item, idx) => (
                  <div key={item} className="flex items-center gap-4 rounded-[20px] px-4 py-4" style={{ border: '1px solid rgba(244,208,63,0.14)', background: 'linear-gradient(135deg, rgba(244,208,63,0.14) 0%, rgba(255,255,255,0.98) 100%)' }}>
                    <div className="text-sm font-bold leading-none" style={{ color: '#B68A00' }}>
                      0{idx + 1}
                    </div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-[28px] px-6 py-6 md:px-7" style={{ background: 'linear-gradient(135deg, rgba(13,115,119,0.15) 0%, rgba(20,189,172,0.12) 45%, rgba(46,204,113,0.16) 100%)', border: '1px solid rgba(13,115,119,0.14)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)' }}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#0D7377' }}>
              What This Means
            </p>
            <p className="max-w-4xl text-base md:text-[18px] font-semibold" style={{ color: '#1A2332', lineHeight: '1.75' }}>
              Greentech Alliance is currently operating based on internal assumptions of value, rather than validated member behaviour.
            </p>
          </div>
        </div>

        <div
          className="reveal mb-12 rounded-[34px] border p-7 md:p-9 backdrop-blur-sm"
          style={{
            boxShadow: '0 18px 40px rgba(16,39,52,0.08)',
            background:
              'radial-gradient(circle at 18% 18%, rgba(13,115,119,0.1) 0, transparent 20%), radial-gradient(circle at 82% 16%, rgba(46,204,113,0.12) 0, transparent 18%), linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(243,251,248,0.96) 100%)',
            borderColor: 'rgba(255,255,255,0.82)',
          }}
        >
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#0D7377' }}>
              The Conversion Reality
            </p>
            <p className="mt-2 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.75' }}>
              One weak experience compounds into the next until conversion becomes increasingly unlikely.
            </p>
          </div>

          <div className="relative mb-6 hidden lg:block">
            <div className="absolute left-[12%] right-[12%] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#0D7377]/25 via-[#F4D03F]/30 to-[#2ECC71]/25" />
          </div>

          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-4">
            {[
              { step: '01', label: 'Low Engagement', tint: 'rgba(13,115,119,0.18)', accent: '#0D7377' },
              { step: '02', label: 'Low Value Experience', tint: 'rgba(244,208,63,0.2)', accent: '#D4A514' },
              { step: '03', label: 'Low Perceived Importance', tint: 'rgba(20,189,172,0.18)', accent: '#14BDAC' },
              { step: '04', label: 'Low Conversion', tint: 'rgba(46,204,113,0.18)', accent: '#2ECC71' },
            ].map((item, index, items) => (
              <Fragment key={item.label}>
                <div className="relative rounded-[24px] border border-white/70 px-5 py-5 text-left" style={{ boxShadow: '0 12px 26px rgba(16,39,52,0.06)', background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(246,252,249,0.96) 100%)' }}>
                  <div className="absolute left-5 top-0 h-1.5 w-16 rounded-b-full" style={{ background: item.accent }} />
                  <p className="rounded-2xl px-4 py-4 text-base font-bold" style={{ color: '#1A2332', lineHeight: '1.45', background: `linear-gradient(135deg, ${item.tint.replace('0.12', '0.22')} 0%, rgba(255,255,255,0.96) 100%)`, marginTop: '12px' }}>
                    {item.label}
                  </p>
                </div>
                {index < items.length - 1 && (
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0D7377]/12 bg-gradient-to-br from-white to-[#EAF8F7]" style={{ boxShadow: '0 10px 22px rgba(16,39,52,0.06)' }}>
                      <ArrowRight size={18} style={{ color: item.accent }} />
                    </div>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 lg:hidden">
            {[
              { step: '01', label: 'Low Engagement', tint: 'rgba(13,115,119,0.18)', accent: '#0D7377' },
              { step: '02', label: 'Low Value Experience', tint: 'rgba(244,208,63,0.2)', accent: '#D4A514' },
              { step: '03', label: 'Low Perceived Importance', tint: 'rgba(20,189,172,0.18)', accent: '#14BDAC' },
              { step: '04', label: 'Low Conversion', tint: 'rgba(46,204,113,0.18)', accent: '#2ECC71' },
            ].map((item, index, items) => (
              <Fragment key={item.label}>
                <div className="relative w-full max-w-[330px] rounded-[22px] border border-white/70 px-5 py-4 text-center" style={{ boxShadow: '0 10px 22px rgba(16,39,52,0.05)', background: 'linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(246,252,249,0.96) 100%)' }}>
                  <div className="absolute left-1/2 top-0 h-1.5 w-16 -translate-x-1/2 rounded-b-full" style={{ background: item.accent }} />
                  <p className="rounded-2xl px-4 py-4 text-base font-bold" style={{ color: '#1A2332', lineHeight: '1.45', background: `linear-gradient(135deg, ${item.tint.replace('0.12', '0.22')} 0%, rgba(255,255,255,0.96) 100%)`, marginTop: '12px' }}>
                    {item.label}
                  </p>
                </div>
                {index < items.length - 1 && (
                  <div className="flex h-8 items-center justify-center">
                    <ArrowDown size={20} style={{ color: '#0D7377' }} />
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <div className="mt-7 text-center">
            <p className="inline-flex max-w-3xl items-center justify-center rounded-full px-6 py-3 text-base md:text-[18px] font-semibold" style={{ color: '#1A2332', lineHeight: '1.7', background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(247,252,249,0.95) 100%)', border: '1px solid rgba(13,115,119,0.1)', boxShadow: '0 10px 22px rgba(16,39,52,0.05)' }}>
              If members do not clearly experience value, they will not invest in it.
            </p>
          </div>
        </div>

        <div
          className="reveal mb-12 rounded-[34px] border p-7 md:p-9 backdrop-blur-sm"
          style={{
            boxShadow: '0 18px 40px rgba(16,39,52,0.08)',
            background:
              'radial-gradient(circle at 15% 18%, rgba(13,115,119,0.1) 0, transparent 22%), radial-gradient(circle at 86% 20%, rgba(46,204,113,0.11) 0, transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(244,251,248,0.96) 100%)',
            borderColor: 'rgba(255,255,255,0.82)',
          }}
        >
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#0D7377' }}>
              The Real Gap
            </p>
            <p className="mt-2 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.75' }}>
              The barrier is not just participation, but whether the experience clearly reflects different member needs.
            </p>
          </div>

          <div className="relative mb-6 hidden md:block">
            <div className="absolute left-[26%] right-[26%] top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#0D7377]/20 via-[#F4D03F]/30 to-[#F4D03F]/20" />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Engagement',
                body: 'Most members are passive observers, not active participants.',
                accent: '#0D7377',
                bg: 'linear-gradient(135deg, rgba(13,115,119,0.12) 0%, rgba(255,255,255,0.96) 100%)',
                label: 'Participation Problem',
              },
              {
                title: 'Clarity',
                body: 'Different user groups such as startups, investors, and policymakers have different needs, but the experience does not clearly address them.',
                accent: '#F4D03F',
                bg: 'linear-gradient(135deg, rgba(244,208,63,0.16) 0%, rgba(255,255,255,0.96) 100%)',
                label: 'Experience Problem',
              },
            ].map((card) => (
              <div key={card.title} className="overflow-hidden rounded-[28px] border border-white/70 bg-white" style={{ boxShadow: '0 12px 28px rgba(16,39,52,0.07)' }}>
                <div className="relative px-6 pt-6">
                  <div className="absolute right-4 top-4 h-16 w-16 rounded-full blur-2xl opacity-50" style={{ background: card.accent }} />
                  <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: card.accent }}>
                    {card.label}
                  </p>
                  <div className="relative mb-4 flex items-center gap-3">
                    <div className="h-3 w-14 rounded-full" style={{ background: card.accent }} />
                    <h3 className="text-xl font-bold" style={{ color: '#1A2332' }}>{card.title}</h3>
                  </div>
                </div>
                <div className="mx-6 mb-6 rounded-[22px] px-5 py-5" style={{ color: '#5C6B78', lineHeight: '1.85', background: card.bg, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)' }}>
                  <p className="text-sm md:text-[15px]">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 text-center">
            <p className="inline-flex max-w-3xl items-center justify-center rounded-full px-6 py-3 text-base md:text-[18px] font-semibold" style={{ color: '#1A2332', lineHeight: '1.7', background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(247,252,249,0.95) 100%)', border: '1px solid rgba(13,115,119,0.1)', boxShadow: '0 10px 22px rgba(16,39,52,0.05)' }}>
              When value is not clear or personalised, it does not feel important.
            </p>
          </div>
        </div>

        <div
          className="reveal mb-12 rounded-[34px] border p-7 md:p-9 backdrop-blur-sm"
          style={{
            boxShadow: '0 18px 40px rgba(16,39,52,0.08)',
            background:
              'radial-gradient(circle at 16% 20%, rgba(13,115,119,0.1) 0, transparent 22%), radial-gradient(circle at 86% 18%, rgba(46,204,113,0.12) 0, transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(244,251,248,0.96) 100%)',
            borderColor: 'rgba(255,255,255,0.82)',
          }}
        >
          <div className="mb-6 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#0D7377' }}>
              How We Reached This Conclusion
            </p>
            <p className="text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.75' }}>
              Three different evidence streams pointed to the same strategic conclusion.
            </p>
          </div>

          <div className="relative mb-6 hidden md:block">
            <div className="absolute left-[18%] right-[18%] top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#0D7377]/20 via-[#14BDAC]/25 to-[#2ECC71]/20" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Competitor Analysis',
                body: 'Successful ecosystems are built around clear outcomes and structured value delivery.',
                accent: '#0D7377',
                tint: 'linear-gradient(180deg, rgba(13,115,119,0.18) 0%, rgba(255,255,255,0.98) 44%)',
              },
              {
                title: 'Survey Insights',
                body: 'Even in one of the most active groups, engagement was low, reinforcing that member involvement is limited.',
                accent: '#14BDAC',
                tint: 'linear-gradient(180deg, rgba(20,189,172,0.18) 0%, rgba(255,255,255,0.98) 44%)',
              },
              {
                title: 'Conversion Study',
                body: 'Without visible value and engagement, a transition from free to paid is unlikely to succeed.',
                accent: '#2ECC71',
                tint: 'linear-gradient(180deg, rgba(46,204,113,0.18) 0%, rgba(255,255,255,0.98) 44%)',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/70 p-6 card-hover"
                style={{ boxShadow: '0 12px 28px rgba(16,39,52,0.07)', background: step.tint }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full blur-2xl opacity-55" style={{ background: step.accent }} />
                <div className="absolute left-0 top-0 h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${step.accent} 0%, rgba(255,255,255,0) 100%)` }} />
                <div className="relative">
                  <div className="mb-4 flex items-center justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/80">
                      <CheckCircle2 size={19} style={{ color: step.accent }} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-lg md:text-[22px] font-bold" style={{ color: '#1A2332', lineHeight: '1.35' }}>{step.title}</h3>
                  <p className="rounded-2xl px-4 py-4 text-sm md:text-[15px]" style={{ color: '#5C6B78', lineHeight: '1.85', background: 'rgba(255,255,255,0.78)', border: '1px solid rgba(255,255,255,0.72)' }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-6 overflow-hidden rounded-[30px] px-6 py-7 md:px-8 text-center"
            style={{
              background:
                'radial-gradient(circle at 16% 24%, rgba(255,255,255,0.28) 0, transparent 18%), radial-gradient(circle at 84% 22%, rgba(255,255,255,0.22) 0, transparent 18%), linear-gradient(135deg, rgba(13,115,119,0.22) 0%, rgba(20,189,172,0.16) 45%, rgba(46,204,113,0.18) 100%)',
              border: '1px solid rgba(13,115,119,0.14)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)',
            }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#0D7377' }}>
              What This Revealed
            </p>
            <div className="mx-auto mb-4 h-1.5 w-20 rounded-full" style={{ background: 'linear-gradient(90deg, #0D7377 0%, #14BDAC 50%, #2ECC71 100%)' }} />
            <p className="max-w-5xl mx-auto text-lg md:text-[22px] font-semibold" style={{ color: '#16313A', lineHeight: '1.7' }}>
              The current strategy reflects what the organisation believes members want,
              <br className="hidden md:block" /> but not what members are clearly demonstrating through behaviour.
            </p>
          </div>
        </div>

        <div
          className="reveal relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden py-14 md:py-18"
          style={{
            background:
              'radial-gradient(circle at 14% 18%, rgba(255,255,255,0.08) 0, transparent 24%), radial-gradient(circle at 86% 16%, rgba(255,255,255,0.06) 0, transparent 22%), linear-gradient(135deg, #0A4E57 0%, #0D7377 30%, #14919B 58%, #1FAF8D 78%, #2ECC71 100%)',
            boxShadow: '0 24px 56px rgba(13,115,119,0.22)',
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/12" />
            <div className="absolute right-12 top-16 h-20 w-20 rounded-full border border-white/10" />
            <div className="absolute bottom-10 left-16 h-24 w-24 rounded-full border border-white/10" />
          </div>

          <div className="relative mx-auto max-w-6xl px-8 md:px-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>FINAL INSIGHT</p>
            <p className="max-w-5xl mx-auto mb-6 text-base md:text-[19px]" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.8' }}>
              As a team, we connected competitor analysis, survey findings, and conversion research to reach one clear conclusion.
            </p>

            <div className="mx-auto mb-8 max-w-4xl rounded-[28px] border px-6 py-6 text-left backdrop-blur-sm" style={{ borderColor: 'rgba(255,255,255,0.28)', background: 'linear-gradient(135deg, rgba(244,251,248,0.96) 0%, rgba(230,245,240,0.92) 100%)', boxShadow: '0 16px 30px rgba(7,42,46,0.12)' }}>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  'Successful ecosystems create visible outcomes.',
                  'Member engagement remained low, even in active groups.',
                  'Without visible value, paid conversion is unlikely.',
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] border px-5 py-4"
                    style={{ borderColor: 'rgba(13,115,119,0.12)', background: 'rgba(255,255,255,0.78)' }}
                  >
                    <div className="mb-3 h-1.5 w-12 rounded-full" style={{ background: '#0D7377' }} />
                    <p className="text-sm md:text-[15px]" style={{ color: '#3D5563', lineHeight: '1.8' }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[22px] border px-5 py-5 text-center" style={{ borderColor: 'rgba(13,115,119,0.12)', background: 'rgba(255,255,255,0.82)' }}>
                <p className="text-base md:text-[18px] font-semibold" style={{ color: '#16313A', lineHeight: '1.8' }}>
                  The current strategy reflects what the organization believes members want, but not what members are clearly demonstrating through behaviour.
                </p>
              </div>
            </div>

            <div className="mx-auto mb-7 h-px max-w-3xl bg-gradient-to-r from-transparent via-white/35 to-transparent" />

            <div className="mx-auto max-w-5xl">
              <p
                className="text-[1.45rem] md:text-[2.55rem]"
                style={{
                  color: '#ffffff',
                  fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif",
                  fontWeight: 800,
                  lineHeight: '1.18',
                  textShadow: '0 10px 24px rgba(7,42,46,0.18)',
                }}
              >
                Greentech Alliance{' '}
                <span style={{ color: 'rgba(255,244,195,0.98)' }}>risks</span>{' '}
                building its future on{' '}
                <span style={{ color: 'rgba(206,236,255,0.98)' }}>assumptions</span>{' '}
                <span style={{ color: 'rgba(255,244,195,0.98)' }}>not validated</span>{' '}
                by{' '}
                <span style={{ color: 'rgba(210,255,225,0.98)' }}>member behaviour.</span>
              </p>
            </div>
            <p className="mt-7 text-lg md:text-[22px] font-medium max-w-3xl mx-auto" style={{ color: 'rgba(233,255,244,0.92)', lineHeight: '1.75' }}>
              When value isn&apos;t clear or personal, it doesn&apos;t feel important.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Recommendations Section ───────────────────────────────────────────
function RecommendationsSection() {
  const recs = [
    {
      number: 1,
      color: '#0D7377',
      label: 'Understand Members First',
      title: 'Hire a Specialist',
      body: 'Bring in a dedicated professional, either internally or as a third party, to better understand member needs, expectations, and behaviours.',
      bulletsTitle: 'This should include:',
      detailGroups: [
        {
          title: 'Specialist Role',
          points: [
            'internal or third-party support',
            'member research and insight gathering',
          ],
        },
        {
          title: 'Strategic Focus',
          points: [
            'understanding member needs and expectations',
            'reducing internal bias in future decisions',
          ],
        },
      ],
      bodySecondary: 'This step reduces internal bias and ensures future decisions are grounded in real user insight rather than assumption.',
      outcomes: [
        'Deeper understanding of member needs and behaviours',
        'Clearer expectations across member groups',
        'Better evidence for future strategic decisions',
        'Reduced reliance on internal assumptions',
      ],
    },
    {
      number: 2,
      color: '#2ECC71',
      label: 'Redesign the Strategy',
      title: 'From Access to Value',
      body: 'Rebuild the strategy using validated insight. Define member segments, align value to each group, and create structured pathways to outcomes such as funding, partnerships, and growth.',
      bulletsTitle: 'This should include:',
      detailGroups: [
        {
          title: 'Strategy Design',
          points: [
            'clear member segmentation',
            'value aligned to different user groups',
          ],
        },
        {
          title: 'Outcome Pathways',
          points: [
            'structured paths to funding, partnerships, and growth',
            'a shift from connection alone to measurable results',
          ],
        },
      ],
      bodySecondary: 'The goal is to move from a network that connects people to an ecosystem that creates results.',
      outcomes: [
        'Clear member segmentation',
        'Value aligned to different user groups',
        'Stronger pathways to outcomes',
        'More structured and intentional strategy',
      ],
    },
    {
      number: 3,
      color: '#F4D03F',
      label: 'Build a Strong Marketing Foundation',
      title: 'Structured Marketing Plan',
      body: 'Develop a clear and consistent marketing plan that makes value visible and tangible.',
      bulletsTitle: 'This should include:',
      detailGroups: [
        {
          title: 'Value Proposition',
          points: [
            'clear, specific, and outcome-driven',
            'aligned with what members actually want',
          ],
        },
      ],
      closing: 'The goal is not only to promote the platform, but to clearly communicate why it matters.',
      outcomes: [
        'Clearer value proposition',
        'Stronger messaging foundation',
        'More consistent communication direction',
        'Better alignment between strategy and execution',
      ],
    },
    {
      number: 4,
      color: '#14BDAC',
      label: 'Activate the Plan',
      title: 'Tactics',
      body: 'Turn the strategy into visible action through targeted communication, engagement strategies, and content and experience design.',
      bulletsTitle: 'This should include:',
      detailGroups: [
        {
          title: 'Tactics',
          points: [
            'targeted communication',
            'engagement strategies',
            'content and experience design',
          ],
        },
      ],
      closing: 'The goal is to make value visible in ways members can quickly understand, experience, and respond to.',
      outcomes: [
        'More effective communication tactics',
        'Stronger engagement messaging',
        'Better visibility of member value',
        'More consistent execution across channels',
      ],
    },
  ]

  return (
    <section id="recommendations" className="section-pad bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Final Recommendations"
          subtitle=""
        />

        <div className="reveal px-8 pt-0 pb-2 md:px-14 md:pt-0 md:pb-4 max-w-6xl mx-auto -mt-8 mb-6 text-center">
          <h3
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.15]"
            style={{ color: '#1A2332', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
          >
            From Insight{' '}
            <span style={{ color: '#0D7377' }}>to Action</span>
          </h3>
        </div>

        <div
          className="reveal relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 py-10 md:py-12 mb-8 -mt-2"
          style={{
            background: 'linear-gradient(135deg, #05383b 0%, #0a5c60 48%, #0D7377 100%)',
            boxShadow: '0 30px 70px rgba(13,115,119,0.22), 0 10px 26px rgba(26,35,50,0.08)',
          }}
        >
          <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="mx-auto max-w-5xl">
              <p className="mb-3 text-sm md:text-[15px] font-semibold uppercase tracking-[0.22em]" style={{ color: 'rgba(255,255,255,0.76)' }}>
                Growth Alone Will Not Sustain Greentech Alliance
              </p>
              <div className="mx-auto mb-5 h-1.5 w-24 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.25) 0%, #F4D03F 50%, rgba(255,255,255,0.25) 100%)' }} />
              <h3 className="mx-auto max-w-4xl mb-6 text-2xl md:text-[2.2rem]" style={{ color: '#ffffff', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800, lineHeight: '1.25' }}>
                After analysing engagement, member behaviour, competitor strategies, and conversion dynamics, one conclusion became clear:
              </h3>
              <div
                className="mx-auto max-w-3xl rounded-[24px] border px-6 py-5 md:px-7 md:py-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.16)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <p className="text-lg md:text-[22px] font-extrabold" style={{ color: '#F4D03F', lineHeight: '1.45' }}>
                  Sustainable growth depends on delivering clear, experienced, and meaningful value to the right members.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal mb-10 rounded-[32px] border px-7 py-8 md:px-9 md:py-9 overflow-hidden relative" style={{ background: 'radial-gradient(circle at 12% 16%, rgba(244,208,63,0.12) 0, transparent 18%), radial-gradient(circle at 88% 18%, rgba(20,189,172,0.1) 0, transparent 18%), linear-gradient(135deg, rgba(255,250,238,0.9) 0%, rgba(244,251,248,0.94) 100%)', borderColor: 'rgba(13,115,119,0.1)', boxShadow: '0 14px 34px rgba(16,39,52,0.06)' }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: '#0D7377' }}>
            Translating Insight into Action
          </p>
          <p className="mx-auto max-w-3xl text-center text-base md:text-[17px]" style={{ color: '#1A2332', lineHeight: '1.9' }}>
            At this stage, our team focused on translating insight into action by turning the research into a clear, consistent, and sustainable path forward.
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3 lg:items-stretch">
              <div className="card-hover flex h-full flex-col rounded-[24px] border px-5 py-5" style={{ borderColor: 'rgba(13,115,119,0.1)', background: 'rgba(255,255,255,0.84)', boxShadow: '0 12px 28px rgba(16,39,52,0.06)' }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: 'rgba(13,115,119,0.1)', color: '#0D7377' }}>
                    <Users className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0D7377' }}>
                    How We Worked
                  </p>
                </div>
                <p className="text-sm md:text-[15px]" style={{ color: '#4A5568', lineHeight: '1.9' }}>
                  With guidance from our instructor, Jill, and through several in-person working sessions, we shaped a final strategy that brought together the perspectives of the full team.
                </p>
              </div>
              <div className="card-hover flex h-full flex-col rounded-[24px] border px-5 py-5" style={{ borderColor: 'rgba(13,115,119,0.1)', background: 'rgba(255,255,255,0.84)', boxShadow: '0 12px 28px rgba(16,39,52,0.06)' }}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: 'rgba(244,208,63,0.16)', color: '#D4A017' }}>
                    <Target className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0D7377' }}>
                    What We Focused On
                  </p>
                </div>
                <p className="text-sm md:text-[15px]" style={{ color: '#4A5568', lineHeight: '1.9' }}>
                  Rather than adding more analysis, we focused on what would be required to move forward with stronger member understanding, a clearer strategy, and better communication of value.
                </p>
              </div>
            <div className="card-hover flex h-full flex-col rounded-[24px] border px-5 py-5" style={{ borderColor: 'rgba(13,115,119,0.1)', background: 'rgba(255,255,255,0.88)', boxShadow: '0 12px 28px rgba(16,39,52,0.06)' }}>
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: 'rgba(46,204,113,0.12)', color: '#2ECC71' }}>
                  <Network className="h-5 w-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0D7377' }}>
                  Three Connected Priorities
                </p>
              </div>
              <ul className="space-y-3 text-sm md:text-[15px]" style={{ color: '#4A5568', lineHeight: '1.8' }}>
                {[
                  'Strengthening member understanding',
                  'Refining the strategy',
                  'Ensuring value is clearly defined and effectively communicated',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full shrink-0" style={{ background: '#0D7377' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-[24px] border px-5 py-5 text-center" style={{ borderColor: 'rgba(13,115,119,0.12)', background: 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(229,248,243,0.86) 100%)', boxShadow: '0 10px 24px rgba(16,39,52,0.05)' }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: '#0D7377' }}>
              Why This Matters
            </p>
            <p className="mx-auto mt-2 max-w-3xl font-semibold text-base md:text-[18px]" style={{ color: '#1A2332', lineHeight: '1.75' }}>
              These are not separate initiatives, but interdependent steps in a more structured, value-driven path forward.
            </p>
          </div>
        </div>

        <div className="reveal mb-8 rounded-[30px] border border-white/70 bg-white/92 p-7 text-center overflow-hidden relative" style={{ boxShadow: '0 12px 28px rgba(16,39,52,0.06)' }}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: '#0D7377' }}>
            Strategic Shift
          </p>
          <div className="relative mx-auto flex max-w-4xl flex-col items-center justify-center gap-5 text-lg font-bold md:flex-row md:gap-6 md:text-[24px]" style={{ color: '#1A2332', lineHeight: '1.4' }}>
            <div className="flex flex-col items-center gap-2 md:flex-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: 'rgba(74,85,104,0.7)' }}>
                From
              </span>
              <span className="rounded-full px-4 py-2 md:px-5" style={{ color: 'rgba(74,85,104,0.95)', background: 'rgba(13,115,119,0.05)' }}>
                From assumption-driven decisions
              </span>
            </div>
            <div className="relative flex items-center justify-center py-1 md:px-2">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#14BDAC]/45 to-transparent md:w-40" />
              <span
                className="relative flex h-14 w-14 items-center justify-center rounded-full border text-2xl font-semibold animate-pulse"
                style={{
                  color: '#14BDAC',
                  borderColor: 'rgba(20,189,172,0.24)',
                  background: 'radial-gradient(circle, rgba(20,189,172,0.2) 0%, rgba(20,189,172,0.08) 58%, rgba(20,189,172,0.02) 100%)',
                  boxShadow: '0 0 0 10px rgba(20,189,172,0.05), 0 10px 24px rgba(20,189,172,0.18)',
                }}
              >
                →
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 md:flex-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: 'rgba(13,115,119,0.8)' }}>
                To
              </span>
              <span
                className="card-hover rounded-full px-4 py-2 md:px-5"
                style={{
                  color: '#0D7377',
                  background: 'linear-gradient(135deg, rgba(46,204,113,0.12) 0%, rgba(20,189,172,0.12) 100%)',
                  boxShadow: '0 10px 24px rgba(20,189,172,0.12)',
                }}
              >
                To insight-driven strategy
              </span>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          {recs.map((rec, i) => (
            <div
              key={rec.number}
              className={`reveal reveal-delay-${i + 1} card-hover rounded-[28px] border overflow-hidden relative`}
              style={{
                background: `linear-gradient(160deg, rgba(255,255,255,0.99) 0%, ${rec.color}08 100%)`,
                borderColor: `${rec.color}22`,
                boxShadow: '0 16px 36px rgba(16,39,52,0.08)',
              }}
            >
              <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: `linear-gradient(90deg, ${rec.color} 0%, ${rec.color}bb 100%)` }} />
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="rec-number flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${rec.color}, ${rec.color}aa)`,
                        boxShadow: `0 12px 24px ${rec.color}33`,
                      }}
                    >
                      {rec.number}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] mb-1.5" style={{ color: rec.color }}>{rec.label}</p>
                      <h3 className="text-[1.4rem] leading-tight font-bold" style={{ color: '#1A2332' }}>{rec.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568', lineHeight: '1.85' }}>{rec.body}</p>
                  {'bodySecondary' in rec && rec.bodySecondary ? (
                    <p
                      className="text-sm leading-relaxed mb-5 font-medium rounded-[20px] px-4 py-3"
                      style={{
                        color: '#1A2332',
                        lineHeight: '1.8',
                        background: `${rec.color}0D`,
                        border: `1px solid ${rec.color}1F`,
                      }}
                    >
                      {rec.bodySecondary}
                    </p>
                  ) : null}
                  {'bulletsTitle' in rec && rec.bulletsTitle ? (
                    <div className="mb-5 rounded-[22px] p-5" style={{ background: `linear-gradient(160deg, ${rec.color}12 0%, rgba(255,255,255,0.92) 100%)`, border: `1px solid ${rec.color}25`, boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55)' }}>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: rec.color }}>{rec.bulletsTitle}</p>
                      <div className="space-y-4">
                        {rec.detailGroups?.map((group) => (
                          <div key={group.title} className="rounded-[18px] px-4 py-3" style={{ background: 'rgba(255,255,255,0.68)' }}>
                            <p className="text-sm font-semibold mb-2" style={{ color: '#1A2332' }}>{group.title}</p>
                            <ul className="space-y-2">
                              {group.points.map((point) => (
                                <li key={point} className="flex gap-2 text-sm" style={{ color: '#4A5568' }}>
                                  <ArrowRight size={14} style={{ color: rec.color, flexShrink: 0, marginTop: '3px' }} />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                  {'closing' in rec && rec.closing ? (
                    <p className="text-sm leading-relaxed mb-5 font-medium" style={{ color: '#1A2332', lineHeight: '1.85' }}>{rec.closing}</p>
                  ) : null}
                  <div className="rounded-[22px] p-5" style={{ background: `linear-gradient(160deg, rgba(255,255,255,0.98) 0%, ${rec.color}10 100%)`, border: `1px solid ${rec.color}25`, boxShadow: '0 10px 22px rgba(16,39,52,0.04)' }}>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: rec.color }}>Expected Outcomes</p>
                    <ul className="space-y-2">
                      {rec.outcomes.map((o) => (
                        <li key={o} className="flex gap-2 text-sm" style={{ color: '#4A5568' }}>
                          <ArrowRight size={14} style={{ color: rec.color, flexShrink: 0, marginTop: '3px' }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="reveal rounded-[30px] border p-8 mb-12 overflow-hidden relative"
          style={{
            background: 'radial-gradient(circle at 14% 18%, rgba(20,189,172,0.12) 0%, rgba(20,189,172,0) 22%), radial-gradient(circle at 85% 20%, rgba(244,208,63,0.1) 0%, rgba(244,208,63,0) 20%), linear-gradient(145deg, rgba(250,255,253,0.98) 0%, rgba(241,250,247,0.96) 52%, rgba(235,247,244,0.98) 100%)',
            borderColor: 'rgba(13,115,119,0.1)',
            boxShadow: '0 18px 42px rgba(16,39,52,0.08), inset 0 1px 0 rgba(255,255,255,0.72)',
          }}
        >
          <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: 'linear-gradient(90deg, rgba(13,115,119,0.9) 0%, rgba(20,189,172,0.85) 35%, rgba(46,204,113,0.82) 68%, rgba(244,208,63,0.8) 100%)' }} />
          <div className="absolute -top-16 right-10 h-36 w-36 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(13,115,119,0.08) 0%, rgba(13,115,119,0) 72%)' }} />
          <h3 className="font-bold text-xl text-center" style={{ color: '#1A2332' }}>Execution Roadmap</h3>
          <p className="mx-auto mt-3 mb-8 max-w-3xl text-center text-sm md:text-[15px]" style={{ color: '#4A5568', lineHeight: '1.85' }}>
            To ensure success, the implementation should follow a clear sequence:
          </p>
          <div className="mx-auto max-w-4xl space-y-2 md:space-y-2.5">
            {[
              { phase: 'Phase 1', label: 'Understand', color: '#0D7377', text: 'Understand member needs through research and feedback', icon: Search, offset: 'md:ml-[0%]' },
              { phase: 'Phase 2', label: 'Validate', color: '#14BDAC', text: 'Validate value before introducing pricing', icon: CheckCircle2, offset: 'md:ml-[10.5%]' },
              { phase: 'Phase 3', label: 'Engage', color: '#2ECC71', text: 'Build engagement through structured experiences', icon: Users, offset: 'md:ml-[21%]' },
              { phase: 'Phase 4', label: 'Launch', color: '#F4D03F', text: 'Launch strategically, starting with the most engaged members', icon: Rocket, offset: 'md:ml-[31.5%]' },
              { phase: 'Phase 5', label: 'Scale', color: '#14919B', text: 'Scale based on evidence, not assumptions', icon: TrendingUp, offset: 'md:ml-[42%]' },
            ].map((p, i) => (
              <Fragment key={p.phase}>
                <div className={`${p.offset} reveal reveal-delay-${i + 1} relative w-full md:w-[58%] ${p.label === 'Engage' ? 'md:scale-[1.015]' : ''}`}>
                  <div
                    className="card-hover rounded-2xl px-4 py-2.5 text-center h-full"
                    style={{
                      background: `linear-gradient(180deg, ${p.color}${p.label === 'Engage' ? '18' : '10'} 0%, rgba(255,255,255,0.99) 100%)`,
                      border: `1px solid ${p.color}${p.label === 'Engage' ? '55' : '30'}`,
                      boxShadow: p.label === 'Engage'
                        ? `0 16px 34px ${p.color}22, 0 8px 20px rgba(16,39,52,0.08)`
                        : '0 12px 26px rgba(16,39,52,0.07)',
                    }}
                  >
                    <div className="mb-1.5 flex items-center justify-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border" style={{ color: p.color, borderColor: `${p.color}35`, background: `${p.color}12` }}>
                        <p.icon className="h-4 w-4" />
                      </span>
                      <div className="h-1.5 w-10 rounded-full" style={{ background: p.color }} />
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: p.color }}>{p.phase}</p>
                    </div>
                    <p className="font-extrabold text-[16px] mb-0.5" style={{ color: p.color }}>{p.label}</p>
                    <p className="text-[13px] mt-0.5" style={{ color: '#4A5568', lineHeight: '1.55' }}>{p.text}</p>
                  </div>
                </div>
                {i < 4 ? (
                  <div className={`${p.offset} flex justify-center md:w-[58%]`}>
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-4 w-px" style={{ background: `linear-gradient(180deg, ${p.color}00 0%, ${p.color}70 100%)` }} />
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold" style={{ color: p.color, borderColor: `${p.color}40`, background: `linear-gradient(180deg, ${p.color}16 0%, rgba(255,255,255,0.98) 100%)`, boxShadow: '0 8px 18px rgba(16,39,52,0.06)' }}>
                        ↓
                      </span>
                      <div className="h-4 w-px" style={{ background: `linear-gradient(180deg, ${p.color}70 0%, ${p.color}00 100%)` }} />
                    </div>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>

        <div
          className="reveal rounded-[36px] px-8 py-16 text-center overflow-hidden relative md:px-10 md:py-24"
          style={{
            background: 'radial-gradient(circle at 15% 18%, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 22%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 22%), linear-gradient(135deg, #052E33 0%, #0A5358 38%, #0D7377 68%, #1FA88D 100%)',
            boxShadow: '0 28px 70px rgba(13,115,119,0.28), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          <div className="absolute -left-10 top-12 h-36 w-36 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-full border" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="absolute inset-x-12 top-1/2 h-px -translate-y-1/2" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 18%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.16) 82%, rgba(255,255,255,0) 100%)' }} />
          <div className="relative z-10">
            <div className="mx-auto max-w-5xl">
              <p
                className="leading-[1.15] text-2xl sm:text-3xl md:text-4xl font-extrabold"
                style={{
                  color: 'rgba(248,255,252,0.99)',
                  textShadow: '0 10px 28px rgba(5,46,51,0.28)',
                  fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif",
                }}
              >
                Sustainable growth does not come from adding more members.
              </p>
              <p
                className="mx-auto mt-5 max-w-4xl leading-[1.18] text-xl sm:text-2xl md:text-3xl font-extrabold"
                style={{
                  color: '#F4D03F',
                  textShadow: '0 8px 22px rgba(5,46,51,0.24)',
                  fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif",
                }}
              >
                It comes from delivering clear, experienced, and meaningful value to the right ones.
              </p>
            </div>

            <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
              {[
                { text: 'Clear Value', highlight: false },
                { text: 'Engagement', highlight: false },
                { text: 'Conversion', highlight: false },
                { text: 'Sustainable Growth', highlight: true },
              ].map((item, index) => (
                <Fragment key={item.text}>
                  <div
                    className="rounded-full px-5 py-3 md:px-6"
                    style={{
                      background: item.highlight
                        ? 'linear-gradient(135deg, rgba(244,208,63,0.22) 0%, rgba(255,248,220,0.16) 100%)'
                        : 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(235,250,244,0.12) 100%)',
                      border: item.highlight
                        ? '1px solid rgba(244,208,63,0.34)'
                        : '1px solid rgba(255,255,255,0.16)',
                      boxShadow: item.highlight
                        ? '0 16px 28px rgba(244,208,63,0.16), inset 0 1px 0 rgba(255,255,255,0.12)'
                        : 'inset 0 1px 0 rgba(255,255,255,0.12)',
                    }}
                  >
                    <p className="text-sm md:text-[15px] font-semibold" style={{ color: item.highlight ? '#FFF4C3' : 'rgba(247,255,251,0.96)' }}>
                      {item.text}
                    </p>
                  </div>
                  {index < 3 ? (
                    <span className="text-lg md:text-xl font-semibold" style={{ color: 'rgba(247,255,251,0.72)' }}>
                      →
                    </span>
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#0D1A1A', color: '#9CA3AF' }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 mb-10 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377, #2ECC71)' }}>
              <img
  src={`${import.meta.env.BASE_URL}greentech-logo.png`}
  alt="Greentech Alliance logo"
  className="w-20 h-20 object-contain opacity-80"
/>
              </div>
              <span className="font-bold text-white text-sm">Greentech Alliance</span>
            </div>
            <div className="mb-4 space-y-2 text-sm leading-relaxed">
              <p style={{ color: '#E5E7EB' }}>
                Aasiyah Rasheed, Lais Garcia, Nikka Stephens, John Salinas, and Yashpreet Kaur Sohi
              </p>
              <p>
                Business Diploma Integrative Experience Capston (ACWE-300-E1)
              </p>
            </div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#14BDAC' }}
            >
              <span>Back to top</span>
              <span aria-hidden="true">↑</span>
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-white font-semibold mb-4 text-sm">Project Credits</p>
            <ul className="space-y-2 text-sm">
              <li>Capstone Team · Matilha</li>
              <li>Industry Partner · Greentech Alliance</li>
              <li>Academic Year · 2026</li>
              <li>SAIT · School of Business</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs">© 2026 Matilha Capstone Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────
function GreentechPage() {
  useScrollReveal()

  return (
    <div className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <IntroSection />
      <ChallengeSection />
      <MarketingSection />
      <CompetitorSection />
      <SurveySection />
      <ConversionSection />
      <MembershipSection />
      <ConclusionSection />
      <RecommendationsSection />
      <Footer />
    </div>
  )
}
