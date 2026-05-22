# Text Summarizer

A skill that summarizes long-form text into concise, readable summaries using NLP techniques.

## Description

This skill accepts any long text input and returns a condensed summary preserving the key points. It is useful for summarizing articles, documents, meeting notes, and reports.

## Inputs

- `text` (string, required): The full text to summarize.
- `max_length` (integer, optional): Maximum word count for the summary. Defaults to 100.

## Outputs

- `summary` (string): The condensed summary of the input text.

## Example

**Input:**
```
text: "Artificial intelligence is transforming industries worldwide. From healthcare to finance, AI systems are being deployed to automate tasks, improve accuracy, and reduce costs. Recent advances in large language models have enabled machines to understand and generate human-like text..."
max_length: 30
```

**Output:**
```
summary: "AI is transforming industries including healthcare and finance by automating tasks, improving accuracy, and reducing costs through advances in large language models."
```

## Use Cases

- Summarizing news articles
- Condensing research papers
- Generating meeting notes summaries
- Producing executive summaries from reports
