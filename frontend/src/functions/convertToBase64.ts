export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      const result = fileReader.result;
      if (typeof result === "string") {
        resolve(result);
      } else {
        reject("Error converting file to base64 string");
      }
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
