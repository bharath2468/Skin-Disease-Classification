import React from "react";
const symptoms_cell = ["Itching and Burning: The affected area, usually between the toes, may itch and burn.",
    "Redness and Scaling: The skin may become red, scaly, and flaky.",
    "Cracking and Peeling: The skin can crack, peel, and become soft or macerated.",
    "Blisters: In some cases, small blisters can form.",
    "Thickened Skin: The soles and sides of the feet may develop thickened skin."];
const treatment_cell = ["Topical Antifungal Medications: Over-the-counter antifungal creams, ointments, or powders (e.g., clotrimazole, terbinafine) are commonly used.",
    "Oral Antifungal Medications: For severe or persistent cases, prescription oral antifungal medications may be necessary.",
    "Proper Foot Hygiene: Keeping the feet clean and dry is crucial. Wash feet daily with soap and water, and dry thoroughly, especially between the toes.",
    "Change Socks and Shoes: Wear clean, dry socks, and change them frequently if your feet sweat. Choose breathable footwear.",
    "Avoid Contaminated Areas: Use protective footwear, such as flip-flops, in communal showers, locker rooms, and swimming pools."];
const prevention_cell = ["Keep Feet Dry: Dry your feet thoroughly after washing, especially between the toes.",
    "Wear Breathable Shoes: Choose shoes made of materials that allow your feet to breathe, and avoid tight-fitting footwear.",
    "Change Socks Regularly: Change your socks at least once a day or more often if they become damp.",
    "Use Antifungal Products: Consider using antifungal powder or spray on your feet and in your shoes.",
    "Avoid Walking Barefoot in Public Areas: Use sandals or shower shoes in communal areas.",
    "Don’t Share Personal Items: Avoid sharing towels, shoes, or socks with others."];

const disease = {
    def : "Athlete's foot (tinea pedis) is a common fungal infection that affects the skin on the feet. It is often associated with athletes and people who wear tight-fitting shoes, but it can affect anyone.",
    symptoms : symptoms_cell,
    causes : "Athlete's foot is caused by fungi known as dermatophytes, which thrive in warm, moist environments like locker rooms, showers, and swimming pools. It can spread through direct contact with an infected person or by touching contaminated surfaces.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const AltheleteFootInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Althelete Foot</h1>
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
      
      export default AltheleteFootInfo;