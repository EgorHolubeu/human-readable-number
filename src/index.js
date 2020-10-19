module.exports = function toReadable(number) {
    let units = number % 10,
        dozens = Math.floor(number / 10) % 10,
        hundreds = Math.floor(number / 100);

    const unitsArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        dozensOneArr = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        dozensArr = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        hundredsArr = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if(!hundreds && !dozens) {
        return unitsArr[number];
    } else if(!hundreds) {
        if(dozens === 1) {
            return dozensOneArr[units];
        } else {
            return units === 0 ? dozensArr[dozens - 2] : `${dozensArr[dozens - 2]} ${unitsArr[units]}`;
        }
    } else {
        if(units === 0 && dozens > 1) {
            return `${hundredsArr[hundreds - 1]} ${dozensArr[dozens - 2]}`;
        } else if(units === 0 && dozens === 1) {
            return `${hundredsArr[hundreds - 1]} ${dozensOneArr[dozens - 1]}`;
        } else if(dozens === 1 && units > 0) {
            return `${hundredsArr[hundreds - 1]} ${dozensOneArr[units]}`;
        } else if(dozens === 0 && units > 0) {
            return `${hundredsArr[hundreds - 1]} ${unitsArr[units]}`;
        } else if(dozens === 0 && units === 0) {
            return hundredsArr[hundreds - 1];
        } else {
           return `${hundredsArr[hundreds - 1]} ${dozensArr[dozens - 2]} ${unitsArr[units]}`
        }
    }
}
