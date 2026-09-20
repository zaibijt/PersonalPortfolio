import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete applications with React.js and Next.js on the frontend, and Node.js, Express.js, MongoDB, and PostgreSQL on the backend.",
  },
  {
    icon: Rocket,
    title: "Production Deployments",
    description:
      "Shipping live, production-ready websites and web apps with responsive layouts and a strong focus on performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with designers and cross-functional teams to turn Figma designs into pixel-perfect, cross-browser compatible interfaces.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively learning backend development with .NET and C#, along with Angular, to keep growing as a developer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern,
              <span className="font-serif italic font-normal text-white">
                {" "}
                scalable web experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Zohaib Qasim, a MERN Stack Developer with 1.5+ years of
                hands-on industry experience building modern, scalable, and
                user-centric web applications. I specialize in creating
                responsive and high-performance digital experiences with a
                strong focus on clean code, performance, and usability.
              </p>

              <p>
                My expertise includes React.js, Next.js, TypeScript, and
                JavaScript on the frontend, and Node.js, Express.js, REST APIs,
                and JWT authentication on the backend. I work with MongoDB and
                PostgreSQL (Prisma ORM) to develop full-stack solutions and
                production-ready applications.
              </p>

              <p>
                I enjoy turning ideas and designs into functional digital
                products, continuously exploring new technologies, and improving
                my skills in modern web development. My goal is to build
                reliable, responsive, and user-focused applications that deliver
                a great experience across all devices.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to keep growing as a Full Stack Developer,
                continuously mastering new technologies and building reliable
                products that create real impact."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
