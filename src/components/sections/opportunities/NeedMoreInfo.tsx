import Info from "@/components/shared/shared-section/Info";

export default function NeedMoreInfo() {
  return (
    <div>
      <Info
        title="Need more information?"
        paragraphs={[
          "Curious about how investors succeed in Saudi Arabia?",
          "Wondering which incentives or partnerships can accelerate your entry into one of the world's fastest-growing economies?",
        ]}
        description="Saudi Arabia is where global capital meets future opportunity – powered by Vision 2030, world-class infrastructure, and investor-first policies."
        primaryButton={{
          text: "Register to Invest",
          variant: "outline",
        }}
        secondaryButton={{
          text: "Talk to MISA Advisor",
          variant: "solid",
        }}
        backgroundImage="/investment-opportunities/info/bg.png"
        imageSrc="/investment-opportunities/info/chat.png"
        imageAlt="Chat"
      />
    </div>
  );
}
