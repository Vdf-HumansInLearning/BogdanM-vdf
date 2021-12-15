function filterPrice(min, max, val) {
    return (val <= max && val >= min);
}
module.exports = {filterPrice};
