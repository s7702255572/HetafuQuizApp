// Dentist questions (for healthcare experts)
const dentistQuestions = [
  {
    question: "What slows down your patient’s post-extraction recovery the most?",
    options: ["Poor diet", "Smoking", "Infection", "Lack of compliance"]
  },
  {
    question: "What do parents ask you most often about oral products for kids?",
    options: ["Are they safe if swallowed?", "Will they cause cavities?", "Do they have sugar?", "Are they tasty?"]
  },
  {
    question: "What oral concern do women report most often during monthly hormonal changes?",
    options: ["Gum tenderness", "Mouth ulcers", "Bad breath", "Increased plaque"]
  },
  {
    question: "Which role of essential oils in oral care do you value most?",
    options: ["Antimicrobial action", "Anti-inflammatory effects", "Pleasant flavour for compliance", "All of the above"]
  },
  {
    question: "What is your concern when prescribing chlorhexidine mouthwash?",
    options: ["Patient intolerance", "Staining of teeth", "Taste alteration", "All of the above"]
  },
  {
    question: "Which patient group do you think would benefit most from a safe-to-swallow mouthwash?",
    options: ["Orthodontic patients", "Patients with compliance issues", "Elderly with swallowing difficulties", "All of the above"]
  },
  {
    question: "What’s the most common misconception people have about “sugar-free” candies?",
    options: ["They can’t cause caries", "Kids can eat them as much as they want", "They don’t affect enamel", "All of the above"]
  },
  {
    question: "What’s the hardest part of managing caries in diabetic patients?",
    options: ["Slower healing", "Increased risk of infection", "Higher recurrence of caries", "All of the above"]
  },
  {
    question: "What frustrates you most about recommending sugar-free products?",
    options: ["Limited availability", "Patients don’t trust them", "Kids refuse to take them", "Too expensive"]
  },
  {
    question: "What’s the most common oral complaint among menopausal women?",
    options: ["Dry mouth", "Burning mouth sensation", "Increased sensitivity", "Gum recession"]
  },
  {
    question: "Which added feature would make rinses most useful for long-term compliance?",
    options: ["Enamel protection", "Gum healing", "Safe-to-swallow", "All of the above"]
  },
  {
    question: "What oral changes do you most often notice in pregnant patients?",
    options: ["Gingival swelling", "Bleeding gums", "Increased caries risk", "All of the above"]
  },
  {
    question: "When you recommend a daily-use dental care product, what feature matters most to you?",
    options: ["Safety for prolonged use", "Pleasant taste and patient acceptance", "Scientific evidence for efficacy", "Added benefits beyond oral health"]
  },
  {
    question: "Which oral issue do women with PCOS commonly struggle with?",
    options: ["Periodontitis", "Delayed healing", "Cavities", "All of the above"]
  },
  {
    question: "If there was a mouthwash that rebuilt enamel, didn’t sting, and was safe to swallow , would you feel comfortable giving it to your patients?",
    options: ["Definitely yes", "Most likely", "Maybe, for some patients", "I’d like to know more first"]
  },
  {
    question: "What’s the biggest issue during long orthodontic treatment?",
    options: ["Food accumulation", "Caries around brackets", "Gingivitis", "Bad breath"]
  },
  {
    question: "Which kind of patient in your practice would benefit most from “dental nutrition” products?",
    options: ["High caries-risk patients", "Periodontal patients", "Medically compromised patients", "All of the above"]
  },
  {
    question: "What is the most common complaint patients give about mouthwash?",
    options: ["It burns", "It causes sensitivity", "They dislike the taste", "They stop using it"]
  },
  {
    question: "What do you notice most in tobacco-using patients?",
    options: ["Persistent halitosis", "Gum disease", "Delayed healing", "Oral precancerous lesions"]
  },
  {
    question: "What’s the biggest challenge when recommending preventive care to adults?",
    options: ["Lack of motivation", "Cost concerns", "Taste/comfort of products", "Myths about oral care"]
  },
  {
    question: "Beyond caries prevention, what wider benefit of probiotic, sugar-free, tasty oral products excites you most as a clinician?",
    options: ["Gut flora protection", "Immune support", "Reduced oral inflammation", "All of the above"]
  },
  {
    question: "What is the most common systemic link you see with poor oral health?",
    options: ["Diabetes", "Cardiovascular issues", "Gastric problems", "All of the above"]
  },
  {
    question: "What’s the most common patient-reported barrier to using mouthwash?",
    options: ["Burning sensation", "Unpleasant taste", "Safety concerns about chemicals", "Forgetfulness/stops using it"]
  },
  {
    question: "According to you, which factor plays the biggest role in caries risk?",
    options: ["Frequency of sugar intake", "Type of sugar consumed", "Stickiness of foods", "All of the above"]
  },
  {
    question: "How would a sugar-free candy that’s tasty, good for dental health and safe for daily use help your patients?",
    options: ["Reduce caries risk without compromising taste", "Support compliance by satisfying sweet cravings", "Provide a safe option for diabetics and post-treatment care", "All of the above"]
  },
  {
    question: "What’s the biggest oral health issue your patients with braces face?",
    options: ["White spot lesions", "Gum swelling", "Bad breath", "All of the above"]
  },
  {
    question: "In your view, what’s the biggest advantage of adding probiotics to oral health routines?",
    options: ["Restoring microbial balance", "Reducing gum inflammation", "Controlling halitosis", "Supporting gut health"]
  },
  {
    question: "Essential oils are widely used in oral rinses. Which benefit do you value most in practice?",
    options: ["Antibacterial action", "Reducing halitosis", "Anti-inflammatory properties", "Patient acceptance due to taste"]
  },
  {
    question: "What’s the most common side-effect you worry about when patients consume sugar products during healing?",
    options: ["Delayed wound closure", "Increased sensitivity", "Secondary infection", "All of the above"]
  },
  {
    question: "If a lollipop looked and tasted like candy but actually protected teeth, would you ever hand it out in your clinic?",
    options: ["Yes, absolutely", "Likely, kids would enjoy it", "Maybe for select cases", "I’d think about it"]
  },
  {
    question: "If your patients could get their daily oral nutrition from tasty gummies, do you think they’d stick to it better?",
    options: ["Definitely yes", "Most patients would", "Works especially well for kids", "Possibly, worth trying"]
  },
  {
    question: "If oral care moved beyond just pastes and rinses into “dental nutrition,” what impact would you expect to see first?",
    options: ["Better compliance", "Faster healing post-procedures", "Reduced incidence of caries", "Happier, more satisfied patients"]
  },
  {
    question: "In your perspective, where can “dental nutrition” create the biggest change?",
    options: ["Pediatric dentistry", "Preventive dentistry", "Periodontal therapy", "Public health programs"]
  },
  {
    question: "What, according to you, is the main benefit of using natural, sugar-free sweeteners like xylitol in dental care products?",
    options: ["They don’t ferment to produce acids that cause caries", "They help maintain a neutral oral pH", "They reduce bacterial growth linked to cavities", "All of the above"]
  },
  {
    question: "How can an alkaline dental product support oral health?",
    options: ["By neutralising acids and preventing demineralisation", "By encouraging remineralisation of enamel", "By reducing bacterial virulence and gum inflammation", "All of the above"]
  }
];



// General user questions (for non-dentists)
const generalQuestions = [
  { question: "Do you still get cavities even after brushing twice daily?", options: ["Yes, often", "Sometimes", "Rarely", "Not at all"] },
  { question: "What bothers you most when you eat sweets?", options: ["Sharp tooth pain", "Sensitivity", "Cavities later", "I avoid sweets altogether"] },
  { question: "Do you notice your gums bleeding while brushing or flossing?", options: ["Yes, frequently", "Sometimes", "Rarely", "Never"] },
  { question: "What’s the most common dental problem you face?", options: ["Bad breath", "Cavities", "Sensitivity", "Gum pain"] },
  { question: "What bothers you most after a dental treatment?", options: ["Painful recovery", "Not being able to chew", "Prolonged recovery time", "All of the above"] },
  { question: "What’s your biggest concern with candies and lollipops?", options: ["Cavities", "Gum pain", "Sensitivity", "Dental visits"] },
  { question: "Do you often wake up with bad breath in the morning?", options: ["Yes, daily", "Sometimes", "Rarely", "Never"] },
  { question: "How often do you feel your teeth are sensitive to hot or cold foods?", options: ["Very often", "Sometimes", "Rarely", "Never"] },
  { question: "What stops you from enjoying ice cream or cold drinks?", options: ["Sensitive teeth", "Gum pain", "Cavities", "I avoid them completely"] },
  { question: "What bothers you most about tooth pain?", options: ["Sleepless nights", "Can’t chew", "Prolonged recovery", "Dependence on painkillers"] },
  { question: "Do you feel your mouth stays fresh after brushing?", options: ["Yes, always", "Only for a short time", "Rarely", "Not at all"] },
  { question: "What frustrates you most about visiting a dentist?", options: ["Painful treatments", "Cost", "Too frequent visits", "Nothing gets permanently fixed"] },
  { question: "Do you feel your dental health affects your confidence?", options: ["Yes, a lot", "Sometimes", "Rarely", "Not at all"] },
  { question: "What do you dislike most about traditional toothpastes?", options: ["Too many chemicals", "Don’t prevent cavities", "Don’t keep breath fresh", "Cause sensitivity"] },
  { question: "What’s the hardest part about recovering from a dental procedure?", options: ["Long healing time", "Pain while eating", "Swelling", "All of the above"] },
  { question: "What worries you most about your child’s dental health?", options: ["Too many sweets", "Cavities forming quickly", "Poor brushing habits", "Gum issues"] },
  { question: "What do you find most uncomfortable in your daily oral health?", options: ["Sensitivity", "Bad breath", "Bleeding gums", "Cavities"] },
  { question: "What’s your biggest hesitation about trying new oral care products?", options: ["Safety", "Taste", "Price", "Not sure if they work"] },
  { question: "What’s the most annoying everyday oral health issue for you?", options: ["Sensitivity", "Bad breath", "Dry mouth", "Gum pain"] },
  { question: "What would you want most from an oral care product?", options: ["Long-lasting freshness", "Protection from cavities", "Stronger teeth and gums", "Faster healing"] },
  { question: "If a probiotic edible dental nutrition could improve both your gut health and your dental health, would you make it part of your routine?", options: ["Definitely yes", "Most likely", "Maybe, depending on cost", "I’d like to know more first"] },
  { question: "If there were a fun and tasty way to keep your gums healthy, would you be open to trying it?", options: ["Yes, absolutely", "Most likely", "Maybe sometimes", "Only if it fits into my lifestyle"] },
  { question: "If you had a mouthwash that didn’t burn, prevented teeth sensitivity and was safe enough to swallow, would you switch from your current one?", options: ["Definitely yes", "Most likely", "Maybe, worth a try", "Not sure yet"] },
  { question: "If a dentist gave you a lollipop as part of your check-up, how would you feel?", options: ["Surprised, but happy", "Excited to try it", "Curious about how it works", "Unsure, but interested"] },
  { question: "If a tasty gummy gave daily protection against all dental ailments, how likely would you be to add it to your routine?", options: ["Very likely", "Likely", "Maybe", "Not sure"] }
];

