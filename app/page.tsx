import MainContainer from "@/src/components/MainContainer";
import MainSection from "@/src/features/MainSection";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <MainSection />
      <MainContainer>
        <h1>Hello World</h1>
      </MainContainer>
    </Fragment>
  );
}
