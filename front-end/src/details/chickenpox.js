import React from "react";
const symptoms_cell = ["Rash: The hallmark of chickenpox is an itchy rash that develops into fluid-filled blisters, which eventually turn into scabs.",
    "Red spots (papules)",
    "Fluid-filled blisters (vesicles)",
    "Crusted scabs",
    "Fever: Often one of the first symptoms, it may be mild to moderate.",
    "Fatigue and General Malaise: Feeling tired and unwell.",
    "Loss of Appetite: Decreased interest in eating.",
    "Headache: Common in the early stages.",
    "Sore Throat: Some individuals may experience a sore throat.",
    "The rash usually appears first on the chest, back, and face, then spreads to the rest of the body, including inside the mouth, eyelids, and genital area."];
const treatment_cell = ["Calamine Lotion: To soothe itching.",
    "Cool Baths: Adding baking soda, uncooked oatmeal, or colloidal oatmeal to the bath water can help relieve itching.",
    "Antihistamines: Over-the-counter antihistamines like diphenhydramine (Benadryl) can help reduce itching.",
    "Keep Nails Trimmed: To prevent scratching and reduce the risk of secondary infections.",
    "Antiviral Drugs: In severe cases, antiviral medications like acyclovir may be prescribed, especially for adults or people at high risk of complications.",
    "Pain Relievers: Acetaminophen (Tylenol) can help reduce fever and pain. Aspirin should be avoided in children due to the risk of Reye’s syndrome."];

const prevention_cell = ["Vaccination: The varicella vaccine is highly effective at preventing chickenpox. It is usually given in two doses, the first at 12-15 months of age and the second at 4-6 years of age.",
    "Avoid Contact with Infected Individuals: Stay away from people who have chickenpox until all their blisters have crusted over.",
    "Good Hygiene Practices: Regular handwashing and avoiding sharing personal items can help reduce the spread."];

const disease = {
    def : "Chickenpox (varicella) is a highly contagious viral infection caused by the varicella-zoster virus (VZV). It primarily affects children, but adults can get it too, and it tends to be more severe in adults. The infection is characterized by an itchy rash with red spots and blisters.",
    symptoms : symptoms_cell,
    causes : "Chickenpox, also known as varicella, is caused by the varicella-zoster virus (VZV). This virus is highly contagious and spreads easily from person to person through direct contact with the rash or through respiratory droplets when an infected person coughs or sneezes.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const ChickenPoxInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Chicken Pox</h1>
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
      
      export default ChickenPoxInfo;