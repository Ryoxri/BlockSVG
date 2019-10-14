let elem = document.getElementById("path");
let current;

function connector(radius, length, rotation=0) {
    if (rotation == 0) {
        let path = (
        `q ${radius},0 ${radius},${radius}` +
        `q 0,${radius} ${radius},${radius}` +
        `h ${length}` +
        `q ${radius},0 ${radius},-${radius}` +
        `q 0,-${radius} ${radius},-${radius}`);
        return path;
    } else if (rotation == 180) {
        let path = (
        `q -${radius},0 -${radius},${radius}` +
        `q 0,${radius} -${radius},${radius}` +
        `h -${length}` +
        `q -${radius},0 -${radius},-${radius}` +
        `q 0,-${radius} -${radius},-${radius}`);
        return path;
    }
}

function block(length, height, radius, nubLength) {
    let secondaryLength = floor(length / 5);
    let path = (
        `m 0,${radius}` +
        `q 0,-${radius} ${radius},-${radius}` +
        `h ${secondaryLength}` +
        connector(radius, nubLength) +
        `h ${length}` +
        `q ${radius},0 ${radius},${radius}` +
        `v ${height}` +
        `q 0,${radius} -${radius},${radius}` +
        `h -${length}` +
        connector(radius, nubLength, 180) +
        `h -${secondaryLength}` +
        `q -${length},0 -${radius},-${radius}` +
        `v -${height}`
    ); 
    render(path);
} 

function render(path) {
    elem.setAttribute("d", path);
}