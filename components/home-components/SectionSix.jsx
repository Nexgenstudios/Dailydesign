import Image from "next/image";
import ProjectsCollabImage from "@/public/assets/home/designbg.png";

const SectionSix = () => {
  return (
    <section className="designs-collab-section">
      <Image
        src={ProjectsCollabImage}
        priority
        quality={100}
        width={"100%"}
        height={"auto"}
        unoptimized={true}
        alt="project-collab-img"
      />
    </section>
  );
};

export default SectionSix;
