import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    type: {
      options: ["no-tabs", "tabs"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "no-tabs",
    className: {},
    soulsideLogoT:
      "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/soulside-logo-2-t.svg",
    formkitHelp:
      "https://cdn.animaapp.com/projects/6537c9cd10ade912b7cdccac/releases/6537ca44702651020f25c1d8/img/formkit-help.svg",
    frameClassName: {},
  },
};
