import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "The Worklane– Corporate Website",
    description:
      "Designed and developed a modern, fully responsive corporate website using Next.js and TypeScript, featuring a clean UI and optimized performance across all devices. Implemented a validated contact form with backend email integration and successfully deployed the project as a live production website.",
    image: "/public/projects/Theworklane.png",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Form Validation", "Backend Email Integration", "Responsive Design"],
    link: "https://www.theworklane.com/",
    github: "https://github.com/zaibijt/WorkLane",
  },
  {
    title: "E-Commerce Platform",
    description:
      "ZNZShop is a full-stack e-commerce platform featuring a database-driven admin panel with role-based access control, real-time analytics, order management, and a customer reviews system. It includes a fully functional storefront with live search, product variants, and a complete order lifecycle from checkout to fulfillment.",
    image: "/public/projects/E-Commerce.png",
    tags: ["React.js","Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM"],
    link: "https://zaibijt.github.io/znz-shop-e-commerce/",
    github: "https://github.com/zaibijt/znz-shop-e-commerce",
  },
  {
    title: "Financial Tracker",
    description:
     "A full-stack financial tracker application enabling users to securely manage and monitor their income and expenses. Features authentication, dynamic data tables, and a clean dashboard interface for real-time financial insights.",
    image: "/public/projects/financial-trackers.png",
   tags: ["React", "TypeScript", "Vite", "Clerk", "Node.js", "Express.js", "MongoDB"],
    link: "https://zaibijt.github.io/zaibijt-financial-trackers-react-main/#/",
    github: "https://github.com/zaibijt/zaibijt-financial-trackers-react-main",
  },
  {
    title: "Marshub-WebsiteFrontpage",
    description:
      "Designed and developed a modern, fully responsive landing page for Marshub with a clean and engaging user interface. Focused on responsive layouts, intuitive navigation, and optimized performance for a seamless experience across all devices.",
    image: "/public/projects/Marshub.jpeg",
    tags: ["Html","CSS","Bootstrap"],
    link: "https://zaibijt.github.io/Marshub/##",
    github: "https://github.com/zaibijt/Marshub",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                   <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/zaibijt?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};