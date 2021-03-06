// theme.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      "body": {
        bgColor: "#1c1c28"
      },
    },
  },
  components: {
    Container: {
      variants: {
        sanduich: {
          display: {
            md: "none",
            lg: "none",
          },
        },
        responsive: {
          bgColor: "",
          h: "10vh",
          minW: "70%",
          maxW: "100%",
          display: "grid",
          alignItems: "center",
          justifyContent: {
            base: "space-between",
            sm: "space-between",
            md: "space-between",
            lg: "space-between"
          },
          gridTemplateColumns: {
            base: "repeat(3, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2, 1fr)"
          },
        },
        list: {
          display: {
            base: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
          },
          alignItems: "center",
          justifyContent: "center",
        },
        titleResponsive: {
          mr: {
            md: "45%",
            lg: "50%",
          },
        }
      },
    },
    Text: {
      variants: {
        compacted: {
          backgroundImage: "linear-gradient(rgba(28,28,40,0), #1c1c28)",
        }
      }
    }
  },
});

export default theme;
