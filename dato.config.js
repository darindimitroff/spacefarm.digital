// dato.config.js

module.exports = (dato, root, i18n) => {

    // inside a 'content/projects' directory...
    root.directory('content/projects', (projectsDir) => {

        // ...iterate over the 'Projects' records...
        dato.projects.forEach((project) => {

            // ...and create a MD file for each project!
            projectsDir.createPost(
                `${project.name}.md`, 'yaml', {
                frontmatter: { 
                    type: 'Project',
                    title: project.name,
                    color: project.color,
                    },
                content: project.description,
                }
            );
        })
    })
}