import spacy
from spacy.matcher import Matcher

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Define patterns for inappropriate content
inappropriate_patterns = [
    [{"LOWER": "hate"}],
    [{"LOWER": "violence"}],
    [{"LOWER": "abuse"}],
    # Add more patterns as needed
]

matcher = Matcher(nlp.vocab)
matcher.add("INAPPROPRIATE", inappropriate_patterns)

def moderate_content(content):
    doc = nlp(content)
    matches = matcher(doc)
    
    if matches:
        return "Content may violate community guidelines. Please review."
    else:
        return "Content appears to comply with community guidelines."