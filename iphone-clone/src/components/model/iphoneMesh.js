"use client";

import { useFBX } from "@react-three/drei";
import { gsap } from "gsap";
import React, { forwardRef, useEffect } from "react";
import { Box3, Vector3 } from "three";

const IphoneMesh = forwardRef(({ type, scrollYProgress, setLoading }, ref) => {
  const iPhoneModelFbx = useFBX(
    type === "pro"
      ? "/assets/models/model_low.fbx"
      : "/assets/models/model_high.fbx"
  );
  const THRESHOLD = 0.4;
  const ROUNDS = 2;

  useEffect(() => {
    if (!ref.current) return;
    const obj = ref.current;
    const newPosition = new Vector3();
    new Box3().setFromObject(obj).getCenter(newPosition);
    obj.position.setY(-newPosition.y);
    if (type === "pro-max") {
      obj.position.setX(10);
    }
    setLoading(false);

    const unsubscribe = scrollYProgress.on("change", (_scrollYProgress) => {
      if (type === "pro-max") return;
      if (_scrollYProgress > THRESHOLD) {
        gsap.to(obj.rotation, { y: Math.PI / 4 });
        unsubscribe();
        return;
      }
      obj.rotation.y =
        -1 * ROUNDS * Math.PI * (1 - _scrollYProgress / THRESHOLD) +
        Math.PI / 4;
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return (
    <primitive
      ref={ref}
      position={[0, 0, 0]}
      object={iPhoneModelFbx}
      scale={type === "pro" ? 1 / 2.5 : 1 / 2.25}
      visible={type === "pro"}
    />
  );
});

IphoneMesh.displayName = "IphoneMesh";

export default IphoneMesh;
