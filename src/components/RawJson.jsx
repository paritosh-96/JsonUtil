import React, {useState} from 'react';
import {Button, Grid, Paper, TextField} from "@material-ui/core";
import ReactJson from "react-json-view";
import {isValidJson} from "../common/util";

const RawJson = (props) => {
    const [rawData, setRawData] = useState("");
    const [prettyView, setPrettyView] = useState(false);
    const [isJsonValid, setIsJsonValid] = useState(false)

    const updateRawData = (event) => {
        const rawText = event.target.value;
        setRawData(event.target.value);
        if (isValidJson(rawText)) {
            setIsJsonValid(true)
        } else {
            setIsJsonValid(false)
        }
    }

    const showErrorText = () => {
        return !!rawData && !isJsonValid
    }

    return (
        <div>
            {!prettyView && <Grid item xs={10} style={{margin: "5%", padding: "10px"}}>
                <p className={`text-info ${showErrorText() ? 'error-text': ''}`}>
                    {`${showErrorText() ?'ALERT!!!!! Incorrect json detected': 'Enter the json to render'}`}
                </p>
                <Paper>
                    <TextField id="outlined-multiline-static" label="Raw Json"
                               multiline rows={4} variant="outlined" style={{width: "70%", margin: "10px"}}
                               onChange={(e) => updateRawData(e)}/>
                    <Button variant="outlined" color="primary" style={{marginTop: "30px", marginLeft: "10%"}}
                            onClick={() => setPrettyView(true)} disabled={!isJsonValid}>
                        View JSON
                    </Button>
                </Paper>
            </Grid>}
            {prettyView && rawData && isJsonValid &&
            <div>
                <ReactJson id="scrollable" src={JSON.parse(rawData)}
                           style={{margin: "1px 1px 1px 10%", width: "80%", height: "70vh", overflowY: "auto"}}
                           theme="monokai" onEdit={false}
                           collapsed={true}/>
                <Button variant="outlined" color="secondary" style={{marginLeft: "45%", marginTop: "10px"}}
                        onClick={() => setPrettyView(false)}>
                    Clear</Button>
            </div>
            }
        </div>
    )
};
export default RawJson