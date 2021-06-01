import React, {useState} from 'react';
import {Button, Grid, Paper} from "@material-ui/core";
import ReactJson from "react-json-view";

const FileJson = (props) => {
    const [fileData, setFileData] = useState("");
    const [prettyView, setPrettyView] = useState(false);

    const readFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            setFileData(text);
        };
        reader.readAsText(e.target.files[0])
    }
    return (
        <div>
            {!prettyView && <Grid item xs={4} style={{margin: "5% 5% 5% 30%"}}>
                <Paper align="center">
                    <Button variant="contained" component="label" style={{marginTop: "5px"}}>
                        Upload File
                        <input type="file" style={{marginLeft: "10px"}} onChange={(e) => readFile(e)}/>
                    </Button>
                    <Button variant="outlined" color="primary" style={{marginTop: "10px", marginBottom: "5px"}}
                            disabled={!fileData}
                            onClick={() => setPrettyView(true)}>
                        View JSON
                    </Button>
                </Paper>
            </Grid>}
            {prettyView && fileData &&
            <div>
                <ReactJson id="scrollable" src={JSON.parse(fileData)}
                           style={{margin: "1px 1px 1px 10%", width: "80%", height: "70vh", overflowY: "auto"}}
                           theme="monokai" onEdit={false}
                           collapsed={false}/>
                <Button variant="outlined" color="secondary" style={{marginLeft: "45%", marginTop: "10px"}}
                        onClick={() => setPrettyView(false)}>
                    Clear</Button>
            </div>
            }
        </div>
    )
};
export default FileJson