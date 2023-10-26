import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    type: {
      options: [
        "secondary-button-active",
        "primary-button",
        "secondary-button-inactive",
        "banner-button-white",
        "secondary-button-with-icon",
        "onboarding-inactive",
        "onboarding-active",
        "banner-button-blue",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "secondary-button-active",
    className: {},
    text: "Marked RSVP",
    textClassName: {},
    text1: "Added to Calendar",
  },
};
