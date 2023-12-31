// import logo from './logo.svg'
import { DefaultBlockSchema } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

function App() {
  const editor = useBlockNote<DefaultBlockSchema>({
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
    theme: "light",
  });

  return <BlockNoteView editor={editor} />;
}

export default App;
