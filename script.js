function tokenizeText() {
    const language = document.getElementById('language').value;
    const text = document.getElementById('text').value;

    const patterns = {
        english: /\b\w+\b|[.,!?;]/g,
        spanish: /\b\w+\b|[.,!?;¿¡]/g,
        german: /\b\w+\b|[.,!?;:]/g
    };

    const pattern = patterns[language];
    const normalizedText = text.toLowerCase();
    const tokens = normalizedText.match(pattern) || [];

    document.getElementById('output').textContent = tokens.join(', ');
}
