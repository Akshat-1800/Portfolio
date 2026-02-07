export const projects = [
  {
    id: 1,
    title: "StreamView",
    description: "A full-StreamView is a full-stack video streaming and real-time watch-party platform. Users can watch videos together, create private watch parties, join via room codes, communicate using live audio/video, and share screens in real time.",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770476424/Screenshot_2026-02-07_203002_lkeen0.png",
    techStack: ["Next.js", "JavaScript", "MongoDB", "Razorpay", "Tailwind CSS","Clerk","WebRTC","Socket.io","Cloudinary","Supabase"],
    links: {
      github: "https://github.com/Akshat-1800/StreamView",
      live: "https://stream-view-ivory.vercel.app/"
    },
    featured: true
  },
  {
    id: 2,
    title: "ShopVerse",
    description: "ShopVerse is a full-stack e-commerce web application.It offers a seamless shopping experience with features like product browsing, user authentication, shopping cart management, and secure checkout. ",
    image: "https://res.cloudinary.com/djozpdgv1/image/upload/f_auto,q_auto,w_800/v1770476522/Screenshot_2026-02-07_203106_nmx3u7.png",
    techStack: ["Next.js", "JavaScript", "MongoDB", "Razorpay","Cloudinary","NextAuth","Tailwind CSS"],
    links: {
      github: "https://github.com/Akshat-1800/ShopVerse",
      live: "https://shop-verse-khaki.vercel.app/"
    },
    featured: false
  },
  // {
  //   id: 3,
  //   title: "Real-time Chat Application",
  //   description: "A modern chat application with end-to-end encryption, file sharing, and video calls.",
  //   image: "/projects/chat-app.jpg",
  //   techStack: ["Next.js", "Socket.io", "MongoDB", "WebRTC", "Redis"],
  //   links: {
  //     github: "https://github.com/username/chat-app",
  //     live: "https://chat-app-demo.vercel.app"
  //   },
  //   featured: false
  // },
  // {
  //   id: 4,
  //   title: "DevOps Dashboard",
  //   description: "A comprehensive dashboard for monitoring CI/CD pipelines, server health, and deployment metrics.",
  //   image: "/projects/devops.jpg",
  //   techStack: ["React", "Node.js", "Grafana", "Kubernetes", "AWS"],
  //   links: {
  //     github: "https://github.com/username/devops-dashboard",
  //     live: "https://devops-demo.vercel.app"
  //   },
  //   featured: false
  // },
  // {
  //   id: 5,
  //   title: "Task Management System",
  //   description: "A collaborative project management tool with Kanban boards, time tracking, and team analytics.",
  //   image: "/projects/task-manager.jpg",
  //   techStack: ["Vue.js", "Express", "PostgreSQL", "Redis", "Docker"],
  //   links: {
  //     github: "https://github.com/username/task-manager",
  //     live: "https://task-manager-demo.vercel.app"
  //   },
  //   featured: false
  // },
  // {
  //   id: 6,
  //   title: "API Gateway Service",
  //   description: "A high-performance API gateway with rate limiting, authentication, and request transformation capabilities.",
  //   image: "/projects/api-gateway.jpg",
  //   techStack: ["Go", "Redis", "gRPC", "Docker", "Nginx"],
  //   links: {
  //     github: "https://github.com/username/api-gateway",
  //     live: null
  //   },
  //   featured: false
  // }
];

export const getFeaturedProject = () => projects.find(p => p.featured);
export const getOtherProjects = () => projects.filter(p => !p.featured);
