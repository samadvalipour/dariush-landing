import { defineComponent, h, markRaw } from "vue";

const baseSvgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": 1.5,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "aria-hidden": "true",
  focusable: "false",
};

const createIcon = (name, nodeFactory) =>
  markRaw(
    defineComponent({
      name,
      inheritAttrs: false,
      setup(_, { attrs }) {
        return () => h("svg", { ...baseSvgProps, ...attrs }, nodeFactory());
      },
    })
  );

export const PhoneIcon = createIcon("PhoneIcon", () => [
  h("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.72 2.34a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.74-1.32a2 2 0 0 1 2.11-.45c.74.35 1.53.6 2.34.72A2 2 0 0 1 22 16.92Z",
  }),
]);

export const MapPinIcon = createIcon("MapPinIcon", () => [
  h("path", {
    d: "M12 21c-4.8-4.5-8-7.8-8-11a8 8 0 0 1 16 0c0 3.2-3.2 6.5-8 11Z",
  }),
  h("circle", { cx: "12", cy: "10", r: "3" }),
]);

export const MailIcon = createIcon("MailIcon", () => [
  h("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
  h("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  }),
]);

export const ClockIcon = createIcon("ClockIcon", () => [
  h("circle", { cx: "12", cy: "12", r: "10" }),
  h("polyline", { points: "12 6 12 12 16 14" }),
]);

export const NavigationIcon = createIcon("NavigationIcon", () => [
  h("polygon", { points: "12 2 19 21 12 17 5 21 12 2" }),
]);
