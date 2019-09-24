import * as React from "react";
import * as ReactQRCode from "qrcode.react";

export interface IQRProps {
  value: string;
  fgColor: string;
  bgColor: string;
  size: number;
  onContentChanged?: (content: string) => void;
}

export function QRCode(props: IQRProps) {
  const noContent: React.CSSProperties = {
    color: props.fgColor,
    boxShadow: "0 0 5px rgba(0, 0, 0, .2)",
    background: props.bgColor,
    width: `${props.size}px`,
    height: `${props.size}px`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
  };
  if (!props.value) {
    return (
      <div style={noContent}>
        <span>No Content</span>
      </div>
    );
  } else {
    return (
      <ReactQRCode
        value={props.value}
        bgColor={props.bgColor}
        fgColor={props.fgColor}
        size={props.size}
      ></ReactQRCode>
    );
  }
}
