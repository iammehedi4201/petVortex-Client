import * as React from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function PHFileUploader({ name, label, sx }: TProps) {
  const { control } = useFormContext();
  const [fileName, setFileName] = React.useState<string | null>(null);

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ ...sx }}
          >
            {fileName || label || "Upload file"}
            <Input
              {...field}
              type="file"
              onChange={(e) => {
                const file = (e?.target as HTMLInputElement).files?.[0];
                setFileName(file?.name!);
                onChange(file);
              }}
              style={{ display: "none" }}
              error={!!error?.message}
            />
            {error?.message && (
              <p style={{ color: "red", marginLeft: "10px" }}>
                {error.message}
              </p>
            )}
          </Button>
        );
      }}
    />
  );
}
