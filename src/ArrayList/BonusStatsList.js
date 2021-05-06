const AddOptionSortSole = [
  {
    value: "str",
    text: "STR",
    id: 1,
  },
  {
    value: "dex",
    text: "DEX",
    id: 1,
  },
  {
    value: "int",
    text: "INT",
    id: 1,
  },
  {
    value: "luk",
    text: "LUK",
    id: 1,
  },
  {
    value: "strdex",
    text: "STR+DEX",
    id: 2,
  },
  {
    value: "strint",
    text: "STR+INT",
    id: 2,
  },
  {
    value: "strluk",
    text: "STR+LUK",
    id: 2,
  },
  {
    value: "dexint",
    text: "DEX+INT",
    id: 2,
  },
  {
    value: "dexluk",
    text: "DEX+LUK",
    id: 2,
  },
  {
    value: "intluk",
    text: "INT+LUK",
    id: 2,
  },
  {
    value: "hp",
    text: "최대 HP",
    id: 3,
  },
  {
    value: "mp",
    text: "최대 MP",
    id: 3,
  },
  {
    value: "leveldown",
    text: "착용 레벨 감소",
    id: 5,
  },
  {
    value: "shield",
    text: "방어력",
    id: 1,
  },
  {
    value: "power",
    text: "공격력",
    id: 4,
  },
  {
    value: "charm",
    text: "마력",
    id: 4,
  },
  {
    value: "allstat",
    text: "올스탯%",
    id: 4,
  },
];

const AddOptionWeapon = [
  ...AddOptionSortSole,
  {
    value: "bossdamage",
    text: "보스몬스터 공격 시 데미지 %",
    id: 5,
  },
  {
    value: "damage",
    text: "데미지",
    id: 4,
  },
];

const AddOptionAcc = [
  ...AddOptionSortSole,
  {
    value: "speed",
    text: "이동속도",
    id: 4,
  },
  {
    value: "jump",
    text: "점프력",
    id: 4,
  },
];

export { AddOptionWeapon, AddOptionAcc };
