#!/usr/bin/env node
const date = new Date().getFullYear();

const mit = (firstname, lastname, briefDescription) => {
    return `<!-- ${briefDescription}
    Copyright (C) ${date}  ${firstname} ${lastname}
    
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.-->
    `
}
const apache = (firstname, lastname, briefDescription) => {
    return `<!-- ${briefDescription}
    Copyright (C) ${date}  ${firstname} ${lastname}
    
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.-->
    `
}
const agpl = (firstname, lastname, briefDescription) => {
    return `<!-- ${briefDescription}
    Copyright (C) ${date}  ${firstname} ${lastname}
    
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.-->
    `
}

module.exports = function getHtmlLicenseHeader(license, briefDescription, firstname, lastname) {
    switch (license){
        case 'mit': return mit(firstname, lastname, briefDescription);
        case 'apache': return apache(firstname, lastname, briefDescription);
        case 'agpl': return agpl(firstname, lastname, briefDescription);
        default: return agpl(firstname, lastname, briefDescription);
    }
}