import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

export default function UploadPhoto({ maxFiles = 5, dispatch }) {
  const [files, setFiles] = useState([]);

  // add images
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length >= maxFiles) return;

      const remainingSlots = maxFiles - files.length;

      const mappedFiles = acceptedFiles.slice(0, remainingSlots).map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: crypto.randomUUID(),
        })
      );

      setFiles((prev) => [...prev, ...mappedFiles]);
      dispatch({
        type: "ADD_IMAGE",
        payload: mappedFiles,
      });
    },
    [files, maxFiles, dispatch]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    disabled: files.length >= maxFiles,
  });

  // cleanup memory
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  // remove image
  const removeFile = useCallback(
    (fileToRemove) => {
      setFiles((prev) => prev.filter((file) => file.id !== fileToRemove.id));

      URL.revokeObjectURL(fileToRemove.preview);

      dispatch({
        type: "REMOVE_IMAGE",
        payload: fileToRemove,
      });
    },
    [dispatch]
  );

  return (
    <Card className="font-hanken text-gray-700 dark:text-gray-300 text-lg dark:bg-primary-black">
      <CardHeader>
        <CardTitle>Add Product Photo</CardTitle>
        <hr />
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition
            ${
              files.length >= maxFiles
                ? "opacity-50 cursor-not-allowed"
                : isDragActive
                ? "border-primary-red bg-gray-100 dark:bg-gray-800"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <input {...getInputProps()} />

            <div className="flex flex-col gap-4 items-center py-10">
              <CloudUpload size={44} className="text-primary-red" />

              {files.length >= maxFiles ? (
                <p className="text-center text-xl text-red-500">
                  Maximum {maxFiles} images reached
                </p>
              ) : isDragActive ? (
                <p className="text-center text-xl">Drop images here...</p>
              ) : (
                <p className="text-center text-xl">
                  Drag & drop images or click to select
                </p>
              )}

              <Button
                variant="outline"
                disabled={files.length >= maxFiles}
                className="cursor-pointer"
              >
                Select Images
              </Button>
            </div>
          </div>

          {/* Preview */}
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {files.map((file) => (
                <div key={file.id} className="relative group">
                  <img
                    src={file.preview}
                    className="w-full h-40 object-cover rounded-md border"
                  />

                  <button
                    onClick={() => removeFile(file)}
                    className="absolute top-1 right-1 bg-red-500 text-white
                    rounded-full w-6 h-6 opacity-0 group-hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
