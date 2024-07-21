import React from "react";
const symptoms_cell = ["Pain, Burning, Numbness, or Tingling: Often the first symptom, occurring in the affected area of the skin.",
"Red Rash: Appears a few days after the pain, typically on one side of the body or face.",
"Fluid-Filled Blisters: Develop in the rash area, which eventually break open and crust over.",
"Itching: The rash can be itchy.",
"Sensitivity to Touch: The affected area may become very sensitive.",
"Fever",
"Headache",
"Fatigue",
"Sensitivity to Light"];
const treatment_cell = ["Antiviral Medications: Acyclovir (Zovirax),Valacyclovir (Valtrex),Famciclovir (Famvir) These medications can help reduce the severity and duration of symptoms if started within 72 hours of rash onset.",
"Over-the-counter pain relievers: Acetaminophen (Tylenol) or ibuprofen (Advil, Motrin).",
"Prescription medications: For severe pain, such as opioids or anticonvulsants like gabapentin.",
"Calamine lotion: To soothe itching.",
"Lidocaine patches: To reduce pain.",
"Corticosteroids: Sometimes prescribed to reduce inflammation."];

const prevention_cell = ["Shingrix: Recommended for adults over 50 years of age. It significantly reduces the risk of developing shingles and PHN.",
"Zostavax: An older vaccine, still used in some cases.",
"Chickenpox Vaccine:Vaccinating children and susceptible adults against chickenpox reduces the risk of developing shingles later in life."];

const disease = {
    def : "Shingles (herpes zoster) is a viral infection caused by the reactivation of the varicella-zoster virus (VZV), the same virus that causes chickenpox. After a person recovers from chickenpox, the virus remains dormant in the nerve tissue near the spinal cord and brain. Years later, the virus can reactivate as shingles.",
    symptoms : symptoms_cell,
    causes : "Shingles (herpes zoster) is caused by the reactivation of the varicella-zoster virus (VZV), the same virus responsible for chickenpox. After a person recovers from chickenpox, the virus remains dormant in nerve tissue near the spinal cord and brain. Years later, the virus can reactivate, causing shingles.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const ShinglesInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Shingles</h1>
            <p>{disease.def}</p>
            
            <h2>Symptoms</h2>
            <ul>
              {disease.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
            
            <h2>Causes</h2>
            <p>{disease.causes}</p>
            
            <h2>Treatment</h2>
            <ul>
              {disease.treatment.map((treatment, index) => (
                <li key={index}>{treatment}</li>
              ))}
            </ul>
            
            <h2>Prevention</h2>
            <ul>
              {disease.prevention.map((prevention, index) => (
                <li key={index}>{prevention}</li>
              ))}
            </ul>
          </div>
        );
      }
      
      export default ShinglesInfo;