"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function GPUModel(props: any) {
  const scroll = useScroll();
  const topRef = useRef<THREE.Group>(null!);
  const midRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const s = scroll.offset; // 0 to 1
    
    // Animate parts based on scroll
    topRef.current.position.y = THREE.MathUtils.lerp(0.5, 3, s);
    midRef.current.position.y = THREE.MathUtils.lerp(0, 1.5, s);
    
    // Gentle rotation
    topRef.current.rotation.y = s * 2;
    midRef.current.rotation.y = s * 2;
  });

  return (
    <group {...props} rotation={[0.4, -0.4, 0]}>
      {/* Top Part */}
      <group ref={topRef}>
        <mesh>
          <boxGeometry args={[3, 0.2, 2]} />
          <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Core Components */}
      <group ref={midRef}>
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[2.5, 0.4, 1.5]} />
          <meshStandardMaterial color="#ff3e3e" emissive="#ff0000" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Base Chassis */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3.2, 0.5, 2.2]} />
        <meshStandardMaterial color="#111" />
      </mesh>
    </group>
  );
}
