"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import { getKakaoPaymentUrl } from "../../utils/kakao";
import { useRouter } from "next/navigation";

const ParticleSection = () => {
  const [init, setInit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    key: "basic",
    name: "Basic",
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ff0000",
        animation: {
          enable: true,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      links: {
        enable: true,
        distance: 200,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 200,
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: "#000000",
    },
    detectRetina: true,
  };

  const handleBuyButton = async () => {
    const { next_redirect_pc_url } = await getKakaoPaymentUrl();
    router.push(next_redirect_pc_url);
  };

  return (
    <section className="relative h-[100vh] text-white flex flex-col justify-center items-center gap-10">
      <div className="z-[-1] h-full absolute top-0 left-0 w-full bg-black">
        {init ? (
          <Particles id="tsparticles" options={options} />
        ) : (
          <div className="flex flex-1 h-full w-full bg-black" />
        )}
      </div>
      <div className="text-[#f5f5f7] text-[40px] leading-tight text-center">
        마법 같은 공간 동영상을 촬영하고 그 순간을{"\n"}Apple Vision Pro에서
        생생하게 다시 경험하세요.
      </div>
      <div
        className="bg-[#0071e3] hover:bg-[#0077ed] py-2.5 w-[100px] text-center rounded-full cursor-pointer"
        onClick={handleBuyButton}
      >
        구입하기
      </div>
    </section>
  );
};

export default ParticleSection;
