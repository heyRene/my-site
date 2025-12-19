import SectionAbout from "./sections/SectionAbout/SectionAbout";
import { SectionExperience } from "./sections/SectionExperience/SectionExperience";
import SectionIntro from "./sections/SectionIntro/SectionIntro";
import SectionStack from "./sections/SectionStack/SectionStack";


export default function Home() {
  return (
    <div>
      <main className="main">
        <SectionIntro/>
        <SectionAbout/>
        <SectionExperience/>
        <SectionStack/>
      </main>
    </div>
  );
}

