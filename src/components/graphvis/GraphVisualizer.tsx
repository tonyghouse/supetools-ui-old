"use client";
import "./css/GraphVisualizer.css";
import React, { ReactElement, useCallback, useContext } from "react";
import { IThemeContextType, ThemeContext } from "@/context/ThemeContext";
import { useEffect, useState, useRef } from "react";
import { NodeModel } from "@/models/NodeModel";
import { EdgeModel } from "@/models/EdgeModel";
// @ts-ignore
import {
  Canvas,
  CanvasRef,
  CanvasPosition,
  Node,
  CanvasDirection,
} from "reaflow";
import { IVisualizerSettings } from "./IVisualizerSettings";
import { loader } from "@monaco-editor/react";
import { AnyARecord } from "dns";

interface IGraphVisualizerProps {
  codeText: string;
  newNodes: NodeModel[];
  newEdges: EdgeModel[];
  getVisualizerRef(value: any | null): void;
  visualizerSettings: IVisualizerSettings;
}

const darkThemeNode: any = {
  fontFamily: "monospace",
  fontweight: 800,
  fontSize: "1.6rem",
  backgroundColor: "#1b1f2b",

  color: "#0096FF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
};
const lightThemeNode = {
  fontFamily: "monospace",
  fontweight: 800,
  fontSize: "1.6rem",

  backgroundColor: "#f8f8f8",
  color: "#0081de",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
};

const GraphVisualizer = ({
  codeText,
  newNodes,
  newEdges,
  getVisualizerRef,
  visualizerSettings,
}: IGraphVisualizerProps): ReactElement => {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  const ref = useRef<CanvasRef | null>(null);

  getVisualizerRef(ref);

  const TIME_MS = 10000;

  useEffect(() => {
    const interval = setInterval(() => {
      //TODO ref.current?.fitCanvas();
      // ref.current?.positionCanvas(CanvasPosition.CENTER);
    }, TIME_MS);

    //TODO
    return () => clearInterval(interval);
  }, []);

  function getCustomNode(
    event: any,
    props: {
      [x: string]: any;
    }
  ) {
    return (
      <foreignObject
        height={event.height}
        width={event.width}
        x={0}
        y={0}
        style={
          themeContext.themeMode === "dark"
            ? {
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: "transparent",
                border: "none",
              }
            : {
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: "transparent",
                border: "none",
              }
        }
      >
        <div
          className="whitespace-pre backdrop-blur-sm p-4 rounded-2xl shadow-2xl"
          style={
            themeContext.themeMode === "dark"
              ? { ...darkThemeNode, borderColor: "#74D3AE" }
              : { ...lightThemeNode, borderColor: "#F2A359" }
          }
        >
          <div>
            {/* Split the text on commas to separate key-value pairs or single values */}
            {props.properties.text.split("\n").map((segment:any, segmentIndex:any) => {
              // Split each segment on the colon to identify key-value pairs
              const keyValue = segment.split(":");
              return (
                <span key={segmentIndex}>
                  {keyValue.map((part:any, partIndex:any, array:any) => {
                    let style = { color: "inherit" };

                    if (array.length > 1) {
                      // Key-value pair present
                      if (partIndex === 0) {
                        // Style for key
                        style.color =
                          themeContext.themeMode === "dark" ? "#9EFEFF" : "#FFC100";
                      } else {
                        // Style for value
                        style.color =
                          themeContext.themeMode === "dark" ? "#F2E863" : "#C40C0C";
                      }
                    } else {
                      // Only value present
                      style.color =
                        themeContext.themeMode === "dark" ? "#68DFE8" : "#FF6500";
                    }

                    return (
                      // Add comma back except for the last segment
                      <span key={partIndex} style={style}>
                        {part}{(array.length - 1 !== partIndex || segmentIndex < props.properties.text.split("\n").length - 1) && <span style={{ color: "inherit" }}>{(array.length - 1 === partIndex) ? '\n' : ':'}</span>}
                      </span>
                    );
                  })}
                </span>
              );
            })}
          </div>
        </div>
      </foreignObject>
    );
  }

  function setEnteredNode(event: any, node: any) {
    console.log("node selected ", node.id);
  }

  return (
    <>
      <div id="visualizer" className=" h-full w-auto p-1">
        <Canvas
          className={
            themeContext.themeMode === "dark"
              ? "dark-canvas-style"
              : "light-canvas-style"
          }
          ref={ref}
          nodes={newNodes}
          edges={newEdges}
          fit={true}
          pannable={true}
          zoomable={true}
          animated={true}
          defaultPosition={CanvasPosition.CENTER}
          //direction={visualizerSettings.direction!=null ? visualizerSettings.direction : "UP"}
          maxZoom={0.2}
          minZoom={-0.8}
          node={({ ...props }) => {
            return (
              <Node
                onClick={(event: any, node: any) => setEnteredNode(event, node)}
                {...props}
              >
                {(event: any) => getCustomNode(event, props)}
              </Node>
            );
          }}
        />
      </div>
    </>
  );
};

export default GraphVisualizer;
