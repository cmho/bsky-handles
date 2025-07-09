import { readFileSync, writeFileSync } from 'node:fs';

const components = [];
const header = readFileSync('header.md');
const footer = readFileSync('footer.md');
components.push(header);
components.push('\n\n');
components.push('| Name | Handles | Notes |\n');
components.push('|------|---------|-------|\n');
const data = JSON.parse(readFileSync('data.json')).sort((a, b) => {
	return (a.name > b.name) ? 1 : -1;
});
data.forEach((item) => {
	components.push(`| [${item.name}](${item.url}) | ${item.handles.join(', ')} | ${'notes' in item ? item.notes : ''}|\n`);
});
components.push('\n\n');
components.push(footer);
writeFileSync('README.md', components.join(""));