// TYPE IMPORTS
import type { CentralNervousSystemFormDataType } from "../../types/CentralNervousSystemFormDataType";

type CentralNervousSystemComponentProps = {
  centralNervousSystemFormData: CentralNervousSystemFormDataType;
  setCentralNervousSystemFormData: React.Dispatch<
    React.SetStateAction<CentralNervousSystemFormDataType>
  >;
};

const CentralNervousSystemComponent = ({
  centralNervousSystemFormData,
  setCentralNervousSystemFormData,
}: CentralNervousSystemComponentProps) => {
  return (
    <div className="p-5">
      <h3>Central Nervous System</h3>

      <div className="mt-3">
        <div className="flex flex-col mb-7">
          <label htmlFor="mmr">MMR:</label>
          <input
            type="text"
            id="mmr"
            value={centralNervousSystemFormData.mmr}
            onChange={(e) =>
              setCentralNervousSystemFormData((prev) => ({
                ...prev,
                mmr: e.target.value,
              }))
            }
            placeholder="Type out patient's MMR results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="ctScan">CT Scan:</label>
          <input
            type="text"
            id="ctScan"
            value={centralNervousSystemFormData.ctScan}
            onChange={(e) =>
              setCentralNervousSystemFormData((prev) => ({
                ...prev,
                ctScan: e.target.value,
              }))
            }
            placeholder="Type out patient's CT scan results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="wellBeing">
            State of well being of the patients:
          </label>
          <input
            type="text"
            id="wellBeing"
            value={centralNervousSystemFormData.wellBeing}
            onChange={(e) =>
              setCentralNervousSystemFormData((prev) => ({
                ...prev,
                wellBeing: e.target.value,
              }))
            }
            placeholder="Type out patient's state of well being here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CentralNervousSystemComponent;
