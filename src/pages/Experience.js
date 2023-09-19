import CustomizedTimeline from "../components/timeline";
import Resume from "../assets/resume.json";

export default function Experience() {
  document.title = `Experience | ${Resume.basics.name}`;
  return <CustomizedTimeline></CustomizedTimeline>;
}
