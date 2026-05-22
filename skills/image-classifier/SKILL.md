# Image Classifier

A skill that classifies images into predefined categories using computer vision models.

## Description

This skill takes an image as input and returns a predicted label along with a confidence score. It supports common object categories including animals, vehicles, food, and everyday objects.

## Inputs

- `image_url` (string, required): URL or base64-encoded image to classify.
- `top_k` (integer, optional): Number of top predictions to return. Defaults to 3.

## Outputs

- `predictions` (array): List of objects each containing:
  - `label` (string): The predicted category name.
  - `confidence` (float): Confidence score between 0 and 1.

## Example

**Input:**
```
image_url: "https://example.com/cat.jpg"
top_k: 3
```

**Output:**
```
predictions: [
  { label: "cat", confidence: 0.95 },
  { label: "kitten", confidence: 0.03 },
  { label: "animal", confidence: 0.01 }
]
```

## Use Cases

- Automatic product image tagging in e-commerce
- Medical image screening and triage
- Wildlife monitoring from camera traps
- Content moderation for uploaded images