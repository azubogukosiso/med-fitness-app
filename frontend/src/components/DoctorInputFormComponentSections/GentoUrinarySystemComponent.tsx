// TYPE IMPORTS
import type { GentoUrinarySystemFormDataType } from "../../types/GentoUrinarySystemFormDataType";

type GentoUrinarySystemComponentProps = {
  gentoUrinarySystemFormData: GentoUrinarySystemFormDataType;
  setGentoUrinarySystemFormData: React.Dispatch<
    React.SetStateAction<GentoUrinarySystemFormDataType>
  >;
};

const GentoUrinarySystemComponent = ({
  gentoUrinarySystemFormData,
  setGentoUrinarySystemFormData,
}: GentoUrinarySystemComponentProps) => {
  return (
    <div className="p-5">
      <h3>Gentourinary System</h3>

      <div className="mt-3">
        <div className="flex flex-col mb-7">
          <label htmlFor="urine">Urine:</label>
          <input
            type="text"
            id="urine"
            value={gentoUrinarySystemFormData.urine ?? ""}
            onChange={(e) =>
              setGentoUrinarySystemFormData((prev) => ({
                ...prev,
                urine: e.target.value,
              }))
            }
            placeholder="Type out patient's urine results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="albumen">Albumen:</label>
          <input
            type="text"
            id="albumen"
            value={gentoUrinarySystemFormData.albumen ?? ""}
            onChange={(e) =>
              setGentoUrinarySystemFormData((prev) => ({
                ...prev,
                albumen: e.target.value,
              }))
            }
            placeholder="Type out patient's albumen results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="sugar">Sugar:</label>
          <input
            type="text"
            id="sugar"
            value={gentoUrinarySystemFormData.sugar ?? ""}
            onChange={(e) =>
              setGentoUrinarySystemFormData((prev) => ({
                ...prev,
                sugar: e.target.value,
              }))
            }
            placeholder="Type out patient's sugar results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="deposit">Deposit:</label>
          <input
            type="text"
            id="deposit"
            value={gentoUrinarySystemFormData.deposit ?? ""}
            onChange={(e) =>
              setGentoUrinarySystemFormData((prev) => ({
                ...prev,
                deposit: e.target.value,
              }))
            }
            placeholder="Type out patient's deposit results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GentoUrinarySystemComponent;
