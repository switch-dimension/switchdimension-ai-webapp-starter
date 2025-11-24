# Dependency Review Prompt

Use this prompt to review any repository for necessary upgrades and security issues:

---

**Review this repository's dependencies for necessary upgrades and security issues. Please:**

1. **Read and analyze all dependency files** (package.json, requirements.txt, Cargo.toml, go.mod, etc.)

2. **Search the Web and Check for LTS/support status changes:**
   - Identify which packages have formal LTS policies
   - Check current LTS status of major dependencies
   - Note any packages that have moved to Maintenance LTS or End-of-Life
   - Identify if newer LTS versions are available

3. **CSearch the Web and check for security vulnerabilities:**
   - Identify any known security issues with current package versions
   - Check for packages with critical CVEs
   - Note any packages that require security patches

4. **CSearch the Web and heck for outdated packages:**
   - Compare current versions with latest stable releases
   - Identify packages significantly behind latest versions
   - Note any packages with breaking changes in newer versions

5. **Search the Web and Check for compatibility issues:**
   - Verify Node.js/runtime version compatibility
   - Check for peer dependency conflicts
   - Identify any deprecated APIs or features being used

6. **Provide actionable recommendations:**
   - Prioritize critical security updates
   - Suggest upgrade paths for major version changes
   - Note any breaking changes that need attention
   - Provide timeline recommendations (immediate, short-term, long-term)

**Format your response with:**
- Summary of findings
- Critical issues (security, EOL packages)
- Recommended actions prioritized by urgency
- Compatibility notes and potential breaking changes

---
