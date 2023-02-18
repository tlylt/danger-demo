const { danger, warn } = require('danger')

const pr = danger.github.pr;

// Missing commit message (the commitMessageTitle is followed by a blank line)
const commitMessageRegex = /\*\*Proposed commit message: \(wrap lines at 72 characters\)\*\*[\r\n\f\v]\n{1}/;
if (commitMessageRegex.test(pr.body)) {
  warn(`Thanks for the additions ${pr.user.login}\nMaybe fill in the issue description (especially the proposed commit message)?`);
}
