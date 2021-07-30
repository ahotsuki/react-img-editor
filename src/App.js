import React from "react";
import ImgEditor from "./components/imgEditor";

function App() {
  const tui = React.useRef(null);
  const [initImg, setInitImg] = React.useState("");
  const [resultImg, setResultImg] = React.useState("");
  const [editing, setEditing] = React.useState(false);

  const getUrl = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setInitImg(url);
  };

  const logImageUrl = () => {
    let instance = tui.current.getInstance();
    let dataUrl = instance.toDataURL();
    setResultImg(dataUrl);
    handleEdit();
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  return (
    <div className="App">
      {/* {editing ? ( */}
      <ImgEditor logImageUrl={logImageUrl} tui={tui} initImg={initImg} />
      {/* ) : ( */}
      <>
        <div display="flex">
          <input type="file" accept="img/*" onChange={getUrl} />
          <div>
            <p>Original</p>
            <img src={initImg} alt="" width="200px" height="100px" />
          </div>
          <div>
            <p>Edited</p>
            <img src={resultImg} alt="" width="200px" height="100px" />
          </div>
        </div>
        <button onClick={handleEdit}>Edit Images</button>
      </>
      {/* )} */}
    </div>
  );
}

export default App;
