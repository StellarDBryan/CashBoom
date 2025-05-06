import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <Image
        src='/images/common/app-template.png'
        alt="App Showcase"
        width={300}
        height={600}
      />
    </main>
  );
}
