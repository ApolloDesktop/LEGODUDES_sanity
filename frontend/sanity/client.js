import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "v74qoqsz",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
})

/* skXaSWaibQWlJnodkHSV0X85V6d6lnOr7GGzn6UvEVfLSfs553l4WWVTsgHsqRawPIQNtxPEr6yXXASTG1FOKFT
pBq7g1MbhDVVlpKPBDfVXtup7QDuLcqt0G6qb1klgBSaWKExC1H5zZl3y3dB1379Smvs6SbGdLfU1RjhQhT571bwmp17n */

export const writeClient = createClient({
    projectId: "v74qoqsz",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skXaSWaibQWlJnodkHSV0X85V6d6lnOr7GGzn6UvEVfLSfs553l4WWVTsgHsqRawPIQNtxPEr6yXXASTG1FOKFTpBq7g1MbhDVVlpKPBDfVXtup7QDuLcqt0G6qb1klgBSaWKExC1H5zZl3y3dB1379Smvs6SbGdLfU1RjhQhT571bwmp17n"
})