function buildBlock(blockLength, blockHeight, secondaryLength, curveRadius, nubLength, nubHeight) {
    return (
        `m 0,${curveRadius}` +
        `q 0,-${curveRadius} ${curveRadius},-${curveRadius}` +
        `h ${secondaryLength}` +
        // Start of top "nub"
        `q ${curveRadius},0 ${curveRadius},${curveRadius}` +
        `v ${nubHeight}` +
        `q 0,${curveRadius} ${curveRadius},${curveRadius}` +
        `h ${nubLength}` +
        `q ${curveRadius},0 ${curveRadius},-${curveRadius}` +
        `v -${nubHeight}` +
        `q 0,-${curveRadius} ${curveRadius},-${curveRadius}` +
        // End of top "nub"
        `h ${blockLength}` +
        `q ${curveRadius},0 ${curveRadius},${curveRadius}` +
        `v ${blockHeight}` +
        `q 0,${curveRadius} -${curveRadius},${curveRadius}` +
        `h -${blockLength}` +
        // Start of bottom "nub"
        `q -${curveRadius},0 -${curveRadius}, ${curveRadius}` +
        `v ${nubHeight}` +
        `q 0,${curveRadius} -${curveRadius},${curveRadius}` +
        `h -${nubLength}` +
        `q -${curveRadius},0 -${curveRadius},-${curveRadius}` +
        `v -${nubHeight}` +
        `q 0,-${curveRadius} -${curveRadius},-${curveRadius}` +
        // End of bottom "nub"
        `h -${secondaryLength}` +
        `q -${curveRadius}, 0 -${curveRadius},-${curveRadius}` +
        `v -${blockHeight}`
    );
}

function render(block) {
    document.getElementById("path").setAttribute("d", block);
}