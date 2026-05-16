import Scene from "@/components/3d/Scene";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Cursor />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 p-8 flex justify-between items-center text-white font-mono text-sm">
        <div className="flex gap-10">
          <span>FEATURES</span>
          <span>OVERVIEW</span>
          <span>GALLERY</span>
        </div>
        <div className="border border-white/20 px-4 py-1 rounded-full">
          ORDER NOW
        </div>
      </nav>
      
      <Scene />
    </main>
  );
}
