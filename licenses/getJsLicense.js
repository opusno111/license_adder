#!/usr/bin/env node
const date = new Date().getFullYear();

const agplJs = (firstname, lastname, briefDescription) => {
    return `/**
        *${briefDescription}
        *Copyright (C) ${date}  ${firstname} ${lastname}
        *
        *You should have received a copy of the GNU Affero General Public License
        *along with this program.  If not, see <http://www.gnu.org/licenses/>.
        *  
    `
}

module.exports = function getJsLicense(license, briefDescription, firstname, lastname) {
    switch (license){
        case 'mit': return mit(firstname, lastname, briefDescription);
        case 'apache': return apache(firstname, lastname, briefDescription);
        case 'agpl': return agplJs(firstname, lastname, briefDescription);
        default: return agplJs(firstname, lastname, briefDescription);
    }
}