# license-adder

NPM module to add license headers to all file types listed.

+ .cs
+ .ts
+ .js
+ .css
+ .scss
+ .sass
+ .html
+ .xml
+ .xaml
+ .config
+ .sql

License types currently supported

+ MIT
+ Apache
+ AGPL

Also adds full LICENSE.txt file to the directory the commmand is run in.

Excludes adding header to files in 'node_modules' folder.


# Installation

`npm install license-adder -g`

# Usage

## license-adder

Run 'license-adder' command in the terminal that is open in the directory that contains all your files that require license headers adding to them.

Prompt answers required for the currently supported license types

+ Enter 'mit' under the licenseType prompt.
+ Enter 'apache' under the licenseType prompt.
+ Enter 'agpl' under the licenseType prompt.

```
prompt: licenseType:  mit
prompt: briefDescription:  App Description Goes Here
prompt: firstname:  Enter First Name Here
prompt: lastname:  Enter Last Name Here
```

# Example of headers added to file types

## .cs .ts .js .css .scss .sass
```
//App Description Goes Here
// MIT License
//
// Copyright (C) 2018  Enter First Name Here Enter Last Name Here
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
```
## .html .xml .xaml .config
```
<!-- App description goes here
Copyright (C) 2018  firstname goes here lastname goes here

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.-->
```
## .sql
```
-- App description goes here
-- MIT License
-- 
-- Copyright (C) 2018  firstname goes here lastname goes here
--
-- Permission is hereby granted, free of charge, to any person obtaining a copy
-- of this software and associated documentation files (the "Software"), to deal
-- in the Software without restriction, including without limitation the rights
-- to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
-- copies of the Software, and to permit persons to whom the Software is
-- furnished to do so, subject to the following conditions:
-- 
-- The above copyright notice and this permission notice shall be included in all
-- copies or substantial portions of the Software.
-- 
-- THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
-- FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
-- AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
-- LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
-- OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
-- SOFTWARE.
```







