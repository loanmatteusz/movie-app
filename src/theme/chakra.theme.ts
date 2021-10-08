// theme.js
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  styles: {
    global: {
      "body": {
        bgColor: "#202035"
      },
    },
    chakraStyle: {
      "HomeHStack": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        bgColor: "#2b2e52",
        p: ".5rem",
        pt: "12rem",
      },
      // "TextMostSearch": {
      //   isplay: "flex",
      //   flexDirection: "row",
      //   alignItems: "baseline",
      //   justifyContent: "center",
      //   color: "#ffffff",
      //   marginBottom: "-30px",
      // },
      // "MoviesContainer": {
      //   display: "flex",
      //   flexWrap: "wrap",
      //   justifyContent: "center",
      //   maxW: "90%",
      //   ml: "auto",
      //   mr: "auto",
      // }
    }
  },
});

export default theme;
