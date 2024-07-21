import React from "react";
const symptoms_cell = ["Redness of the skin: The infected area often looks red and swollen.",
            "Swelling: The affected area may become puffy.",
            "Warmth: The skin over the infected area often feels warm to the touch.",
            "Pain: The infected area can be tender and painful.",
            "Fever: In some cases, a fever may accompany the infection.",
            "Red spots or blisters: In some instances, red spots or blisters may appear on the skin.",
            "Chills and sweating: These can occur if the infection becomes more severe.",
            "Swollen lymph nodes: Lymph nodes may become swollen if the infection spreads."];
const treatment_cell = ["Antibiotics: The primary treatment for cellulitis is oral antibiotics. The choice of antibiotic may depend on the severity of the infection and the type of bacteria causing it.",
            "Hospitalization: Severe cases of cellulitis may require intravenous (IV) antibiotics and hospitalization.",
            "Rest: Keeping the affected area elevated can help reduce swelling.",
            "Pain relief: Over-the-counter pain relievers like ibuprofen or acetaminophen can help manage pain and reduce inflammation.",
            "Wound care: Proper cleaning and care of any wounds or breaks in the skin are essential to prevent the infection from spreading."];
const prevention_cell = ["Skin care: Keep your skin clean and moisturized to prevent cracks and dryness.",
            "Prompt treatment of cuts and scrapes: Clean and cover any breaks in the skin to prevent bacteria from entering.",
            "Monitoring: Keep an eye on any skin injuries, especially if you have conditions that can lead to skin infections, such as diabetes."];



const disease = {
    def : "Cellulitis is a common, potentially serious bacterial skin infection. It appears as a swollen, red area of skin that feels hot and tender, and it can spread rapidly. Cellulitis usually affects the skin on the lower legs, but it can occur on other parts of the body or face.",
    symptoms : symptoms_cell,
    causes : "Cellulitis is typically caused by bacteria, most commonly Streptococcus and Staphylococcus. The bacteria can enter the skin through cuts, scrapes, or other breaks in the skin.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const CellulitisInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>CELLULITIS</h1>
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
      
      export default CellulitisInfo;