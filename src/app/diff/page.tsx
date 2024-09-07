"use client";
import React, { useContext } from 'react';

import Editor, { loader,DiffEditorProps, DiffEditor } from "@monaco-editor/react";
import { IThemeContextType, ThemeContext } from '@/context/ThemeContext';


const App: React.FC = () => {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  
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
  const originalContent = "// Some original code\nconsole.log('Hello World');";
  const modifiedContent = "// Some modified code\nconsole.log('Hello Universe!');";
  const options= {
    readOnly: false
  }

  return (
    <DiffEditor  
    options={options} 
    height={"100vh"} 
  original={originalContent}  
  modified={modifiedContent} 
  language={"text"} 
  theme={themeContext.themeMode === "dark" ? "custom-vs-dark" : "vs-light"}
 />
  );
};

export default App;
