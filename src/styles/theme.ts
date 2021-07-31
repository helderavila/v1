import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto Mono",
  },
  styles: {
    global: {
      body: {
        bg: "gray.800",
        color: "gray.400",
      },
    },
  },
});
