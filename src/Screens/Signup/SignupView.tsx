import { FC } from "react";
import { DefaultLayout, Section } from "../../Components";
import { RightSectionContent, LeftSectionContent } from "./Components";

interface SignupViewProps {};

const SignupView: FC<SignupViewProps> = () => {
  return (
    <DefaultLayout>
      <Section className="section-left">
        <LeftSectionContent />
      </Section>
      <Section className="section-right">
        <RightSectionContent />
      </Section>
    </DefaultLayout>
  )
}

export default SignupView;