export interface Assignment {

    id: number,
    title: string,
    desc: string,
    link: string,
    img: string
}

export const transformAssignments = (response: any) => {

    if (!response) {
        console.error('response was empty!')
        return
    }

    const { data } = response.data

    const transformed: Assignment[] = data.map((assignment: any) => {

        const imageUrl = () => {

            const data = assignment.attributes.image.data
            if (!data) {
                return
            }
            const img = data[0].attributes.url
            return img
        }

        const transformedAssignment: Assignment = {
            id: assignment.id,
            title: assignment.attributes.title,
            desc: assignment.attributes.description,
            link: assignment.attributes.link,
            img: imageUrl()
        }

        return transformedAssignment

    })

    return transformed

}
