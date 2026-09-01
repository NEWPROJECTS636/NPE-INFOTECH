const basePath = typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL ? import.meta.env.BASE_URL : './';
const asset = path => {
  if (!path || /^(?:https?:|data:|#)/i.test(path)) return path;
  const cleanPath = String(path).replace(/^\/+/, '');
  return `${basePath}${cleanPath === 'logo.jpeg' ? 'assets/logo.jpeg' : cleanPath}`;
};
const assetFallback = path => {
  return asset(path);
};
const imageFallback = path => {
  const fallback = assetFallback(path);
  return fallback ? `onerror="this.onerror=null;this.src='${fallback}'"` : '';
};
const videoFallback = path => {
  const fallback = assetFallback(path);
  return fallback ? `onerror="this.onerror=null;this.src='${fallback}';this.load();this.play().catch(()=>{})"` : '';
};


const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    heart: '<path d="M20.8 8.8c0 5.4-8.8 10-8.8 10S3.2 14.2 3.2 8.8A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 8.8 1.6Z"/>',
    home: '<path d="m3 11 9-8 9 8M5 10v10h14V10M9 20v-6h6v6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    phone: '<path d="M7.2 3.5 5 5.3c-.8.7-.9 1.9-.5 2.9 2 5 5.3 8.3 10.3 10.3 1 .4 2.2.3 2.9-.5l1.8-2.2-3.4-2.2-1.5 1.4c-2-1-3.8-2.8-4.8-4.8l1.4-1.5-2-3.4Z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/>',
    spark: '<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
    users: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM16 4.5a3.5 3.5 0 0 1 0 6.8M18 15a3.5 3.5 0 0 1 2 3.2V20"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" aria-hidden="true">${paths[name] || paths.spark}</svg>`;
};

const pageLinks = [
  ['Home', '#/'], ['About us', '#/about'], ['Solutions', '#/solutions'], ['Current openings', '#/openings'], ['Contact us', '#/contact']
];
const industries = ['Manufacturing', 'Automotive', 'Engineering', 'Aerospace', 'Construction', 'Oil & Energy', 'Logistics', 'Retail', 'Travel & Tourism', 'Infrastructure', 'Marketing & Sales', 'Networking', 'Telecom', 'IT', 'Media & Advertisement'];
const solutions = [
  { name: 'IT Recruitment', icon: 'compass', text: 'Specialized hiring support for technology teams, with domain-focused search and a deep professional network.' },
  { name: 'Non-IT Recruitment', icon: 'users', text: 'Reliable permanent staffing solutions across operations, engineering, sales, finance, and business functions.' },
  { name: 'IT Staffing', icon: 'globe', text: 'Build flexible contractual and remote teams with people-first support from search through joining.' },
  { name: 'Training Programmes', icon: 'spark', text: 'Practical programmes that help organizations strengthen capability and prepare teams for what is next.' },
  { name: 'Training & Development', icon: 'heart', text: 'Structured learning and development designed around business needs, role expectations, and measurable growth.' },
  { name: 'Industry Verticals', icon: 'home', text: 'Deep expertise across 20+ diverse economic sectors, with tailored search solutions for each domain.' }
];
const testimonials = [
  ['“NPE INFOTECH has been our primary recruitment partner for 5 years. Their understanding of technical roles is unparalleled in the industry.”', 'Rajesh Kumar', 'HR Director, Bengaluru', 'Client'],
  ['“The transition from my previous role was seamless. NPE INFOTECH’s consultants really take the time to understand your career goals.”', 'Anita Sharma', 'Software Architect, Chennai', 'Candidate'],
  ['“Their executive search team found us a plant manager in record time. Highly professional and results-driven.”', 'David Wilson', 'COO, Mumbai', 'Client']
];

const founders = [
  ['With 7+ years of experience, this people-focused founder shapes thoughtful recruitment journeys and helps teams find the right fit.', 'Eleele Kumari A', 'Founder', '7+ years experience'],
  ['A founder with 7+ years of experience building thoughtful talent strategies and lasting relationships with clients.', 'Mafruj Nisha', 'Founder', '7+ years experience'],
  ['A founder with 7+ years of experience supporting people, process, and growth across the HR ecosystem.', 'Prima Pascal Fernandes', 'Founder', '7+ years experience']
];

const shell = (content, active = '') => `
  <main class="page" id="top">
    <div class="ambient" aria-hidden="true"><span class="orb orb-blue"></span><span class="orb orb-white"></span><span class="orb orb-small"></span><span class="orb orb-dot"></span></div>
    <section class="shell${active === '#/' ? ' home-shell' : ''}">
      <nav class="nav" id="nav"><a class="nav-brand" href="#/" aria-label="NPE INFOTECH home"><img class="nav-logo" src="${asset('/logo.jpeg')}" ${imageFallback('/logo.jpeg')} alt="NPE INFOTECH" /><span class="nav-name">INFOTECH</span></a><div class="nav-links">${pageLinks.map(([label, href]) => `<a class="${active === href ? 'active' : ''}" href="${href}">${label}</a>`).join('')}</div><div class="nav-actions"><button class="menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false">${icon('menu', 21)}</button></div></nav>
      <div id="route-content">${content}</div>
    </section>
    <div class="toast" id="toast" role="status"></div>
  </main>`;

const heroModel = () => `<div class="hero-model" role="img" aria-label="Abstract 3D illustration of connected people and talent"><div class="model-stage"><span class="model-orbit orbit-one"></span><span class="model-orbit orbit-two"></span><span class="model-core"><i></i></span><span class="model-person person-one"><i class="person-head"></i><i class="person-body"></i></span><span class="model-person person-two"><i class="person-head"></i><i class="person-body"></i></span><span class="model-person person-three"><i class="person-head"></i><i class="person-body"></i></span><span class="model-spark spark-one">✦</span><span class="model-spark spark-two">✦</span><span class="model-pedestal"></span></div></div>`;
const defaultHeroVideo = 'https://raw.githubusercontent.com/gughigug/metro-hero-assets/main/Subway_doors_open_to_city_202608242331.mp4';
const hero = (eyebrow, title, description, image, cta = '#/contact', useModel = false, useVideo = false, showArt = true, videoSrc = defaultHeroVideo, variant = '') => `
  <section class="page-hero${useVideo ? ' hero-with-video' : ''}${variant ? ` ${variant}` : ''}">${useVideo && !showArt ? `<video class="hero-background-video" src="${asset(videoSrc)}" ${videoFallback(videoSrc)} muted autoplay loop playsinline preload="auto" aria-hidden="true"></video><span class="hero-video-overlay" aria-hidden="true"></span>` : ''}<div class="hero-content reveal"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero-copy">${description}</p><div class="hero-actions"><a class="primary-btn" href="${cta}">Talk to us ${icon('arrow', 14)}</a><a class="text-link" href="#/solutions">Explore solutions ${icon('arrow', 13)}</a></div></div>${showArt ? `<div class="hero-art reveal">${useModel ? heroModel() : useVideo ? `<div class="hero-photo"><video class="hero-media" src="${asset(videoSrc)}" poster="${asset(image || '/assets/abhilekha-people.jpg')}" ${videoFallback(videoSrc)} muted autoplay loop playsinline preload="auto" aria-hidden="true"></video></div>` : `<div class="hero-photo"><img src="${asset(image)}" ${imageFallback(image)} alt="NPE INFOTECH team at work" /></div>`}</div>` : ''}</section>`;

const sectionIntro = (kicker, title, copy = '') => `<div class="section-intro reveal"><p class="eyebrow">${kicker}</p><h2>${title}</h2>${copy ? `<p>${copy}</p>` : ''}</div>`;
const companyAddress = 'Building No./Flat No.: K No. 1143/55<br />Name Of Premises/Building: Trendsquare Ortus 3, TA-1207<br />Road/Street: Lakshminarayanan Temple Road<br />Locality/Sub Locality: Amrutahalli<br />City/Town/Village: Bengaluru<br />District: Bengaluru Urban<br />State: Karnataka<br />PIN Code: 560092';
const footer = () => `<footer class="footer"><div class="footer-brand"><a class="footer-logo" href="#/"><img class="footer-logo-image" src="${asset('/logo.jpeg')}" ${imageFallback('/logo.jpeg')} alt="NPE INFOTECH" /></a><p>India's trusted HR partner. Delivering elite recruitment and training solutions across Bengaluru and India.</p><a class="footer-email" href="mailto:jobs@npeinfotech.com">jobs@npeinfotech.com</a></div><div><h4>Our solutions</h4>${solutions.map(s => `<a href="#/solutions">${s.name}</a>`).join('')}</div><div><h4>Company</h4><a href="#/about">About us</a><a href="#/openings">Jobs opening</a><a href="#/contact">Contact us</a></div><div><h4>Our offices</h4><p>${companyAddress}</p><p>GSTIN: 29ABZPF0015G1ZO</p></div><div class="footer-bottom"><span>Copyright © 2018 NPE INFOTECH Pvt. Ltd.</span><span>Privacy · Terms · Help</span></div></footer>`;

const homePage = () => `${hero('Trusted HR & staffing solutions', 'We help you achieve success with our <span>manpower solutions.</span>', 'From building teams on your payroll to contractual and remote teams, from a people first approach to technology driven outsourcing solutions, we are your success partners.', '/assets/abhilekha-people.jpg', '#/contact', true, true, false)}
  <section class="content-section industry-section" id="industries">${sectionIntro('Sector we cater', 'Industry <span>specialisations.</span>', 'We recognize that each industry has its own nuances in terms of management style, hiring practices and compensation norms. To provide clients with specialized search solutions, NPE INFOTECH has developed deep expertise across 20+ diverse economic sectors.')}
    <div class="industry-layout"><div class="industry-grid reveal">${industries.map((industry, index) => `<div class="industry-item"><span>${String(index + 1).padStart(2, '0')}</span><b>${industry}</b>${icon('arrow', 14)}</div>`).join('')}</div><div class="industry-visual reveal"><img src="${asset('/assets/abhilekha-map.jpg')}" ${imageFallback('/assets/abhilekha-map.jpg')} alt="Map showing a connected network of locations" /><span>20+ diverse<br /><b>economic sectors</b></span></div></div><div class="industry-proof"><strong>20+</strong><span>Global<br />Verticals</span><strong>100%</strong><span>Domain<br />Focus</span></div>
  </section>
  <section class="split-section vision-section">${sectionIntro('Our vision', 'A more confident way to <span>scale.</span>', 'To be India\'s most trusted HR and compliance partner, empowering Global Capability Centres and businesses across 22+ states to scale confidently with seamless multi-state payroll, statutory compliance, and permanent staffing solutions.')}
    <div class="mission-card reveal"><span class="card-icon">${icon('compass', 23)}</span><p class="eyebrow">Our mission</p><h3>People first.<br /><em>Delivery always.</em></h3><p>Deliver customized recruitment, staffing, payroll, and multi-state compliance solutions that drive higher ROI, ensuring complete compliance and faster hiring for GCCs, IT, manufacturing, and beyond.</p><a class="text-link" href="#/about">Discover our story ${icon('arrow', 13)}</a></div>
  </section>
  <section class="content-section why-section">${sectionIntro('Why choose NPE INFOTECH?', 'The details that make a <span>difference.</span>', 'Trusted by 500+ global clients for delivering seamless staffing, payroll, and 9 core HR outsourcing services.')}
    <div class="feature-grid reveal">${[['99%', 'High Joining Ratio', '99% joining ratio — maintained consistently across customers'], ['01', 'Huge Data Bank', 'Extensive repository of qualified candidates across all sectors'], ['ROI', 'Cost Effective', 'Optimized recruitment solutions that save time and resources'], ['TEAM', 'Experienced Recruiter', 'Expert team with deep industry knowledge and selection skills'], ['5:1', 'Selection Ratio', 'Highly efficient screening process for quality placements']].map(([num, title, copy]) => `<article class="feature"><strong>${num}</strong><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
  </section>
  <section class="culture-section"><div class="culture-image reveal"><video src="${asset('/assets/life-at-npe.mp4')}" poster="${asset('/assets/abhilekha-people.jpg')}" ${videoFallback('/assets/life-at-npe.mp4')} muted autoplay loop playsinline preload="auto" aria-hidden="true"></video></div><div class="culture-copy reveal">${sectionIntro('Our culture', 'Life at <span>NPE INFOTECH.</span>', 'Glimpses into our vibrant work environment and the people who make it happen.')}<div class="culture-list"><span>Our Corporate Office</span><span>Team at Work</span><span>Team Celebrations</span><span>NPE INFOTECH Family</span><span>Excellence in Action</span></div></div></section>
  <section class="content-section testimonials-section">${sectionIntro('Wall of love', 'What our partners <span>say.</span>', 'Trusted by thousands of candidates and hundreds of global enterprises.')}<div class="testimonial-grid reveal">${testimonials.map(([quote, name, role, type]) => `<article class="testimonial"><span class="quote-mark">“</span><p>${quote}</p><b>${name}</b><small>${role} · ${type}</small></article>`).join('')}</div></section>
  <section class="cta-section reveal"><p class="eyebrow">Ready when you are</p><h2>Let’s build what’s next.</h2><p>Tell us where you want to go. We’ll help you find the people and plan to get there.</p><a class="primary-btn" href="#/contact">Start a conversation ${icon('arrow', 14)}</a></section>${footer()}`;

const aboutPage = () => `${hero('About NPE INFOTECH', 'A people-first partner for <span>ambitious businesses.</span>', 'NPE INFOTECH is a trusted HR and workforce solutions partner, helping businesses build capable teams through thoughtful recruitment, staffing, training, and compliance support.', '', '#/contact', false, true, true, '/assets/about-us-video.mp4')}
  <section class="about-story content-section">${sectionIntro('Who we are', 'People, process, <span>progress.</span>', 'NPE INFOTECH brings together practical HR knowledge, a strong talent network, and a people-first approach to help organizations make confident decisions about their workforce.')}
  <div class="about-copy reveal"><p>We work closely with client companies to understand their exact requirements and connect them with the right people, processes, and solutions.</p><p>Our capabilities span talent acquisition, recruitment, staffing, employee learning and development, payroll, and compliance—supporting businesses as they grow and adapt.</p><div class="about-strengths"><strong>Our strengths</strong><ul><li>Specialized consultants across HR and operations</li><li>Focused technical recruitment for industry and consultancy</li><li>Flexible solutions shaped around changing business needs</li><li>People-first support from search through joining</li></ul></div></div></section>
  <section class="mission-grid content-section"><article class="mission-panel reveal"><p class="eyebrow">Our vision</p><h2>Aim to be the most recognized consulting company in India.</h2><p>NPE INFOTECH’s lifetime goal is to become an International HR service provider.</p></article><article class="mission-panel dark reveal"><p class="eyebrow">Our mission</p><h2>We enrich people in the corporate world.</h2><p>We provide value added and dedicated service. We create customer delight through quality service and timely delivery.</p></article></section>
  <section class="numbers-band reveal"><div><strong>360°</strong><span>End-to-end HR<br />solutions</span></div><div><strong>24/7</strong><span>Responsive consultant<br />support</span></div><div><strong>Pan India</strong><span>Multi-sector talent<br />network</span></div></section>${footer()}`;

const solutionsPage = () => `${hero('Our ecosystem', 'Solutions designed around <span>your next move.</span>', 'Deliver customized recruitment, staffing, payroll, and multi-state compliance solutions that drive higher ROI, ensuring complete compliance and faster hiring.', '/assets/abhilekha-map.jpg', '#/contact')}
  <section class="content-section solutions-section">${sectionIntro('Our solutions', 'People, process, <span>progress.</span>', 'Whether you are building a technology team, scaling a manufacturing operation, or developing your people, our specialists bring the right context to every search.')}
  <div class="solution-grid reveal">${solutions.map((solution, i) => `<article class="solution-card"><span class="solution-number">0${i + 1}</span><span class="card-icon">${icon(solution.icon, 22)}</span><h3>${solution.name}</h3><p>${solution.text}</p><a class="text-link" href="#/contact">Talk to a specialist ${icon('arrow', 13)}</a></article>`).join('')}</div></section>
  <section class="process-section"><div>${sectionIntro('How we work', 'Clear thinking. <span>Better hiring.</span>', 'Our experienced recruiters combine a large talent network with the detail and care needed to make every placement work for the long term.')}</div><div class="process-list reveal">${[['Understand', 'We listen closely to your business, culture, goals, and role requirements.'], ['Search', 'Our sector specialists bring the right network and domain focus to the search.'], ['Select', 'We screen for capability and fit, keeping your time and standards in focus.'], ['Support', 'From offer to joining, we stay close to make the transition seamless.']].map(([title, text], i) => `<div class="process-item"><strong>0${i + 1}</strong><div><h3>${title}</h3><p>${text}</p></div></div>`).join('')}</div></section>${footer()}`;

const openingsPage = () => `${hero('Jobs opening', 'The next good opportunity could be <span>closer than you think.</span>', 'NPE INFOTECH connects professionals and businesses across global industries. For current openings and role details, connect with our recruitment team.', '/assets/careers.jpg', '#/contact', false, true, true, '/assets/openings-video.mp4', 'openings-hero')}
  <section class="content-section openings-section">${sectionIntro('Current openings', 'Find the right <span>next step.</span>', 'Our consultants work across technology, engineering, manufacturing, sales, operations, and more.')}
  <div class="opening-board reveal"><div class="opening-board-head"><span>Current openings</span><span>Pan India · Updated regularly</span></div><div class="opening-empty"><span class="card-icon">${icon('compass', 24)}</span><h3>New roles are on the way.</h3><p>We are refreshing our openings. Share your profile or speak with our team to learn about opportunities across our network.</p><a class="primary-btn" href="mailto:jobs@abhilekha.com">Email jobs@abhilekha.com ${icon('arrow', 14)}</a></div></div></section>
  <section class="cta-section reveal"><p class="eyebrow">For hiring teams</p><h2>Need a team that moves with you?</h2><p>Our experienced associates can help you find the right people across 20+ global verticals.</p><a class="primary-btn" href="#/contact">Talk to us ${icon('arrow', 14)}</a></section>${footer()}`;

const contactPage = () => `${hero('Contact us', 'Let’s make your next <span>move count.</span>', 'Feel free to contact us. Tell us what you are building, and our team will help you find the right HR, recruitment, staffing, and training solution.', '/assets/contact.jpg', '#/contact', false, true, true, '/assets/contact-video.mp4', 'contact-hero')}
  <section class="contact-layout content-section"><div class="contact-details">${sectionIntro('Our location', 'Let’s talk <span>human.</span>', 'Our Bengaluru team is here to help.')}<div class="contact-list"><div><span class="card-icon">${icon('home', 18)}</span><div><b>Address</b><p>${companyAddress}</p></div></div><div><span class="card-icon">${icon('phone', 18)}</span><div><b>Phone</b><p>080 2314 8132<br />080 2340 0510</p></div></div><div><span class="card-icon">${icon('mail', 18)}</span><div><b>Email</b><p>amrut@abhilekha.com<br />hr@abhilekha.com</p></div></div><div><span class="card-icon">${icon('globe', 18)}</span><div><b>GSTIN</b><p>29ABZPF0015G1ZO</p></div></div></div></div><form class="contact-form reveal" id="contact-form"><p class="eyebrow">Feel free to contact with us</p><h2>Start a conversation.</h2><label>Your name<input required name="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone number<input required name="phone" placeholder="080 0000 0000" /></label><label>How can we help?<textarea required name="message" rows="4" placeholder="Tell us a little about your requirement..."></textarea></label><button class="primary-btn" type="submit">Send enquiry ${icon('arrow', 14)}</button></form></section>${footer()}`;

const foundersSection = `<section class="content-section founders-section">${sectionIntro('The people behind NPE INFOTECH', 'Meet our <span>founders.</span>', 'The experience and people-first thinking guiding every relationship we build.')}<div class="testimonial-grid reveal">${founders.map(([bio, name, role, experience]) => `<article class="testimonial"><span class="quote-mark">&ldquo;</span><p>${bio}</p><b>${name}</b><small>${role} &middot; ${experience}</small></article>`).join('')}</div></section>`;
const routes = {'#/': [homePage, '#/'], '#/about': [aboutPage, '#/about'], '#/solutions': [solutionsPage, '#/solutions'], '#/openings': [openingsPage, '#/openings'], '#/contact': [contactPage, '#/contact']};
const currentRoute = () => { const hash = window.location.hash || '#/'; return routes[hash] ? hash : '#/'; };
const render = () => { const hash = currentRoute(); document.querySelector('#app').innerHTML = shell(routes[hash][0](), routes[hash][1]); if (hash === '#/') document.querySelector('.footer')?.insertAdjacentHTML('beforebegin', foundersSection); window.scrollTo({ top: 0, behavior: 'auto' }); setupInteractions(); };
const toast = (message) => { const el = document.querySelector('#toast'); if (!el) return; el.textContent = message; el.classList.add('show'); clearTimeout(window.toastTimer); window.toastTimer = setTimeout(() => el.classList.remove('show'), 3000); };
const prepareTypingHeadings = () => {
  const headings = [...document.querySelectorAll('#route-content h1, #route-content h2, #route-content h3, #route-content h4')];
  headings.forEach(heading => {
    if (heading.dataset.typingReady) return;
    const headingText = heading.textContent.trim();
    if (!headingText) return;
    const characters = [];
    const wrapTextNode = node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(token => {
        if (!token) return;
        if (/\s+/.test(token)) {
          fragment.appendChild(document.createTextNode(token));
          return;
        }
        const word = document.createElement('span');
        word.className = 'typing-word';
        [...token].forEach(character => {
          const letter = document.createElement('span');
          letter.className = 'typing-char';
          letter.textContent = character;
          letter.setAttribute('aria-hidden', 'true');
          characters.push(letter);
          word.appendChild(letter);
        });
        fragment.appendChild(word);
      });
      node.replaceWith(fragment);
    };
    const walk = element => [...element.childNodes].forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) wrapTextNode(child);
      else if (child.nodeType === Node.ELEMENT_NODE) walk(child);
    });
    walk(heading);
    characters.forEach((character, index) => character.style.setProperty('--char-index', Math.min(index, 55)));
    heading.classList.add('typing-heading');
    heading.dataset.typingReady = 'true';
    heading.setAttribute('aria-label', headingText);
  });
  return headings.filter(heading => heading.dataset.typingReady);
};
const setupScrollChoreography = () => {
  document.documentElement.classList.remove('scroll-animation-ready');
  window.scrollChoreographyCleanup?.();
  const sections = [...document.querySelectorAll('#route-content section')];
  const headings = prepareTypingHeadings();
  const staggerTargets = [...document.querySelectorAll('#route-content .feature, #route-content .solution-card, #route-content .testimonial, #route-content .mission-panel, #route-content .process-item, #route-content .industry-item, #route-content .contact-list > div, #route-content .culture-list span, #route-content .numbers-band > div, #route-content .opening-board, #route-content .contact-form, #route-content .mission-card, #route-content .about-copy, #route-content .culture-image, #route-content .culture-copy')];

  sections.forEach((section, sectionIndex) => {
    section.classList.add('scroll-section');
    section.style.setProperty('--section-delay', `${Math.min(sectionIndex, 5) * 35}ms`);
    section.querySelectorAll('.reveal').forEach((element, elementIndex) => {
      element.style.setProperty('--reveal-delay', `${Math.min(elementIndex, 6) * 65}ms`);
    });
  });
  staggerTargets.forEach((element, elementIndex) => {
    if (!element.classList.contains('reveal')) element.classList.add('scroll-item');
    const sequenceIndex = element.parentElement?.classList.contains('industry-grid') ? [...element.parentElement.children].indexOf(element) : elementIndex % 6;
    element.style.setProperty('--item-delay', `${Math.min(sequenceIndex, 8) * 55}ms`);
  });

  const targets = [...new Set([...sections, ...document.querySelectorAll('#route-content .reveal'), ...document.querySelectorAll('#route-content .scroll-item'), ...headings])];
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if ((entry.target.classList.contains('cta-section') || entry.target.classList.contains('openings-section') || entry.target.classList.contains('opening-board')) && entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
      return;
    }
    entry.target.classList.toggle('in-view', entry.isIntersecting);
  }), { threshold: .14, rootMargin: '0px 0px -8% 0px' });
  document.documentElement.classList.add('scroll-animation-ready');
  targets.forEach(target => observer.observe(target));
  window.scrollChoreographyCleanup = () => observer.disconnect();
};
const setupInteractions = () => {
  const nav = document.querySelector('#nav');
  const menu = document.querySelector('#menu-btn');
  menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.innerHTML = open ? icon('close', 21) : icon('menu', 21); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); if (menu) { menu.setAttribute('aria-expanded', 'false'); menu.innerHTML = icon('menu', 21); } }));
  document.querySelector('#contact-form')?.addEventListener('submit', event => { event.preventDefault(); event.target.reset(); toast('Thanks — your enquiry is on its way to our team.'); });
  setupScrollChoreography();
};

document.querySelector('#app').innerHTML = `<div class="loading-screen"><img class="loading-logo" src="${asset('/logo.jpeg')}" ${imageFallback('/logo.jpeg')} alt="NPE INFOTECH" /></div>`;
window.addEventListener('hashchange', render);
window.setTimeout(render, 180);
