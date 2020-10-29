const chai = require('chai');
const { expect, assert } = chai;
it.optional = require('../extensions/it-optional');

Object.freeze(assert);

const transform = require('../src/transform-array.js');


describe('Transform array', () => {
    //Presence requirement
    describe('variable presence', () => {
        it.optional('function transform exists', () => {
            expect(transform).to.exist;
            expect(transform).to.be.instanceOf(Function);
        });
    });

    //Functional requirements
    describe('functional requirements', () => {

        it.optional('correctly works with an empty array', () => {
            assert.deepStrictEqual((transform([])), []);
        });

        it.optional('throws an Error if arr is not an Array', function() {
            let res = null;
            try {
                transform(3);
                transform(3.312312);
                transform(false);
                transform(null);
                transform(undefined);
                transform({'foo': 'bar'});
            } catch(err) {
                if (err._validationProp === 'NA') {
                    this.skip();
                  } else {
                    res = 'THROWN';
                  }
            }
            assert.equal(res, 'THROWN');
        });

        it.optional('doesn\'t affect simple arrays', () => {
            for (let i = 0; i < 50; i += 1) {
                const randArr = createSimpleArr(50);
                assert.deepStrictEqual(transform(randArr), randArr);
            }
        });

        it.optional('basic sequence interactions work well', () => {
            const cases = [
                ['--discard-prev', 1, 2, 3],
                ['--double-prev', 1, 2, 3],
                [1, 2, 3, '--double-next'],
                [1, 2, 3, '--discard-next']
            ];
            
            cases.forEach(currCase => {
                assert.deepStrictEqual(transform(currCase), [1, 2, 3]);
            });

        });

        it.optional('advanced sequence interactions work well', () => {
            const cases = {
                doubleDiscarded: {
                    input: [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
                    output: [1, 2, 3, 4, 5]
                },
                doubleDoubled: {
                    input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5],
                    output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
                },
                discardDiscarded: {
                    input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
                    output: [1, 2, 3, 4, 5]
                },
                discardDoubled: {
                    input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
                    output: [1, 2, 3, 1337, 4, 5]
                }
            };

            Object.values(cases).forEach(currCase => {
                const { input, output } = currCase;
                assert.deepStrictEqual(transform(input), output);
            });
        });

        it.optional('control sequences work properly', () => {
            for(let i = 0; i < 50; i += 1) {
                const { input, output } = createSample(i);
                assert.deepStrictEqual(transform(input), output);
            }   
        });

        it.optional('doesn\'t change initial array', () => {
            for(let i = 0; i < 50; i += 1) {
                const { input } = createSample(i);
                const inputCopy = [...input];
                transform(input);
                assert.deepStrictEqual(input, inputCopy);
            }
        });

    });
});

