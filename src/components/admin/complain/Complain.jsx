import React, { useRef } from "react";
import Content from "../../core/Content";
import { Editor } from '@tinymce/tinymce-react';

const Complain = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Content>
                <div className="form-group">
                    <h2 className="control-label">Tiêu đề</h2>
                    <input type="text" id="firstName" className="form-control" placeholder="Tiêu đề" />
                    {/* <small className="form-control-feedback"> This is inline help </small>  */}
                </div>
                <div className="form-group">
                    <h2 className="control-label">Nội dung</h2>
                    <Editor
                        apiKey="d8szs8s6htvo5evneko4hzvg7uv8qtsvya5y5eitdjglm92l"
                        init={{ /* your other settings */ }}
                    />
                </div>

                {/* <button onClick={log}>Log editor content</button> */}
                <button type="submit" class="btn btn-success waves-effect waves-light m-10">Submit</button>
            </Content>
        </>
    )
}
export default Complain