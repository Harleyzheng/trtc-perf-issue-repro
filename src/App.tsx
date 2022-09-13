import { Box } from "@mui/material";
import TRTC from "trtc-js-sdk";

export default function App() {
  console.info("123", TRTC);
  // mock DOM
  const a = new Array(2000).fill(Math.random());
  return (
    <>
      <Box
        sx={{
          ".box": {
            width: 200,
            margin: "0 auto",
            border: "1px solid #ff6700",
            overflow: "hidden",
            position: "absolute",
          },

          ".animate": {
            paddingLeft: "20px",
            color: "#000",
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "10s wordsLoop linear infinite normal",
          },

          "@keyframes wordsLoop": {
            "0%": {
              transform: "translateX(200px) rotateZ(360deg)",
            },
            "100%": {
              transform: "translateX(-100%) rotateZ(360deg)",
            },
          },
        }}
      >
        <div className="box">
          <p className="animate">13123123123</p>
        </div>
      </Box>
      {a.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </>
  );
}
