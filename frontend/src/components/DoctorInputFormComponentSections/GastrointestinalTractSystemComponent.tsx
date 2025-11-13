// TYPE IMPORTS
import type { GastrointestinalTractSystemFormDataType } from "../../types/GastrointestinalTractSystemFormDataType";

type GastrointestinalTractSystemComponentProps = {
  gastrointestinalTractSystemFormData: GastrointestinalTractSystemFormDataType;
  setGastrointestinalTractSystemFormData: React.Dispatch<
    React.SetStateAction<GastrointestinalTractSystemFormDataType>
  >;
};

const GastrointestinalTractSystemComponent = ({
  gastrointestinalTractSystemFormData,
  setGastrointestinalTractSystemFormData,
}: GastrointestinalTractSystemComponentProps) => {
  return (
    <div className="p-5">
      <h3>Gastrointestinal Tract System</h3>

      <div className="mt-3">
        <div className="flex flex-col mb-7">
          <label htmlFor="abdominalTenderness">Abdominal Tenderness:</label>
          <input
            type="text"
            id="abdominalTenderness"
            value={gastrointestinalTractSystemFormData.abdominalTenderness}
            onChange={(e) =>
              setGastrointestinalTractSystemFormData((prev) => ({
                ...prev,
                abdominalTenderness: e.target.value,
              }))
            }
            placeholder="Type out patient's abdominal tenderness results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="liver">Liver:</label>
          <input
            type="text"
            id="liver"
            value={gastrointestinalTractSystemFormData.liver}
            onChange={(e) =>
              setGastrointestinalTractSystemFormData((prev) => ({
                ...prev,
                liver: e.target.value,
              }))
            }
            placeholder="Type out patient's liver health results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="anyOtherMasses">Any other Masses:</label>
          <input
            type="text"
            id="anyOtherMasses"
            value={gastrointestinalTractSystemFormData.anyOtherMasses}
            onChange={(e) =>
              setGastrointestinalTractSystemFormData((prev) => ({
                ...prev,
                anyOtherMasses: e.target.value,
              }))
            }
            placeholder="Type out patient's results for any other masses here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="abdominalMass">Abdominal Mass:</label>
          <input
            type="text"
            id="abdominalMass"
            value={gastrointestinalTractSystemFormData.abdominalMass}
            onChange={(e) =>
              setGastrointestinalTractSystemFormData((prev) => ({
                ...prev,
                abdominalMass: e.target.value,
              }))
            }
            placeholder="Type out patient's abdominal mass here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default GastrointestinalTractSystemComponent;
