


function initLicense(license) {
    if (license !== "none") {
        return none;
    }
};

function readMeGen(data) {
    
    return `# ${data.title}
    ${initLicense(data.licenses)}

    ## Contents:
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#use)
    4. [Github](#github)
    5. [Email](#email)
    6. [Contribution](#contribution)
    7. [Licenses](#licenses)

    ## description
    ${data.description}

    ## installation
    ${data.installation}

    ## use
    ${data.use}

    ## github
    ${data.github}

    ## email
    ${data.email}

    ## contribution
    ${data.contribution}

    ## licenses
    ${initLicense(data)}`



}

module.exports = readMeGen;

