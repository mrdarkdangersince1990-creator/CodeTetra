"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment, Float, ContactShadows } from "@react-three/drei";
import { Suspense } from "react";
import GPUModel from "./GPUModel";

export default function Scene() {
  return (
    <div className="h-screen w-full bg-[#0a0a0a]">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 35 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.2}>
            
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <GPUModel scale={1.5} />
            </Float>

            <Environment preset="city" />
            <ContactShadows opacity={0.4} scale={20} blur={2.4} far={4.5} />

            {/* HTML Overlay Content */}
            <Scroll html>
              <div className="w-screen">
                <section className="h-screen flex items-center px-10 md:px-32">
                  <div className="max-w-xl">
                    <h1 className="text-7xl font-bold text-white tracking-tighter">CODETETRA</h1>
                    <p className="text-cyan-500 mt-4 text-lg font-mono tracking-widest">H100 INFRASTRUCTURE</p>
                  </div>
                </section>

                <section className="h-screen flex items-center justify-end px-10 md:px-32 text-right">
                  <div className="max-w-xl">
                    <h2 className="text-5xl font-bold text-white">HOT-SWAPPABLE DESIGN</h2>
                    <p className="text-gray-400 mt-4">Modular GPU clusters built for infinite scalability and sub-ms latency.</p>
                  </div>
                </section>
              </div>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
