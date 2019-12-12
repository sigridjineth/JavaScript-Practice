class Lotto {
    constructor() {
        this.money = 0;
        this.list = [];
        this.winTable = {
            3: {
                winNum: 0,
                prize: 5000
            },
            4: {
                winNum: 0,
                prize: 50000
            },
            5: {
                winNum: 0,
                prize: 1500000
            },
            6: {
                winNum: 0,
                prize: 2000000000
            }
        };
    }
    buylotto(money) {
        this.money = money;
        const lottoAmount = Math.floor(money / 1000);
        for (let i = 0; i < lottoAmount; i++) {
            this.list.push(this.createlotto());
        };
        this.print();
    };
    createlotto() {
        const lottolist = [];
        const numlist = new Array(45).fill(0).map(function(num, i) {
            return i + 1;
        });
        for (let i = 0; i < 6; i++) {
            const randNum = Math.floor(Math.random() * numlist.length);
            const lottoNumber = numlist.splice(randNum, 1)[0];
            lottolist.push(lottoNumber);
        };
        return lottolist.sort(function(a, b) {
            return a - b;
        });
    };
    setluckyNumber(array) {
        this.matchNumber(this.list, array);
        let profitRate = this.profitsRate();
        return profitRate;
    };
    matchNumber(lottolist, luckyarray) {
        for (let lottoNum of lottolist) {
            let count = 0;
            lottoNum.forEach(function(number) {
                return luckyarray.some(function(luckynumber) {
                    return luckynumber === number ? count++ : count;
                });
            });
            if (count > 2) {
                this.winTable[count].winNum++;
            };
        };
    };
    profitsRate() {
        let totalPrize = this.sumPrize();
        return ((totalPrize) / this.money) * 100;
    };
    sumPrize() {
        const totalPrize = Object.keys(this.winTable).reduce(function(total, count) {
            return total += this.winTable[count].winNum * this.winTable[count].prize;
        }, 0);
        return totalPrize;
    };
};