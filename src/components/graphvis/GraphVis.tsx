"use client"
import "./css/HomeSection.css";
import { useResizeObserver } from "@react-hookz/web";
import { ReactElement, useContext, useEffect, useRef, useState } from "react";


import { IThemeContextType, ThemeContext } from "../../context/ThemeContext";
import {
  DataTypeContext,
  IDataTypeContextType,
} from "../../context/DataTypeContext";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

// import { getNodesAndEdges } from "../helper/NodesAndEdgesMaker";
import { EdgeModel } from "../../models/EdgeModel";
import { NodeModel } from "../../models/NodeModel";
import DataEditor from "./GraphyDataEditor";
import { getNodesAndEdges } from "../../helper/NodesAndEdgesMaker";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import Visualizer from "./Visualizer";
import GraphyDataEditor from "./GraphyDataEditor";


interface IHomeSectionProps {
  codeText: string;
  setCodeText(value: any | null): void;
  getVisualizerRef(value: any | null): void;
  captureDataEditorRef(value: any | null): void;
  visualizerSettings: IVisualizerSettings;
}

const GraphVis = ({
  codeText,
  setCodeText,
  getVisualizerRef,
  captureDataEditorRef,
  visualizerSettings,
}: IHomeSectionProps): ReactElement => {
  const dataTypeContext = useContext<IDataTypeContextType>(DataTypeContext);
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const containerRef = useRef(null);
  const [mobileView, setMobileView] = useState<boolean>(false);
  const [mobileMenuOption, setMobileMenuOption] = useState<string>("editor");

  const [newNodes, setNewNodes] = useState<NodeModel[]>([]);
  const [newEdges, setNewEdges] = useState<EdgeModel[]>([]);

  function handleEditorChange(value: string): void {
    setCodeText(value);
  }

  useEffect(() => {
    const [newUpdatedNodes, newUpdatedEdges] = getNodesAndEdges(
      dataTypeContext.dataType,
      codeText
    );
    setNewNodes([...newUpdatedNodes]);
    setNewEdges([...newUpdatedEdges]);
  }, [codeText, visualizerSettings]);

  useResizeObserver(containerRef, (resizeObserver) => {
    const containerWidth = resizeObserver?.contentRect?.width;
    if (containerWidth <= 768) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  });


  const onMenuChange = (value:string) =>{
  setMobileMenuOption(value);
  }

  if (mobileView) {
    return (
      <div
        id="container-id"
        className="relative w-[100%] h-[100vh] "
        ref={containerRef}
      >
        <Menubar className={`${themeContext.themeMode === "dark" ? "  " : " "} my-1  `} >
          <MenubarMenu >
            <MenubarTrigger onClick={()=>onMenuChange("editor")}>Editor</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger onClick={()=>onMenuChange("visualizer")}>Visualizer</MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        <div  className={` ${themeContext.themeMode === "dark" ? "  " : ""}  my-2 h-[100%] z-1 
                         `}>

         {mobileMenuOption==="visualizer" ?
             <Visualizer
             codeText={codeText}
             newNodes={newNodes}
             newEdges={newEdges}
             getVisualizerRef={getVisualizerRef}
             visualizerSettings={visualizerSettings}
           /> :

           <GraphyDataEditor
           captureDataEditorRef={captureDataEditorRef}
           handleEditorChange={handleEditorChange}
         />


         
         }
        </div>


      </div>
    );
  } else {
    return (
      <div
        id="container-id"
        className="relative my-2 flex flex-col w-full h-[100vh] "
        ref={containerRef}
      >
         <ResizablePanelGroup className="" direction="horizontal">
         <ResizablePanel defaultSize={30} minSize={1} maxSize={60}
            id="sidebar-content-id"
            className={`${themeContext.themeMode === "dark" ? "  " : " "} h-[100%] mr-2`}
          >
            <DataEditor
              captureDataEditorRef={captureDataEditorRef}
              handleEditorChange={handleEditorChange}
            />
          </ResizablePanel>

          <ResizableHandle  withHandle />

          <ResizablePanel
            id="content-id"
            className={` ${themeContext.themeMode === "dark" ? " " : ""} h-[100%] z-1`}
          >
            <Visualizer
              codeText={codeText}
              newNodes={newNodes}
              newEdges={newEdges}
              getVisualizerRef={getVisualizerRef}
              visualizerSettings={visualizerSettings}
            />
          </ResizablePanel>

          </ResizablePanelGroup>
        
      </div>
    );
  }
};

export default GraphVis;
