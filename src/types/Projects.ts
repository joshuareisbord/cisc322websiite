export interface Project {

    id: number,
    title: string,
    desc: string,
    link: string,
    img: string
}

export const transformProjects = (response: any) => {

    if (!response) {
        console.error('response was empty!')
        return
    }

    const { data } = response.data

    const transformed: Project[] = data.map((project: any) => {

        const imageUrl = () => {

            const data = project.attributes.image.data
            if (!data) {
                return
            }
            const img = data[0].attributes.url
            return img
        }

        const transformedProject: Project = {
            id: project.id,
            title: project.attributes.title,
            desc: project.attributes.description,
            link: project.attributes.link,
            img: imageUrl()
        }

        return transformedProject

    })

    return transformed

}
