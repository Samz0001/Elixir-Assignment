# Code Reviewer

A skill that automatically reviews source code for bugs, security issues, style violations, and performance improvements.

## Description

This skill analyzes code snippets or full files and returns structured feedback covering correctness, security vulnerabilities, code style, and optimization opportunities. Supports Python, JavaScript, TypeScript, and Go.

## Inputs

- `code` (string, required): The source code to review.
- `language` (string, required): Programming language — one of `python`, `javascript`, `typescript`, `go`.
- `focus` (array, optional): Areas to focus on — `bugs`, `security`, `style`, `performance`. Defaults to all.

## Outputs

- `issues` (array): List of findings, each containing:
  - `line` (integer): Line number where the issue was found.
  - `severity` (string): `error`, `warning`, or `info`.
  - `category` (string): One of `bug`, `security`, `style`, `performance`.
  - `message` (string): Description of the issue and suggested fix.

## Example

**Input:**
```
language: "python"
code: |
  def get_user(id):
      query = "SELECT * FROM users WHERE id = " + id
      return db.execute(query)
focus: ["security", "bugs"]
```

**Output:**
```
issues: [
  {
    line: 2,
    severity: "error",
    category: "security",
    message: "SQL injection vulnerability. Use parameterized queries: db.execute('SELECT * FROM users WHERE id = ?', [id])"
  }
]
```

## Use Cases

- Automated PR code review in CI/CD pipelines
- Security auditing before production deployments
- Teaching code quality best practices
- Technical debt identification across large codebases
