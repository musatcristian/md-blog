# My Blog Diagram

## User Submits Blog Post

```mermaid
graph TD
    A[User Submits Form] --> B[API Route /api/submit]
    B --> C{Validate Input}
    C -- Valid --> D[Generate Slug from Subject]
    D --> E[Save Markdown Content]
    E --> F[Return Success Response]
    C -- Invalid --> G[Return Error Response]
    F --> H[Redirect to New Blog Page]
