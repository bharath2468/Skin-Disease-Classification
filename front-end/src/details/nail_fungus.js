import React from "react";
const symptoms_cell = ["Discoloration: The nail may turn white, yellow, brown, or black.",
"Thickening: The nail may become thick and difficult to trim.",
"Brittleness: The nail can become brittle and crumble or split.",
"Distortion: The shape of the nail may change, becoming distorted.",
"Debris: There may be a build-up of debris under the nail.",
"Odor: A foul smell may emanate from the infected nail."];
const treatment_cell = ["Topical Antifungal Medications: Creams, gels, or medicated nail polish (e.g., ciclopirox).",
    "Oral Antifungal Medications: Prescription medications such as terbinafine (Lamisil) or itraconazole (Sporanox) can be effective.",
    "Nail Removal: In severe cases, the nail may need to be removed to apply treatment directly to the nail bed.",
    "Laser Therapy: Laser treatment can be used to destroy the fungus.",
    "Home Remedies: Over-the-counter treatments and home remedies (e.g., tea tree oil, Vicks VapoRub) may help in mild cases, but their effectiveness is limited."];
const prevention_cell = ["Keep Nails Clean and Dry: Wash your feet regularly and dry them thoroughly, especially between the toes.",
    "Trim Nails Properly: Keep nails short, and trim them straight across. Disinfect nail clippers after each use",
    "Choose Breathable Footwear: Wear shoes made of breathable materials and avoid tight-fitting shoes.",
    "Use Antifungal Products: Consider using antifungal sprays or powders in shoes and on feet.",
    "Avoid Walking Barefoot in Public Areas: Use protective footwear in communal showers, locker rooms, and around pools.",
    "Don’t Share Personal Items: Avoid sharing nail clippers, socks, shoes, or towels with others."];

const disease = {
    def : "Nail fungus (onychomycosis) is a common infection of the nails caused by fungi. It can affect toenails or fingernails but is more common in toenails. The infection usually starts as a white or yellow spot under the tip of the nail and can spread deeper into the nail, causing it to discolor, thicken, and crumble at the edges.",
    symptoms : symptoms_cell,
    causes : "Nail fungus is typically caused by dermatophytes, but it can also be caused by yeasts and molds. The fungi thrive in warm, moist environments and can spread through direct contact with an infected person or contaminated surfaces.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const NailFungusInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Nail Fungus</h1>
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
      
      export default NailFungusInfo;