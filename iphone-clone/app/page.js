import MainIntro from "../src/components/sections/main-intro";
import CoreSection from "../src/components/sections/core";
import IphoneModel from "../src/components/sections/iphoneModel";
import ExploreSection from "../src/components/sections/explore";
import A17Section from "../src/components/sections/a17";
import CameraSection from "../src/components/sections/camera";
import ParticleSection from "../src/components/sections/particles";

export const metadata = {
  title: "iPhone 15 Pro 및 iPhone 15 Pro Max - Apple (KR)",
  description: "This is Description",
  openGraph: {
    title: "Iphone 팔아요",
    description: "많이 사주세요!",
    image:
      "https://www.google.com/imgres?q=apple&imgurl=http%3A%2F%2Fi.namu.wiki%2Fi%2Fd160Dqec9tDdXjSJhO_QWYqUp2DHO2B-aKvtCRxjdMwxoqSad8McPkKWnBCuWutazN79tv_w6yNZqgTZ_RBElg.svg&imgrefurl=https%3A%2F%2Fnamu.wiki%2Fw%2FApple&docid=ws3vqwGe1Tf4zM&tbnid=PnHk4LHSOvVQtM&vet=12ahUKEwiS06yW25yGAxX6sFYBHVoIBf4QM3oECBgQAA..i&w=650&h=800&hcb=2&itg=1&ved=2ahUKEwiS06yW25yGAxX6sFYBHVoIBf4QM3oECBgQAA",
  },
};

export default function Home() {
  return (
    <div className="bg-transparent break-keep whitespace-pre">
      <MainIntro />
      <CoreSection />
      <IphoneModel />
      <ExploreSection />
      <A17Section />
      <CameraSection />
      <ParticleSection />
    </div>
  );
}
