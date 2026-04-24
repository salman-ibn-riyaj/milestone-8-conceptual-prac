import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Image
          className="dark:invert"
          src="/salman.JPG"
          alt="Next.js logo"
          width={400}
          height={500}
          priority
        />
        
        
      </main>
    </div>
  );
}
