"use client";
import Image from "next/image";
import FloatingPlusBtn from "../buttons/FloatingPlusBtn";
import { motion } from "framer-motion";

const A17Section = () => {
  const renderVideo = () => {
    return (
      <div className="flex flex-col flex-1 w-full items-center justify-center gap-8 mt-[100px]">
        <div className="relative w-full aspect-[1054/516]">
          <div className="absolute top-0 left-0 w-full h-full pt-5 px-4">
            <video
              className="rounded-[5%/10%]"
              playsInline
              muted
              autoPlay
              src="/assets/videos/a17.mp4"
            />
          </div>
          <Image
            src="/assets/images/iphone_frame.png"
            fill
            objectFit="contain"
            alt="frame for video"
          />
        </div>
        <div className="text-[17px]">붕괴: 스타레일</div>
      </div>
    );
  };

  const renderDescription = () => {
    return (
      <div className="flex flex-row flex-1 py-[60px] text-[21px] font-semibold w-full">
        <div className="flex flex-1 flex-col gap-4">
          <motion.div
            className="max-w-[330px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: "all" }}
          >
            <span className="text-[#f5f5f7]">역대 최고의 그래픽 성능</span>을
            갖춘 A17 Pro는 다른 어떤 iPhone 칩과도 비교할 수 없는 독보적인
            칩입니다.
          </motion.div>
          <motion.div
            className="max-w-[330px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: "some" }}
          >
            엄청나게 디테일한 배경과 살아 숨쉬는 듯한 캐릭터로 모바일{" "}
            <span className="text-[#f5f5f7]">
              게임을 즐길 때도 생생한 그래픽과 몰입감 넘치는 플레이 경험
            </span>
            을 만끽할 수 있게 해주죠. 여기에 업계 최고 수준의 속도와 효율성까지
            갖춘 A17 Pro. 무슨 일이든 쏜살같은 속도로 해치웁니다.
          </motion.div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 max-w-[330px] mx-auto leading-tight">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: "all" }}
            >
              <div>새로운</div>
              <div className="text-[#f5f5f7] text-[48px]">Pro급 GPU</div>
              <div>6코어 탑재</div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black flex flex-col items-center justify-center pt-[200px] pb-[100px] px-10 text-[#86868b]">
      <div className="flex flex-col flex-1 max-w-[1260px] w-full items-center justify-center pb-[100px]">
        <motion.div
          className="relative w-[150px] aspect-[1/1]"
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: "all", once: true }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/images/a17.jpg"
            alt="a17 image"
            fill
            objectFit="contain"
          />
        </motion.div>
        <h4 className="text-center text-[#f5f5f7] text-[80px] font-semibold mt-[100px] leading-tight">
          A17 Pro 칩.{"\n"}
          게임 평정, 괴물 프로세서.
        </h4>
        <div className="text-[28px] mt-[40px]">
          마침내 Apple GPU 사상 가장 큰 변화가 찾아왔습니다.
        </div>
        {renderVideo()}
        {renderDescription()}
      </div>
      <FloatingPlusBtn title="A17 Pro 칩 속속들이 살펴보기" />
    </section>
  );
};

export default A17Section;
