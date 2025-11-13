// TYPE IMPORTS
import type { CardiovascularSystemsFormDataType } from "../../types/CardiovascularSystemsFormDataType";

type CardiovascularSystemsComponentProps = {
  cardiovascularSystemsFormData: CardiovascularSystemsFormDataType;
  setCardiovascularSystemsFormData: React.Dispatch<
    React.SetStateAction<CardiovascularSystemsFormDataType>
  >;
};

const CardiovascularSystemsComponent = ({
  cardiovascularSystemsFormData,
  setCardiovascularSystemsFormData,
}: CardiovascularSystemsComponentProps) => {
  return (
    <div className="p-5">
      <h3>Cardiovascular Systems</h3>

      <div className="mt-3">
        <div className="flex flex-col mb-7">
          <label htmlFor="xRay">Chest X-Ray:</label>
          <input
            type="text"
            id="xRay"
            value={cardiovascularSystemsFormData.xRay}
            onChange={(e) =>
              setCardiovascularSystemsFormData((prev) => ({
                ...prev,
                xRay: e.target.value,
              }))
            }
            placeholder="Type out patient's chest x-ray results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="bp">BP:</label>
          <input
            type="text"
            id="bp"
            value={cardiovascularSystemsFormData.bp}
            onChange={(e) =>
              setCardiovascularSystemsFormData((prev) => ({
                ...prev,
                bp: e.target.value,
              }))
            }
            placeholder="Type out patient's blood pressure here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col mb-7">
          <label htmlFor="cardiacSound">Cardiac Sound & Rhythm:</label>
          <input
            type="text"
            id="cardiacSound"
            value={cardiovascularSystemsFormData.cardiacSound}
            onChange={(e) =>
              setCardiovascularSystemsFormData((prev) => ({
                ...prev,
                cardiacSound: e.target.value,
              }))
            }
            placeholder="Type out patient's cardiac sound and rhythm results here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pulseRate">Pulse Rate:</label>
          <input
            type="text"
            id="pulseRate"
            value={cardiovascularSystemsFormData.pulseRate}
            onChange={(e) =>
              setCardiovascularSystemsFormData((prev) => ({
                ...prev,
                pulseRate: e.target.value,
              }))
            }
            placeholder="Type out patient's pulse rate here..."
            className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CardiovascularSystemsComponent;
