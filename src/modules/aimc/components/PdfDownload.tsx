import React from "react";
import ButtonIcon from "shared/components/ButtonIcon";
import { IconLoading2, IconPdf } from "shared/components/Icon";
import { useState } from "react";

type PdfDownloadProps = {
  title: string;
};

export default function PdfDownload({ title }: PdfDownloadProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ButtonIcon
      className="ic-pdf"
      onClick={() => {
        if (isLoading) return;

        // handleFileDownload();
      }}
    >
      {isLoading ? (
        <IconLoading2 style={{ width: 20 }} />
      ) : (
        <IconPdf style={{ width: 20 }} />
      )}
    </ButtonIcon>
  );
}
