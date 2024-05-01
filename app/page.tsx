import ProjectCard from "../components/molecules/ProjectCard";
import CustomLink from "../components/ui/custom-link";
import ResumeSection from "../components/molecules/ResumeSection";
import IconBar from "../components/molecules/IconBar";

export default function Home() {
  const resume = [
    {
      title: "Founding Product Engineer",
      website: "https://workman.so/",
      organization: "Workman AI",
      date: "2024 – Present",
      description:
        "Leading product design & frontend development for a startup building AI-powered tools for the construction industry",
    },
    {
      title: "Associate Software Engineer",
      website: "https://tread.io/",
      organization: "Tread",
      date: "2024 - Present",
      description:
        "Building transportation management systems. Working across the stack & helping integrate AI into organization workflows",
    },
    {
      title: "International Competitor",
      website: "https://qccu.info",
      organization: "Queen’s Case Competition Union",
      date: "2023 – Present",
      description:
        "1 of 20 students competing internationally on behalf of Queen’s university. 3rd place at the BI International Case Competition 2024 (Norway)",
    },
    {
      title: "Managing Director",
      website: "https://qmind.ca",
      organization: "QMIND",
      date: "2023 - 2024",
      description:
        "Canada’s largest undergraduate organization on AI, 250+ members, 40+ AI projects; democratizing access to AI education, research & community",
    },
    {
      title: "President",
      website: "https://cucai.ca",
      organization: "Canadian Undergraduate Conference on AI",
      date: "2023 - 2024",
      description:
        "Canada’s largest undergraduate conference on AI, 340+ delegates, featuring speakers & sponsors from OpenAI, Cohere, Microsoft, Intel, Apple, NASA & more",
    },
    {
      title: "Head of Technology",
      website: "https://www.headstartfellowship.com/",
      organization: "HeadStart Fellowship",
      date: "2023 – 2024",
      description:
        "300 person fellowship with fellows from Uber, Google, Goldman Sachs, JP Morgan & more",
    },
    {
      title: "Software Engineer & Product Designer",
      website: "https://callsmartai.ca",
      organization: "CallSmart AI",
      date: "2023",
      description:
        "Led product design & development for an AI-powered communication system helping dental clinics capture $100k in lost revenue annually by increasing booking rates",
    },
    {
      title: "Founder & Software Engineer",
      website: "",
      organization: "Memoria AI",
      date: "2023",
      description:
        "Founded with 2 ex-Google PMs, Memoria was an AI voice-journalling tool that let users talk to their thoughts and get insights on their mental health. 800+ users",
    },
    {
      title: "AI Research Analyst Intern",
      website: "https://recalcacademy.com/",
      organization: " Recalc Academy",
      date: "2023",
      description:
        "Finance academy & accelerator program empowering ambitious students breaking into the world on finance; Automated processes & researched AI tools in the data & finance space",
    },
    {
      title: "Co-Founder & Advisor ",
      website: "https://www.universitymedia.ca/",
      organization: "University Media Group",
      date: "2022-2023",
      description:
        "Changing the way students across Canada make friends before stepping on campus, 50k+ community",
    },
    {
      title: "Founder",
      website: "",
      organization: "verycalmstudios.",
      date: "2021-2022",
      description:
        "Marketing & design studio. Worked on projects for FujiFilm, Footlocker, Adidas, and Hennessy. Met really cool people in the creative industry",
    },
    {
      title: "Founder",
      website: "",
      organization: "ustudios.",
      date: "2017",
      description:
        "Fashion company where I found my love for art. Designed for companies with $100k+ in revenue & design clothes for myself to this day",
    },
  ];

  function reorderList(list: any[]) {
    let oddIndexed = list.filter((_, index) => index % 2 === 0);
    let evenIndexed = list.filter((_, index) => index % 2 !== 0);

    return [...oddIndexed, ...evenIndexed];
  }

  const unorderedProjects: {
    title: string;
    tags: string[];
    type: string;
    image_url: string;
    to: string;
  }[] = [
    {
      title: "CUCAI Platform",
      tags: ["Fullstack", "Design"],
      type: "Project Breakdown",
      image_url: "/project-images/cucai-platform/demo.gif",
      to: "/projects/cucai-platform",
    },
    {
      title: "QMIND Design Team Portal",
      tags: ["Product", "UX/UI"],
      type: "Case Study",
      image_url: "/DTP-P-A.png",
      to: "https://medium.com/@marcelochaman/ux-product-design-case-study-qmind-design-team-portal-89d7eb8ea526",
    },

    {
      title: "Workman",
      tags: ["Product", "Design", "Frontend"],
      type: "Product Explanation",
      image_url: "/wm-dash.png",
      to: "/workman.pdf",
    },
    {
      title: "QMIND Website",
      tags: ["Design", "Frontend"],
      type: "Website",
      image_url: "/QMINDWEB.gif",
      to: "https://qmind.ca/",
    },
    {
      title: "The Sandbox",
      tags: ["Frontend"],
      type: "Project",
      image_url: "/sandbox.webp",
      to: "/sandbox",
    },
    {
      title: "Easy Recipe",
      tags: ["UX", "UI"],
      type: "Case Study",
      image_url: "/EasyRecipe-mobile1.gif",
      to: "https://medium.com/@marcelochaman/easy-recipe-ux-ui-case-study-124a7992597e",
    },
    {
      title: "EchoDMs",
      tags: ["Backend", "Slack App"],
      type: "Website",
      image_url: "/echodms-cover.png",
      to: "https://echo-dms.vercel.app/",
    },
    {
      title: "Attention! Is All That Matters",
      tags: ["Writing"],
      type: "Article",
      image_url: "/attention-cover.webp",
      to: "https://medium.com/@marcelochaman/attention-is-all-that-matters-51d141844dec",
    },
    {
      title: "CUCAI Website",
      tags: ["Design", "Frontend"],
      type: "Website",
      image_url: "/CUCAI-WEB.gif",
      to: "https://www.cucai.ca/",
    },
  ];

  const projects = reorderList(unorderedProjects);

  return (
    <main className="h-fit md:h-full w-[100dvw] flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 items-center p-2 overflow-y-scroll lg:overflow-hidden">
      <div className="h-fit w-full xl:w-[55%] lg:h-[100dvh] flex flex-col items-center gap-4 lg:overflow-y-scroll lg:py-24 no-scrollbar pt-16">
        <h1 className="text-4xl max-w-[700px] w-4/5">
          Marcelo Chaman Mallqui
          <p className="text-[#A0A0A0] inline font-light">
            –Product Designer, Software Engineer & Founder
          </p>
        </h1>
        {/* ICONS */}
        <IconBar />
        <div className="h-fit max-w-[700px] w-4/5 flex flex-col gap-4">
          {resume.map((item, key) => (
            <ResumeSection
              title={item.title}
              website={item.website}
              organization={item.organization}
              date={item.date}
              description={item.description}
              key={key}
            />
          ))}
        </div>
      </div>
      <div className="w-full min-w-[300px] lg:w-[45%] lg:h-[100dvh] flex flex-row gap-2 lg:overflow-y-scroll no-scrollbar">
        <div className="columns-1 sm:columns-2 lg:columns-1 xl:columns-2 space-y-2 h-fit w-full gap-2 pt-2 overflow-y-scroll no-scrollbar">
          {projects.map((project, key) => (
            <ProjectCard
              image_url={project.image_url}
              to={project.to}
              tags={project.tags}
              title={project.title}
              type={project.type}
              key={key}
              alt={project.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
