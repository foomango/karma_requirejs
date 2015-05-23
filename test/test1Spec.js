define(['module1', 'm2/module2'], function (m1, m2) {
    describe('just a test', function () {
        var am1 = new m1(),
            am2 = new m2();

        it('works for app', function() {
            expect(am1.getName()).toEqual(am2.getModule1Name());
        });
    });
});
