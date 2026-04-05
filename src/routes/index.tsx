import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState, type ReactNode } from 'react'
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
          title="GREENTECH ALLIANCE"
        />

        <div className="flex flex-col gap-6 mb-14 mt-10">
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
              As it formally expands into Canada and helps launch Calgary's first Climate Week, the organization is entering a critical growth phase.
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
        <div id="team" className="max-w-4xl mx-auto mb-6 scroll-mt-20">
          <div className="reveal">
          <h3 className="text-3xl md:text-4xl text-center mb-5" style={{ color: '#1A2332' }}>
            Matilha Team Members
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-2">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-2xl p-6 text-center bg-white border`}
              style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${member.image}`}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                style={{ border: `3px solid ${member.color}` }}
              />
              <h4 className="font-bold text-sm mb-1" style={{ color: '#1A2332' }}>{member.name}</h4>
              <p className="text-[10px] font-semibold mb-2" style={{ color: member.color }}>{member.role}</p>
              <p className="text-xs" style={{ color: '#718096', lineHeight: '1.6' }}>{member.bio}</p>
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
      icon: <Target size={22} />,
      title: 'Project Focus',
      desc: 'Design a sustainable growth and governance model for a rapidly expanding global climate-tech community as it formalizes operations in Canada and introduces a paid membership model.',
      color: '#0D7377',
    },
    {
      icon: <Users size={22} />,
      title: 'Business Challenge',
      desc: 'This organization must transition from an informal, volunteer-run network of 5,000+ global members to a structured, financially sustainable organization without losing accessibility, trust, or cohesion.',
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
            background: 'linear-gradient(135deg, #05383b 0%, #0a5c60 48%, #0D7377 100%)',
            boxShadow: '0 30px 70px rgba(13,115,119,0.22), 0 10px 26px rgba(26,35,50,0.08)',
          }}
        >
          <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="relative max-w-5xl mx-auto space-y-4 text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.92)', lineHeight: '1.85' }}>
            <h3 className="text-2xl md:text-3xl mb-3" style={{ color: '#ffffff' }}>
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
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                <p
                  className="text-sm md:text-base"
                  style={{
                    color: '#ffffff',
                    lineHeight: '1.8',
                  }}
                >
                  <strong style={{ color: '#F4D03F' }}>As a team, we quickly aligned on the core issue:</strong> Greentech Alliance is transitioning from an informal, volunteer-driven network into a structured organization.
                </p>
              </div>

              <div
                className="rounded-[24px] border px-5 py-5 md:px-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.2)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
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

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-[24px] p-7 md:p-8 bg-white border h-full`}
              style={{ borderColor: '#E8ECEF', boxShadow: '0 4px 18px rgba(0,0,0,0.06)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: p.color }}
                >
                  {p.icon}
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>{p.title}</h3>
              </div>
              <p className="text-sm md:text-base" style={{ color: '#718096', lineHeight: '1.75' }}>{p.desc}</p>
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
                className="relative flex h-24 w-24 items-center justify-center rounded-full border"
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

        <div id="marketing-analysis-start" className="grid md:grid-cols-2 gap-10 mb-14 items-stretch">
          <div className="reveal reveal-left h-full">
            <div className="callout-teal mb-6">
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
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#0D7377' }}>
                  <Lightbulb size={20} color="white" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Identifying the Real Problem</h3>
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
                className="mt-5 rounded-[20px] border px-5 py-4"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,115,119,0.08) 0%, rgba(46,204,113,0.08) 100%)',
                  borderColor: 'rgba(13,115,119,0.14)',
                }}
              >
                <p style={{ color: '#1A2332', lineHeight: '1.7' }}>
                  <strong style={{ color: '#0D7377' }}>The bigger issue:</strong> Greentech Alliance needed a strong value proposition before any marketing could work.
                </p>
              </div>
            </div>

            <div className="callout-green">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={18} style={{ color: '#27ae60' }} />
                <h4 className="font-bold" style={{ color: '#1A2332' }}>How to Communicate Value</h4>
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
                      <div className="rounded-xl border bg-white px-4 py-4 min-h-[56px] flex items-center" style={{ borderColor: '#E8ECEF' }}>
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
              className="rounded-[24px] border p-7 md:p-8 h-full flex flex-col justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(13,115,119,0.06) 0%, rgba(46,204,113,0.08) 100%)',
                borderColor: '#D9E8E7',
                boxShadow: '0 8px 26px rgba(13,115,119,0.08)',
              }}
            >
              <h3 className="font-bold text-2xl mb-2 text-center" style={{ color: '#1A2332' }}>What Members Really Gain</h3>
              <p className="font-semibold mb-6 text-center" style={{ color: '#0D7377' }}>Our Core Value Proposition</p>

              <div className="space-y-4 mb-6">
                <div className="rounded-[20px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: '#E8ECEF' }}>
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

                <div className="rounded-[20px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: '#E8ECEF' }}>
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

                <div className="rounded-[20px] border p-4 bg-white flex min-h-[104px] items-center gap-4" style={{ borderColor: '#E8ECEF' }}>
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
                  desc: 'Personalized outreach that builds trust through direct conversation, warm connections, and relationship-led engagement.',
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

        <div className="reveal rounded-[28px] border p-7 md:p-8 mb-10 bg-white -mt-2" style={{ borderColor: '#DDE8E7', boxShadow: '0 10px 26px rgba(13,115,119,0.06)' }}>
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
            <div className="rounded-[22px] p-5" style={{ background: 'linear-gradient(135deg, rgba(13,115,119,0.08) 0%, rgba(20,189,172,0.06) 100%)' }}>
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={18} style={{ color: '#0D7377' }} />
                <h4 className="text-lg font-bold" style={{ color: '#1A2332' }}>Local Players</h4>
              </div>
              <div className="space-y-4">
                {[
                  ['Foresight Canada', 'Turns connections into real outcomes like funding and growth.', 'People engage because they know what they will gain.'],
                  ['Green Economy Canada', 'Focuses on measurable impact and real progress.', 'People stay because they see results.'],
                  ['Smart Prosperity Institute', 'Delivers value through insights and research.', 'Value does not always need constant interaction.'],
                  ['Diversity & Sustainability', 'Builds community through identity, inclusion, and sustainability-centred belonging.', 'Shared values can strengthen retention and long-term engagement.'],
                ].map(([name, body, note]) => (
                  <div key={name} className="rounded-[18px] border bg-white px-4 py-4 flex items-start gap-4" style={{ borderColor: '#E8ECEF' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#0D7377' }}>
                      <MapPin size={18} color="white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1" style={{ color: '#1A2332' }}>{name}</p>
                      <p className="text-sm mb-2" style={{ color: '#4A5568', lineHeight: '1.65' }}>{body}</p>
                      <p className="text-sm" style={{ color: '#0D7377', lineHeight: '1.65' }}>• {note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] p-5" style={{ background: 'linear-gradient(135deg, rgba(46,204,113,0.08) 0%, rgba(255,255,255,0.7) 100%)' }}>
              <div className="flex items-center gap-3 mb-4">
                <Globe size={18} style={{ color: '#2ECC71' }} />
                <h4 className="text-lg font-bold" style={{ color: '#1A2332' }}>Global Players</h4>
              </div>
              <div className="space-y-4">
                {[
                  ['Climate Tech Cities', 'Connects climate ecosystems across cities.', 'Expands opportunities globally.'],
                  ['Climate & Capital Connect', 'Offers curated 1:1 networking and paid membership.', 'People pay for direct, meaningful connections.'],
                  ['Climate Tech Coalition', 'Creates exclusive networks with investor matchmaking.', 'Exclusivity increases perceived value.'],
                ].map(([name, body, note]) => (
                  <div key={name} className="rounded-[18px] border bg-white px-4 py-4 flex items-start gap-4" style={{ borderColor: '#E8ECEF' }}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#2ECC71' }}>
                      <Globe size={18} color="white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1" style={{ color: '#1A2332' }}>{name}</p>
                      <p className="text-sm mb-2" style={{ color: '#4A5568', lineHeight: '1.65' }}>{body}</p>
                      <p className="text-sm" style={{ color: '#27ae60', lineHeight: '1.65' }}>• {note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] mt-10 mb-10">
          <div className="reveal rounded-[26px] border p-7 md:p-8 bg-white" style={{ borderColor: '#DDE8E7', boxShadow: '0 10px 24px rgba(13,115,119,0.06)' }}>
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
              <div className="rounded-[20px] border p-5" style={{ borderColor: '#E8ECEF', background: 'linear-gradient(135deg, rgba(46,204,113,0.08) 0%, rgba(255,255,255,0.9) 100%)' }}>
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

              <div className="rounded-[20px] border p-5" style={{ borderColor: '#E8ECEF', background: 'linear-gradient(135deg, rgba(244,208,63,0.09) 0%, rgba(255,255,255,0.92) 100%)' }}>
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
  const questions = [
    { q: 'What is your primary motivation for joining a sustainability-focused professional community?', type: 'Multiple Choice' },
    { q: 'How important is access to climate-tech industry research and reports to your professional work?', type: 'Likert Scale' },
    { q: 'Which types of events or programming would you most value as part of a membership?', type: 'Multi-Select' },
    { q: 'What is your organization\'s current level of engagement with the clean economy sector?', type: 'Multiple Choice' },
    { q: 'How much would you be willing to pay annually for access to a professional climate-tech community platform?', type: 'Range Select' },
    { q: 'What barriers, if any, would prevent you from joining or actively engaging with such a platform?', type: 'Open-Ended' },
  ]

  return (
    <section id="survey" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Member Survey"
          title="Survey with Members"
          subtitle="Primary research designed to understand what prospective members truly value — and what they need before committing."
        />

        <div
          className="reveal relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 py-10 md:py-12 mb-12"
          style={{
            background: 'linear-gradient(135deg, #05383b 0%, #0a5c60 48%, #0D7377 100%)',
            boxShadow: '0 30px 70px rgba(13,115,119,0.22), 0 10px 26px rgba(26,35,50,0.08)',
          }}
        >
          <div className="absolute -top-14 -right-10 h-44 w-44 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 72%)' }} />
          <div className="absolute -bottom-24 -left-12 h-48 w-48 rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,208,63,0.16) 0%, rgba(244,208,63,0) 72%)' }} />
          <div className="relative max-w-5xl mx-auto">
            <h3
              className="text-2xl md:text-3xl mb-5"
              style={{ color: '#ffffff', fontFamily: "'Outfit', 'Nunito', system-ui, sans-serif", fontWeight: 800 }}
            >
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
                {
                  title: 'Value Perception',
                  body: 'How members currently understand and interpret the value of being part of the community.',
                },
                {
                  title: 'Community Expectations',
                  body: 'What members would like to see, experience, and gain from the Alliance moving forward.',
                },
                {
                  title: 'Willingness to Pay',
                  body: 'Whether members would consider paying to belong to the Alliance and under what conditions.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border px-4 py-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                    borderColor: 'rgba(255,255,255,0.18)',
                  }}
                >
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F4D03F', lineHeight: '1.5' }}>{item.title}</p>
                  <p className="text-sm" style={{ color: '#ffffff', lineHeight: '1.7' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="reveal relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 md:px-10 pb-10 md:pb-12 -mt-4 mb-12"
          style={{
            background: 'linear-gradient(135deg, #05383b 0%, #0a5c60 48%, #0D7377 100%)',
            boxShadow: '0 30px 70px rgba(13,115,119,0.22), 0 10px 26px rgba(26,35,50,0.08)',
          }}
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div
                className="rounded-[20px] border px-5 py-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.18)',
                }}
              >
                <p className="text-xs mb-2" style={{ color: '#F4D03F', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace' }}>
                  Survey Distribution
                </p>
                <p className="text-sm md:text-base" style={{ color: '#ffffff', lineHeight: '1.85' }}>
                  Our industry partner, Charles Newton Price, shared the survey in a WhatsApp group of approximately 285 members, considered one of the most active groups.
                </p>
              </div>

              <div
                className="rounded-[20px] border px-5 py-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)',
                  borderColor: 'rgba(255,255,255,0.18)',
                }}
              >
                <p className="text-xs mb-2" style={{ color: '#F4D03F', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace' }}>
                  Response Reality
                </p>
                <p className="text-sm md:text-base" style={{ color: '#ffffff', lineHeight: '1.85' }}>
                  We received only 23 responses, some of which were from founders or internal members. Participation was optional and respondents were not required to identify themselves.
                </p>
              </div>
            </div>

            <div
              className="mt-5 rounded-[22px] border px-5 py-5 md:px-6"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 100%)',
                borderColor: 'rgba(255,255,255,0.18)',
              }}
            >
              <p className="text-sm md:text-base" style={{ color: '#ffffff', lineHeight: '1.85' }}>
                <strong style={{ color: '#F4D03F' }}>Critical insight:</strong> engagement is currently limited, even among the most active members.
              </p>
              <p className="text-sm md:text-base mt-4" style={{ color: '#ffffff', lineHeight: '1.85' }}>
                <strong style={{ color: '#F4D03F' }}>What this revealed:</strong> the main challenge is not only value perception, but also member engagement, which directly impacts the transition from a free to a paid model.
              </p>
            </div>

            <div
              className="mt-5 rounded-[22px] px-5 py-5 md:px-6"
              style={{
                background: 'linear-gradient(135deg, rgba(244,208,63,0.16) 0%, rgba(255,255,255,0.08) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-sm md:text-base" style={{ color: '#ffffff', lineHeight: '1.85' }}>
                As a result, we shifted our focus to better understand conversion rates and behaviors, ensuring our recommendations were grounded in real user dynamics rather than assumptions.
              </p>
            </div>
          </div>
        </div>
        {/* Three sub-section tabs */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            {
              icon: <BookOpen size={22} />,
              title: 'Survey Questions',
              color: '#0D7377',
              desc: 'The survey included questions across five thematic areas: motivations, value perception, programming preferences, willingness to pay, and adoption barriers.',
            },
            {
              icon: <Users size={22} />,
              title: 'Administration',
              color: '#2ECC71',
              desc: 'The survey was distributed digitally to a sample of [N=XX] prospective members and ecosystem contacts. Data was collected over [X] weeks using a structured online instrument.',
            },
            {
              icon: <BarChart2 size={22} />,
              title: 'Results Overview',
              color: '#F4D03F',
              desc: 'Results highlighted a diverse range of motivations, a consistent interest in networking and knowledge access, and meaningful variation in willingness to pay across segments.',
            },
          ].map((card, i) => (
            <div key={card.title} className={`card-hover reveal reveal-delay-${i + 1} rounded-2xl p-6 bg-white border`} style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 14px rgba(0,0,0,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: card.color }}>
                {card.icon}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#1A2332' }}>{card.title}</h3>
              <p className="text-sm" style={{ color: '#718096', lineHeight: '1.7' }}>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Survey Questions */}
        <div className="mb-14">
          <h3 className="text-xl font-bold mb-6 reveal" style={{ color: '#1A2332' }}>Survey Question Cards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {questions.map((q, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} rounded-2xl bg-white border p-5`} style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <span className="tag tag-teal mb-3 inline-flex">Q{i + 1} · {q.type}</span>
                <p className="text-sm font-medium" style={{ color: '#1A2332', lineHeight: '1.65' }}>{q.q}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <h3 className="text-xl font-bold mb-6 reveal" style={{ color: '#1A2332' }}>Survey Results & Data Visualizations</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="reveal reveal-left">
            <BarChartPlaceholder
              title="Primary Motivations for Joining (% of respondents)"
              labels={['Networking', 'Research', 'Events', 'Mentorship', 'Funding', 'Policy', 'Other']}
            />
          </div>
          <div className="reveal reveal-right">
            <PieChartPlaceholder title="'I would pay for access to this platform' (Agreement Level)" />
          </div>
          <div className="reveal reveal-left">
            <HBarChartPlaceholder
              title="Value of Platform Features (% rating 'Very Important')"
              rows={[
                { label: 'Networking & Connections', pct: 84 },
                { label: 'Industry Research Access', pct: 71, type: 'green' },
                { label: 'Events & Programming', pct: 65 },
                { label: 'Job Board / Talent', pct: 52, type: 'yellow' },
                { label: 'Mentorship Access', pct: 48, type: 'green' },
                { label: 'Policy Engagement', pct: 39, type: 'yellow' },
              ]}
            />
          </div>
          <div className="reveal reveal-right">
            <BarChartPlaceholder
              title="Willingness to Pay by Tier (% of respondents)"
              labels={['Free', '<$50', '$50–$99', '$100–$199', '$200–$499', '$500+', 'N/A']}
            />
          </div>
        </div>

        {/* Key Insights */}
        <h3 className="text-xl font-bold mb-6 reveal" style={{ color: '#1A2332' }}>Key Insights</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {[
            { icon: <Star size={18} />, color: '#0D7377', title: 'Add Key Finding Here', body: 'Insert a primary survey finding, e.g. "XX% of respondents indicated that peer networking was their primary reason for joining a professional community platform."' },
            { icon: <TrendingUp size={18} />, color: '#2ECC71', title: 'Add Key Finding Here', body: 'Insert a secondary survey finding, e.g. "A significant portion of respondents expressed uncertainty about what a Greentech Alliance membership would specifically offer them."' },
            { icon: <AlertTriangle size={18} />, color: '#F4D03F', title: 'Add Key Finding Here', body: 'Insert a barrier-related finding, e.g. "The most frequently cited barrier to joining was the perceived lack of clarity around platform benefits and return on membership investment."' },
          ].map((ins, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} callout-teal rounded-2xl p-5`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: ins.color }}>
                  {ins.icon}
                </div>
                <h4 className="font-bold text-sm" style={{ color: '#0D7377' }}>{ins.title}</h4>
              </div>
              <p className="text-sm italic" style={{ color: '#4A5568', lineHeight: '1.7' }}>{ins.body}</p>
            </div>
          ))}
        </div>

        {/* Member Quote */}
        <div className="reveal callout-yellow rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <MessageSquare size={28} style={{ color: '#F4D03F', marginBottom: '12px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
          <blockquote className="text-lg font-medium italic mb-3" style={{ color: '#4A5568' }}>
            "Add member quote or response summary here — e.g., a representative response that encapsulates a key theme from the survey."
          </blockquote>
          <p className="text-sm font-semibold" style={{ color: '#92680a' }}>— Survey Respondent, [Segment / Role Placeholder]</p>
        </div>

        <BridgeText>
          The survey findings highlighted an important gap: before scaling a launch, Greentech Alliance needs stronger evidence about what members truly value and what would motivate them to engage or pay. The data collected provides a starting point — but deeper, more targeted member research is recommended before committing to a full launch.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Conversion Study Section ──────────────────────────────────────────
function ConversionSection() {
  const risks = [
    { icon: <AlertTriangle size={18} />, text: 'Weak or generic positioning fails to differentiate Greentech Alliance in a crowded sustainability landscape' },
    { icon: <AlertTriangle size={18} />, text: 'Unclear member benefits create decision friction that prevents conversion even among interested prospects' },
    { icon: <AlertTriangle size={18} />, text: 'Early adopters who have a poor onboarding experience are unlikely to renew or refer others' },
    { icon: <AlertTriangle size={18} />, text: 'High churn in early cohorts can damage organizational credibility and deter future prospects' },
    { icon: <AlertTriangle size={18} />, text: 'Misaligned pricing — either too high or too low — signals the wrong value tier to prospective members' },
  ]

  const conditions = [
    { icon: <CheckCircle2 size={18} />, text: 'Clearly articulated value proposition tailored to each identified member segment' },
    { icon: <CheckCircle2 size={18} />, text: 'Structured onboarding journey that moves new members from sign-up to first value moment within days' },
    { icon: <CheckCircle2 size={18} />, text: 'Audience segmentation that enables targeted, personalized messaging and offer structuring' },
    { icon: <CheckCircle2 size={18} />, text: 'Social proof — testimonials, case studies, and early member success stories — integrated into conversion flows' },
    { icon: <CheckCircle2 size={18} />, text: 'Pricing anchored to validated willingness-to-pay data, not assumptions or competitor benchmarks alone' },
  ]

  const stats = [
    { label: 'Conversion Rate Benchmark (Community Platforms)', value: '2–8%', note: 'Industry average for open freemium to paid conversion' },
    { label: 'Avg. Time to First Value Moment', value: '< 7 days', note: 'Critical window for early member retention and engagement' },
    { label: 'Churn Risk Without Clear Value Prop', value: '3× higher', note: 'Estimated relative churn increase for poorly differentiated platforms' },
    { label: 'Placeholder Stat', value: 'XX%', note: 'Insert validated statistic from research or survey here' },
  ]

  return (
    <section id="conversion" className="section-pad bg-[#E4F0F0]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Conversion Study"
          title="Launch Readiness & Conversion Dynamics"
          subtitle="A structured analysis of the conditions that determine whether a platform launch succeeds or struggles to gain traction."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="reveal reveal-left rounded-2xl p-7 border" style={{ borderColor: '#fca5a5', background: '#fff7f7' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#ef4444' }}>
                <AlertTriangle size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Risks of Launching Too Early</h3>
            </div>
            <ul className="space-y-4">
              {risks.map((r, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#ef4444' }}>{r.icon}</span>
                  {r.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-right rounded-2xl p-7 border" style={{ borderColor: '#86efac', background: '#f0fdf4' }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#27ae60' }}>
                <CheckCircle2 size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Success Conditions for Launch</h3>
            </div>
            <ul className="space-y-4">
              {conditions.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: '#4A5568', lineHeight: '1.7' }}>
                  <span className="mt-0.5 flex-shrink-0" style={{ color: '#27ae60' }}>{c.icon}</span>
                  {c.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1} text-center rounded-2xl p-5 bg-white border`} style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <p className="text-2xl font-extrabold mb-1 gradient-text">{s.value}</p>
              <p className="text-xs font-semibold mb-1" style={{ color: '#1A2332' }}>{s.label}</p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>{s.note}</p>
            </div>
          ))}
        </div>

        <BridgeText>
          With conversion success closely tied to perceived value and strategic clarity, the project next explored how membership structure and pricing could support a stronger overall offer — one that is both compelling to members and sustainable for Greentech Alliance as an organization.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Membership & Pricing Section ─────────────────────────────────────
function MembershipSection() {
  const tiers = [
    {
      name: 'Community',
      price: 'Free',
      sub: 'Forever',
      color: '#14BDAC',
      featured: false,
      desc: 'Perfect for individuals exploring the Greentech Alliance ecosystem and getting a feel for the community.',
      features: [
        'Access to public events and newsletters',
        'Limited platform access (read-only)',
        'Community forum participation',
        'Monthly digest of industry news',
        'Basic member directory search',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: '$XX',
      sub: 'per year',
      color: '#0D7377',
      featured: true,
      desc: 'For climate-tech professionals who want to actively engage, connect, and grow within the alliance.',
      features: [
        'Everything in Community tier',
        'Full platform access and networking tools',
        'Access to exclusive member events',
        'Premium research reports and resources',
        'Mentorship matching program',
        'Direct messaging and collaboration tools',
        'Verified member badge',
      ],
      cta: 'Join as Professional',
    },
    {
      name: 'Partner / Organization',
      price: '$XXX',
      sub: 'per year',
      color: '#2ECC71',
      featured: false,
      desc: 'For organizations, companies, and institutions committed to advancing the clean economy together.',
      features: [
        'Everything in Professional tier',
        'Up to [N] team member seats',
        'Organization profile and showcase',
        'Sponsored event placement',
        'Co-branding opportunities',
        'Dedicated account support',
        'Priority access to investor and partner connections',
        'Custom onboarding and integration support',
      ],
      cta: 'Become a Partner',
    },
  ]

  const tableRows = [
    { feature: 'Community Forum', community: true, professional: true, partner: true },
    { feature: 'Public Events Access', community: true, professional: true, partner: true },
    { feature: 'Full Platform Access', community: false, professional: true, partner: true },
    { feature: 'Exclusive Events', community: false, professional: true, partner: true },
    { feature: 'Premium Research', community: false, professional: true, partner: true },
    { feature: 'Mentorship Access', community: false, professional: true, partner: true },
    { feature: 'Multiple Seats', community: false, professional: false, partner: true },
    { feature: 'Organization Profile', community: false, professional: false, partner: true },
    { feature: 'Co-branding', community: false, professional: false, partner: true },
  ]

  return (
    <section id="membership" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Membership & Pricing"
          title="Membership Structure & Strategic Pricing"
          subtitle="A proposed three-tier model designed to serve diverse member needs and support Greentech Alliance's long-term sustainability."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`pricing-card reveal reveal-delay-${i + 1} bg-white border ${tier.featured ? 'featured' : ''}`}
              style={{
                borderColor: tier.featured ? tier.color : '#E8ECEF',
                boxShadow: tier.featured ? `0 8px 32px ${tier.color}30` : '0 2px 16px rgba(0,0,0,0.06)',
              }}
            >
              {tier.featured && (
                <div className="absolute top-4 right-4">
                  <span className="tag" style={{ background: '#0D737718', color: '#0D7377' }}>Most Popular</span>
                </div>
              )}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: tier.color }}>
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold mb-1" style={{ color: '#1A2332' }}>{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-extrabold" style={{ color: tier.color }}>{tier.price}</span>
                <span className="text-sm" style={{ color: '#9CA3AF' }}>{tier.sub}</span>
              </div>
              <p className="text-sm mb-5" style={{ color: '#718096', lineHeight: '1.7' }}>{tier.desc}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm" style={{ color: '#4A5568' }}>
                    <CheckCircle2 size={16} style={{ color: tier.color, flexShrink: 0, marginTop: '2px' }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={tier.featured ? { background: tier.color, color: 'white' } : { border: `2px solid ${tier.color}`, color: tier.color, background: 'transparent' }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal bg-white rounded-2xl border overflow-hidden mb-10" style={{ borderColor: '#E8ECEF' }}>
          <div className="p-5 border-b" style={{ borderColor: '#E8ECEF' }}>
            <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: '#F8FAFB' }}>
                  <th className="text-left p-4 font-semibold" style={{ color: '#4A5568' }}>Feature</th>
                  {tiers.map((t) => (
                    <th key={t.name} className="text-center p-4 font-semibold" style={{ color: t.color }}>{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={row.feature} style={{ borderTop: '1px solid #F0F4F8', background: i % 2 === 0 ? 'white' : '#FAFBFC' }}>
                    <td className="p-4" style={{ color: '#4A5568' }}>{row.feature}</td>
                    {[row.community, row.professional, row.partner].map((val, j) => (
                      <td key={j} className="text-center p-4">
                        {val
                          ? <CheckCircle2 size={18} style={{ color: '#2ECC71', display: 'inline' }} />
                          : <span style={{ color: '#D1D5DB' }}>—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal callout-yellow rounded-2xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: '#92680a' }}>Important Disclaimer</p>
          <p className="text-sm italic" style={{ color: '#4A5568' }}>
            All pricing figures shown are strategic placeholders and are subject to validation through further member research. Pricing should be finalized only after willingness-to-pay data has been validated with a representative sample of the target membership base.
          </p>
        </div>

        <BridgeText>
          Across every stage of the research, one theme remained consistent: strategic clarity must come from a better understanding of member needs. The membership structure proposed here represents a framework — but the specifics require validation before being brought to market.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Conclusion Section ────────────────────────────────────────────────
function ConclusionSection() {
  return (
    <section id="conclusion" className="section-pad bg-[#E1F0EA]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Conclusion"
          title="What the Research Tells Us"
          subtitle="A synthesis of the findings across all phases of the capstone engagement."
        />

        {/* Core conclusion */}
        <div className="reveal rounded-3xl p-10 text-center mb-12" style={{ background: 'linear-gradient(135deg, #0D7377, #14BDAC)', boxShadow: '0 16px 48px rgba(13,115,119,0.3)' }}>
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <Lightbulb size={28} color="#F4D03F" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">Core Conclusion</p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            "Founders do not yet fully know what the members want."
          </h3>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
            This is not a criticism — it is a common and entirely normal stage in the development of a new platform. What distinguishes great organizations at this stage is not the absence of uncertainty, but the willingness to address it with rigour and intentionality before scaling.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Star size={22} />,
              color: '#2ECC71',
              title: 'Strong Potential Exists',
              body: 'Greentech Alliance operates in a genuinely high-growth sector. Climate technology, sustainability, and clean economy transitions are accelerating globally. The appetite for community, collaboration, and shared knowledge in this space is real and growing.',
            },
            {
              icon: <BookOpen size={22} />,
              color: '#0D7377',
              title: 'More Member Understanding Required',
              body: 'The survey and research revealed that deeper, more targeted member insight is needed before the organization can confidently define its value proposition, structure its offerings, and build a credible conversion strategy.',
            },
            {
              icon: <Target size={22} />,
              color: '#F4D03F',
              title: 'Strategy Must Be Refined',
              body: 'Before major launch investment is committed, the founding team is encouraged to undertake a focused member discovery process. The strategy should be rebuilt — or confirmed — on the basis of validated member insight.',
            },
          ].map((c, i) => (
            <div key={c.title} className={`card-hover reveal reveal-delay-${i + 1} rounded-2xl p-6 bg-white border`} style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 14px rgba(0,0,0,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white" style={{ background: c.color }}>
                {c.icon}
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#1A2332' }}>{c.title}</h3>
              <p className="text-sm" style={{ color: '#718096', lineHeight: '1.75' }}>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal callout-teal rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-base leading-relaxed" style={{ color: '#4A5568' }}>
            The evidence gathered through this capstone paints a constructive picture. Greentech Alliance has a compelling mission, a motivated founding team, and the right instincts about the opportunity ahead. The gap that exists — between organizational ambition and member-validated clarity — is one that can be closed with deliberate, well-sequenced discovery work.
          </p>
          <p className="text-base leading-relaxed mt-3 font-medium" style={{ color: '#0D7377' }}>
            The question is not whether Greentech Alliance should launch — it is how to launch in a way that gives the platform its best chance of long-term success.
          </p>
        </div>

        <BridgeText>
          Rather than rushing forward, the evidence points toward a more informed and strategic next step. The final section of this report outlines a clear, actionable set of recommendations designed to bridge the current gap and position Greentech Alliance for a successful, sustainable launch.
        </BridgeText>
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
      title: 'Hire a Specialist to Better Understand Member Needs',
      subtitle: 'Internal hire or third-party researcher',
      body: 'Commission a dedicated member discovery process. This could involve hiring an internal employee with expertise in community strategy and user research, or engaging a specialized third-party firm to conduct in-depth qualitative interviews, focus groups, and expanded quantitative surveys with a representative sample of prospective and current members.',
      outcomes: [
        'Validated member personas and journey maps',
        'Confirmed willingness-to-pay thresholds by segment',
        'Prioritized feature and programming wish lists',
        'Articulated motivations, barriers, and decision triggers',
      ],
    },
    {
      number: 2,
      color: '#2ECC71',
      title: 'Redesign the Strategy Based on Those Findings',
      subtitle: 'Evidence-driven strategic planning',
      body: 'Once member insight has been gathered and validated, use it as the foundation for a comprehensive strategy refresh. This includes redefining the value proposition, refining the membership tiers and pricing, restructuring the platform feature roadmap, and clarifying the organizational positioning within the competitive landscape.',
      outcomes: [
        'Refined, evidence-based value proposition',
        'Validated pricing tiers with member-confirmed rationale',
        'Updated feature roadmap aligned to member priorities',
        'Clear organizational positioning statement',
      ],
    },
    {
      number: 3,
      color: '#F4D03F',
      title: 'Build a Well-Structured Marketing Plan',
      subtitle: 'Value proposition + tactics + measurement',
      body: 'With a validated strategy in place, develop a comprehensive marketing and communication plan. This plan should clearly articulate the value proposition to each audience segment, outline the channels and tactics to be used at each stage of the member journey, and establish measurement frameworks to track conversion, engagement, and retention.',
      outcomes: [
        'Segment-specific messaging and positioning frameworks',
        'Channel strategy with reach, activation, and conversion tactics',
        'Content calendar and editorial framework',
        'KPI framework for conversion, retention, and growth measurement',
      ],
    },
  ]

  return (
    <section id="recommendations" className="section-pad bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Final Recommendations"
          title="Strategic Recommendations"
          subtitle="Three clear, sequenced actions to move Greentech Alliance from strategic uncertainty to launch readiness."
        />

        <div className="space-y-8 mb-14">
          {recs.map((rec, i) => (
            <div key={rec.number} className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl border overflow-hidden`} style={{ borderColor: '#E8ECEF', boxShadow: '0 4px 20px rgba(0,0,0,0.07)' }}>
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="rec-number flex-shrink-0" style={{ background: `linear-gradient(135deg, ${rec.color}, ${rec.color}aa)` }}>
                      {rec.number}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: rec.color }}>{rec.subtitle}</p>
                      <h3 className="text-xl font-bold" style={{ color: '#1A2332' }}>{rec.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A5568', lineHeight: '1.8' }}>{rec.body}</p>
                  <div className="rounded-xl p-4" style={{ background: `${rec.color}10`, border: `1px solid ${rec.color}25` }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: rec.color }}>Expected Outcomes</p>
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

        {/* Roadmap Placeholder */}
        <div className="reveal bg-white rounded-2xl border p-8 mb-12" style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 14px rgba(0,0,0,0.06)' }}>
          <h3 className="font-bold text-xl mb-6 text-center" style={{ color: '#1A2332' }}>Strategic Roadmap</h3>
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {[
              { phase: 'Phase 1', label: 'Discovery', duration: 'Months 1–3', color: '#0D7377', items: ['Commission member research', 'Conduct interviews & surveys', 'Analyze and synthesize findings'] },
              { phase: 'Phase 2', label: 'Strategy', duration: 'Months 3–5', color: '#2ECC71', items: ['Redefine value proposition', 'Validate pricing model', 'Refine platform roadmap'] },
              { phase: 'Phase 3', label: 'Marketing', duration: 'Months 5–7', color: '#14BDAC', items: ['Develop messaging frameworks', 'Build launch communication plan', 'Prepare content and channels'] },
              { phase: 'Phase 4', label: 'Launch', duration: 'Month 7+', color: '#F4D03F', items: ['Soft launch with early cohort', 'Measure and iterate', 'Scale outreach and conversion'] },
            ].map((p, i) => (
              <div key={p.phase} className={`flex-1 rounded-xl p-5 text-center reveal reveal-delay-${i + 1}`} style={{ background: `${p.color}12`, border: `1px solid ${p.color}30` }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: p.color }}>{p.phase}</p>
                <p className="font-extrabold text-lg mb-1" style={{ color: '#1A2332' }}>{p.label}</p>
                <p className="text-xs mb-4" style={{ color: '#9CA3AF' }}>{p.duration}</p>
                <ul className="text-left space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs" style={{ color: '#4A5568' }}>
                      <span style={{ color: p.color }}>•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-4 italic" style={{ color: '#9CA3AF' }}>— Roadmap is indicative and subject to revision based on organizational capacity and research findings —</p>
        </div>

        {/* Final takeaway */}
        <div className="reveal rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #0D7377, #2ECC71)', boxShadow: '0 16px 48px rgba(13,115,119,0.25)' }}>
          <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <Shield size={24} color="white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">A Platform Built on Real Member Insight</h3>
          <p className="text-white/85 max-w-2xl mx-auto leading-relaxed">
            Greentech Alliance has everything it needs to build a truly exceptional member community. The path forward is clear: invest in understanding your members deeply, build your strategy on that foundation, and launch with confidence. The climate-tech community is ready — and Greentech Alliance is well-positioned to lead it.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#intro' },
    { label: 'Analysis', href: '#challenge' },
    { label: 'Insights', href: '#survey' },
    { label: 'Strategy', href: '#marketing' },
    { label: 'Final', href: '#conclusion' },
  ]

  return (
    <footer style={{ background: '#0D1A1A', color: '#9CA3AF' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
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
            <p className="text-sm leading-relaxed">
              A university capstone research project exploring value proposition development, member strategy, and platform launch readiness for Greentech Alliance.
            </p>
            <div className="flex gap-3 mt-4">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <Icon size={16} style={{ color: '#14BDAC' }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm hover:text-white transition-colors" style={{ color: '#9CA3AF' }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-white font-semibold mb-4 text-sm">Project Credits</p>
            <ul className="space-y-2 text-sm">
              <li>Capstone Team · Matilha</li>
              <li>Industry Partner · Greentech Alliance</li>
              <li>Academic Year · 2026</li>
              <li>SAIT · School of Business</li>
            </ul>
            <div className="mt-5 p-3 rounded-xl text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              This project was produced for academic purposes. All strategic recommendations are intended as advisory and require validation before implementation.
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs">© 2026 Matilha Capstone Project. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs">
            <span>Built for a greener tomorrow.</span>
          </div>
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
