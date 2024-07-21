import React from "react";
const symptoms_cell = ["Ring-Shaped Rash: A red, circular rash with a clearer center.",
    "Itching: The affected area can be very itchy.",
    "Scaling and Cracking: The skin may become scaly and cracked.",
    "Blisters: Sometimes small blisters can form around the edges of the rash.",
    "Hair Loss: If the scalp is affected, hair loss in patches can occur."];
const treatment_cell = ["Topical Antifungal Medications: Over-the-counter antifungal creams, lotions, or powders (e.g., clotrimazole, miconazole, terbinafine) are commonly used.",
    "Oral Antifungal Medications: For more severe or widespread infections, or when the scalp or nails are affected, oral antifungal medications (e.g., terbinafine, itraconazole) may be prescribed.",
    "Keep the Area Clean and Dry: Regularly wash the affected area and keep it dry.",
    "Avoid Scratching: Scratching can spread the infection to other parts of the body or to other people."];

const prevention_cell = ["Maintain Good Hygiene: Wash your hands regularly and keep your skin clean and dry.",
    "Avoid Sharing Personal Items: Do not share towels, clothing, hairbrushes, or other personal items.",
    "Wear Protective Footwear: Use sandals or shower shoes in communal showers, locker rooms, and around pools.",
    "Treat Pets: If pets show signs of ringworm, take them to a veterinarian for treatment.",
    "Keep Cool and Dry: Wear loose-fitting clothing and shoes that allow your skin to breathe.",
    "Clean and Disinfect: Regularly clean and disinfect surfaces that may be contaminated, especially in communal areas."];

const disease = {
    def : "Ringworm (tinea) is a common fungal infection that can affect the skin, scalp, or nails. Despite its name, it is not caused by a worm but by dermatophytes, a type of fungi. The infection is characterized by a red, circular rash with clearer skin in the middle, resembling a ring.",
    symptoms : symptoms_cell,
    causes : "Ringworm is caused by dermatophytes, which thrive in warm, moist environments. The infection spreads through direct contact with an infected person or animal, or by touching contaminated objects such as towels, clothing, and surfaces.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const RingWormInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Ringworm</h1>
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
      
      export default RingWormInfo;