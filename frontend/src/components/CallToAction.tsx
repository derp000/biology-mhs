import Button, { ButtonProps } from "./Button";
import { SectionProps } from "./Section";

export interface CallToActionProps extends SectionProps {
  heading: string;
  button: ButtonProps;
}

// jank way to add padding to grid
// https://stackoverflow.com/a/10048839
// https://www.w3schools.com/css/css_border_color.asp
const CallToAction = ({
  textLeft,
  heading,
  body,
  button,
}: CallToActionProps) => {
  return (
    <div className="bg-red-300 lg:px-24 lg:py-12 px-6 py-6 text-white">
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-5 rounded-3xl bg-gradient-to-r p-16 bg-purple-300">
        <div className={`bg-transparent ${textLeft ? "order-1" : ""}`}></div>
        <div className="text-center lg:text-left">
          <div className="lg:text-[8dvh] text-6xl lg:mb-[2dvh] mb-4 font-semibold">
            {heading}
          </div>
          <div className="lg:text-[5dvh] text-2xl flex flex-wrap leading-relaxed lg:mb-[2dvh] mb-4">
            {body}
          </div>
          <Button text={button.text} style={button.style} to={button.to} />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
