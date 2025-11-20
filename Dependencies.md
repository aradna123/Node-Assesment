- **Semantic Versioning** (SemVer)

# Versions : MAJOR.MINOR.PATCH

- MAJOR → Big changes that may break old code
- MINOR → New features added, but still compatible
- PATCH → Small fixes or bug repairs
Example: 2.5.1 → Major = 2, Minor = 5, Patch = 1


- **What does ^ mean in version numbers?**

# The # caret ^ means:

The symbol ^ in front of a version lets updates happen for minor and patch versions, but not for a new major version. 


**Dependencies are packages your app needs to run (like dotenv or chalk).
DevDependencies are packages only needed while developing (like nodemon).**









- "Update to newer minor or patch versions, but don’t jump to a new major version."
Example: ^2.5.1 → allows 2.6.0, 2.9.3, but not 3.0.0.
