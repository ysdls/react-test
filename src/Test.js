import { useState, useEffact, useRef } from "react";
import axios from "axios";

function Test() {
    const [filesState, setFilesState] = useState([]);
    const refFile = useRef();
    const uploadEvent = () => {
        refFile.current.click();
    };
    const preview = () => {
        console.log(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ preview ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");

        const files = document.querySelector("#files").files;
        setFilesState([...files]);

        // const files = document.querySelector("#files");
        // const previewDiv = document.querySelector("#previewDiv");

        // console.log("files:", files.files);
        // setFilesState(files.files);
        // previewDiv.innerHTML = "";
        // for (var i = 0; i < filesState.length; i++) {
        //     console.log(filesState[i].name);
        //     previewDiv.innerHTML += filesState[i].name;
        // }
    };
    const upload = async () => {
        console.log(" ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ upload ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ ");
        const data = new FormData();
        console.log("filesState:", filesState);
        // const res = await axios({
        //   method: 'POST',
        //   url: 'http://localhost:8000/upload',
        //   data,
        // })
        // const resData = res.data
        // console.log('resData:', resData)
    };
    return (
        <>
            <button onClick={uploadEvent}>파일 업로드</button>
            <input type="file" id="files" multiple ref={refFile} hidden onChange={preview} />
            <div id="previewDiv">
                {filesState.map((file) => (
                    <div key={file.name}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            style={{ width: "100px", height: "100px" }}
                        />
                        <p>{file.name}</p>
                    </div>
                ))}
            </div>
            <button onClick={upload}>제출하기</button>
        </>
    );
}
export default Test;
