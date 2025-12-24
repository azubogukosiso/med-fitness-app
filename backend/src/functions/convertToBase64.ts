export const convertToBase64 = (file: Express.Multer.File): string => {
  const base64 = file.buffer.toString("base64");
  const dataUrl = `data:${file.mimetype};base64,${base64}`;
  return dataUrl;
};
