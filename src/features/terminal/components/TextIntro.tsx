import { intro, title } from "../utils/texts";

export default function TextIntro() {
  return (
    <>
      <pre className="whitespace-pre-wrap">
        <span className="text-[8px] md:text-base">{title}</span>
        <p></p>
        {intro}
      </pre>
    </>
  );
}
