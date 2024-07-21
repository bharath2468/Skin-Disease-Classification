import React from "react";
const symptoms_cell = ["Itchy, Red Tracks: The most characteristic symptom is the appearance of red, raised, winding tracks on the skin that are intensely itchy. These tracks represent the path taken by the migrating larvae.",
    "Blisters: Small blisters may form along the tracks.",
    "Erythema: The affected area may become red and inflamed.",
    "Intense Itching: The itching can be severe and is often worse at night."];
const treatment_cell = ["Thiabendazole: A topical antiparasitic medication that can be applied directly to the affected area.",
    "Albendazole: Commonly used oral treatment.",
    "Ivermectin: Another effective oral medication.",
    "Antihistamines: May be used to reduce itching.",
    "Steroid Creams: Can help to reduce inflammation and itching."];

const prevention_cell = ["Avoid Walking Barefoot: Especially in areas where soil or sand may be contaminated with animal feces.",
"Use Protective Barriers: Sit on a towel or other protective barrier when sitting on the ground in areas where animal contamination is possible.",
"Hygiene: Wash hands and feet thoroughly after exposure to potentially contaminated soil or sand.",
"Animal Control: Ensure pets are regularly dewormed and prevent them from defecating in areas where people walk or play."];

const disease = {
    def : "Cutaneous larva migrans (CLM) is a skin infection caused by the larvae of certain parasitic nematodes (roundworms). These larvae typically come from animal hookworms, such as Ancylostoma braziliense and Ancylostoma caninum, which are commonly found in the intestines of dogs and cats.",
    symptoms : symptoms_cell,
    causes : "The infection occurs when larvae in contaminated soil or sand penetrate human skin. This often happens when people walk barefoot or sit on the ground in areas where infected animals have defecated.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const LarvaInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Cutaneous Larva Migrans</h1>
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
      
      export default LarvaInfo;