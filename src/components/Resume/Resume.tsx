import { useState } from "react";
import SideBarLayout from "components/SideBarLayout";
import SectionLayout from "components/SectionLayout";
import { P } from "components/Text";
import { NameTitle, Header, First, Last, RoleSubTitle } from "./Resume.styles";
import useResumeData from "./useResumeData";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Filter from "./Filter";

export default function Resume() {
  const {
    statement,
    skills,
    contactDetails,
    experience,
    education
  } = useResumeData();
  const [filterTerm, setFilterTerm] = useState("");
  const filter = {
    technologies: filterTerm.split(",").filter((s) => !!s.length)
  };

  return (
    <>
      <Header>
        <NameTitle>
          <First>Sean</First> <Last>Hasselback</Last>
        </NameTitle>
        <RoleSubTitle>Senior Front-end Developer</RoleSubTitle>
        <div>
          {statement.map((line, i) => (
            <P key={i}>{line}</P>
          ))}
        </div>
      </Header>
      <SideBarLayout>
        <SideBarLayout.SideBar>
          <SectionLayout title="Contact">
            <Contact contactDetails={contactDetails} />
          </SectionLayout>
          <SectionLayout title="Skills">
            <Skills skills={skills} />
          </SectionLayout>
          <SectionLayout title="Education">
            <Education education={education} />
          </SectionLayout>
        </SideBarLayout.SideBar>
        <SideBarLayout.Main>
          <SectionLayout
            title="Work Experience"
            actions={
              <Filter
                placeholder="Search technology..."
                onTermChanged={setFilterTerm}
              />
            }
          >
            <WorkExperience experience={experience} filter={filter} />
          </SectionLayout>
        </SideBarLayout.Main>
      </SideBarLayout>
    </>
  );
}
