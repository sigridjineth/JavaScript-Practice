var data = [{
    "id": 1,
    "name": "Yong",
    "phone": "010-0000-0000",
    "type": "sk",
    "childnode": [{
        "id": 11,
        "name": "echo",
        "phone": "010-0000-1111",
        "type": "kt",
        "childnode": [{
                "id": 115,
                "name": "hary",
                "phone": "211-1111-0000",
                "type": "sk",
                "childnode": [{
                    "id": 1159,
                    "name": "pobi",
                    "phone": "010-444-000",
                    "type": "kt",
                    "childnode": [{
                            "id": 11592,
                            "name": "cherry",
                            "phone": "111-222-0000",
                            "type": "lg",
                            "childnode": []
                        },
                        {
                            "id": 11595,
                            "name": "solvin",
                            "phone": "010-000-3333",
                            "type": "sk",
                            "childnode": []
                        }
                    ]
                }]
            },
            {
                "id": 116,
                "name": "kim",
                "phone": "444-111-0200",
                "type": "kt",
                "childnode": [{
                    "id": 1168,
                    "name": "hani",
                    "phone": "010-222-0000",
                    "type": "sk",
                    "childnode": [{
                        "id": 11689,
                        "name": "ho",
                        "phone": "010-000-0000",
                        "type": "kt",
                        "childnode": [{
                                "id": 116890,
                                "name": "wonsuk",
                                "phone": "010-000-0000",
                                "type": "kt",
                                "childnode": []
                            },
                            {
                                "id": 1168901,
                                "name": "chulsu",
                                "phone": "010-0000-0000",
                                "type": "sk",
                                "childnode": []
                            }
                        ]
                    }]
                }]
            },
            {
                "id": 117,
                "name": "hong",
                "phone": "010-0000-0000",
                "type": "lg",
                "childnode": []
            }
        ]
    }]
}];

//getMatchedType 함수 만들기
var answer = [];
var getMatchedType = function(data, type){
    data.forEach(function(element){ //for, while문을 사용하지 않고 구현해본다.
        if (element.type == type){
            answer.push(element)
        };
        if (element.childnode){
            getMatchedType(element.childnode); //재귀호출을 이용해서 구현해야 한다.
        };
    });
    console.log(type + " 타입의 데이터는 총" + answer.length + "개 이며," + answer + " 입니다."); //template literal 문법을 사용한다.
};

getMatchedType(data, "sk")