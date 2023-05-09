import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title, description} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Hirola Infotech Solutions | {title}</title>
            <description>{description}</description>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Creative Agency, Corporate and Portfolio React JS Template" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;