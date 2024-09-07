"use client"
import { ReactElement, useContext } from "react";
import { IThemeContextType, ThemeContext } from "../../context/ThemeContext";
import DataTypeDropDown from "./../graphvis/DataTypeDropDown";
import {LuGithub} from "react-icons/lu"
  import { RxGithubLogo,RxCorners,RxPlus,RxMinus,RxGear,RxCode,RxSun,RxMoon,RxRotateCounterClockwise} from 'react-icons/rx';
// import GlobalSettings from "./GlobalSettings";


interface GraphyPowerBarProps{
  dataEditorRef: any;
  changeZoomIn(): void;
  changeZoomOut(): void;
  changeExpand(): void;
  changeRotation(): void;
}
const GraphyPowerBar = ({dataEditorRef,changeZoomIn,changeZoomOut,changeExpand,changeRotation}: GraphyPowerBarProps): ReactElement => {
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleTheme = (): void => {
    themeContext.toggleThemeMode();
  };

  const changeSettings = (): void=>{
    console.log("settings");
  }

  return (
    <nav
      id="graphyGraphyPowerBar"
      className={` ${themeContext.themeMode === "dark" ? "" : ""} 
              flex h-[1.7rem] w-full items-center justify-between`}
    >
      <div className="flex flex-row gap-5 items-center justify-start pl-4">
        <DataTypeDropDown dataEditorRef={dataEditorRef} />
      </div>
      <div
        className="flex
           z-[100] justify-center
         h-auto w-auto flex-row items-center "
      >
        <ul
          className=" mr-4 flex text-[0.7rem] 
           md:text-[0.9rem] flex-row " 
        >
          <li key="zoom-in" className="px-2 py-3 md:px-[0.9rem] md:py-0  ">
          <button onClick={changeZoomIn}><RxPlus/></button>
          </li>
          <li key="zoom-out" className="px-2 py-3 md:px-[0.9rem] md:py-0">
          <button onClick={changeZoomOut}><RxMinus/></button>
          </li>

          <li key="expand" className="px-2 py-3 md:px-[0.9rem] md:py-0">
            <button onClick={changeExpand}><RxCorners/></button>
          </li>

          <li key="rotate" className="px-2 py-3 md:px-[0.9rem] md:py-0">
            <button onClick={changeRotation}>< RxRotateCounterClockwise className="-rotate-90"/></button>
          </li>


    




         
        </ul>
      </div>
    </nav>
    
  );
};

export default GraphyPowerBar;
