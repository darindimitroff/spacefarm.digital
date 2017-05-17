// dato.config.js

module.exports = (dato, root, i18n) => {

    // inside a 'src/projects' directory...
    root.directory('pages/projects', (projectsDir) => {

        // ...iterate over the 'Blog post' records...
        dato.projects.forEach((project) => {

            content = {
                title: project.projectName,
                description: project.projectDescription
            }

            // ...and create a markdown file for each project!
            projectsDir.createDataFile(`${project.projectName}.json`, 'json', content)
        })
    })
}