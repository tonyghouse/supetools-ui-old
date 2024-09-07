"use client"
import { useContext, useEffect, useState } from "react";

import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorPage from "@/components/ErrorPage";
import GraphVis from "@/components/graphvis/GraphVis";
import GraphyPowerBar from "@/components/graphvis/GraphyPowerBar";


function GraphPage() {
  const rotationValues: string[] = ["DOWN", "RIGHT", "UP", "LEFT"];


  const themeContext = useContext<IThemeContextType>(ThemeContext);
  
  const [visualizerRef, setVisualizerRef] = useState<any | null>(null);
  const [dataEditorRef, setDataEditorRef] = useState<any | null>(null);

  const [visualizerSettings, setVisualizerSettings] = useState<IVisualizerSettings>({
    direction: "inherit"
});

  const [codeText, setCodeText] = useState<string>("");

  const changeZoomIn = (): void => {
    if (visualizerRef) {
      visualizerRef.current?.zoomIn();
    }
  };

  const changeZoomOut = (): void => {
    if (visualizerRef) {
      visualizerRef.current?.zoomOut();
    }
  };

  const changeExpand = (): void => {
    if (visualizerRef) {
      visualizerRef.current.fitCanvas();
    }
  };

  const changeRotation = (): void => {
    const currentDirectionIdx = rotationValues.findIndex(
      (e) => e === visualizerSettings?.direction.toString()
    );
    const resultIdx =
      currentDirectionIdx >= rotationValues.length - 1
        ? 0
        : currentDirectionIdx + 1;
   //TODO
    // if (visualizerRef) {
    //   const updatedVisualizerSettings: IVisualizerSettings = {
    //     ...visualizerSettings,
    //     visualizerSettings.: rotationValues[resultIdx],
    //   };
    //   setVisualizerSettings(updatedVisualizerSettings);
    // }
  };

  const getVisualizerRef = (data: any) => {
    if (data) {
      setVisualizerRef(data);
    }
  };

  const captureDataEditorRef = (data: any) => {
    if (data) {
      setDataEditorRef(data);
    }
  };

  return (
    <>

      <ErrorBoundary fallback={<ErrorPage />}>
        <div className="">
          <GraphyPowerBar
            dataEditorRef={dataEditorRef}
            changeZoomIn={changeZoomIn}
            changeZoomOut={changeZoomOut}
            changeExpand={changeExpand}
            changeRotation={changeRotation}
          />
          <GraphVis
            codeText={codeText}
            setCodeText={setCodeText}
            getVisualizerRef={getVisualizerRef}
            captureDataEditorRef={captureDataEditorRef}
            visualizerSettings={visualizerSettings}
          />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default GraphPage;
