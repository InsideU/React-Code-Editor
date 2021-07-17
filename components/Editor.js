import React, { useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: this.props.code
        };
    }
    componentDidMount() {
        this.editor = CodeMirror.fromTextArea(this.refs.editor, {
            lineNumbers: true,
            mode: "xml",
            theme: "material",
            viewportMargin: Infinity
        });
        this.editor.on("change", (editor, change) => {
            this.setState({
                code: editor.getValue()
            });
        });
    }
    render() {
        return (
            <div className="editor">
                <div className="editor-controls">
                    <div className="editor-controls-left">
                        <div className="editor-controls-left-inner">
                            <div className="editor-controls-left-inner-left">
                                <FontAwesomeIcon icon={faCompressAlt}/>
                            </div>
                            <div className="editor-controls-left-inner-right">
                                <FontAwesomeIcon icon={faExpandAlt}/>
                            </div>
                        </div>
                    </div>
                    <div className="editor-controls-right">
                        <div className="editor-controls-right-inner">
                            <div className="editor-controls-right-inner-left">
                                <FontAwesomeIcon icon={faCompressAlt}/>
                            </div>
                            <div className="editor-controls-right-inner-right">
                                <FontAwesomeIcon icon={faExpandAlt}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editor-content">
                    <ControlledEditor value={this.state.code} ref="editor" options={{
                        lineNumbers: true,
                        mode: "xml",
                        theme: "material",
                        viewportMargin: Infinity
                    }}/>
                </div>
            </div>
        );
    }
}
