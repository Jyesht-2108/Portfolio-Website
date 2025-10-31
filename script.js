(function () {
  // Minimal data adapted from src/portfolio.js
  const greeting = {
    title: "Jyesht M",
    subTitle:
      "Calm by nature, precise by habit — I turn ideas into reliable infrastructure.",
    resumeLink: "https://github.com/Jyesht-2108/Resume",
    portfolio_repository: "https://github.com/Jyesht-2108",
    githubProfile: "https://github.com/Jyesht-2108",
  };

  const socialMediaLinks = [
    { name: "Github", link: "https://github.com/Jyesht-2108", icon: "fa-brands fa-github" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/jyesht-m", icon: "fa-brands fa-linkedin-in" },
    { name: "Email", link: "mailto:jyesht147@gmail.com", icon: "fa-solid fa-envelope" },
    { name: "Instagram", link: "https://www.instagram.com/_cosmic.insignificance_", icon: "fa-brands fa-instagram" },
  ];

  function getIconSvg(name) {
    switch (name) {
      case "Github":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .85-.28 2.78 1.05a9.33 9.33 0 0 1 5.06 0c1.93-1.33 2.78-1.05 2.78-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.83-4.57 5.08.36.32.67.95.67 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>';
      case "LinkedIn":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H6V9.75h2.34v8.59ZM7.17 8.7c-.75 0-1.35-.61-1.35-1.35s.6-1.35 1.35-1.35 1.35.61 1.35 1.35-.61 1.35-1.35 1.35ZM18 18.34h-2.34v-4.67c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.75H10V9.75h2.25v1.17h.03c.31-.58 1.08-1.2 2.22-1.2 2.38 0 2.82 1.57 2.82 3.61v5.01Z"/></svg>';
      case "Instagram":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5-2.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 7.25Z"/></svg>';
      case "Email":
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>';
      default:
        return '';
    }
  }

  const skills = [
    {
      title: "Web Development",
      points: [
        "React and component-driven UIs",
        "Responsive layouts and modern CSS",
        "REST/JSON APIs and client-side state",
        "TypeScript and JavaScript",
      ],
    },
    {
      title: "DevOps & Tools",
      points: [
        "Docker for containerized dev/workflows",
        "Linux fundamentals and server basics",
        "Git and GitHub workflows",
        "Shell scripting for automation",
      ],
    },
    {
      title: "Programming",
      points: [
        "Java",
        "C",
        "Python"
      ],
    },
  ];

  const experience = [
    {
      title: "Secretary",
      company: "TechEon (Tech Club), Gopalan College of Engineering and Management",
      duration: "Aug 2025 - Present",
      location: "Bengaluru, India",
      description:
        "Leading club activities, events, and technical initiatives; mentoring members and coordinating workshops.",
    },
    {
      title: "President",
      company: "Entrepreneurship Cell, GCEM",
      duration: "Jul 2025 - Present",
      location: "Bengaluru, India",
      description:
        "Driving E-Cell roadmap, collaborations, and entrepreneurship programs within the college.",
    },
    {
      title: "Joint Secretary",
      company: "TechEon (Tech Club), GCEM",
      duration: "Sep 2024 - Aug 2025",
      location: "Bengaluru, India",
      description:
        "Supported club operations and organized technical sessions and competitions.",
    },
    {
      title: "Computer Science Engineering Student",
      company: "Gopalan College of Engineering and Management",
      duration: "3rd Year",
      location: "Bengaluru, India",
      description:
        "Studying core CS subjects with focus on web, DevOps, and practical projects.",
    },
  ];

  const projectsHeader = {
    description:
      "My projects primarily concentrate on web and mobile application development using languages like JavaScript and TypeScript for utilities such as a Crop Disease Prediction software, a modern ML based fitness app, and more, along with foundational documentation in DevOps concepts like Linux and Docker.",
  };

  const contact = {
    description:
      "Reach out via LinkedIn or Email; I usually reply within a day.",
    address: "",
    map: "",
  };

  // Render header
  document.getElementById("site-title").textContent = greeting.title;
  document.getElementById("site-subtitle").textContent = greeting.subTitle;

  const socialRoot = document.getElementById("social-links");
  socialMediaLinks.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.link;
    a.target = "_blank";
    a.rel = "noopener";
    // Use neutral styling from CSS; avoid per-brand background colors
    a.title = s.name;
    const span = document.createElement("span");
    span.className = "icon";
    span.innerHTML = getIconSvg(s.name);
    a.appendChild(span);
    socialRoot.appendChild(a);
  });

  const resumeLink = document.getElementById("resume-link");
  if (resumeLink) {
    if (greeting.resumeLink) {
      resumeLink.href = greeting.resumeLink;
    } else {
      resumeLink.style.display = "none";
    }
  }
  const githubCta = document.getElementById("github-link");
  if (githubCta) {
    githubCta.href = greeting.githubProfile;
  }
  const portfolioRepo = document.getElementById("portfolio-repo");
  if (portfolioRepo) {
    portfolioRepo.href = greeting.portfolio_repository;
  }

  // Render skills
  const skillsRoot = document.getElementById("skills");
  skills.forEach((group) => {
    const card = document.createElement("div");
    card.className = "card";
    const h3 = document.createElement("h3");
    h3.textContent = group.title;
    const ul = document.createElement("ul");
    group.points.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      ul.appendChild(li);
    });
    card.appendChild(h3);
    card.appendChild(ul);
    skillsRoot.appendChild(card);
  });

  // Render experience
  const expRoot = document.getElementById("experience");
  experience.forEach((e) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    const title = document.createElement("div");
    title.className = "title";
    title.textContent = `${e.title} · ${e.company}`;
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `${e.duration} · ${e.location}`;
    const desc = document.createElement("p");
    desc.textContent = e.description;
    item.appendChild(title);
    item.appendChild(meta);
    item.appendChild(desc);
    expRoot.appendChild(item);
  });

  // Projects header text
  document.getElementById("projects-description").textContent = projectsHeader.description;

  // Contact
  const contactRoot = document.getElementById("contact");
  const contactP = document.createElement("p");
  contactP.textContent = contact.description;
  contactRoot.appendChild(contactP);
  if (contact.address) {
    const addressP = document.createElement("p");
    addressP.innerHTML = `<strong>Address:</strong> ${contact.address}`;
    contactRoot.appendChild(addressP);
  }
  if (contact.map) {
    const mapA = document.createElement("a");
    mapA.href = contact.map;
    mapA.target = "_blank";
    mapA.rel = "noopener";
    mapA.textContent = "Open in Maps";
    contactRoot.appendChild(mapA);
  }

  // Footer
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = greeting.title;

  // Navigation: active link highlighting
  const currentPage = document.documentElement.getAttribute('data-page');
  const navLinks = document.querySelectorAll('.site-nav a[data-nav]');
  navLinks.forEach((a) => {
    const key = a.getAttribute('data-nav');
    if (key === currentPage) {
      a.classList.add('active');
    }
  });

  // Smooth scroll behavior for on-page anchors (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Contact form validation
  const form = document.getElementById('contact-form');
  if (form) {
    const fields = {
      name: form.querySelector('#name'),
      email: form.querySelector('#email'),
      subject: form.querySelector('#subject'),
      message: form.querySelector('#message'),
    };
    function setError(field, message) {
      const err = form.querySelector(`[data-error-for="${field.id}"]`);
      if (err) err.textContent = message || '';
    }
    function validateEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase());
    }
    function validate() {
      let ok = true;
      if (!fields.name.value.trim()) { setError(fields.name, 'Please enter your name'); ok = false; } else setError(fields.name, '');
      if (!fields.email.value.trim()) { setError(fields.email, 'Please enter your email'); ok = false; }
      else if (!validateEmail(fields.email.value)) { setError(fields.email, 'Please enter a valid email'); ok = false; } else setError(fields.email, '');
      if (!fields.subject.value.trim()) { setError(fields.subject, 'Please enter a subject'); ok = false; } else setError(fields.subject, '');
      if (!fields.message.value.trim()) { setError(fields.message, 'Please write a message'); ok = false; } else setError(fields.message, '');
      return ok;
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validate()) {
        alert('Thanks! Your message has been validated. Implement backend/email to actually send.');
        form.reset();
      }
    });
    form.addEventListener('input', (e) => {
      const t = e.target;
      if (t && t.id && fields[t.id]) {
        setError(t, '');
      }
    });
  }

  // Mark dynamically created elements for staggered reveal
  document.querySelectorAll('#skills .card').forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`; });
  document.querySelectorAll('#experience .timeline-item').forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${Math.min(i * 100, 500)}ms`; });

  // IntersectionObserver reveal
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }
})();


