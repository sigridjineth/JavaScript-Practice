class VendingMachine {
    // 1. 상품 리스트를 저장하는 프로퍼티 && 현재 사용 가능한 상품 리스트
    // 2. 잔액을 저장하는 프로퍼티
    constructor(productList) {
        this.balance = 0;
        this.productList = productList;
    };

    // 3. 돈을 받는 메소드
    // 3.1 잔액을 this.change에 업데이트한다.
    // 3.2 추가된 잔액을 기준으로, 잔액보다 상품가격이 낮은 상품만 선별하는 메소드를 호출한다.
    insertCoin(amount) {
        if (amount > 0) {
            this.addBalance = this.balance + amount;
            console.log(`${amount}원이 입력되었습니다.`);
            this.getAvailList(amount);
        } else {
            console.log('다시 입력하세요');
            this.insertCoin(amount);
        }
    };

    // 4. 잔액을 변경하는 메소드
    // 4.1 잔액에서 물건 가격을 빼고 남은 가격을 this.change에 넣는다.
    // 4.2 this.change를 출력한다.
    balanceChange(item) {
        this.balance -= item.price;
        console.log(`현재 잔액은, ${this.balance} 원입니다.`);
    };

    // 5. 상품 리스트를 선별하는 메소드
    // 5.1 1. 프로퍼티에서 잔액을 기준으로 가격이 같거나 낮은 상품만 선별한다.
    // 5.2 해당 상품 중 재고가 1 이상인 상품만 별도 리스트를 만들어 출력하는 메소드를 호출한다.
    getAvailList(change) {
        this.availableList = this.productList.filter(function(item) {
            return (change >= item.price) && (item.stock > 0);
        });
        console.log(this.availablelist);
    };

    // 6. 구매할 상품을 선택하고, 실제로 구매하는 메소드
    // 6.1 구매 가능한 상품을 현재 사용 가능한 상품 리스트에서 찾는다.
    // 6.2 만약 없을 경우 예외처리를 진행하고, 아니라면 상품을 출력하는 메소드를 호출한다.
    // 6.3 선택된 상품 가격만큼 잔액을 변경한다.
    // 6.4 선택된 상품의 재고에 1을 제한다.
    // 6.5 새로운 상품 리스트를 출력하고, 이를 1번 클래스에 전달한다.
    selectItem(item) {
        const index = function() {
            return item === item.name;
        };
        var itemIndex = this.availableList.findIndex(index);
        if (itemIndex != undefined) {
            this.availableList[itemIndex][stock] -= 1;
            this.balanceChange(this.availableList[itemIndex][price]);
            console.log(`${item.name}이 나왔습니다.`);
        } else {
            console.log(`${item.name}은 선택할 수 없습니다.`);
        }
        return this.availableList[itemIndex];
    };

    // 7. 잔돈을 반환하는 메소드
    // 7.1 잔액을 0으로 만든다.
    // 7.2 0으로 만드는 금액을 출력한다.
    returnChange() {
        console.log(`잔돈 ${this.balance}원이 반환됐습니다.`);
        this.balance = 0;
    };
};

//자판기에 들어있는 음료수의 리스트
const beverageList = [{
        'name': '콜라',
        'price': 1000,
        'stock': 2
    },
    {
        'name': '사이다',
        'price': 1000,
        'stock': 10
    },
    {
        'name': '포도쥬스',
        'price': 700,
        'stock': 2
    },
    {
        'name': '딸기우유',
        'price': 500,
        'stock': 4
    },
    {
        'name': '파워에이드',
        'price': 1000,
        'stock': 0
    }
];
const list = new VendingMachine(beverageList);