// "use client";
// import React, { useRef, useEffect } from 'react';
// import Editor, { loader,DiffEditorProps, DiffEditor } from "@monaco-editor/react";

// // The properties for our component, can be extended as needed
// interface IMonacoDiffEditorProps extends DiffEditorProps {
//   original: string;
//   modified: string;
//   language?: string;
// }

// const MonacoDiffEditor: React.FC<IMonacoDiffEditorProps> = ({
//   original,
//   modified,
//   language = 'javascript', // Default to JavaScript if not specified
//   theme = 'vs-dark', // Default Monaco theme/ Additional options could be passed here
// }) => {
//   const editorRef = useRef(null);

// //   useEffect(() => {
// //     // This effect runs once after the component has mounted to ensure the proper resizing of the editor
// //     window.addEventListener('resize', resizeEditor);
// //     return () => {
// //       window.removeEventListener('resize', resizeEditor);
// //     };
// //   }, []);

// //   const resizeEditor = () => {
// //     // Replace with a resize handler appropriate to your application
// //     const editor = editorRef.current;
// //     if (editor) {
// //       editor?.layout();
// //     }
// //   };

//   // Configuration for the Monaco editor
// //   const editorDidMount = (editor: any, monaco: any) => {
// //     editorRef.current = editor;
// //     resizeEditor();
// //   };

//   // Define the properties for the Monaco Diff Editor
// //   const diffEditorProps: DiffEditorProps = {
// //     width: "100%",
// //     height: "400px",
// //     theme,
// //     ,
// //     language
// //   };

//  ;
// };

// export default MonacoDiffEditor;
