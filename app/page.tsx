'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Cloud, Code2, Download, ExternalLink, Mail, Menu, MessageSquareText,
  Mic2, Network, Send, ShieldCheck, Sparkles, UsersRound, X
} from 'lucide-react';

const projects = [
  {
    number: '01', category: 'Digital platforms', tag: 'Customer engagement',
    title: 'Making customer conversations work across channels',
    client: 'Clickatell · Project delivery',
    description: 'Coordinating enterprise customer-engagement implementations that connect WhatsApp, SMS, USSD and conversational experiences with business processes.',
    details: ['Cross-functional delivery across technical and business teams', 'Integration planning, testing, UAT and stakeholder alignment', 'Delivery governance, risk visibility and continuous improvement'],
    icon: MessageSquareText, tone: 'mint'
  },
  {
    number: '02', category: 'Cloud & infrastructure', tag: 'Cloud transformation',
    title: 'From cloud strategy to coordinated delivery',
    client: 'Datamellon · Cloud modernisation',
    description: 'Supporting cloud migration, infrastructure modernisation and data initiatives across enterprise environments, working with architects, engineers and client stakeholders.',
    details: ['AWS and Google Cloud delivery coordination', 'Migration planning, dependencies and delivery controls', 'Risk, financial and executive reporting'],
    icon: Cloud, tone: 'blue'
  },
  {
    number: '03', category: 'Capacity building', tag: 'Training & adoption',
    title: 'Helping more people find their place in technology',
    client: 'Makintouch Consulting · Training',
    description: 'Planning and delivering cloud and technology learning experiences, workshops and career-transition sessions for professionals and aspiring technologists.',
    details: ['Cloud and digital-skills workshops', 'Learning programme coordination and facilitation', 'Practical pathways into modern technology roles'],
    icon: UsersRound, tone: 'gold'
  },
  {
    number: '04', category: 'AI & innovation', tag: 'Applied innovation',
    title: 'Connecting emerging technology to real-world needs',
    client: 'AI, digital products & programme delivery',
    description: 'Exploring how AI-enabled tools and digital products can make information, services and career decisions more useful, accessible and actionable.',
    details: ['Translating user needs into delivery plans', 'Coordinating technical and non-technical stakeholders', 'Balancing product experience with practical implementation'],
    icon: BrainCircuit, tone: 'violet'
  },
];

const skills = [
  { title: 'Programme & project delivery', desc: 'Scope, plans, dependencies, RAID, budgets, reporting and delivery governance.', icon: BriefcaseBusiness, tags: ['Programme delivery', 'PMO governance', 'Agile / Scrum', 'Stakeholder management'] },
  { title: 'Cloud & digital platforms', desc: 'Coordinating technical teams across cloud, customer engagement and enterprise modernisation.', icon: Cloud, tags: ['AWS', 'Google Cloud', 'WhatsApp / SMS / USSD', 'Integrations'] },
  { title: 'AI & transformation', desc: 'Bringing business objectives, emerging technology and implementation teams into alignment.', icon: BrainCircuit, tags: ['AI-enabled solutions', 'Digital strategy', 'Automation', 'Technology roadmaps'] },
  { title: 'People, learning & community', desc: 'Building capability through training, mentorship, speaking and community participation.', icon: UsersRound, tags: ['Technical training', 'Mentorship', 'Public speaking', 'Partner coordination'] },
];

const timeline = [
  { date: '2025 — Present', role: 'Project Manager · Digital Technology Delivery', org: 'Clickatell, USA', text: 'Leading delivery coordination for enterprise customer-engagement and digital communication initiatives across WhatsApp, SMS, USSD and conversational platforms.' },
  { date: '2024', role: 'Project Manager / Agile Delivery Lead', org: 'Datamellon', text: 'Coordinated enterprise cloud and infrastructure programmes, cross-functional delivery teams, governance routines and client-facing reporting.' },
  { date: '2022 — 2023', role: 'Lead Programme Manager', org: 'Makintouch Consulting', text: 'Led technology programmes, cloud adoption initiatives, partner coordination and professional training experiences.' },
];

const gallery = [
  { src: '/images/aws-community-day-stage.jpg', alt: 'AWS Community Day West Africa event stage', label: 'AWS Community Day', type: 'Community & events' },
  { src: '/images/aws-community-day-awards.jpg', alt: 'Presenting laptop prizes to AWS Community Day hackathon winners', label: 'Celebrating builders', type: 'Community & events' },
  { src: '/images/aws-community-speaking.jpg', alt: 'Israel participating as a speaker at AWS Community Day West Africa', label: 'AWS community conversations', type: 'Speaking & training' },
  { src: '/images/ibadan-startup-speaking.jpg', alt: 'Israel speaking at the Ibadan Startup Festival', label: 'Ibadan Startup Festival', type: 'Speaking & training' },
  { src: '/images/nysc-training-2.jpg', alt: 'A group of NYSC participants attending a technology session', label: 'Technology career outreach', type: 'Speaking & training' },
  { src: '/images/ibadan-startup-festival.jpg', alt: 'Israel at a startup and technology event', label: 'Startup ecosystem', type: 'Community & events' },
  { src: '/images/aws-go-cloud-team.jpg', alt: 'AWS and Makintouch team at a cloud event', label: 'Cloud community', type: 'Community & events' },
  { src: '/images/aws-go-cloud-speaking.jpg', alt: 'Israel sharing knowledge during an AWS Go Cloud with AWS session', label: 'Go Cloud with AWS', type: 'Speaking & training' },
  { src: '/images/nysc-training-1.jpg', alt: 'Technology training in a classroom setting', label: 'Practical learning', type: 'Speaking & training' },
  { src: '/images/financial-summit-flyer.jpg', alt: 'Financial Summit speaker flyer featuring Israel Kuti', label: 'Financial Summit', type: 'Speaking & training' },
  { src: '/images/makintouch-transition-webinar.jpg', alt: 'Makintouch webinar flyer featuring Israel Kuti speaking about transitioning into technology', label: 'Transition into tech webinar', type: 'Speaking & training' },
  { src: '/images/datamellon-training.jpg', alt: 'Israel facilitating a technology session in a training room', label: 'Technology delivery & training', type: 'Speaking & training' },
];

const navItems = [
  ['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Speaking', '#speaking'], ['Contact', '#contact']
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [copied, setCopied] = useState(false);
  const categories = ['All', 'Digital platforms', 'Cloud & infrastructure', 'Capacity building', 'AI & innovation'];
  const filteredProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('israelkuti@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = 'mailto:israelkuti@gmail.com';
    }
  }

  return (
    <main>
      <div className="topline"><span className="status-dot" /> Open to meaningful conversations on technology delivery, transformation and capacity building <span className="topline-end">Lagos, Nigeria · Working globally</span></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Israel Kuti home"><span className="wordmark-symbol">IK<span>.</span></span><span className="wordmark-label">Israel Kuti<small>Technology · Delivery · Impact</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <a className="header-cta" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</motion.nav>}</AnimatePresence>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="eyebrow-line" /> TECHNOLOGY PROGRAMME LEADER</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>Turning complex technology into <em>clear delivery.</em></motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .16 }}>I’m Israel Kuti — a technology programme and project leader working at the intersection of digital transformation, AI-enabled customer engagement, cloud modernisation and people development.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .24 }}><a className="button button-primary" href="#work">Explore selected work <ArrowDownRight size={17} /></a><a className="button button-quiet" href="/documents/israel-kuti-cv.pdf" target="_blank" rel="noreferrer">View my CV <Download size={16} /></a></motion.div>
          <motion.div className="hero-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .38 }}><div className="proof-number">4,000<span>+</span></div><div className="proof-caption">people trained and mentored<br />across technology disciplines</div><div className="proof-divider" /><div className="proof-number">40<span>+</span></div><div className="proof-caption">professionals coordinated<br />across cross-functional teams</div></motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }}>
          <div className="portrait-backdrop" />
          <div className="portrait-frame"><Image src="/images/israel-kuti-headshot.jpeg" alt="Israel Kuti, technology programme leader" fill priority sizes="(max-width: 900px) 90vw, 42vw" className="portrait-image" /></div>
          <div className="portrait-caption"><span className="caption-marker" /><div><strong>Israel Kuti</strong><small>Programme delivery · Digital transformation</small></div><ArrowUpRight size={18} /></div>
          <div className="floating-card card-top"><span className="floating-icon"><Network size={17} /></span><div><small>FOCUS</small><strong>Systems that scale</strong></div></div>
          <div className="floating-card card-bottom"><span className="floating-icon gold-icon"><Sparkles size={17} /></span><div><small>APPROACH</small><strong>People + technology</strong></div></div>
          <div className="visual-index">01 / 05 <span /></div>
        </motion.div>
      </section>

      <section className="signal-strip"><div className="signal-inner"><span>WORKING ACROSS</span><b>Digital transformation</b><i /> <b>Cloud & AI</b><i /> <b>Enterprise delivery</b><i /> <b>Technology education</b></div></section>

      <section className="section-wrap work-section section-pad" id="work">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK</div><h2>Good work is more than a launch.<br /><em>It’s a result people can use.</em></h2></div><p className="section-intro">A snapshot of the environments and challenges I help move forward — from customer-facing digital platforms to cloud programmes and technology learning.</p></div>
        <div className="filter-row" aria-label="Filter projects">{categories.map((category) => <button key={category} className={filter === category ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(category)}>{category}</button>)}</div>
        <motion.div className="project-grid" layout>{filteredProjects.map((project) => { const Icon = project.icon; return <motion.article className={`project-card ${project.tone}`} key={project.number} layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }}><div className="project-card-top"><span className="project-number">{project.number} / 04</span><span className="project-icon"><Icon size={21} /></span></div><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-card-bottom"><span>{project.client}</span><button onClick={() => setActiveProject(project)} aria-label={`Read more about ${project.title}`}><ArrowUpRight size={18} /></button></div></motion.article>; })}</motion.div>
        <div className="work-note"><span className="note-icon"><ShieldCheck size={18} /></span><p>Project descriptions are intentionally focused on the work and delivery approach. Client-sensitive details and internal information are not published.</p></div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-grid"><div className="about-visual"><div className="about-image"><Image src="/images/technology-event-portrait.jpg" alt="Israel Kuti at a technology community event" fill sizes="(max-width: 800px) 90vw, 40vw" /></div><div className="about-stamp"><span>CURIOUS BY NATURE</span><Sparkles size={19} /><span>DELIVERY BY DESIGN</span></div><div className="about-photo-label">Beyond the plan.<br /><strong>Into the room.</strong></div></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div><h2>I bring people, platforms and priorities <em>into alignment.</em></h2><p className="about-lead">The technology is important. So are the people who need to use it, the teams who build it, and the business outcomes it must support.</p><p>My work spans enterprise technology delivery, digital customer engagement, cloud adoption and capability development. I translate complex goals into practical plans, help teams stay aligned, and create the visibility stakeholders need to make decisions.</p><p>Alongside delivery work, I care deeply about making technology more accessible — whether that means improving digital service journeys or helping someone see a path into a technology career.</p><div className="about-points"><div><Check size={16} /><span>Structured thinking, practical execution</span></div><div><Check size={16} /><span>Clear communication across technical and business teams</span></div><div><Check size={16} /><span>Capacity building with real-world context</span></div></div><a className="text-link" href="#contact">A little more about what I do <ArrowRight size={16} /></a></div></div></section>

      <section className="section-wrap capabilities-section section-pad"><div className="section-heading compact-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> CAPABILITIES</div><h2>Where I make a <em>difference.</em></h2></div><p className="section-intro">A connected toolkit for turning strategy into coordinated action — with people and outcomes kept in view.</p></div><div className="capability-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <motion.article className="capability-card" key={skill.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: i * .07 }}><div className="capability-icon"><Icon size={22} /></div><span className="capability-index">0{i + 1}</span><h3>{skill.title}</h3><p>{skill.desc}</p><div className="tag-list">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.article>; })}</div></section>

      <section className="experience-section" id="experience"><div className="section-wrap experience-grid"><div className="experience-intro"><div className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE</div><h2>Progress comes from <em>good delivery.</em></h2><p>Across different teams and industries, my focus has stayed consistent: establish clarity, bring the right people together, and keep execution moving.</p><a className="button button-outline" href="/documents/israel-kuti-cv.pdf" target="_blank" rel="noreferrer">Full professional history <ArrowUpRight size={16} /></a></div><div className="timeline">{timeline.map((item, i) => <motion.article className="timeline-item" key={item.org} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .4, delay: i * .08 }}><div className="timeline-marker"><span /></div><div className="timeline-date">{item.date}</div><h3>{item.role}</h3><div className="timeline-org">{item.org}</div><p>{item.text}</p></motion.article>)}</div></div></section>

      <section className="speaking-section section-wrap section-pad" id="speaking"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SPEAKING, TRAINING & COMMUNITY</div><h2>Share knowledge.<br /><em>Build what comes next.</em></h2></div><p className="section-intro">From cloud community events to career-transition sessions, I enjoy creating spaces where people can learn, connect and move forward.</p></div><div className="gallery-grid">{gallery.map((item, i) => <motion.figure className={`gallery-item gallery-item-${i + 1}`} key={item.src} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .4, delay: (i % 4) * .05 }}><div className="gallery-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div><figcaption><span>{item.type}</span><strong>{item.label}</strong><ArrowUpRight size={16} /></figcaption></motion.figure>)}</div><div className="speaking-callout"><div className="speaking-callout-icon"><Mic2 size={23} /></div><div><h3>Planning a session, workshop or panel?</h3><p>I’m interested in thoughtful conversations about technology delivery, cloud adoption, AI in practice and building technology capability.</p></div><a href="#contact" aria-label="Contact Israel about speaking"><ArrowUpRight size={20} /></a></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> CONTACT</div><h2>Have a meaningful challenge? <em>Let’s talk.</em></h2><p>Whether you’re delivering a digital programme, exploring a partnership, planning a technology event or building capability, I’d be glad to hear from you.</p><div className="contact-actions"><a className="button button-primary" href="mailto:israelkuti@gmail.com?subject=Let%27s%20connect">Send me an email <Send size={16} /></a><button className="button button-contact-quiet" onClick={copyEmail}>{copied ? <Check size={16} /> : <Mail size={16} />}{copied ? 'Email copied' : 'israelkuti@gmail.com'}</button></div></div><div className="contact-card"><div className="contact-card-top"><span className="contact-spark"><Sparkles size={19} /></span><span>THE NEXT STEP</span></div><h3>Good conversations create momentum.</h3><p>Tell me what you’re working on and where you need a partner in thinking or delivery.</p><a href="mailto:israelkuti@gmail.com?subject=Project%20or%20partnership%20enquiry">Start here <ArrowUpRight size={17} /></a><div className="contact-card-orbit orbit-one"/><div className="contact-card-orbit orbit-two"/></div></div></section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">IK<span>.</span></span><span className="wordmark-label">Israel Kuti<small>Technology · Delivery · Impact</small></span></a><span className="footer-note">Built around the work. Focused on what’s next.</span><div className="footer-links"><a href="/documents/israel-kuti-cv.pdf" target="_blank" rel="noreferrer">CV <ExternalLink size={13} /></a><a href="mailto:israelkuti@gmail.com">Email <ArrowUpRight size={13} /></a><a href="#home">Back to top <ArrowUpRight size={13} /></a></div><div className="copyright">© {new Date().getFullYear()} Israel Kuti</div></footer>

      <AnimatePresence>{activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null); }}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><span className="modal-kicker">SELECTED WORK / {activeProject.number}</span><span className="project-tag">{activeProject.tag}</span><h2 id="project-modal-title">{activeProject.title}</h2><p>{activeProject.description}</p><h3>Delivery focus</h3><ul>{activeProject.details.map((detail) => <li key={detail}><Check size={16} />{detail}</li>)}</ul><div className="modal-footer"><span>{activeProject.client}</span><a href="#contact" onClick={() => setActiveProject(null)}>Discuss a similar challenge <ArrowUpRight size={16} /></a></div></motion.div></motion.div>}</AnimatePresence>
    </main>
  );
}
