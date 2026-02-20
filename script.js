<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LearnTen</title>
  <link rel="stylesheet" href="style.css" />

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">

</head>
<body>

<!-- ============================= -->
<!-- NAVBAR -->
<!-- ============================= -->

<header class="navbar">
  <div class="logo">
    <img src="assets/LearnTen-logo.png" alt="LearnTen Logo">
    <span>LearnTen</span>
  </div>

  <!-- Desktop Menu -->
  <nav class="desktop-menu">
    <ul>
      <li class="nav-item"><a href="#journey">The Learning Path</a></li>
      <li class="nav-item"><a href="#methodology">Inside the Lab</a></li>
      <li class="nav-item"><a href="#buildroom">Buildroom</a></li>
      <li class="nav-item"><a href="#ai-edge">AI Edge</a></li>
      <li class="nav-item"><a href="#mentor-circle">Mentor Circle</a></li>
      <li class="nav-item"><a href="#student-stories">Student Stories</a></li>
    </ul>
    <button class="join-btn">Join Next Batch</button>
  </nav>

  <!-- Mobile Menu Button -->
  <div class="menu-btn" id="menuBtn">&#9776;</div>
</header>

<!-- Overlay -->
<div class="overlay" id="overlay"></div>

<!-- Side Menu -->
<nav class="side-menu" id="sideMenu">
  <div class="close-btn" id="closeBtn">&times;</div>
  <h4 class="menu-heading">Explore LearnTen</h4>

  <ul>
    <li class="nav-item"><a href="#journey">The Learning Path</a></li>
    <li class="nav-item"><a href="#methodology">Inside the Lab</a></li>
    <li class="nav-item"><a href="#buildroom">Buildroom</a></li>
    <li class="nav-item"><a href="#ai-edge">AI Edge</a></li>
    <li class="nav-item"><a href="#mentor-circle">Mentor Circle</a></li>
    <li class="nav-item"><a href="#student-stories">Student Stories</a></li>
  </ul>

  <button class="join-btn">Join Next Batch</button>
</nav>


 <!-- ============================= -->
<!-- HERO SECTION -->
<!-- ============================= -->

<section class="hero">
  <div class="hero-container">

    <!-- Left Content -->
    <div class="hero-text">
      <span class="hero-badge">AI-Powered Learning Platform</span>
      <h1>LearnTen Is Not Just A Course Platform.</h1>
      <p>
        It is a guided transformation journey from beginner → AI-powered developer.
      </p>
      <button class="primary-btn">Start Your Journey</button>
    </div>

    <!-- Right Image -->
    <div class="hero-image">
      <img src="assets/Lexi.png" alt="LearnTen Mascot">
    </div>

  </div>
</section>


<section class="journey">

  <h2 class="title">Your Learning Journey</h2>

  <div class="journey-wrapper">

    <!-- LEFT SIDE -->
    <div class="journey-container">

      <div class="progress-line">
        <div class="progress-fill" id="progressFill"></div>
      </div>

      <div class="steps">

        <div class="journey-step active" data-step="0">
          <div class="circle">
            <span class="main-icon">📘</span>
            <span class="step-badge">1</span>
          </div>
          <p>Foundation</p>
        </div>

        <div class="journey-step" data-step="1">
          <div class="circle">
            <span class="main-icon">⚛️</span>
            <span class="step-badge">2</span>
          </div>
          <p>Core Skills</p>
        </div>

        <div class="journey-step" data-step="2">
          <div class="circle">
            <span class="main-icon">🚀</span>
            <span class="step-badge">3</span>
          </div>
          <p>Real Projects</p>
        </div>

        <div class="journey-step" data-step="3">
          <div class="circle">
            <span class="main-icon">🤖</span>
            <span class="step-badge">4</span>
          </div>
          <p>AI Integration</p>
        </div>

        <div class="journey-step" data-step="4">
          <div class="circle">
            <span class="main-icon">🎯</span>
            <span class="step-badge">5</span>
          </div>
          <p>Portfolio</p>
        </div>

        <div class="journey-step" data-step="5">
          <div class="circle">
            <span class="main-icon">💼</span>
            <span class="step-badge">6</span>
          </div>
          <p>Interviews</p>
        </div>

      </div>
    </div>

<!-- ============================= -->
<!-- JOURNEY DETAIL CARD (UPDATED) -->
<!-- ============================= -->

<div class="journey-details-card">

  <!-- LEFT SIDE -->
  <div class="detail-left">
    <div class="week-label" id="detailWeek">WEEK 1–2</div>
    <h2 id="detailTitle">Foundations</h2>
    <p id="detailDesc">HTML, CSS, JS fundamentals with hands-on exercises</p>

   
  </div>

  <!-- RIGHT SIDE -->
  <div class="detail-right">
    <h4>WHAT YOU’LL LEARN</h4>
    <ul id="detailList">
      <li>Semantic HTML & modern CSS layouts</li>
      <li>JavaScript ES6+ deep dive</li>
      <li>Git & GitHub workflow mastery</li>
      <li>First mini-projects shipped</li>
    </ul>
  </div>

</div>

</section>

<!-- ============================= -->
<!-- FEATURES SECTION -->
<!-- ============================= -->

<section class="features">
  <div class="container">

    <h2 class="features-title">Not Just Another Coding Institute</h2>
    <p class="features-subtitle">
      We don’t just teach coding. We transform you into a developer who builds,
      thinks, and ships like a pro.
    </p>

    <div class="features-grid">
      <div class="feature-card">
        <div class="card-header">
        <div class="feature-icon">👥</div>
        <h3>Small Batches</h3>
        </div>
        <p>Only 10–15 students per batch. Personal attention guaranteed.</p>
      </div>

      <div class="feature-card">
         <div class="card-header">
   
        <div class="feature-icon">💻</div>
        <h3>Real Code, Real Projects</h3>
        </div>
        <p>No fake tutorials. Build real apps solving real problems.</p>
      </div>

      <div class="feature-card">
        <div class="card-header">
        <div class="feature-icon">🤖</div>
        <h3>AI-First Learning</h3>
        </div>
        <p>Use Copilot, ChatGPT APIs and build AI-powered features.</p>
      </div>

      <div class="feature-card">
        <div class="card-header">
        <div class="feature-icon">🎓</div>
        <h3>Mentor-Led Growth</h3>
        </div>
        <p>Industry mentors guide you through reviews & career prep.</p>
      </div>
    </div>

  </div>
</section>



  </div>
</section>



<!-- ============================= -->
<!-- TEACHING METHODOLOGY SECTION -->
<!-- ============================= -->

<section class="methodology" id="methodology">
  <div class="container">

    <span class="methodology-badge">⚡ Teaching Methodology</span>

    <h2 class="methodology-title">Inside the LearnTen Lab</h2>

    <p class="methodology-subtitle">
      See how learning actually happens here.
      No boring lectures. No passive watching —
      just pure hands-on coding.
    </p>

    <!-- Lab Cards -->
    <div class="lab-grid">

      <div class="lab-card">
        <div class="lab-icon">💻</div>
        <h3>Live Coding Sessions</h3>
        <p>Watch, code along & learn in real-time with expert guidance.</p>
      </div>

      <div class="lab-card">
        <div class="lab-icon">🧠</div>
        <h3>Daily Practice</h3>
        <p>Hands-on coding challenges every day to build muscle memory.</p>
      </div>

      <div class="lab-card">
        <div class="lab-icon">🤖</div>
        <h3>AI Tools Integration</h3>
        <p>Collaborate with AI tools like professionals do in industry.</p>
      </div>

      <div class="lab-card">
        <div class="lab-icon">📝</div>
        <h3>Code Reviews</h3>
        <p>Get personalized feedback on every project you build.</p>
      </div>

    </div>


    <!-- Week Section -->
    <div class="week-section">

      <h3 class="week-title">📅 A Week in LearnTen</h3>

      <div class="week-grid">

        <div class="week-card">
          <h4>Monday</h4>
          <h5>Core Concepts</h5>
          <p>Learn fundamentals with visual representation.</p>
        </div>

        <div class="week-card">
          <h4>Tuesday</h4>
          <h5>Practice Lab</h5>
          <p>Hands-on coding exercises to strengthen skills.</p>
        </div>

        <div class="week-card">
          <h4>Wednesday</h4>
          <h5>Build Day</h5>
          <p>Apply skills to real-world feature development.</p>
        </div>

        <div class="week-card">
          <h4>Thursday</h4>
          <h5>AI Integration</h5>
          <p>Learn AI-assisted modern development workflow.</p>
        </div>

        <div class="week-card">
          <h4>Friday</h4>
          <h5>Code Review</h5>
          <p>Peer reviews and mentor feedback sessions.</p>
        </div>

        <div class="week-card">
          <h4>Saturday</h4>
          <h5>Project Work</h5>
          <p>Build a portfolio-ready real-world project.</p>
        </div>

      </div>
    </div>


    <!-- Tools Section -->
<div class="tools-section">

  <h3 class="tools-title">🛠 Tools You'll Master</h3>
  <p class="tools-subtitle">
    Industry-standard tools that companies use — not outdated tech here!
  </p>

  <!-- Categories Horizontal -->
  <div class="tools-categories">
    <span class="category active" data-category="frontend">Frontend</span>
    <span class="category" data-category="backend">Backend</span>
    <span class="category" data-category="database">Database</span>
    <span class="category" data-category="other">Other Tools</span>
  </div>

  <!-- Tools Grids -->
  <div class="tools-grid-wrapper">
    <!-- FRONTEND -->
    <div class="tools-grid category-grid" id="frontend">
      <span><i class="devicon-html5-plain colored"></i> HTML</span>
      <span><i class="devicon-css3-plain colored"></i> CSS</span>
      <span><i class="devicon-javascript-plain colored"></i> JavaScript</span>
      <span><i class="devicon-typescript-plain colored"></i> TypeScript</span>
      <span><i class="devicon-bootstrap-plain colored"></i> Bootstrap</span>
      <span><i class="devicon-materialui-plain colored"></i> Material UI</span>
      <span><i class="devicon-nextjs-original colored"></i> Next.js</span>
    </div>

    <!-- BACKEND -->
    <div class="tools-grid category-grid" id="backend">
      <span><i class="devicon-nodejs-plain colored"></i> Node.js</span>
      <span><i class="devicon-python-plain colored"></i> Python</span>
      <span><i class="devicon-django-plain colored"></i> Django</span>
      <span><i class="devicon-flask-plain colored"></i> Flask</span>
      <span><i class="devicon-fastapi-plain colored"></i> FastAPI</span>
      <span><i class="devicon-java-plain colored"></i> Java</span>
      <span><i class="devicon-spring-plain colored"></i> Spring Boot</span>
      <span>JWT Auth</span>
    </div>

    <!-- DATABASE -->
    <div class="tools-grid category-grid" id="database">
      <span><i class="devicon-postgresql-plain colored"></i> PostgreSQL</span>
      <span><i class="devicon-mysql-plain colored"></i> MySQL</span>
      <span><i class="devicon-mongodb-plain colored"></i> MongoDB</span>
      <span><i class="devicon-firebase-plain colored"></i> Firebase</span>
    </div>

    <!-- OTHER TOOLS -->
    <div class="tools-grid category-grid" id="other">
      <span><i class="devicon-vscode-plain colored"></i> VS Code</span>
      <span><i class="devicon-github-original colored"></i> GitHub</span>
      <span><i class="devicon-github-original colored"></i> AI Copilot</span>
      <span><i class="devicon-figma-plain colored"></i> Figma</span>
    </div>
  </div>
</div>


    <!-- No Theory Strip -->
    <div class="no-theory-strip">
      <div class="no-theory-content">
        <span class="no-theory-icon">✔</span>
        <span class="no-theory-heading">
          No Theory Without Implementation
        </span>
      </div>
      <p class="no-theory-subtext">
        Every concept you learn is immediately applied in real code.
      </p>
    </div>

  </div>
</section>

<!-- ============================= -->
<!-- BUILDROOM SECTION -->
<!-- ============================= -->

<!-- Devicon for GitHub icon -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
  <!-- Font Awesome for arrow icon -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <section class="buildroom" id="buildroon">
  <div class="container">
    <span class="buildroom-badge">🚀 Real Projects. Real Impact.</span>
    <h2 class="buildroom-title">The Buildroom</h2>
    <p class="buildroom-subtitle">
      Not tutorials. Real products built by real learners that solve real problems.
    </p>

    <div class="buildroom-grid">

      <!-- Card 1 -->
      <div class="build-card">
        <div class="build-category">AI TOOLS</div>
        <h3>AI Resume Builder</h3>
        <p>AI-powered resume generator with ATS optimization.</p>

        <div class="card-header">
          <div class="card-logo">A</div>
          <div class="student-details">
            <span class="student-name">Arjun Mehta</span>
            <span class="student-role">Mechanical → Software Developer</span>
          </div>
        </div>

        <div class="build-tags">
          <span>React</span>
          <span>OpenAI</span>
          <span>Node</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="build-card">
        <div class="build-category">FINTECH</div>
        <h3>Smart Invoice App</h3>
        <p>Automated invoicing system with recurring payments and payment tracking.</p>

        <div class="card-header">
          <div class="card-logo">S</div>
          <div class="student-details">
            <span class="student-name">Sneha Kapoor</span>
            <span class="student-role">Electrical → Software Developer</span>
          </div>
        </div>

        <div class="build-tags">
          <span>Stripe</span>
          <span>MongoDB</span>
          <span>Express</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="build-card">
        <div class="build-category">PERSONAL BRAND</div>
        <h3>Portfolio Website</h3>
        <p>Dynamic developer portfolio with blog and project showcase.</p>

        <div class="card-header">
          <div class="card-logo">R</div>
          <div class="student-details">
            <span class="student-name">Rahul Verma</span>
            <span class="student-role">Civil → Software Developer</span>
          </div>
        </div>

        <div class="build-tags">
          <span>Next.js</span>
          <span>SEO</span>
          <span>CMS</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="build-card">
        <div class="build-category">AI / ML</div>
        <h3>Chat Support Bot</h3>
        <p>AI-powered customer support chatbot with natural language understanding.</p>

        <div class="card-header">
          <div class="card-logo">P</div>
          <div class="student-details">
            <span class="student-name">Priya Sharma</span>
            <span class="student-role">Mechanical → AI Engineer</span>
          </div>
        </div>

        <div class="build-tags">
          <span>AI</span>
          <span>API</span>
          <span>React</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="build-card">
        <div class="build-category">ANALYTICS</div>
        <h3>Analytics Dashboard</h3>
        <p>Real-time analytics dashboard with interactive charts and data filtering.</p>

        <div class="card-header">
          <div class="card-logo">D</div>
          <div class="student-details">
            <span class="student-name">Dev Malhotra</span>
            <span class="student-role">Electrical → Data Analyst</span>
          </div>
        </div>

        <div class="build-tags">
          <span>Charts</span>
          <span>Data</span>
          <span>UI</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
  </div>
      </div>

      <!-- Card 6 -->
      <div class="build-card">
        <div class="build-category">E-COMMERCE</div>
        <h3>E-Commerce Store</h3>
        <p>Full-featured online store with cart, checkout, and inventory management.</p>

        <div class="card-header">
          <div class="card-logo">K</div>
          <div class="student-details">
            <span class="student-name">Karan Patel</span>
            <span class="student-role">Civil → Full Stack Developer</span>
          </div>
        </div>

        <div class="build-tags">
          <span>Auth</span>
          <span>Payments</span>
          <span>DB</span>
        </div>

        <hr class="divider">

        <div class="build-actions">
          <a href="#" class="code-btn"><i class="devicon-github-original"></i> View Code</a>
          <a href="#" class="demo-btn">
    Live Demo <i class="fas fa-arrow-right demo-arrow"></i>
  </a>
</div>
      </div>


      
    </div>
  </div>
</section>


<!-- ============================= -->
<!-- TRANSFORMATION JOURNEY -->
<!-- ============================= -->

<section class="transformation">
  <div class="container">

    <h2 class="transformation-title">The Transformation Journey</h2>
    <p class="transformation-subtitle">
      From confused beginner to confident builder in just 10 weeks.
    </p>

    <div class="transformation-grid">

      <!-- Day 1 Card -->
      <div class="transform-card start-card">
        <span class="transform-badge">Day 1</span>
        <h3>Starting Point</h3>

        <ul class="before-list">
          <li>Basic HTML/CSS</li>
          <li>No JavaScript</li>
          <li>No Frameworks</li>
          <li>Tutorial dependent</li>
        </ul>

        <div class="confidence">
          <span>Confidence Level</span>
          <div class="progress-bar">
            <div class="progress low"></div>
          </div>
          <p class="confidence-percent">15%</p>
        </div>

        
        <p class="quote disabled-quote">“Can I really do this?”</p>

      </div>

      <!-- Week 10 Card -->
      <div class="transform-card end-card">
        <span class="transform-badge highlight-badge week10-badge">
  <span class="peak-icon"></span>
  Week 10
</span>

        <h3>LearnTen Graduate</h3>

       <ul class="custom-list">
  <li>React Expert</li>
  <li>AI Integration</li>
  <li>Full-Stack Apps</li>
  <li>Independent Builder</li>
</ul>


        <div class="confidence">
          <span>Confidence Level</span>
          <div class="progress-bar">
            <div class="progress high"></div>
          </div>
          <p class="confidence-percent">95%</p>
        </div>

        <p class="quote">“What should I build next?”</p>
      </div>

    </div>

    <div class="transform-cta">
      <p>Your project could be here in 10 weeks.</p>
      <button class="start-btn">Start Building →</button>
    </div>

  </div>
</section>



<!-- ============================= -->
<!-- AI EDGE SECTION -->
<!-- ============================= -->

<section class="ai-edge" id="ai-edge">

  <p class="section-tag">What Makes Us Different</p>
  <h2 class="section-title">The AI Edge</h2>

  <p class="section-subtext">
    Every other bootcamp teaches coding. We teach coding with AI.
    This isn’t an add-on — it’s woven into everything we do.
  </p>

  <!-- Stats -->
  <div class="ai-stats">

    <div class="stat-box">
      <h3>
        <span class="counter" data-target="3">3</span>
        <span class="percent">X</span>
      </h3>
      <p>Faster Coding with AI Tools</p>
    </div>

    <div class="stat-box">
      <h3>
        <span class="counter" data-target="50">50</span>
        <span class="percent">%</span>
      </h3>
      <p>Less Debugging Time</p>
    </div>

    <div class="stat-box">
      <h3>
        <span class="counter" data-target="100">100</span>
        <span class="percent">%</span>
      </h3>
      <p>Future-Ready Skills</p>
    </div>

  </div>

  <!-- AI Feature Cards -->
<div class="ai-features-grid">

  <!-- Card 1 -->
  <div class="ai-feature-card">
    <div class="ai-header">
      <div class="ai-icon">💬</div>
      <h3>Prompt Engineering</h3>
    </div>
    <p>
      Master the art of talking to AI. Learn to write prompts that get exactly what you need.
    </p>
    <div class="ai-tags">
      <span>Zero-shot prompting</span>
      <span>Chain of thought</span>
      <span>Few-shot learning</span>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="ai-feature-card">
    <div class="ai-header">
      <div class="ai-icon">💻</div>
      <h3>AI-Assisted Coding</h3>
    </div>
    <p>
      Use Copilot and ChatGPT as your pair programmer. Code 3x faster with AI suggestions.
    </p>
    <div class="ai-tags">
      <span>GitHub Copilot</span>
      <span>Cursor IDE</span>
      <span>Claude for code</span>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="ai-feature-card">
    <div class="ai-header">
      <div class="ai-icon">🛠️</div>
      <h3>AI Debugging</h3>
    </div>
    <p>
      Let AI find and fix bugs. Learn to describe problems so AI can solve them instantly.
    </p>
    <div class="ai-tags">
      <span>Error analysis</span>
      <span>Code review</span>
      <span>Refactoring</span>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="ai-feature-card">
    <div class="ai-header">
      <div class="ai-icon">⚡</div>
      <h3>AI Integration</h3>
    </div>
    <p>
      Build apps with AI superpowers. Add intelligence to any project you create.
    </p>
    <div class="ai-tags">
      <span>OpenAI API</span>
      <span>LangChain</span>
      <span>Vector databases</span>
    </div>
  </div>

</div>


<!-- Lexi Strip with Icon Placeholder -->
<!-- Lexi Strip with Left Image -->
<div class="lexi-strip">
  <div class="lexi-flex">
    <div class="lexi-image">
      <img src="assets/lexi2.webp" alt="Lexi Icon" />
    </div>
    <div class="lexi-text">
      <h3 class="saffron-text">Meet Lexi — Your AI Learning Companion</h3>
      <p class="lexi-subtext">
        Lexi guides you through challenges, explains concepts when you're stuck,
        and helps you think the AI-first way. Available 24/7.
      </p>
    </div>
  </div>
</div>





</section>


<!-- ============================= -->
<!-- MENTOR CIRCLE -->
<!-- ============================= -->

<section class="mentor-circle" id="mentor-circle">

  <div class="mentor-badge">Learn From The Best</div>

  <h2 class="mentor-title">
    The <span>Mentor Circle</span>
  </h2>

  <p class="mentor-subtitle">
    Not instructors reading slides. Working professionals from top companies
    who genuinely care about your growth.
  </p>

  <!-- SCROLL WRAPPER -->
  <div class="mentor-scroll-wrapper">

    <div class="mentor-grid">

      <!-- Mentor 1 -->
      <div class="mentor-card">
        <div class="mentor-avatar">AP</div>
        <h3>Aisha Patel</h3>
        <p class="mentor-role">Senior Engineer @ Google</p>
        <p class="mentor-desc">
          10+ years building products used by millions. Passionate about teaching
          clean architecture.
        </p>
        <div class="mentor-social">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Mentor 2 -->
      <div class="mentor-card">
        <div class="mentor-avatar">RS</div>
        <h3>Rahul Sharma</h3>
        <p class="mentor-role">Founder, Tech Startup</p>
        <p class="mentor-desc">
          Built and scaled startups. Loves helping developers ship their first
          real product.
        </p>
        <div class="mentor-social">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Mentor 3 -->
      <div class="mentor-card">
        <div class="mentor-avatar">PK</div>
        <h3>Priya Krishnan</h3>
        <p class="mentor-role">AI Lead @ Microsoft</p>
        <p class="mentor-desc">
          PhD in ML. Makes AI practical and accessible for developers entering
          the industry.
        </p>
        <div class="mentor-social">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

      <!-- Mentor 4 -->
      <div class="mentor-card">
        <div class="mentor-avatar">DM</div>
        <h3>Dev Malhotra</h3>
        <p class="mentor-role">Principal Engineer</p>
        <p class="mentor-desc">
          Backend systems & cloud infrastructure expert. Mentored 50+ junior
          engineers.
        </p>
        <div class="mentor-social">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>

    </div>

  </div>

</section>


  <!-- What Mentorship Looks Like -->

<div class="mentorship-long-card">

  <h3 class="mentorship-heading">
    What Mentorship Looks Like
  </h3>

  <div class="mentorship-content">

    <div class="mentorship-item">
      <h4>Weekly 1:1</h4>
      <p>Personal guidance sessions tailored to your goals and progress.</p>
    </div>

    <div class="mentorship-item">
      <h4>Code Reviews</h4>
      <p>Detailed feedback on every project you build with real-world standards.</p>
    </div>

    <div class="mentorship-item">
      <h4>Career Advice</h4>
      <p>Resume polishing, portfolio building and interview preparation guidance.</p>
    </div>

    <div class="mentorship-item">
      <h4>Office Hours</h4>
      <p>Open sessions where you can drop in anytime to clear doubts.</p>
    </div>

  </div>

</div>


</section>


<section class="student-stories" id="student-stories">

  <div class="stories-badge"> Real Transformations</div>

  <h2 class="stories-title">Student Stories</h2>

  <p class="stories-subtitle">
    Don’t take our word for it. Here’s what happens when curious people
    commit to focused learning.
  </p>

  <div class="stories-container">

    <!-- Story 1 -->
    <div class="story-card">

      <div class="story-left">
        <div class="story-avatar">MJ</div>
        <h3 class="story-name">Meera Joshi</h3>
        <div class="story-batch">Batch 3</div>
      </div>

      <div class="story-right">
        <div class="story-transition">
          HR Manager →
          <span class="story-role-badge">Frontend Developer @ Razorpay</span>
        </div>

        <p class="story-text">
          “I never thought I could code. LearnTen didn’t just teach me
          programming — they showed me I could build anything.”
        </p>

        <div class="story-highlights">
          <span class="highlight-salary">3x Salary Increase</span>
          <span class="highlight-hired">Hired 2 Weeks After Graduation</span>
        </div>
      </div>

    </div>

    <!-- Story 2 -->
    <div class="story-card">

      <div class="story-left">
        <div class="story-avatar">VS</div>
        <h3 class="story-name">Vikram Singh</h3>
        <div class="story-batch">Batch 5</div>
      </div>

      <div class="story-right">
        <div class="story-transition">
          Mechanical Engineer →
          <span class="story-role-badge">Full-Stack Developer @ Flipkart</span>
        </div>

        <p class="story-text">
          “The Buildroom projects were game-changers. I walked into interviews
          confident with a portfolio that impressed senior engineers.”
        </p>

        <div class="story-highlights">
          <span class="highlight-salary">2.5x Salary Increase</span>
          <span class="highlight-hired">Hired 1 Month After Graduation</span>
        </div>
      </div>

    </div>

    <!-- Story 3 -->
    <div class="story-card">

      <div class="story-left">
        <div class="story-avatar">AR</div>
        <h3 class="story-name">Ananya Reddy</h3>
        <div class="story-batch">Batch 7</div>
      </div>

      <div class="story-right">
        <div class="story-transition">
          Fresh Graduate →
          <span class="story-role-badge">Software Engineer @ Microsoft</span>
        </div>

        <p class="story-text">
          “Coming from a non-CS background, I was terrified. But the mentors
          and AI-first approach made learning feel natural.”
        </p>

        <div class="story-highlights">
          <span class="highlight-salary">24 LPA Starting</span>
          <span class="highlight-hired">Hired During Final Week</span>
        </div>
      </div>

    </div>

    <!-- Story 4 -->
    <div class="story-card">

      <div class="story-left">
        <div class="story-avatar">RK</div>
        <h3 class="story-name">Rohan Kumar</h3>
        <div class="story-batch">Batch 6</div>
      </div>

      <div class="story-right">
        <div class="story-transition">
          Support Engineer →
          <span class="story-role-badge">Backend Developer @ Swiggy</span>
        </div>

        <p class="story-text">
          “The mentorship was the turning point. Real feedback, real growth,
          and real confidence.”
        </p>

        <div class="story-highlights">
          <span class="highlight-salary">3x Salary Increase</span>
          <span class="highlight-hired">Hired 3 Weeks After Graduation</span>
        </div>
        <!-- NEW SECTION -->

      </div>

    </div>

  </div>


  <div class="stories-final-cta">
  <p class="final-cta-text">Your story could be next.</p>
  <a href="#" class="final-cta-btn">
    Write Your Story →
  </a>
</div>
</section>



<section class="choose-path">

  <div class="path-header">
    <h2> <span>Choose Your Path</span></h2>
    <p>
      Three specialized tracks designed for different career goals.
      All include AI integration and hands-on projects.
    </p>
  </div>

  <div class="path-grid">

    <!-- CARD 1 -->
    <div class="path-card popular">
      <div class="popular-badge">MOST POPULAR</div>

      <div class="path-mini">Frontend Excellence</div>
      <h3>ReactJS + AI Path</h3>
      <p class="path-desc">
        Master React, modern CSS, and integrate AI tools to build stunning interfaces.
      </p>

      <div class="path-meta">
        <span>12 Weeks</span>
        <span>8+ Projects</span>
      </div>

      <div class="path-tags">
        <span>React</span>
        <span>TypeScript</span>
        <span>Tailwind</span>
        <span>AI APIs</span>
      </div>

      <div class="path-extra-links">
  <a href="#">See Curriculum ></a>
  <a href="#">View Projects</a>
</div>


      <a href="#" class="path-btn">Start This Path →</a>
    </div>

    <!-- CARD 2 -->
    <div class="path-card">
      <div class="path-mini">Complete Developer</div>
      <h3>Full Stack + AI Path</h3>
      <p class="path-desc">
        End-to-end development with React frontend, Node backend, and AI integration.
      </p>
 
      <div class="path-meta">
        <span>16 Weeks</span>
        <span>10+ Projects</span>
      </div>

      <div class="path-tags">
        <span>React</span>
        <span>Node</span>
        <span>MongoDB</span>
        <span>AI Features</span>
      </div>

      <div class="path-extra-links">
  <a href="#">Explore Labs ></a>
  <a href="#">AI Tools</a>
</div>


      <a href="#" class="path-btn">Start This Path  →</a>
    </div>

    <!-- CARD 3 -->
    <div class="path-card">
       <div class="path-mini">Server Mastery</div>
      <h3>Backend + AI Path</h3>
      <p class="path-desc">
        Build robust APIs, work with databases, and implement AI-powered backend services.
      </p>

      <div class="path-meta">
        <span>14 Weeks</span>
        <span>6+ Projects</span>
      </div>

      <div class="path-tags">
        <span>Node</span>
        <span>Express</span>
        <span>PostgreSQL</span>
        <span>Cloud</span>
      </div>

      <div class="path-extra-links">
  <a href="#">Backend Labs ></a>
  <a href="#">AI Integration</a>
</div>


      <a href="#" class="path-btn">Start This Path  →</a>
    </div>

  </div>

  <div class="path-footer">
    <p>Not sure which path is right for you?</p>
    <a href="#" class="counsel-btn">Talk to a Counselor</a>
  </div>

</section>


<section class="cta-section">
  <div class="cta-box">
    <img src="assets/lexi.png" alt="Lexi AI Assistant" class="cta-lexi-img">


    <h2>Ready to Start Your Transformation?</h2>

    <p class="cta-subtext">
      Join the next batch & become part of a community of learners 
      building the future with AI-powered development skills.
    </p>

    <div class="cta-badges">
      <span class="badge">
        📅 Next Batch: May 12
      </span>

      <span class="badge">
        👥 Only 30 Seats
      </span>
    </div>

    <a href="#" class="cta-btn">
      Apply for Next Batch →
    </a>

    <p class="cta-note">
      No pressure. Apply, talk to us, then decide.
    </p>

  </div>
  
</section>



<footer class="main-footer">
  <div class="footer-container">

    <!-- Column 1 -->
    <div class="footer-col">
      <div class="footer-brand">
  <img src="assets/learnTen-logo.png" alt="LearnTen Logo" class="footer-logo-img">
  <h3 class="footer-logo">LearnTen</h3>
</div>

      <p class="footer-desc">
        Transforming beginners into AI-ready developers through practical,
        mentor-led training in Chennai.
      </p>

      <div class="footer-socials">
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-linkedin-in"></i></a>
  <a href="#"><i class="fab fa-youtube"></i></a>
  <a href="#"><i class="devicon-twitter-original"></i></a>
</div>

    </div>

    <!-- Column 2 -->
    <div class="footer-col">
      <h4>Explore</h4>
      <ul>
        <li><a href="#">The Learning Path</a></li>
        <li><a href="#">Inside the Lab</a></li>
        <li><a href="#">Buildroom</a></li>
        <li><a href="#">AI Edge</a></li>
      </ul>
    </div>

    <!-- Column 3 -->
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="#">Mentor Circle</a></li>
        <li><a href="#">Student Stories</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <!-- Column 4 -->
    <div class="footer-col">
      <h4>Get in Touch</h4>
      <ul class="contact-info">
  <li>
    <i class="fas fa-location-dot"></i>
    Chennai, Tamil Nadu, India
  </li>

  <li>
    <i class="fas fa-envelope"></i>
    hello@learnten.in
  </li>

  <li>
    <i class="fas fa-phone"></i>
    +91 98765 43210
  </li>
</ul>

    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2026 LearnTen. All rights reserved.</p>
    <div class="footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
    </div>
  </div>
</footer>



  
  </div>
</section>



 <script src="script.js"></script>

  
</body>
</html>




