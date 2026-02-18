import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useCallback, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { CloudUpload } from "lucide-react";

export default function UploadPhoto({ maxFiles = 5, dispatch, images = [] }) {
  const [files, setFiles] = useState([]);
  const initialized = useRef(false); // ✅ لتأكد أننا نعين الصور القديمة مرة واحدة فقط

  // تحويل الصور القديمة إلى نفس structure مرة واحدة فقط
  useEffect(() => {
    if (!images || images.length === 0) return;

    if (!initialized.current) {
      const mappedImages = images.map((url) => ({
        id: crypto.randomUUID(),
        preview: url,
        file: null,
        existing: true,
      }));

      setFiles(mappedImages);
      initialized.current = true; // ✅ بعد هذه المرة لن يعاد التعيين
    }
  }, [images]);

  // إضافة صور جديدة
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length >= maxFiles) return;

      const remainingSlots = maxFiles - files.length;

      const mappedFiles = acceptedFiles
        .slice(0, remainingSlots)
        .map((file) => ({
          id: crypto.randomUUID(),
          preview: URL.createObjectURL(file),
          file: file,
          existing: false,
        }));

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

  // حذف صورة
  const removeFile = useCallback(
    (fileToRemove) => {
      setFiles((prev) => prev.filter((file) => file.id !== fileToRemove.id));

      // فقط revoke للصور الجديدة
      if (!fileToRemove.existing && fileToRemove.preview.startsWith("blob:")) {
        URL.revokeObjectURL(fileToRemove.preview);
      }

      dispatch({
        type: "REMOVE_IMAGE",
        payload: fileToRemove,
      });
    },
    [dispatch]
  );

  const getPreview = (file) => {
    if (typeof file.preview === "string") return file.preview;
    return file.preview.preview;
  };

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
                    src={getPreview(file)}
                    alt="product"
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
