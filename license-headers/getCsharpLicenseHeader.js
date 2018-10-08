#!/usr/bin/env node
const date = new Date().getFullYear();

const mit = (firstname, lastname, briefDescription) => {
    return `//${briefDescription}
// MIT License
//
// Copyright (C) ${date}  ${firstname} ${lastname}
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// 
// See LICENSE in the project root for license information.
`
}
const apache = (firstname, lastname, briefDescription) => {
    return `// ${briefDescription}
// Copyright (C) ${date}  ${firstname} ${lastname}
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// 
// See LICENSE in the project root for license information.
`
}
const agpl = (firstname, lastname, briefDescription) => {
    return `//${briefDescription}
//Copyright (C) ${date}  ${firstname} ${lastname}
//
//You should have received a copy of the GNU Affero General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>. 
// 
// See LICENSE in the project root for license information.
`
}
const copyrightOnly = (firstname, lastname, briefDescription) => {
    return `// ${briefDescription}
// Copyright (C) ${date}  ${firstname} ${lastname}
// 
// See LICENSE in the project root for license information.
`
}

module.exports = function getCsharpLicenseHeader(license, briefDescription, firstname, lastname) {
    switch (license){
        case 'mit': return mit(firstname, lastname, briefDescription);
        case 'apache': return apache(firstname, lastname, briefDescription);
        case 'agpl': return agpl(firstname, lastname, briefDescription);
        default: return copyrightOnly(firstname, lastname, briefDescription);
    }
}