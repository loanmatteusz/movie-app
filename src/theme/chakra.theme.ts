// theme.js
import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
  styles: {
    global: {
      "body": {
        bgColor: "#202035"
      },
    },
  },
  components: {
    Container: {
      variants: {
        "MovieCard": {
          margin: "1rem",
          bg: "#2f3257",
          height: "480px",
          width: "265px",
          color: "white",
          cursor: "pointer",
          borderRadius: "3px",
        },
        "headComponents": {
          maxWidth: "100%",
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: "1fr 1fr 1fr",
          backgroundColor: "#2b2e52",
          padding: "1rem",
          paddingTop: "14rem",
          objectFit: "cover",
        },
        "movies": {
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        },
        "lateralContainer": {
          margin: "auto",
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "space-between",
          pb: "25px"
        },
        "mostSearchRanking": {
          marginTop: "-12rem",
          color: "white",
          textAlign: "center",
          backgroundColor: "#3a3c65",
          borderRadius: "10px",
        }
      },
    },
    Text: {
      variants: {
        "lateralTitle": {
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          color: "#ffffff",
          marginBottom: "-30px",
        },
      },
    },
  },
  textStyles: {
    h2: {
      fontSize: ["18px", "28px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  }
});

export default theme;
