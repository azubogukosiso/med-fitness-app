// LIBRARY IMPORTS
import { toast } from "sonner";

export const sendCertViaEmail = async (
  email: string,
  patientName: string,
  doctorSignature: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/patient/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, patientName, doctorSignature }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message);
    } else {
      toast.error("An error occured!", {
        description: "Please try sending the email later.",
      });
    }
  } catch (err) {
    console.log("Error: ", err);
    toast.error("An error occured!", {
      description:
        "Please make sure you're connected to the internet and then try sending the email again.",
    });
  } finally {
    setIsLoading(false);
  }
};
