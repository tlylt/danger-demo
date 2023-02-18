const { danger, warn } = require('danger')

const pr = danger.github.pr;

const commitMessageTemplate = `**Proposed commit message: (wrap lines at 72 characters)**

<!--
  See this link for more info on how to write a good commit message:
  https://se-education.org/guides/conventions/git.html

  As best as possible, write a succinct commit title in 50 characters

|---------This is the width of 50 chars----------|
|-----------This is the width of 72 chars for your reference-----------|
-->

---
`;

// Missing commit message (Commit message remains the default one)
if (pr.body.length < 10 || pr.body.includes(commitMessageTemplate)) {
  warn('Thanks for the additions! Maybe fill in the issue description (especially the proposed commit message)?');
}
