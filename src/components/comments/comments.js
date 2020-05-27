import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { DiscussionEmbed } from "disqus-react"

const Comments = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  siteUrl
                  social {
                    twitter
                  }
                }
              }
            mdx(fields: {slug: {}}) {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                }
            }
        }
    `)
    const node = data.mdx
    const url = data.site.siteMetadata.siteUrl
    const shortname = 'tinashe88blog'
    // const shortname = process.env.GATSBY_DISQUS_NAME
    const disqusConfig = {
        config: { 
            url: url + node.fields.slug,
            identifier: node.id, 
            title: node.frontmatter.title,
        },
    }
    
    return (
        <DiscussionEmbed 
            shortname={shortname}
            config={disqusConfig}
        />
    )
}



export default Comments