document.addEventListener('DOMContentLoaded', function() {
    const text = "Pharma AI is a website designed to answer your pharmaceutical questions. Helping to educate you about specific medications and their uses, and choosing which pharmacy is right for you.";
    const typingText = document.getElementById('typing-text');

    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage("You: " + userInput);
    getBotResponse(userInput);
    document.getElementById("user-input").value = "";
}

function getBotResponse(userInput) {
    var botResponse;

    
    var lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("hello")) {
        botResponse = "Hi there! Is there any questions you have regarding pharmaceutical/medical questions?";
    } else if (lowerCaseInput.includes("how are you")) {
        botResponse = "I am good, thanks for asking! Is there anything I can help you with?";
    } else if (lowerCaseInput.includes("what is your name")) {
        botResponse = "My name is Felix the Agent. I am ready to assist you if you have any questions about pharmaceuticals/medications.";
    } else if (lowerCaseInput.includes("what are antibiotics")) {
        botResponse = "Antibiotics are medications used to treat bacterial infections by inhibiting the growth or destroying bacteria. They are prescribed by healthcare professionals based on the type of infection and the specific bacteria causing it.";
    } else if (lowerCaseInput.includes("what are pharmacies")) {
        botResponse = "Pharmacies are establishments where medications and health-related products are dispensed and sold, typically under the supervision of licensed pharmacists. They play a vital role in providing access to essential medications and offering expert guidance on their proper use to ensure patient health and safety.";
    } else if (lowerCaseInput.includes("what is ibuprofen used for")) {
        botResponse = "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) commonly used to relieve pain, reduce inflammation, and lower fever. It is often used to treat conditions such as headaches, muscle aches, arthritis, and minor injuries.";
    } else if (lowerCaseInput.includes("can i take") && lowerCaseInput.includes("medication") && lowerCaseInput.includes("with food")) {
        botResponse = "Depending on the medication, some should be taken with food to minimize stomach irritation, while others may be taken on an empty stomach for better absorption.";
    } else if (lowerCaseInput.includes("what are vaccines")) {
        botResponse = "Vaccines help protect against diseases by stimulating the body's immune response to fight future infections. They are usually given as injections and are essential for preventing outbreaks of contagious diseases.";
    } else if (lowerCaseInput.includes("what is diabetes")) {
        botResponse = "Diabetes is a chronic condition where the body cannot properly process blood sugar due to lack of insulin or insulin resistance. It requires ongoing management through diet, exercise, and sometimes medication.";
    } else if (lowerCaseInput.includes("how to treat a cold")) {
        botResponse = "Treating a cold involves rest, hydration, and over-the-counter medications to relieve symptoms like congestion and sore throat. It's important to stay warm and avoid spreading the virus to others.";
    } else if (lowerCaseInput.includes("what is hypertension")) {
        botResponse = "Hypertension, or high blood pressure, is when the force of blood against artery walls is too high. It can lead to serious health problems like heart disease and stroke if not managed properly.";
    } else if (lowerCaseInput.includes("what are allergies")) {
        botResponse = "Allergies are the body's immune response to substances like pollen, dust, or certain foods. Symptoms can include sneezing, itching, and swelling, and they are often treated with antihistamines.";
    } else if (lowerCaseInput.includes("what is asthma")) {
        botResponse = "Asthma is a condition where the airways narrow and swell, making it hard to breathe. Symptoms include wheezing, coughing, and shortness of breath, and it is often managed with inhalers.";
    } else if (lowerCaseInput.includes("what are side effects")) {
        botResponse = "Side effects are unwanted reactions to medications. They can range from mild, like drowsiness, to severe, like allergic reactions, and should be discussed with a doctor if they occur.";
    } else if (lowerCaseInput.includes("what is a virus")) {
        botResponse = "A virus is a tiny infectious agent that can only replicate inside the living cells of an organism. Viruses can cause a variety of diseases, from the common cold to more serious conditions like COVID-19.";
    } else if (lowerCaseInput.includes("how to prevent flu")) {
        botResponse = "To prevent the flu, get vaccinated annually, wash your hands frequently, and avoid close contact with sick people. Maintaining good hygiene and a healthy lifestyle can also help reduce your risk.";
    } else if (lowerCaseInput.includes("what is cancer")) {
        botResponse = "Cancer is a disease where abnormal cells divide uncontrollably and can invade other tissues. It can occur in many parts of the body and is often treated with surgery, radiation, and chemotherapy.";
    } else if (lowerCaseInput.includes("how to treat a headache")) {
        botResponse = "Treating a headache can involve rest, hydration, and over-the-counter pain relievers like ibuprofen or acetaminophen. Identifying and avoiding headache triggers can also help prevent future headaches.";
    } else if (lowerCaseInput.includes("what is anemia")) {
        botResponse = "Anemia is a condition where you don't have enough red blood cells to carry oxygen to your body's tissues. It can cause fatigue and weakness and is often treated with dietary changes or supplements.";
    } else if (lowerCaseInput.includes("how to manage stress")) {
        botResponse = "Managing stress involves techniques like exercise, meditation, and adequate sleep. Finding time for hobbies and talking to a therapist can also help reduce stress levels.";
    } else if (lowerCaseInput.includes("what is cholesterol")) {
        botResponse = "Cholesterol is a fatty substance found in your blood. High levels of cholesterol can increase your risk of heart disease and stroke, and it's often managed through diet, exercise, and medication.";
    } else if (lowerCaseInput.includes("what is a stroke")) {
        botResponse = "A stroke occurs when blood flow to a part of the brain is interrupted, causing brain cells to die. Quick treatment is critical to minimize damage, and symptoms include sudden weakness and confusion.";
    } else if (lowerCaseInput.includes("what is heart disease")) {
        botResponse = "Heart disease includes conditions that affect the heart, such as coronary artery disease and heart attacks. It's often caused by lifestyle factors and can be managed with medication and lifestyle changes.";
    } else if (lowerCaseInput.includes("how to quit smoking")) {
        botResponse = "Quitting smoking involves planning, support, and possibly medications or nicotine replacement therapy. It's important to stay motivated and seek help if needed to overcome cravings.";
    } else if (lowerCaseInput.includes("what is arthritis")) {
        botResponse = "Arthritis is inflammation of the joints, causing pain and stiffness. It can be managed with medication, physical therapy, and lifestyle changes to maintain joint function.";
    } else if (lowerCaseInput.includes("how to lose weight")) {
        botResponse = "Losing weight involves a combination of a healthy diet, regular physical activity, and behavioral changes. Setting realistic goals and tracking your progress can help you stay on track.";
    } else if (lowerCaseInput.includes("what is depression")) {
        botResponse = "Depression is a mental health disorder characterized by persistent sadness and loss of interest in activities. It can be treated with therapy, medication, and lifestyle changes.";
    } else if (lowerCaseInput.includes("what is anxiety")) {
        botResponse = "Anxiety is a feeling of worry or fear that can be mild or severe. It is a common mental health condition that can be managed with therapy, medication, and relaxation techniques.";
    } else if (lowerCaseInput.includes("how to improve sleep")) {
        botResponse = "Improving sleep involves maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine before bed. Good sleep hygiene practices can help you get better rest.";
    } else if (lowerCaseInput.includes("what is dehydration")) {
        botResponse = "Dehydration occurs when your body loses more fluids than it takes in, leading to symptoms like dry mouth and fatigue. Drinking plenty of water and replacing lost fluids can help prevent it.";
    } else if (lowerCaseInput.includes("how to treat a burn")) {
        botResponse = "Treating a burn involves cooling the burn with water, covering it with a clean cloth, and avoiding breaking any blisters. Severe burns require medical attention to prevent complications.";
    } else if (lowerCaseInput.includes("what is metformin used for")) {
        botResponse = "Metformin is commonly prescribed to treat type 2 diabetes. It works by lowering blood sugar levels through various mechanisms, such as reducing glucose production in the liver and increasing insulin sensitivity in the body. Additionally, it may be used to manage conditions like polycystic ovary syndrome (PCOS) due to its effects on hormone regulation."
    } else if (lowerCaseInput.includes("what is the purpose of lisinopril")) {
        botResponse = "Lisinopril is primarily prescribed to treat high blood pressure (hypertension) and heart failure. It belongs to a class of medications known as ACE inhibitors, which help relax blood vessels, reduce blood pressure, and improve heart function. Additionally, it may be used to prevent kidney problems in people with diabetes."
    } else if (lowerCaseInput.includes("what does atorvastatin do")) {
        botResponse = "Atorvastatin is a statin medication used to lower cholesterol levels in the blood. It works by inhibiting an enzyme involved in cholesterol production, thereby reducing the amount of cholesterol synthesized in the liver. By lowering levels of bad cholesterol (LDL) and triglycerides, atorvastatin helps reduce the risk of heart disease, stroke, and other cardiovascular complications."
    } else if (lowerCaseInput.includes("what are the side effects of aspirin")) {
        botResponse = "Aspirin can cause various side effects, including stomach irritation, ulcers, and gastrointestinal bleeding, particularly when taken in high doses or for a long duration. Additionally, some individuals may experience allergic reactions, such as rash or swelling, and aspirin can increase the risk of bleeding, especially in combination with other blood-thinning medications."
    } else if (lowerCaseInput.includes("can i take ibuprofen and acetaminophen together")) {
        botResponse = "It's generally safe to take ibuprofen and acetaminophen together for short-term pain relief, as they have different mechanisms of action and are metabolized differently in the body. However, it's important to use them according to the recommended dosage and duration, as excessive use or prolonged use can lead to adverse effects, such as liver or kidney damage. It's advisable to consult with a healthcare professional before combining these medications, especially if you have underlying health conditions or are taking other medications.";
    } else if (lowerCaseInput.includes("what do pharmacies do")) { 
        botResponse = "Pharmacies dispense medications, provide health advice, and offer services like vaccinations, health screenings, and medication therapy management. They play a crucial role in healthcare by ensuring patients have access to the medications and information they need.";
    } else if (lowerCaseInput.includes("what services do pharmacies offer")) { 
        botResponse = "Pharmacies offer a range of services including prescription dispensing, medication counseling, vaccinations, health screenings, and assistance with managing chronic conditions. Some pharmacies also provide specialized services like compounding and home delivery.";
    } else if (lowerCaseInput.includes("how can i find a pharmacy near me")) { 
        botResponse = "You can find a pharmacy near you by using online tools such as Google Maps, pharmacy locator websites, or mobile apps provided by pharmacy chains. Your healthcare provider can also recommend local pharmacies.";
    } else if (lowerCaseInput.includes("what are the roles of a pharmacist")) { 
        botResponse = "Pharmacists are healthcare professionals who dispense medications, counsel patients on proper medication use, manage chronic disease therapies, and provide health and wellness advice. They also conduct health screenings and administer vaccinations.";
    } else if (lowerCaseInput.includes("what should i ask my pharmacist")) { 
        botResponse = "You should ask your pharmacist about how to take your medication, possible side effects, interactions with other drugs, proper storage, and what to do if you miss a dose. They can also provide advice on managing chronic conditions and overall health and wellness.";
    } else if (lowerCaseInput.includes("can pharmacists prescribe medications")) { 
        botResponse = "In some regions, pharmacists have the authority to prescribe certain medications, especially for minor ailments and chronic conditions management. However, this varies by location and specific regulations. It's best to check with your local pharmacy for details.";
    } else if (lowerCaseInput.includes("what is a compounding pharmacy")) { 
        botResponse = "A compounding pharmacy customizes medications to meet specific patient needs. This can include altering dosage forms, combining medications, or creating formulations without certain allergens. These pharmacies are essential for patients requiring personalized medication solutions.";
    } else if (lowerCaseInput.includes("how do i transfer my prescription to a different pharmacy")) {
        botResponse = "To transfer your prescription to a different pharmacy, you can ask your new pharmacy to handle the transfer process. They will contact your current pharmacy to obtain the necessary information and ensure a seamless transition.";
    } else if (lowerCaseInput.includes("can pharmacies provide health screenings")) {
        botResponse = "Yes, many pharmacies provide health screenings for conditions like high blood pressure, diabetes, cholesterol levels, and more. These services can help detect health issues early and are often available without an appointment.";
    } else if (lowerCaseInput.includes("how do i dispose of old or unused medications")) { 
        botResponse = "Old or unused medications should be disposed of safely to prevent harm. Many pharmacies offer medication take-back programs or disposal kiosks. You can also check local regulations for specific disposal guidelines."
    } else {
        botResponse = "I'm sorry, I don't understand. Can you please ask something else?";
    }


    appendMessage("AI: " + botResponse);
}

function appendMessage(message) {
    var chatContainer = document.getElementById("chat-container");
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
