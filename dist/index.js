"use strict";
function ktToLibs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
ktToLibs(10);
ktToLibs("10kg");
//# sourceMappingURL=index.js.map