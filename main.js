"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avAge = 35;
    const antman = new Avenger('Antman', 'Capitan');
    console.log(antman);
    console.log(antman.team);
    console.log(Avenger.name);
})();
//# sourceMappingURL=main.js.map