// src/ui/theme/theme.ts

import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    // Background colors
    background: {
      lightPurple: "rgb(192, 132, 252)",
      pink: "rgb(236, 72, 153)",
      red: "rgb(239, 68, 68)",
      white: "rgb(255, 255, 255)",
      lightGreyTab: "rgb(243, 244, 246)",
      lightGreyButtons: "rgb(229, 231, 235)",
    },

    // Text colors
    text: {
      darkBlack: "rgb(31, 41, 55)",
      mediumGrey: "rgb(75, 85, 99)",
      lightGreyText: "rgb(107, 114, 128)",
    },

    // Accent & Button Colors
    vacancies: {
      purple: "rgb(168, 85, 247)",
      hoverPurple: "rgb(147, 51, 234)",
    },

    companies: {
      pink: "rgb(236, 72, 153)",
      hoverPink: "rgb(219, 39, 119)",
    },

    deleteButtons: {
      redText: "rgb(239, 68, 68)",
      hoverRedText: "rgb(220, 38, 38)",
      hoverBackground: "rgb(254, 242, 242)",
    },

    // Borders & Focus
    border: {
      grey: "rgb(229, 231, 235)",
    },

    focus: {
      purple: "rgb(233, 213, 255)",
      pink: "rgb(251, 207, 232)",
    },
  },
  shape: {
    // Border radius
    borderRadiusMin: "10px",
    borderRadiusMedium: "20px",
    borderRadiusBig: "30px",
  },
  spacing: {
    // Padding
    paddingMin: "10px",
    paddingMedium: "20px",
    paddingBig: "30px",
    paddingExtraBig: "40px",
    paddingMegaBig: "45px",
  },
  fonts: {
    body: "Arial, sans-serif",
    heading: "Georgia, serif",
  },
};

export default theme;
