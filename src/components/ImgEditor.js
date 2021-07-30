import React from "react";
import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

const customTheme = {
  "header.display": "none",
};

const ImgEditor = ({ tui, logImageUrl, initImg }) => {
  React.useEffect(() => {
    console.log("changed");
    let instance = tui.current.getInstance();
    instance.addImageObject(initImg);
  });

  return (
    <>
      <button onClick={logImageUrl}>Get Edited Image</button>
      <ImageEditor
        key={"img"}
        ref={tui}
        includeUI={{
          loadImage: {
            path: "logo512.png",
            name: "SampleImage",
          },
          theme: customTheme,
          // menu: ["shape", "filter"],
          menu: [
            "shape",
            "filter",
            "text",
            "mask",
            "icon",
            "draw",
            "crop",
            "flip",
            "rotate",
          ],
          initMenu: "filter",
          uiSize: {
            width: "1000px",
            height: "700px",
          },
          menuBarPosition: "left",
        }}
        cssMaxHeight={500}
        cssMaxWidth={700}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
      />
    </>
  );
};

export default ImgEditor;
