export const sendCertViaEmail = async (
  email: string,
  patientName: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);

  try {
    const res = await fetch("http://localhost:3000/api/patient/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, patientName }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data.message);
    }
  } catch (err) {
    console.log("Error sending email: ", err);
  } finally {
    setIsLoading(false);
  }
};
