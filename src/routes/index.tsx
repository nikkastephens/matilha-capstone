import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
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
  Zap,
  Shield,
  Star,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
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
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = [
      'home', 'intro', 'challenge', 'marketing',
      'competitors', 'survey', 'conversion', 'membership',
      'conclusion', 'recommendations'
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
    { href: '#intro', label: 'Intro' },
    { href: '#challenge', label: 'Challenge' },
    { href: '#marketing', label: 'Marketing' },
    { href: '#competitors', label: 'Competitor Research' },
    { href: '#survey', label: 'Survey' },
    { href: '#conversion', label: 'Conversion Study' },
    { href: '#membership', label: 'Membership & Pricing' },
    { href: '#conclusion', label: 'Conclusion' },
    { href: '#recommendations', label: 'Recommendations' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377, #2ECC71)' }}>
              <img
  src={`${import.meta.env.BASE_URL}greentech-logo.png`}
  alt="Greentech Alliance logo"
  className="w-full h-full object-contain"
/>
            </div>
            <span className="font-bold text-sm" style={{ color: '#0D7377' }}>Greentech Alliance</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
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
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-[8%] w-72 h-72 rounded-full opacity-10" style={{ background: 'rgba(255,255,255,0.3)', filter: 'blur(40px)' }} />
      <div className="absolute bottom-1/4 left-[6%] w-96 h-96 rounded-full opacity-10" style={{ background: 'rgba(255,255,255,0.2)', filter: 'blur(60px)' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Logo mark */}
        <div className="pulse-logo inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 overflow-hidden" }}>
         <img
  src={`${import.meta.env.BASE_URL}greentech-logo.png`}
  alt="Greentech Alliance logo"
  className="w-full h-full object-contain"
/>
        </div>

        <div className="tag tag-teal mb-4 inline-flex" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}>
          <Zap size={12} /> Capstone Research Project · 2025
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Greentech Alliance<br />
          <span style={{ color: '#F4D03F' }}>Capstone Project</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto mb-10 leading-relaxed">
          Exploring how Greentech Alliance can strengthen its value proposition, improve member understanding, and develop a clearer membership and marketing strategy for a successful platform launch.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {[
            { href: '#intro', label: 'Explore the Project', primary: true },
            { href: '#survey', label: 'Survey Findings', primary: false },
            { href: '#competitors', label: 'View Research', primary: false },
            { href: '#recommendations', label: 'Final Recommendations', primary: false },
          ].map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
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

        {/* Preview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: <Target size={20} />, label: 'Problem & Challenge', href: '#challenge' },
            { icon: <BarChart2 size={20} />, label: 'Survey & Research', href: '#survey' },
            { icon: <Users size={20} />, label: 'Member Strategy', href: '#membership' },
            { icon: <Lightbulb size={20} />, label: 'Recommendations', href: '#recommendations' },
          ].map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="card-hover rounded-2xl p-4 text-center cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex justify-center mb-2 text-white/90">{card.icon}</div>
              <p className="text-xs font-semibold text-white/90">{card.label}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

// ─── Section Header Helper ─────────────────────────────────────────────
function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 reveal">
      <span className="tag tag-teal mb-3 inline-flex">{tag}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#1A2332' }}>{title}</h2>
      {subtitle && <p className="text-lg max-w-2xl mx-auto" style={{ color: '#718096' }}>{subtitle}</p>}
    </div>
  )
}

// ─── Bridge Text ───────────────────────────────────────────────────────
function BridgeText({ children }: { children: React.ReactNode }) {
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
      name: 'Alex Chen',
      role: 'Research Lead',
      bio: 'Focused on market analysis and competitive benchmarking for sustainability-driven organizations.',
      color: '#0D7377',
    },
    {
      name: 'Maria Santos',
      role: 'Survey Designer',
      bio: 'Led member survey design, data collection, and quantitative analysis across key stakeholder groups.',
      color: '#2ECC71',
    },
    {
      name: 'Jordan Lee',
      role: 'Strategy Analyst',
      bio: 'Specializes in value proposition development and go-to-market strategy for emerging platforms.',
      color: '#14BDAC',
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Strategist',
      bio: 'Developed communication frameworks and positioning recommendations for platform launch readiness.',
      color: '#F4D03F',
    },
    {
      name: 'Sam Nguyen',
      role: 'Membership Analyst',
      bio: 'Investigated pricing models, membership tiers, and conversion dynamics for community platforms.',
      color: '#1abc9c',
    },
  ]

  return (
    <section id="intro" className="section-pad section-gradient-teal">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Introduction"
          title="About Greentech Alliance"
          subtitle="A university capstone partnership exploring growth strategy for a climate-tech community platform."
        />

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="reveal reveal-left callout-teal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#0D7377' }}>
                <Globe size={20} color="white" />
              </div>
              <h3 className="font-bold text-xl" style={{ color: '#1A2332' }}>Who is Greentech Alliance?</h3>
            </div>
            <p style={{ color: '#4A5568', lineHeight: '1.75' }}>
              Greentech Alliance is an emerging member-based community and platform designed to connect climate-tech entrepreneurs, sustainability-focused professionals, investors, and ecosystem builders. The organization is built on the belief that collaboration and shared knowledge are the foundation of a greener economy.
            </p>
            <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              At the time of this capstone engagement, Greentech Alliance was preparing for its formal platform launch — a pivotal moment requiring a clear strategy, a defined value proposition, and a strong understanding of what prospective members truly need and value.
            </p>
          </div>

          <div className="reveal reveal-right callout-green">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#27ae60' }}>
                <BookOpen size={20} color="white" />
              </div>
              <h3 className="font-bold text-xl" style={{ color: '#1A2332' }}>The Capstone Partnership</h3>
            </div>
            <p style={{ color: '#4A5568', lineHeight: '1.75' }}>
              This capstone project was undertaken by a multidisciplinary team of graduate students in partnership with Greentech Alliance's founding team. Over the course of the engagement, the team conducted market research, competitive analysis, member surveys, and strategic planning work to help inform the organization's path to launch.
            </p>
            <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
              The project followed an applied research methodology, combining desk research, primary data collection, and strategic frameworks widely used in product development and community platform design.
            </p>
          </div>
        </div>

        {/* Team */}
        <h3 className="text-2xl font-bold text-center mb-8 reveal" style={{ color: '#1A2332' }}>Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-2xl p-6 text-center bg-white border`}
              style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl"
                style={{ background: member.color }}
              >
                {member.name.charAt(0)}
              </div>
              <h4 className="font-bold text-sm mb-1" style={{ color: '#1A2332' }}>{member.name}</h4>
              <p className="text-xs font-semibold mb-2" style={{ color: member.color }}>{member.role}</p>
              <p className="text-xs" style={{ color: '#718096', lineHeight: '1.6' }}>{member.bio}</p>
            </div>
          ))}
        </div>

        <BridgeText>
          This capstone began with a central question: how can Greentech Alliance build a platform and membership strategy that truly reflects member needs while supporting long-term growth? Answering that question required moving methodically through market understanding, communication planning, competitive analysis, and direct member research.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Challenge Section ─────────────────────────────────────────────────
function ChallengeSection() {
  const problems = [
    {
      icon: <Target size={22} />,
      title: 'Undefined Value Proposition',
      desc: 'Greentech Alliance had not yet established a clear, differentiated value proposition. Without this foundation, it becomes difficult to attract, convert, and retain members at scale.',
      color: '#0D7377',
    },
    {
      icon: <Users size={22} />,
      title: 'Member Needs Uncertainty',
      desc: 'The founding team lacked concrete data on what prospective members actually want, what would motivate them to join, and what they would be willing to pay for.',
      color: '#2ECC71',
    },
    {
      icon: <BarChart2 size={22} />,
      title: 'No Structured Launch Strategy',
      desc: 'A formal marketing and communication plan had not been developed. Without clear messaging, positioning, and audience targeting, a platform launch risked generating low engagement.',
      color: '#F4D03F',
    },
    {
      icon: <TrendingUp size={22} />,
      title: 'Premature Scaling Risk',
      desc: 'Launching before validating member needs creates a significant risk of misaligned positioning — potentially expensive to correct after significant investment has been made.',
      color: '#14BDAC',
    },
  ]

  return (
    <section id="challenge" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="The Challenge"
          title="Problem Statement"
          subtitle="Greentech Alliance faced a set of interconnected strategic challenges common to emerging community platforms."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`card-hover reveal reveal-delay-${i + 1} rounded-2xl p-6 bg-white border`}
              style={{ borderColor: '#E8ECEF', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ background: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#1A2332' }}>{p.title}</h3>
              <p className="text-sm" style={{ color: '#718096', lineHeight: '1.7' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal callout-yellow rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#F4D03F' }}>
              <AlertTriangle size={22} color="#92680a" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3" style={{ color: '#92680a' }}>The Core Tension</h3>
          <p className="text-base" style={{ color: '#4A5568', lineHeight: '1.8' }}>
            Greentech Alliance is building a member-based community platform at a time when the organization's own understanding of its members remains limited. The gap between organizational ambition and member-validated insight represents both the greatest challenge — and the greatest opportunity — identified in this capstone project.
          </p>
        </div>

        <BridgeText>
          To respond to this challenge, the project moved into market understanding, communication planning, and competitive analysis. Each phase of research was designed to build a more complete picture of both the external landscape and the internal strategy gaps that need to be addressed.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Marketing Section ─────────────────────────────────────────────────
function MarketingSection() {
  const steps = [
    { step: 1, label: 'Audience Identification', desc: 'Clearly define primary and secondary audience segments — climate-tech entrepreneurs, sustainability professionals, investors, and policy advocates.' },
    { step: 2, label: 'Messaging Development', desc: 'Develop core messaging that speaks to the specific needs, aspirations, and pain points of each identified audience segment.' },
    { step: 3, label: 'Channel Strategy', desc: 'Identify the most effective channels (LinkedIn, newsletters, events, partnerships) to reach and activate each audience.' },
    { step: 4, label: 'Launch Sequencing', desc: 'Structure a phased communication plan — from teaser and awareness through activation, conversion, and member onboarding.' },
    { step: 5, label: 'Feedback Integration', desc: 'Build in mechanisms to capture early member feedback and iterate on messaging, positioning, and platform features accordingly.' },
  ]

  return (
    <section id="marketing" className="section-pad section-gradient-green">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Marketing Strategy"
          title="Value Proposition & Communication Plan"
          subtitle="Before a platform launch can succeed, the foundational marketing elements must be clearly defined."
        />

        <div className="grid md:grid-cols-2 gap-10 mb-14 items-start">
          <div className="reveal reveal-left">
            <div className="callout-teal mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#0D7377' }}>
                  <Target size={20} color="white" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Understanding the Missing Value Proposition</h3>
              </div>
              <p style={{ color: '#4A5568', lineHeight: '1.75' }}>
                A value proposition is the primary reason a member would join and remain active in a community platform. At the outset of this engagement, Greentech Alliance had not yet articulated a clear, differentiated value proposition — one that concisely communicates what members gain, why this platform is unique, and why now is the right time to join.
              </p>
              <p className="mt-3" style={{ color: '#4A5568', lineHeight: '1.75' }}>
                Without this, all downstream marketing activities — from copywriting to channel selection — lack a coherent north star. The research team identified value proposition development as a foundational prerequisite to effective launch communication.
              </p>
            </div>

            <div className="callout-green">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare size={18} style={{ color: '#27ae60' }} />
                <h4 className="font-bold" style={{ color: '#1A2332' }}>Positioning Placeholder</h4>
              </div>
              <div className="p-4 rounded-xl bg-white border text-center italic" style={{ color: '#9CA3AF', borderColor: '#E8ECEF' }}>
                "Insert finalized value proposition statement here once member research is complete."
              </div>
              <div className="mt-3 p-4 rounded-xl bg-white border text-center italic" style={{ color: '#9CA3AF', borderColor: '#E8ECEF' }}>
                "Insert primary audience statement here: [Target Audience] who [key need], Greentech Alliance offers [unique benefit]."
              </div>
            </div>
          </div>

          <div className="reveal reveal-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#27ae60' }}>
                <Zap size={20} color="white" />
              </div>
              <h3 className="font-bold text-lg" style={{ color: '#1A2332' }}>Communication Plan for Platform Launch</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg, #0D7377, #2ECC71)' }} />
              <div className="space-y-5">
                {steps.map((s) => (
                  <div key={s.step} className="flex gap-5 pl-14 relative">
                    <div
                      className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: 'linear-gradient(135deg, #0D7377, #14BDAC)' }}
                    >
                      {s.step}
                    </div>
                    <div className="bg-white rounded-xl p-4 border flex-1" style={{ borderColor: '#E8ECEF', boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: '#1A2332' }}>{s.label}</p>
                      <p className="text-xs" style={{ color: '#718096', lineHeight: '1.6' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <BridgeText>
          With the early gaps identified, competitor research helped provide external benchmarks and reveal how similar organizations communicate value and structure their offerings. Understanding what comparable platforms do well — and where gaps remain — offered critical context for Greentech Alliance's own positioning work.
        </BridgeText>
      </div>
    </section>
  )
}

// ─── Competitor Research Section ──────────────────────────────────────
function CompetitorSection() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  const toggle = (id: string) => setOpenCard(openCard === id ? null : id)

  const localCompetitors = [
    {
      id: 'foresight',
      name: 'Foresight Canada',
      tag: 'Local',
      tagColor: '#0D7377',
      overview: 'Foresight Canada is a leading clean technology accelerator that supports cleantech companies in scaling their solutions domestically and internationally.',
      offering: 'Accelerator programs, mentorship networks, investor connections, and market access support for Canadian cleantech startups.',
      model: 'Program-based membership with cohort selection. Organizations must apply to participate in structured acceleration programs.',
      strengths: 'Strong government and institutional backing, proven track record with over 300 cleantech companies, robust network of industry mentors.',
      takeaway: 'Foresight demonstrates that credibility and institutional partnerships are critical value drivers in the cleantech space.',
    },
    {
      id: 'greeneconomy',
      name: 'Green Economy Canada',
      tag: 'Local',
      tagColor: '#0D7377',
      overview: 'Green Economy Canada supports local businesses in measuring, reducing, and offsetting their environmental impact through peer learning networks.',
      offering: 'Sustainability benchmarking, peer learning cohorts, carbon measurement tools, and a certification framework for sustainable businesses.',
      model: 'Membership-based with tiered pricing depending on organization size. Structured around cohort-based programs.',
      strengths: 'Strong focus on community and peer exchange. Clear ROI narrative around cost savings and sustainability benchmarking.',
      takeaway: 'Peer learning and tangible measurement tools create strong perceived value among members seeking practical sustainability integration.',
    },
    {
      id: 'smartprosperity',
      name: 'Smart Prosperity Institute',
      tag: 'Local',
      tagColor: '#0D7377',
      overview: 'Smart Prosperity is a leading clean economy think tank that bridges research, policy, and business to accelerate the transition to a prosperous clean economy.',
      offering: 'Research publications, policy briefs, events, and a business leadership roundtable focused on clean economy transition.',
      model: 'Free public resources combined with a premium corporate membership for roundtable access and direct policy engagement.',
      strengths: 'Research credibility, strong policy influence, and the prestige of connecting business leaders with policymakers.',
      takeaway: 'Thought leadership and policy access are high-value differentiators. Members pay for influence, not just information.',
    },
    {
      id: 'diversitysust',
      name: 'Diversity & Sustainability',
      tag: 'Local',
      tagColor: '#0D7377',
      overview: 'A community-focused organization working at the intersection of environmental sustainability and social equity, emphasizing inclusive clean economy transitions.',
      offering: 'Networking events, educational programming, mentorship, and advocacy resources for underrepresented groups in the sustainability sector.',
      model: 'Open community membership with event-based engagement. Revenue generated through sponsorships and partnerships.',
      strengths: 'Distinct positioning in an underserved niche. Strong community loyalty driven by shared values and identity.',
      takeaway: 'Value alignment around identity and shared mission can be as powerful a retention driver as tangible functional benefits.',
    },
  ]

  const intlCompetitors = [
    {
      id: 'climatetechcities',
      name: 'Climate Tech Cities',
      tag: 'International',
      tagColor: '#2ECC71',
      overview: 'A global network connecting climate technology innovators, city governments, and investors to accelerate urban climate solutions.',
      offering: 'City-focused climate tech matching, collaboration tools, and cross-sector partnership facilitation.',
      model: 'City and organization membership with tiered access to collaboration tools and matchmaking services.',
      strengths: 'Geographic diversity, strong urban focus, and a clearly defined niche (city-scale climate tech).',
      takeaway: 'Geographic and thematic specialization creates a focused, easily communicable value proposition.',
    },
    {
      id: 'climatetechcoalition',
      name: 'Climate Tech Coalition',
      tag: 'International',
      tagColor: '#2ECC71',
      overview: 'A U.S.-based advocacy and network organization for the climate technology industry, focused on policy and commercialization.',
      offering: 'Policy advocacy, industry reports, member directory, and event programming for climate tech stakeholders.',
      model: 'Corporate membership model with advocacy and policy access as the primary value exchange.',
      strengths: 'Strong Washington D.C. policy influence, credible voice on climate legislation, high-profile member roster.',
      takeaway: 'Policy access and industry representation offer a compelling membership rationale for corporate and startup members alike.',
    },
    {
      id: 'climatecapital',
      name: 'Climate & Capital Connect',
      tag: 'International',
      tagColor: '#2ECC71',
      overview: 'A platform connecting climate-focused startups and investors through structured deal flow, events, and curated matchmaking.',
      offering: 'Investor-startup matching, curated deal flow, climate finance events, and impact measurement resources.',
      model: 'Dual-sided platform with startup and investor memberships. Revenue from membership fees and event sponsorships.',
      strengths: 'Clear, high-stakes value exchange (capital access), elegant matchmaking platform, and strong event programming.',
      takeaway: 'Platforms with high-value, tangible outcomes (like access to capital) can command premium pricing and strong conversion rates.',
    },
  ]

  function CompetitorCard({ comp }: { comp: typeof localCompetitors[0] }) {
    const isOpen = openCard === comp.id
    return (
      <div
        className={`card-hover rounded-2xl border overflow-hidden transition-all duration-300 bg-white`}
        style={{ borderColor: isOpen ? comp.tagColor : '#E8ECEF', boxShadow: isOpen ? `0 8px 30px ${comp.tagColor}25` : '0 2px 10px rgba(0,0,0,0.05)' }}
      >
        <button
          className="w-full p-5 text-left flex items-center justify-between gap-3"
          onClick={() => toggle(comp.id)}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm" style={{ background: comp.tagColor }}>
              {comp.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-sm" style={{ color: '#1A2332' }}>{comp.name}</h4>
              <span className="tag text-xs" style={{ background: `${comp.tagColor}18`, color: comp.tagColor }}>{comp.tag}</span>
            </div>
          </div>
          {isOpen ? <ChevronUp size={18} style={{ color: '#9CA3AF' }} /> : <ChevronDown size={18} style={{ color: '#9CA3AF' }} />}
        </button>

        <div className={`accordion-content ${isOpen ? 'open' : ''} px-5 pb-5`}>
          <div className="border-t pt-4 space-y-3" style={{ borderColor: '#F0F4F8' }}>
            {[
              { label: 'Overview', value: comp.overview },
              { label: 'What They Offer', value: comp.offering },
              { label: 'Membership Model', value: comp.model },
              { label: 'Key Strengths', value: comp.strengths },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: comp.tagColor }}>{item.label}</p>
                <p className="text-sm" style={{ color: '#4A5568', lineHeight: '1.7' }}>{item.value}</p>
              </div>
            ))}
            <div className="callout-teal mt-3 p-3 rounded-xl">
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#0D7377' }}>Key Takeaway</p>
              <p className="text-sm italic" style={{ color: '#4A5568' }}>{comp.takeaway}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="competitors" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Competitor Research"
          title="Competitive Landscape Analysis"
          subtitle="Click any card to explore a detailed profile of each competitor organization."
        />

        <div className="mb-10 reveal">
          <div className="flex items-center gap-3 mb-5">
            <MapPin size={18} style={{ color: '#0D7377' }} />
            <h3 className="text-lg font-bold" style={{ color: '#1A2332' }}>Local Competitors</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {localCompetitors.map((comp) => (
              <CompetitorCard key={comp.id} comp={comp} />
            ))}
          </div>
        </div>

        <div className="reveal">
          <div className="flex items-center gap-3 mb-5">
            <Globe size={18} style={{ color: '#2ECC71' }} />
            <h3 className="text-lg font-bold" style={{ color: '#1A2332' }}>International Competitors</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {intlCompetitors.map((comp) => (
              <CompetitorCard key={comp.id} comp={comp} />
            ))}
          </div>
        </div>

        <BridgeText>
          While competitor analysis revealed how others position themselves and structure their offerings, understanding Greentech Alliance's own members became the most important next step. External benchmarks are valuable — but they are no substitute for primary member insight.
        </BridgeText>
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
    <section id="survey" className="section-pad section-gradient-teal">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Member Survey"
          title="Survey with Members"
          subtitle="Primary research designed to understand what prospective members truly value — and what they need before committing."
        />

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
    <section id="conversion" className="section-pad bg-white">
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
    <section id="membership" className="section-pad section-gradient-green">
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
    <section id="conclusion" className="section-pad bg-white">
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
    <section id="recommendations" className="section-pad section-gradient-teal">
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
    { label: 'Introduction', href: '#intro' },
    { label: 'Challenge', href: '#challenge' },
    { label: 'Marketing', href: '#marketing' },
    { label: 'Competitors', href: '#competitors' },
    { label: 'Survey', href: '#survey' },
    { label: 'Conversion', href: '#conversion' },
    { label: 'Membership', href: '#membership' },
    { label: 'Conclusion', href: '#conclusion' },
    { label: 'Recommendations', href: '#recommendations' },
  ]

  return (
    <footer style={{ background: '#0D1A1A', color: '#9CA3AF' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D7377, #2ECC71)' }}>
              <<img
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
              <li>Capstone Team · Graduate Program</li>
              <li>Industry Partner · Greentech Alliance</li>
              <li>Academic Year · 2024–2025</li>
              <li>Submitted · April 2025</li>
            </ul>
            <div className="mt-5 p-3 rounded-xl text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              This project was produced for academic purposes. All strategic recommendations are intended as advisory and require validation before implementation.
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-xs">© 2025 Greentech Alliance Capstone Project. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs">
            <img
  src={`${import.meta.env.BASE_URL}greentech-logo.png`}
  alt="Greentech Alliance logo"
  className="w-full h-full object-contain"
/>
            <span>Built for a greener tomorrow</span>
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
