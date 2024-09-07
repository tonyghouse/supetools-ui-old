"use client";
import LaunchSoon from "@/components/LaunchSoon";
import React, { useContext, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TableDataVisualizer from "@/components/tablevis/TableDataVisualizer";
import { Button } from "@/components/ui/button";
import { Editor, loader } from "@monaco-editor/react";
import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
import { defaultDataMap } from "@/util/DefaultDataUtil";



function TableVisPage() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const [jsonData, setJsonData] = useState('');
  const [arrayData, setArrayData] = useState<any[]>([]);
  const monacoEditorRef = useRef<any | null>(null);
  const [codeText, setCodeText] = useState<string>("");
    
  const [visualizerRef, setVisualizerRef] = useState<any | null>(null);
  const [dataEditorRef, setDataEditorRef] = useState<any | null>(null);

  const captureDataEditorRef = (data: any) => {
    if (data) {
      setDataEditorRef(data);
    }
  };


loader.init().then((monaco) => {
  monaco.editor.defineTheme('custom-vs-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
          'editor.background': '#0A0A0A',
      },
  });
});

  function handleEditorChange(value: string): void {
    setJsonData(value);
  }

  


  const processJsonInput = () => {
    try {
      const jsonObject = JSON.parse(jsonData);
      setArrayData(jsonObject);
    } catch (error) {
      console.error("Invalid JSON, please provide a valid JSON");
      toast("Invalid JSON, please provide a valid JSON");
    }
  };

  const handleTableDataEditorDidMount = (editor:any, monaco:any) => {
    monacoEditorRef.current = editor;
    captureDataEditorRef(editor);
    handleEditorChange(monacoEditorRef.current?.getValue());
  }

  return (
    <div className="w-[100vw] h-[100vh]">
       <Button variant={"secondary"} onClick={processJsonInput}>{"  "}Process {"  "}</Button>
      <ResizablePanelGroup className="" direction="horizontal">
        <ResizablePanel defaultSize={30} minSize={1} maxSize={60}>
            <Editor
        className="w-auto p-1 h-full resize-none"
        defaultLanguage={"json"}
        onMount={handleTableDataEditorDidMount}
        theme={themeContext.themeMode === "dark" ? "custom-vs-dark" : "vs-light"}
        defaultValue={defaultDataMap["tableJson"]}
        options={{
          minimap: {
            enabled: false,
          },
          matchBrackets: "always",
          wordWrap: "on",
          automaticLayout: true,
          formatOnPaste: true,
          lineNumbersMinChars:1
        }}
      />
        </ResizablePanel>

        <ResizableHandle  withHandle />

        <ResizablePanel>
          <TableDataVisualizer data={arrayData} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default TableVisPage;
