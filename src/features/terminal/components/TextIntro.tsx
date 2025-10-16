import { intro, title } from "../../../utils/texts";

export default function TextIntro() {
  return (
    <>
      <pre>
        {title}
        <p></p>
        {intro}
      </pre>
    </>
  );
}
