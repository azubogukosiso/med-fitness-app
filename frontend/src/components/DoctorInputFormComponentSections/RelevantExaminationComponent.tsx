// TYPE IMPORTS
import type { RelevantExaminationFormDataType } from "../../types/RelevantExaminationFormDataType";

type RelevantExaminationComponentProps = {
  relevantExaminationFormData: RelevantExaminationFormDataType;
  setRelevantExaminationFormData: React.Dispatch<
    React.SetStateAction<RelevantExaminationFormDataType>
  >;
};

const RelevantExaminationComponent = ({
  relevantExaminationFormData,
  setRelevantExaminationFormData,
}: RelevantExaminationComponentProps) => {
  return (
    <div className="p-5">
      <h3>Relevant Information</h3>

      <div className="mt-3">
        <h4>General</h4>

        <div className="flex mt-2">
          <div className="w-1/2">
            <div className="flex flex-col mb-7">
              <label htmlFor="height">Height (in cm):</label>
              <input
                type="number"
                id="height"
                value={relevantExaminationFormData.height ?? ""}
                onChange={(e) =>
                  setRelevantExaminationFormData(
                    e.target.value === ""
                      ? (prev) => ({
                          ...prev,
                          height: undefined,
                        })
                      : (prev) => ({
                          ...prev,
                          height: Number(e.target.value),
                        })
                  )
                }
                placeholder="Type out patient's height here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="genotype">Genotype:</label>
              <select
                name="genotype"
                id="genotype"
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%] cursor-pointer"
                onChange={(e) =>
                  setRelevantExaminationFormData((prev) => ({
                    ...prev,
                    genotype: e.target.value,
                  }))
                }
              >
                <option value=""></option>
                <option value="AA">AA</option>
                <option value="AS">AS</option>
                <option value="SS">SS</option>
              </select>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col mb-7">
              <label htmlFor="weight">Weight (in kg):</label>
              <input
                type="number"
                id="weight"
                value={relevantExaminationFormData.weight ?? ""}
                onChange={(e) =>
                  setRelevantExaminationFormData(
                    e.target.value === ""
                      ? (prev) => ({
                          ...prev,
                          weight: undefined,
                        })
                      : (prev) => ({
                          ...prev,
                          weight: Number(e.target.value),
                        })
                  )
                }
                placeholder="Type out patient's weight here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="bloodGroup">Blood Group:</label>
              <select
                name="bloodGroup"
                id="bloodGroup"
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%] cursor-pointer"
                onChange={(e) =>
                  setRelevantExaminationFormData((prev) => ({
                    ...prev,
                    bloodGroup: e.target.value,
                  }))
                }
              >
                <option value=""></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* GET CLARITY ON VISUAL ACUITY DATA AND HEARING DATA*/}
    </div>
  );
};

export default RelevantExaminationComponent;
