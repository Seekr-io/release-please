"use strict";
// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsProj = void 0;
const default_1 = require("../default");
const VERSION_ATTR_REGEX = /<Version>\d+\.\d+\.\d+(-[^+]+)?(\+.*)?<\/Version>/;
/**
 * Updates a .NET .csproj.
 */
class CsProj extends default_1.DefaultUpdater {
    /**
     * Given initial file contents, return updated contents.
     * @param {string} content The initial content
     * @returns {string} The updated content
     */
    updateContent(content) {
        return content.replace(VERSION_ATTR_REGEX, `<Version>${this.version}</Version>`);
    }
}
exports.CsProj = CsProj;
//# sourceMappingURL=csproj.js.map