import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "v74qoqsz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})