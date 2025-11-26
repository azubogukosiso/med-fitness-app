// TYPE IMPORTS
import type { RespiratorySystemFormDataType } from "../../types/RespiratorySystemFormDataType";

type RespiratorySystemComponentProps = {
  respiratorySystemFormData: RespiratorySystemFormDataType;
  setRespiratorySystemFormData: React.Dispatch<
    React.SetStateAction<RespiratorySystemFormDataType>
  >;
};

const RespiratorySystemComponent = ({
  respiratorySystemFormData,
  setRespiratorySystemFormData,
}: RespiratorySystemComponentProps) => {
  return (
    <div className="p-5">
      <h3>Respiratory System</h3>

      <div className="mt-3">
        <div className="flex flex-col mb-7">
          <label htmlFor="spo2">SPO2:</label>
          <input
            type="text"
            id="spo2"
            value={respiratorySystemFormData.spo2 ?? ""}
            onChange={(e) =>
              setRespiratorySystemFormData((prev) => ({
                ...prev,
                spo2: e.target.value,
              }))
            }
            placeholder="Type out patient's SPO2 results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="respiratoryRate">Respiratory Rate:</label>
          <input
            type="text"
            id="respiratoryRate"
            value={respiratorySystemFormData.respiratoryRate ?? ""}
            onChange={(e) =>
              setRespiratorySystemFormData((prev) => ({
                ...prev,
                respiratoryRate: e.target.value,
              }))
            }
            placeholder="Type out patient's respiratory rate here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="precautionNote">Precaution Note:</label>
          <input
            type="text"
            id="precautionNote"
            value={respiratorySystemFormData.precautionNote ?? ""}
            onChange={(e) =>
              setRespiratorySystemFormData((prev) => ({
                ...prev,
                precautionNote: e.target.value,
              }))
            }
            placeholder="Type out patient's precaution note here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="charOfBreath">Character of Breath Sounds:</label>
          <input
            type="text"
            id="charOfBreath"
            value={respiratorySystemFormData.charOfBreath ?? ""}
            onChange={(e) =>
              setRespiratorySystemFormData((prev) => ({
                ...prev,
                charOfBreath: e.target.value,
              }))
            }
            placeholder="Type out patient's character of breath sound results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default RespiratorySystemComponent;
