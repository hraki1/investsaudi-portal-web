import Globe from "@/components/3D/Globe";

export default function Earth() {
  return (
    <main className="h-screen w-screen">
      <Globe
        style={{
          width: "120%",
          height: "117%",
          transform: "translateY(-10%)",
        }}
      />
    </main>
  );
}
