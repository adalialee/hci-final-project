import React, {FunctionComponent, ReactElement} from "react";
import {Button} from "@mui/material";

interface ClipboardProps {
  recipe: string
}

export const Clipboard: FunctionComponent<ClipboardProps> = ({recipe}) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(recipe);
    } catch (err) {
      alert("Copy to clipboard failed.");
    }
  };

  return (
    <div className="clipboard">
      <Button onClick={handleCopyClick}>Copy to Clipboard</Button>
    </div>
    );
}