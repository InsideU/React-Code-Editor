import React, { useState, useEffect } from 'react';
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setSrcDoc(window.document.documentElement.outerHTML);
  }, []);
  return (
    <div className="App">
      <Editor

        html={html}
        css={css}
        js={js}
        srcDoc={srcDoc}
        onChange={(html, css, js, srcDoc) => {
          setHtml(html);
          setCss(css);
          setJs(js);
          setSrcDoc(srcDoc);
        }}
      />
    </div>
  );
}

export default App;
