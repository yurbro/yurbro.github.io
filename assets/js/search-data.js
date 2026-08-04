// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed work in AI-enabled formulation design, experimental decision-making and industrial process intelligence.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research systems spanning experimental decision-making, interpretable modelling and scientific data engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Open research code, reproducibility materials and active projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Research experience, education, selected outputs and technical expertise.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching support in engineering systems, scientific principles and pharmaceutical formulation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-started-a-uk-turing-scheme-research-placement-at-west-china-hospital-sichuan-university-extending-my-work-on-ai-enabled-healthcare-research",
          title: 'Started a UK Turing Scheme research placement at West China Hospital, Sichuan University,...',
          description: "",
          section: "News",},{id: "news-our-early-decision-making-algorithm-for-accelerating-topical-formulation-experiments-is-now-available-in-computers-amp-amp-chemical-engineering-paper-code",
          title: 'Our early decision-making algorithm for accelerating topical formulation experiments is now available in...',
          description: "",
          section: "News",},{id: "news-our-active-learning-framework-for-adaptive-dermal-formulation-optimisation-was-accepted-by-chemical-engineering-research-and-design-paper-code",
          title: 'Our active learning framework for adaptive dermal formulation optimisation was accepted by Chemical...',
          description: "",
          section: "News",},{id: "news-our-domain-knowledge-constrained-symbolic-regression-framework-for-interpretable-dermal-formulation-optimisation-is-now-published-in-pharmaceutical-research-paper",
          title: 'Our domain knowledge constrained symbolic regression framework for interpretable dermal formulation optimisation is...',
          description: "",
          section: "News",},{id: "projects-adaptive-batch-optimisation",
          title: 'Adaptive Batch Optimisation',
          description: "Active learning for dermal formulations using GPR, expected improvement and hypervolume contribution to adaptively balance performance and information gain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/01-adaptive-optimisation/";
            },},{id: "projects-early-decision-making-for-ivpt",
          title: 'Early Decision-Making for IVPT',
          description: "Probabilistic forecasting from partial permeation trajectories to stop unpromising experiments early while accounting for uncertainty.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/02-early-decision-making/";
            },},{id: "projects-domain-constrained-symbolic-regression",
          title: 'Domain-Constrained Symbolic Regression',
          description: "Interpretable dynamic models of dermal drug release that embed domain constraints, support optimisation and expose scientifically meaningful relationships.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/03-domain-constrained-sr/";
            },},{id: "projects-skinminer",
          title: 'SkinMiner',
          description: "An LLM-powered data-mining framework for traceable extraction, verification and structuring of dermal formulation evidence from the scientific literature.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/04-skinminer/";
            },},{id: "projects-phd-research-hub",
          title: 'PhD Research Hub',
          description: "The umbrella repository connecting publications, code, datasets and reproducibility materials across my doctoral research programme.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/05-phd-research-hub/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75.%7A%68%61%6E%67@%73%75%72%72%65%79.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yurbro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yurbro", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-8389-6716", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Yu-Zhang-1039/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=W6Jdq00AAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://www.surrey.ac.uk/people/yu-zhang", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
