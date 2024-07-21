import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Syne, Manrope } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const FaqContent = [
  {
    question:
      "What makes Daily Design different from other leading UI UX design agencies?",
    answer:
      "At Daily design, we've carved a unique niche in the UI UX domain, setting ourselves apart with a combination of creativity, client-centric approach, and strategic insight. Our reputation is built on consistently delivering standout UI UX, branding, product design, and web design that not only looks great but also drives brand growth. For every project we undertake, a dedicated team leader ensures that our solutions are tailored and resonate with the target audience. Our in-house experts bring their diverse skills to the table, guaranteeing designs that captivate and foster lasting relationships. Dive deeper into our offerings and discover the Daily design difference.",
  },
  {
    question: "How does UX Design process works?",
    answer:
      "Our UX journey starts with understanding your project and its goals. Here's a brief overview: Discovery & Research: We dive deep to understand your brand, end-users, and project objectives, using techniques like interviews, surveys, and market analysis. Competitive Analysis: We review your industry landscape, identifying trends and seeing where you stand amongst competitors. Solution Crafting: Our creative team sketches ideas, mapping out user flows and journeys. Design & Collaboration: This is where UI, UX, Product Design, and Branding come together. We design sitemaps, wireframes, prototypes, and collaborate with you for feedback. Finalizing & Transition: Once the design is approved, we can move towards Web Design and, if needed, transition the design to our development team for a seamless handoff. Our commitment? A tailored approach, with tools and software that ensure smooth collaboration and a design that resonates with your brand and users.",
  },
  {
    question: "How much does a design project at your agency cost?",
    answer:
      "Every design project is unique, and so is its pricing! Instead of one-size-fits-all packages, we custom-craft pricing plans based on each project's distinct needs, ranging from UI/UX, Branding, Product Design to Web design. Design Monks can help your startup by providing expert UX/UI design, branding, and digital strategy to ensure your product stands out in the market. Your project's cost hinges on several factors, like its scope, duration, specific requirements, and the expertise involved. Unlike other agencies that focus on hourly rates, we factor in the project's holistic demands, including the dedicated team's expertise. Prices usually fall between ₹800 and ₹10,000, though it's always best to reach out for an exact quote. Got questions or ready to dive in? Drop us an email or give us a call! We also offer a detailed project proposal after understanding your needs. Whether you're a budding startup or a seasoned enterprise, our flexible pricing adjusts to match your goals.🚀",
  },
  {
    question: "How can Daily Design support my startup?",
    answer:
      "At Daily Design, we don't just offer services; we build partnerships. Especially with startups! Why? Because we believe in the fresh, disruptive ideas young entrepreneurs bring to the table. Here's how we're committed to making your dream a reality: Specialized Expertise: We're a powerhouse in UI/UX, Branding, Product Design, and Web Design. This means your startup won't just fit in; it will stand out and resonate with its audience. Tailored Solutions: Every startup is unique, and so are our design solutions. We ensure they're aligned with your brand's voice and vision. Trust & Security: Your idea is your biggest asset. We guarantee confidentiality, ensuring your intellectual property remains just that – yours. Unlimited Revisions: We're not satisfied until you are. We offer unlimited revisions until your vision matches the outcome. No compromises. Transparent Pricing with a Free Quote: Before we embark on our creative journey, we'll provide a free quote. And for startups that truly captivate us, we're always open to budget-friendly packages. Your Success is Our Pride: We've been privileged to help many startups transition from nascent ideas to industry leaders. And we're eager to be part of your success story! Dream big, and let Daily Design handle the rest. Got more questions or ideas to share? We're just an email away!",
  },
  {
    question:
      "Can you help us redesign our app, website, or enterprise/B2B software?",
    answer:
      "Of course! At Daily design, we specialize in breathing new life into digital products. Whether you're looking to rejuvenate a website, app, or B2B software, we've got the expertise to make it shine. Our core services encompass UI/UX, Branding, Product Design, and Web Design. Redesigning isn't just about a fresh coat of paint; it's about enhancing user experience, functionality, and aligning with brand identity. This involves in-depth user research, prototyping, wireframing, and iterative testing to ensure the end product meets and exceeds expectations. And while revamping existing digital assets can sometimes be as intensive as creating them from scratch, we're adept at navigating these complexities efficiently. Design Design is dedicated to delivering designs that not only look good but work seamlessly. Reach out to us, and let's start your digital transformation journey together.",
  },
  {
    question: "How soon can I expect my designs from Daily Design?",
    answer:
      "Expect your designs in 2 to 4 business days, depending on the complexity. Simple tasks, like graphic designs, can be ready within a day, while intricate ones like full-page web designs might take up to 3 days. At Daily design, we prioritize quality and custom-fit all designs to your needs, avoiding generic templates. Remember, great design takes time, but we always aim for speedy deliveries without compromising quality. We're here to make sure your UI UX, Branding, Product Design, and Web design needs are met with excellence!",
  },
  {
    question: "What if the design isn't quite right for me?",
    answer:
      "At Daily Design, we believe in getting it just right. That's why we proudly offer unlimited revisions on our UI/UX, branding, product, and web design services. If the initial draft isn't exactly what you had in mind, don't fret! We're here to tweak, refine, and revise until it's absolutely perfect for you. Your satisfaction is paramount, and we won't stop until we achieve design nirvana together! 🎨✨",
  },
];

const SectionEight = () => {
  return (
    <section className="faq-main-wrapper">
      <div className="container">
        <h2 className={`${syne.variable} title`}>Frequently asked question</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full dailydesign-accordian"
        >
          {FaqContent.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>
                {index + 1}.&nbsp;{item.question}
              </AccordionTrigger>
              <AccordionContent font={manrope.variable}>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SectionEight;
