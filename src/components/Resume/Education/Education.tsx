import { Education as EducationType } from "data/education";
import {
  EducationContainer,
  ItemCtnr,
  Degree,
  DegreeDate,
  Institution,
  DegreeDateCtnr
} from "./Education.styles";

type Props = {
  education: EducationType[];
};

function EducationItem({ education }: { education: EducationType }) {
  return (
    <ItemCtnr>
      <DegreeDateCtnr>
        <Degree>{education.degree}</Degree>
        <DegreeDate>{education.date}</DegreeDate>
      </DegreeDateCtnr>
      <DegreeDateCtnr>
        <Institution>{education.institution}</Institution>
      </DegreeDateCtnr>
    </ItemCtnr>
  );
}

export default function Education({ education }: Props) {
  return (
    <EducationContainer>
      {education.map((edu, i) => (
        <EducationItem key={`${i}-${edu.degree}`} education={edu} />
      ))}
    </EducationContainer>
  );
}
