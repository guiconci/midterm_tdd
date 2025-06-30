var chai = require('chai')
const { expect } = require('chai')
const assert = require("assert")

const { point_is_in_box, compute_damage } = require('../index')

describe("space battle game tests", () => {
    // describe("points_in_box", () => {
    //     it("return true if point inside box", () => expect(point_is_in_box(1, 1, 0, 0, 10, 10)).to.be.true);

    //     it("return false if point is outside the box", () =>
    //         expect(point_is_in_box(15, 15, 0, 0, 10, 10)).to.be.false);

    //     it("throws error if any param is missing", () => {
    //         expect(() => point_is_in_box(undefined, 1, 0, 0, 10, 10)).to.throw();
    //     });
    // })

    describe("compute_damage", () => {
        it("Zero damage when user is far from explosion", () => {
            // weapon 100, player coord. (0,0), explosion coord. (1000,1000)
            expect(compute_damage(100, 0, 0, 1000, 1000)).to.equal(0);
        })

        it("Some damage when user is close to exlosion", () => {
            expect(compute_damage(100, 1, 1, 0, 0)).to.be.above(0);
        })

        it("Damage increases with power", () => {
            const lowPower = compute_damage(50, 0, 0, 5, 0); 
            const highPower = compute_damage(100, 0, 0, 5, 0);

            expect(highPower).to.be.above(lowPower);
            expect(highPower).to.equal(lowPower * 2);
        })
    })
})