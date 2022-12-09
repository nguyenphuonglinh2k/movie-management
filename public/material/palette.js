const white = "#FFFFFF";
const black = "#141414";

export default {
  mode: "dark",
  common: {
    black,
    white,
  },
  primary: {
    contrastText: white,
    dark: "#203754",
    main: "#385982",
    light: "#263C58",
    activated: "",
    border: "#49678c",
  },
  secondary: {
    contrastText: white,
    dark: "#6DA421",
    main: "#74C603",
    light: "",
  },
  link: {
    primary: "",
    secondary: "",
    link: "#2C8CFF", // rgb 44, 140, 255
  },
  success: {
    contrastText: black,
    dark: "",
    main: "#80F549",
    light: "",
  },
  attention: {
    contrastText: white,
    dark: "#215FA9",
    main: "#2C8CFF",
    light: "",
  },
  warning: {
    contrastText: white,
    dark: "#D3B239",
    main: "#F4C416",
    light: "",
    gradient: "linear-gradient(180deg, #F4C416 0%, #FFA553 100%)",
  },
  error: {
    contrastText: white,
    dark: "#E20E02",
    main: "#FF4B4B",
    light: "#FF9F9F",
  },
  grey: {
    main: "#989FA7",
    100: "#D1D0CF",
    200: "#D2D5D9",
    300: "#BBC0C5",
    400: "rgba(255, 255, 255, 0.4)",
    500: "rgba(0, 0, 0, 0.5)",
    600: "rgba(255, 255, 255, 0.6)",
    700: "#192335",
    800: "#151E2B",
    900: "#0E151F",
    A100: "rgba(255, 255, 255, 0.0837)",
    A200: "#989FA7",
    A300: "#172030",
    A400: "#1F262F",
    A500: "#102E3D",
    A600: "#2D3B4D",
  },
  text: {
    primary: white,
    secondary: "#77808C",
    link: "#2C8CFF",
    disabled: "rgba(255, 255, 255, 0.7)",
  },
  background: {
    default: "#141414",
    paper: "linear-gradient(180deg, rgba(255, 255, 255, 0.0698) 85.21%, rgba(255, 255, 255, 0.093) 100%)",
    dark: "#191919",
  },
  pink: {
    main: "#FF00FF",
  },
  rarity: {
    common: "#D2D5D9",
    uncommon: "#A1E459",
    rare: "#78D9F1",
    epic: "#E04AF2",
    legendary: "#FCF94F",
  },
  icon: "#BBC0C5",
  divider: "#303E4F",
};
