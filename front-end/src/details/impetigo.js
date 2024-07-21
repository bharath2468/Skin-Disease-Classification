import React from "react";
const symptoms_cell = ["Red sores: The sores quickly rupture, ooze for a few days, and then form a honey-colored crust.",
"Itching and soreness: The sores can be itchy and occasionally painful.",
"Blisters: In bullous impetigo, larger blisters can develop, which may break open and leave a raw area.",
"Swollen lymph nodes: Sometimes, nearby lymph nodes may swell."];
const treatment_cell = ["Topical Antibiotics: For mild impetigo, an antibiotic ointment (e.g., mupirocin) may be prescribed to apply directly to the affected area.",
    "Oral Antibiotics: For more severe cases or widespread infections, oral antibiotics may be necessary.",
    "Cleaning: Regularly cleaning the affected area with soap and water and covering it with a gauze bandage can help prevent the spread of the infection.",
    "Avoid Scratching: Keeping nails short and clean can help prevent the spread of the bacteria through scratching.",
    ];
const prevention_cell = ["Good Hygiene: Regular handwashing and maintaining good personal hygiene can help prevent impetigo.",
"Avoid Sharing Personal Items: Do not share towels, clothing, or other personal items with someone who has impetigo.",
"Clean Injuries Promptly: Clean any cuts, scratches, or insect bites immediately and keep them covered to prevent infection.",
"Isolate the Infected: Keep children with impetigo home from school or daycare until they are no longer contagious, typically 24 hours after starting antibiotic treatment."];

const disease = {
    def : "Impetigo is a highly contagious bacterial skin infection most commonly seen in young children, but it can affect people of any age. It usually presents as red sores on the face, especially around the nose and mouth, and on the hands and feet. These sores burst and develop honey-colored crusts.",
    symptoms : symptoms_cell,
    causes : "Impetigo is caused by bacteria, primarily Staphylococcus aureus and, less commonly, Streptococcus pyogenes. The infection can spread through direct contact with sores or nasal discharge from an infected person or through contact with contaminated objects, such as towels or clothing.",
    treatment : treatment_cell,
    prevention : prevention_cell};

    const ImpetigoInfo = () => {
        return (
          <div>
            <h1 style={{textAlign:"center"}}>Impetigo</h1>
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
      
      export default ImpetigoInfo;