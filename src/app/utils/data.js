//used to generate new id
export const id = () => Math.random().toString(36).substring(2, 10);

export const data = {
    "boards": [
        {
            id: id(),
            name: "Marley",
            columns: [
                {
                    id: id(),
                    name: "Now",
                    tasks: [
                        {
                            id: id(),
                            title: "Take for a walk",
                            status: "Now"
                        },
                        {
                            id: id(),
                            title: "Change water",
                            status: "Now"
                        }
                    ]
                },
                {
                    id: id(),
                    name: "Next",
                    tasks: []
                },
                {
                    id: id(),
                    name: "Later",
                    tasks: []
                }
            ]
        }
    ]
}
