function Hamming() {
    this.compute = function (dnaStrand, dnaStand1) {
        if (dnaStrand.length !== dnaStand1.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        var counter = 0;
        for (i = 0; i < dnaStrand.length; i++) {
            if (dnaStrand.charAt(i) !== dnaStand1.charAt(i)) {
                ++counter;
            }
        }

        return counter;
    };
}

module.exports = Hamming;