import Image from "next/image";
import ProjectCard from "./_components/ProjectCard";
import CustomLink from "./_components/CustomLink";

export default function Home() {
  const resume = [
    {
      title: "President",
      website: "https://cucai.ca",
      organization: "Canadian Undergraduate Conference on AI",
      date: "2023 - Present",
      description:
        "Canada’s largest undergraduate conference on AI, 320+ delegates, featuring speakers & sponsors from OpenAI, Cohere, Microsoft, Intel, Apple, NASA & more",
    },
    {
      title: "International Competitor",
      website: "https://qccu.info",
      organization: "Queen’s Case Competition Union",
      date: "2023 – Present",
      description:
        "1 of 20 students competing internationally on behalf of Queen’s university",
    },
    {
      title: "Managing Director",
      website: "https://qmind.ca",
      organization: "QMIND",
      date: "2023 - 2024",
      description:
        "Leading Canada’s largest undergraduate organization on AI, 250+ members, 40+ AI projects; democratizing access to AI education, research & community",
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

  const unorderedProjects = [
    {
      title: "QMIND Design Team Portal",
      tags: ["Product Design"],
      type: "Case Study",
      image_url: "/DTP-P-A.png",
      to: "https://medium.com/@marcelochaman/ux-product-design-case-study-qmind-design-team-portal-89d7eb8ea526",
    },
    {
      title: "CUCAI Website",
      tags: ["UI Design", "Frontend"],
      type: "Website",
      image_url: "/CUCAIWEB.png",
      to: "https://www.cucai.ca/",
    },
    {
      title: "QMIND Website",
      tags: ["UI", "Frontend"],
      type: "Website",
      image_url: "/QMINDWEB.gif",
      to: "https://qmind.ca/",
    },
    {
      title: "Memoria",
      tags: ["Product"],
      type: "Capsule",
      image_url: "/MEMORIA-COVER.png",
      to: "/projects/memoria",
    },
    {
      title: "The Sandbox",
      tags: ["Design", "Frontend"],
      type: "Project",
      image_url: "/Sandbox2.png",
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
      title: "LockedIn",
      tags: ["Hackathon", "Product Design"],
      type: "Project",
      image_url: "/lockedin-cover.png",
      to: "/projects/lockedin",
    },
  ];

  const projects = reorderList(unorderedProjects);

  const ResumeSection = ({
    title,
    website,
    organization,
    date,
    description,
  }: {
    title: string;
    website: string;
    organization: string;
    date: string;
    description: string;
  }) => {
    return (
      <div className="flex flex-col w-full font-light h-fit">
        <div className="flex flex-col sm:flex-row w-full items-left sm:items-center mb-[2px]">
          <div className="text-normal flex flex-col sm:flex-row">
            <div className="w-full sm:w-fit flex flex-row whitespace-nowrap items-center">
              {title}{" "}
              <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 flex-1 sm:hidden w-0" />
            </div>
            <div className="inline text-[#A0A0A0] w-full">
              <p className="hidden sm:inline ml-[4px]"> – </p>
              {website ? (
                <CustomLink to={website} icon underline={false}>
                  {organization}
                </CustomLink>
              ) : (
                organization
              )}
            </div>
          </div>
          <hr className="h-px mx-4 bg-[#A0A0A0]/10 border-0 sm:flex-1 invisible sm:visible" />
          <p className="text-[#A0A0A0] break-keep whitespace-nowrap">{date}</p>
        </div>
        <p className="text-[#A0A0A0] leading-tight">{description}</p>
      </div>
    );
  };

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
        <div className="mb-8 flex flex-row flex-wrap max-w-[700px] w-4/5 gap-3">
          <a target="_blank" href="https://www.linkedin.com/in/marc-cham/">
            <svg
              width="18"
              height="18"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M11.9306 20.5H7.48619V7.16667H11.9306V9.38889C12.878 8.18362 14.3147 7.46508 15.8473 7.43C18.6035 7.4453 20.8275 9.6882 20.8195 12.4444V20.5H16.3751V13C16.1973 11.7585 15.1326 10.8373 13.8784 10.84C13.3298 10.8573 12.812 11.0975 12.4445 11.5051C12.0769 11.9127 11.8913 12.4526 11.9306 13V20.5ZM5.26396 20.5H0.819519V7.16667H5.26396V20.5ZM3.04174 4.94444C1.81444 4.94444 0.819519 3.94952 0.819519 2.72222C0.819519 1.49492 1.81444 0.5 3.04174 0.5C4.26904 0.5 5.26396 1.49492 5.26396 2.72222C5.26396 3.31159 5.02984 3.87682 4.61309 4.29357C4.19634 4.71032 3.63111 4.94444 3.04174 4.94444Z"
                className="fill-current"
              />
            </svg>
          </a>
          <a target="_blank" href="https://github.com/marcelo-cm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M11.0759 0.5C6.04592 0.499354 1.75807 4.14728 0.952733 9.11239C0.147393 14.0775 3.06236 18.8937 7.83468 20.483C8.34867 20.5755 8.53268 20.2599 8.53268 19.9885C8.53268 19.7449 8.52446 19.0993 8.52138 18.241C5.66872 18.8578 5.06632 16.8655 5.06632 16.8655C4.87852 16.2456 4.47479 15.7135 3.92834 15.3657C3.00315 14.7294 3.99927 14.7438 3.99927 14.7438C4.65788 14.8341 5.23753 15.2243 5.569 15.8005C5.84958 16.3107 6.32227 16.6876 6.88205 16.8477C7.44184 17.0077 8.04235 16.9375 8.55016 16.6527C8.59788 16.1326 8.8293 15.6464 9.20293 15.2814C6.92697 15.0234 4.53382 14.1434 4.53382 10.2134C4.52119 9.19696 4.89865 8.2143 5.58853 7.46768C5.27639 6.58291 5.31315 5.61243 5.69133 4.7538C5.69133 4.7538 6.55176 4.47727 8.51007 5.80338C10.1896 5.34285 11.9622 5.34285 13.6418 5.80338C15.6011 4.47625 16.4605 4.7538 16.4605 4.7538C16.8404 5.61202 16.8772 6.58318 16.5633 7.46768C17.2557 8.21424 17.6329 9.19947 17.616 10.2175C17.616 14.1578 15.2208 15.0234 12.9366 15.2773C13.4293 15.7811 13.682 16.4722 13.6305 17.1749C13.6305 18.5463 13.6181 19.6524 13.6181 19.9885C13.6181 20.263 13.8011 20.5817 14.3244 20.4809C19.0947 18.889 22.0065 14.0725 21.1995 9.10867C20.3925 4.14488 16.1049 0.49885 11.0759 0.5Z"
                className="fill-current"
              />
            </svg>
          </a>
          <a target="_blank" href="mailto:marcechaman@gmail.com">
            <svg
              width="15"
              height="15"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M25.3334 3C25.3334 1.625 24.2084 0.5 22.8334 0.5H2.83337C1.45837 0.5 0.333374 1.625 0.333374 3V18C0.333374 19.375 1.45837 20.5 2.83337 20.5H22.8334C24.2084 20.5 25.3334 19.375 25.3334 18V3ZM22.8334 3L12.8334 9.25L2.83337 3H22.8334ZM22.8334 18H2.83337V5.5L12.8334 11.75L22.8334 5.5V18Z"
                className="fill-current"
              />
            </svg>
          </a>
          <a target="_blank" href="/MarceloChamanMallqui2026.pdf">
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M0.333374 3.83333C0.333374 1.99238 1.82576 0.5 3.66671 0.5H12L15.3334 3.83333H23.6667C25.5077 3.83333 27 5.32572 27 7.16667V17.1667C27 19.0076 25.5077 20.5 23.6667 20.5H3.66671C1.82576 20.5 0.333374 19.0076 0.333374 17.1667V3.83333Z"
                className="fill-current"
              />
              <path
                d="M13.2548 11.3217H11.7683C11.7411 11.1294 11.6857 10.9586 11.602 10.8093C11.5183 10.6577 11.4108 10.5287 11.2796 10.4224C11.1484 10.316 10.9968 10.2346 10.8248 10.178C10.6551 10.1214 10.4707 10.0932 10.2716 10.0932C9.91186 10.0932 9.5985 10.1825 9.33151 10.3613C9.06453 10.5377 8.85751 10.7957 8.71044 11.1351C8.56337 11.4722 8.48984 11.8817 8.48984 12.3636C8.48984 12.8591 8.56337 13.2755 8.71044 13.6126C8.85977 13.9497 9.06792 14.2042 9.33491 14.3762C9.60189 14.5482 9.91073 14.6341 10.2614 14.6341C10.4583 14.6341 10.6404 14.6081 10.8078 14.5561C10.9775 14.504 11.128 14.4282 11.2592 14.3287C11.3904 14.2269 11.4991 14.1036 11.585 13.9588C11.6733 13.8139 11.7344 13.6488 11.7683 13.4633L13.2548 13.47C13.2163 13.7891 13.1202 14.0968 12.9663 14.3932C12.8147 14.6873 12.61 14.9509 12.352 15.1839C12.0964 15.4147 11.7909 15.598 11.4357 15.7337C11.0827 15.8672 10.6834 15.934 10.2377 15.934C9.61773 15.934 9.0634 15.7937 8.57468 15.5131C8.08823 15.2326 7.7036 14.8264 7.42078 14.2947C7.14022 13.763 6.99994 13.1193 6.99994 12.3636C6.99994 11.6057 7.14248 10.9608 7.42756 10.4291C7.71265 9.89744 8.09955 9.49244 8.58826 9.21414C9.07697 8.93358 9.62678 8.7933 10.2377 8.7933C10.6404 8.7933 11.0137 8.84987 11.3576 8.963C11.7038 9.07613 12.0104 9.24129 12.2774 9.4585C12.5444 9.67344 12.7616 9.93703 12.929 10.2493C13.0987 10.5615 13.2073 10.919 13.2548 11.3217Z"
                fill="#161616"
              />
              <path
                d="M14.9431 8.88833L16.6231 14.1692H16.6875L18.3709 8.88833H19.9999L17.6039 15.8389H15.7101L13.3107 8.88833H14.9431Z"
                fill="#161616"
              />
            </svg>
          </a>
          <a target="_blank" href="https://rooms.xyz/marcelo/bedroom">
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M17.7778 18.2778V1.61111H13.3334V0.5H2.22228V18.2778H6.10352e-05V20.5H13.3334V3.83333H15.5556V20.5H20.0001V18.2778H17.7778ZM11.1112 18.2778H4.44451V2.72222H11.1112V18.2778ZM7.77784 9.38889H10.0001V11.6111H7.77784V9.38889Z"
                className="fill-current"
              />
            </svg>
          </a>
          <a target="_blank" href="https://twitter.com/marcelochaman">
            <svg
              width="16"
              height="16"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline text-white hover:text-[#A0A0A0] transition-all duration-100"
            >
              <path
                d="M21.9192 3.65358C22.9744 3.02278 23.7639 2.02951 24.1403 0.859238C23.1488 1.44754 22.064 1.86195 20.9328 2.08456C19.3645 0.425524 16.8797 0.0217906 14.8667 1.09895C12.8538 2.17612 11.8112 4.4675 12.3215 6.69275C8.26015 6.48885 4.47633 4.57041 1.91155 1.41481C0.573048 3.72352 1.25705 6.67484 3.47469 8.15936C2.67277 8.13358 1.88863 7.91646 1.18766 7.52611C1.18766 7.54729 1.18766 7.56848 1.18766 7.58967C1.18813 9.99458 2.88307 12.0661 5.24028 12.5427C4.49645 12.7451 3.71623 12.7749 2.95914 12.6298C3.62206 14.6865 5.51754 16.0954 7.67797 16.1375C5.88864 17.5419 3.67888 18.3035 1.40424 18.2997C1.00106 18.3003 0.598202 18.2771 0.197754 18.2303C2.5076 19.7146 5.19599 20.5024 7.94163 20.4997C11.7615 20.5259 15.4325 19.02 18.1335 16.3188C20.8345 13.6175 22.3401 9.94643 22.3135 6.12658C22.3135 5.90765 22.3084 5.68989 22.2982 5.47331C23.2875 4.75837 24.1413 3.87269 24.8195 2.85789C23.8979 3.2664 22.9203 3.53461 21.9192 3.65358Z"
                className="fill-current"
              />
            </svg>
          </a>
        </div>
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
