import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

export default function UploadPhoto({ maxFiles = 5 }) {
  const [files, setFiles] = useState([]);

  // عند اختيار الصور أو سحبها
  const onDrop = useCallback(
    (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );

      // الحد الأقصى للصور
      setFiles((prev) => [...prev, ...mappedFiles].slice(0, maxFiles));
    },
    [maxFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
  });

  // تنظيف الـ preview URLs لتجنب تسرب الذاكرة
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const removeFile = (file) => {
    setFiles((prev) => prev.filter((f) => f !== file));
    URL.revokeObjectURL(file.preview);
  };

  return (
    <Card
      className=" font-hanken text-gray-700 dark:text-gray-300 text-lg
    dark:bg-primary-black"
    >
      <CardHeader>
        <CardTitle>Add Product Photo</CardTitle>
        <hr />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Dropzone */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors duration-200 ${
              isDragActive
                ? "border-primary-red bg-gray-100 dark:bg-gray-800"
                : "border-gray-300 dark:border-gray-600"
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col gap-4 items-center py-10">
              <div className="text-primary-red">
                <CloudUpload size={44} />
              </div>

              {isDragActive ? (
                <p className="text-center text-2xl">Drop images here...</p>
              ) : (
                <p className="text-center text-2xl">
                  Drag & drop images here, or{" "}
                  <span className="text-primary-red">
                    click to select (max {maxFiles})
                  </span>
                </p>
              )}

              <p className="text-xs md:text-sm font-play text-gray-400 text-center">
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are
                allowed
              </p>
              <Button
                variant="outline"
                className="cursor-pointer dark:text-gray-100"
              >
                Select Images
              </Button>
            </div>
          </div>

          {/* Preview */}
          {files.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {files.map((file, index) => (
                <div key={index} className="relative group">
                  <img
                    src={file.preview}
                    alt="preview"
                    className="w-full h-40 object-cover rounded-md border transition-transform duration-200 group-hover:scale-105"
                  />
                  <button
                    onClick={() => removeFile(file)}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
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
