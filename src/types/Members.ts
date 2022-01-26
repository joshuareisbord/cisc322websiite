export interface Member {

    name: string,
    img: string
}

export const transformMembers = (response: any) => {

    if (!response) {
        console.error('response was empty!')
        return
    }

    const { data } = response.data

    const transformed: Member[] = data.map((member: any) => {

        const imageUrl = () => {

            const data = member.attributes.image.data
            if (!data) {
                return
            }
            const img = data[0].attributes.url
            return img
        }

        const transformedMember: Member = {
            name: member.attributes.name,
            img: imageUrl()
        }

        return transformedMember

    })

    return transformed

}
