// LIBRARY IMPORTS
import { useState } from "react";

// TYPE IMPORTS
import type { PatientFormDataFromPatientInputType } from "../types/PatientFormDataFromPatientInputType";

// FUNCTION IMPORTS
import { savePatientDataFromPatientInput } from "../functions/savePatientDataFromPatientInput";
import { useAuthContext } from "../hooks/useAuthContext";

const PatientInputFormComponent = () => {
  const { user } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PatientFormDataFromPatientInputType>(
    {
      patientEmail: user?.schoolEmail as string,
      surname: undefined,
      faculty: undefined,
      maritalStatus: undefined,
      age: undefined,
      otherNames: undefined,
      department: undefined,
      noOfChildren: undefined,
      sex: undefined,
      heatInHeadOrBody: undefined,
      epilepsy: undefined,
      hypertension: undefined,
      mentalIllness: undefined,
      tuberculosis: undefined,
      heartDisease: undefined,
      gonorrheaOrSyphilis: undefined,
      pepticUlcer: undefined,
      piles: undefined,
      diabetes: undefined,
      otherIllness: undefined,
      dateOfIllness: undefined,
      illnessDuration: undefined,
      hospital: undefined,
      doctorName: undefined,
      address: undefined,
    }
  );

  return (
    <form
      className="mt-10"
      onSubmit={(e) =>
        savePatientDataFromPatientInput(e, formData, setIsLoading)
      }
    >
      <div className="p-5">
        <h3>Personal Data</h3>

        <div className="mt-5 flex">
          <div className="w-1/2">
            <div className="flex flex-col mb-7">
              <label htmlFor="surname" className="mr-3">
                Surname:
              </label>
              <input
                type="text"
                id="surname"
                value={formData.surname ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, surname: e.target.value }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    surname: e.target.value.trim(),
                  }))
                }
                placeholder="Type out your surname here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="faculty" className="mr-3">
                Faculty:
              </label>
              <input
                type="text"
                id="faculty"
                value={formData.faculty ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, faculty: e.target.value }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    faculty: e.target.value.trim(),
                  }))
                }
                placeholder="Type out your faculty here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="maritalStatus" className="mr-3">
                Marital Status:
              </label>
              <select
                name="maritalStatus"
                id="maritalStatus"
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%] cursor-pointer"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    maritalStatus: e.target.value,
                  }))
                }
              >
                <option value=""></option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Seperated">Seperated</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="age" className="mr-3">
                Age:
              </label>
              <input
                type="number"
                min="1"
                id="age"
                value={formData.age ?? ""}
                onChange={(e) =>
                  setFormData(
                    e.target.value === ""
                      ? (prev) => ({
                          ...prev,
                          age: undefined,
                        })
                      : (prev) => ({
                          ...prev,
                          age: Number(e.target.value),
                        })
                  )
                }
                placeholder="Type out your age here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex flex-col mb-7">
              <label htmlFor="otherNames" className="mr-3">
                Other Names:
              </label>
              <input
                type="text"
                id="otherNames"
                value={formData.otherNames ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherNames: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherNames: e.target.value.trim(),
                  }))
                }
                placeholder="Type out your surname here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="department" className="mr-3">
                Department:
              </label>
              <input
                type="text"
                id="department"
                value={formData.department ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    department: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    department: e.target.value.trim(),
                  }))
                }
                placeholder="Type out your department here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col mb-7">
              <label htmlFor="noOfChildren" className="mr-3">
                Number of Children:
              </label>
              <input
                type="number"
                min="1"
                id="noOfChildren"
                value={formData.noOfChildren ?? ""}
                onChange={(e) =>
                  setFormData(
                    e.target.value === ""
                      ? (prev) => ({
                          ...prev,
                          noOfChildren: undefined,
                        })
                      : (prev) => ({
                          ...prev,
                          noOfChildren: Number(e.target.value),
                        })
                  )
                }
                placeholder="Type out the number of children in your family here..."
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-full max-w-[80%]"
              />
            </div>

            <div className="flex flex-col">
              <span className="mr-3">Sex:</span>
              <label className="mr-3">
                <input
                  type="radio"
                  name="sex"
                  value="Male"
                  className="mr-2"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      sex: e.target.value,
                    }))
                  }
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="sex"
                  value="Female"
                  className="mr-2"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      sex: e.target.value,
                    }))
                  }
                />
                Female
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3>Previous Health</h3>

        <ol className="list-decimal flex justify-between mt-5 pl-5">
          <div className="w-1/2">
            <li className="mb-3">
              <span className="mr-3">Heat in the head or body?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  name="heatInHeadOrBody"
                  value="yes"
                  className="mr-2"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heatInHeadOrBody: e.target.value,
                    }))
                  }
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="heatInHeadOrBody"
                  value="no"
                  className="mr-2"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heatInHeadOrBody: e.target.value,
                    }))
                  }
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Epilepsy?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      epilepsy: e.target.value,
                    }))
                  }
                  name="epilepsy"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      epilepsy: e.target.value,
                    }))
                  }
                  name="epilepsy"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Hypertension?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hypertension: e.target.value,
                    }))
                  }
                  name="hypertension"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hypertension: e.target.value,
                    }))
                  }
                  name="hypertension"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Mental Illness?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      mentalIllness: e.target.value,
                    }))
                  }
                  name="mentalIllness"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      mentalIllness: e.target.value,
                    }))
                  }
                  name="mentalIllness"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li>
              <span className="mr-3">Tuberculosis?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tuberculosis: e.target.value,
                    }))
                  }
                  name="tuberculosis"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      tuberculosis: e.target.value,
                    }))
                  }
                  name="tuberculosis"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>
          </div>

          <div className="w-1/2">
            <li className="mb-3">
              <span className="mr-3">Heart Disease?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heartDisease: e.target.value,
                    }))
                  }
                  name="heartDisease"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heartDisease: e.target.value,
                    }))
                  }
                  name="heartDisease"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Gonorrhea or Syphilis?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gonorrheaOrSyphilis: e.target.value,
                    }))
                  }
                  name="gonorrheaOrSyphilis"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      gonorrheaOrSyphilis: e.target.value,
                    }))
                  }
                  name="gonorrheaOrSyphilis"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Peptic Ulcer?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      pepticUlcer: e.target.value,
                    }))
                  }
                  name="pepticUlcer"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      pepticUlcer: e.target.value,
                    }))
                  }
                  name="pepticUlcer"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li className="mb-3">
              <span className="mr-3">Piles (Hemorrhoids)?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      piles: e.target.value,
                    }))
                  }
                  name="piles"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      piles: e.target.value,
                    }))
                  }
                  name="piles"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>

            <li>
              <span className="mr-3">Diabetes?</span>
              <label className="mr-3">
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      diabetes: e.target.value,
                    }))
                  }
                  name="diabetes"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      diabetes: e.target.value,
                    }))
                  }
                  name="diabetes"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </li>
          </div>
        </ol>

        <div className="mt-5 flex">
          <div className="w-1/2">
            <div className="mt-5 flex flex-col">
              <label htmlFor="otherIllness">
                If an illness you suffered isn't listed above, kindly type it
                out here:
              </label>
              <input
                type="text"
                id="otherIllness"
                placeholder="Type out the illness here..."
                value={formData.otherIllness ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherIllness: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    otherIllness: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label htmlFor="dateOfIllness">
                When did you notice the symptoms of the illness?
              </label>
              <input
                type="date"
                id="dateOfIllness"
                value={formData.dateOfIllness ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfIllness: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfIllness: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label htmlFor="illnessDuration">
                For how long did you have this illness (in days)?
              </label>
              <input
                type="number"
                min="1"
                id="illnessDuration"
                placeholder="Type out the duration of the illness here..."
                value={formData.illnessDuration ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    illnessDuration: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    illnessDuration: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>
          </div>

          <div className="w-1/2">
            <div className="mt-5 flex flex-col">
              <label htmlFor="hospital">
                At what hospital did you treat this illness?
              </label>
              <input
                type="text"
                id="hospital"
                placeholder="Type out the hospital of treatment here..."
                value={formData.hospital ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, hospital: e.target.value }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    hospital: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label htmlFor="doctorName">
                What was the name of the doctor you consulted?
              </label>
              <input
                type="text"
                id="doctorName"
                placeholder="Type out the doctor's name here..."
                value={formData.doctorName ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    doctorName: e.target.value,
                  }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    doctorName: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>

            <div className="mt-5 flex flex-col">
              <label htmlFor="address">
                What is the address of the doctor you consulted?
              </label>
              <input
                type="text"
                id="address"
                placeholder="Type out the doctor's address here..."
                value={formData.address ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, address: e.target.value }))
                }
                onBlur={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: e.target.value.trim(),
                  }))
                }
                className="focus:!outline-none p-2 bg-white border border-t-0 border-l-0 border-r-0 border-b-black w-[80%]"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={`rounded-md bg-black text-white p-2 w-full active:scale-95 transition-all mt-5 ${
          isLoading && "opacity-65 cursor-not-allowed"
        }`}
        disabled={isLoading ? true : false}
      >
        {isLoading ? "Submitting" : "Submit your data"}
      </button>
    </form>
  );
};

export default PatientInputFormComponent;
