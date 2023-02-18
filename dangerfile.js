const { danger, warn } = require('danger')

const pr = danger.github.pr;

// Missing commit message
const commitMessageRegex = /\*\*Proposed commit message: \(wrap lines at 72 characters\)\*\*[\r\n\f\v]{2}<!--/;
if (commitMessageRegex.test(pr.body)) {
  warn(`Maybe fill in the issue description (especially the proposed commit message)?`);
}

// Missing test
const filePaths = danger.git.created_files.concat(danger.git.modified_files);
if (filePaths.filter(filepath => filepath.includes('test')).length === 0) {
  warn(`Maybe add some tests?`);
}

// Celebrate documentation 
const documentation = danger.git.fileMatch('**/*.md');
if (documentation.edited) {
  message(
    'Thank you for making our documentation better!'
  );
}

// Welcome new contributors
if (pr.author_association === 'OWNER' || pr.author_association === 'FIRST_TIME_CONTRIBUTOR') {
  message(
    'Thank you for your first contribution! :tada: Reviewers please add them to the contributors list after merging.'
  );
}