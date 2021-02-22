// Teste
// kBTN_TESTE = document.getElementById(kBTN_TESTE_ID)
// kBTN_TESTE.addEventListener("click", btn_teste_click);

// function btn_teste_click()
// {
//     funcTeste()
// }

// ================================================================================================
// Equip
// ================================================================================================
// Common
kBTN_EQUIP_COMMON = document.getElementById(kBTN_EQUIP_COMMON_ID)
kBTN_EQUIP_COMMON.addEventListener("click", btn_equip_common_click);

function btn_equip_common_click()
{
    SetEquipMinMax(2, 20)
    calcEquip()
}

// Great
kBTN_EQUIP_GREAT = document.getElementById(kBTN_EQUIP_GREAT_ID)
kBTN_EQUIP_GREAT.addEventListener("click", btn_equip_great_click);

function btn_equip_great_click()
{
    SetEquipMinMax(21, 25)
    calcEquip()
}

// Rare
kBTN_EQUIP_RARE = document.getElementById(kBTN_EQUIP_RARE_ID)
kBTN_EQUIP_RARE.addEventListener("click", btn_equip_rare_click);

function btn_equip_rare_click()
{
    SetEquipMinMax(25, 30)
    calcEquip()
}

// Epic
kBTN_EQUIP_EPIC = document.getElementById(kBTN_EQUIP_EPIC_ID)
kBTN_EQUIP_EPIC.addEventListener("click", btn_equip_epic_click);

function btn_equip_epic_click()
{
    SetEquipMinMax(31, 40)
    calcEquip()
}

// Perfect Epic
kBTN_EQUIP_PERFEPIC = document.getElementById(kBTN_EQUIP_PERFEPIC_ID)
kBTN_EQUIP_PERFEPIC.addEventListener("click", btn_equip_perfepic_click);

function btn_equip_perfepic_click()
{
    SetEquipMinMax(41, 50)
    calcEquip()
}

// Legendary
kBTN_EQUIP_LEG = document.getElementById(kBTN_EQUIP_LEG_ID)
kBTN_EQUIP_LEG.addEventListener("click", btn_equip_leg_click);

function btn_equip_leg_click()
{
    SetEquipMinMax(51, 60)
    calcEquip()
}

// Ancient Legendary
kBTN_EQUIP_ANCLEG = document.getElementById(kBTN_EQUIP_ANCLEG_ID)
kBTN_EQUIP_ANCLEG.addEventListener("click", btn_equip_ancleg_click);

function btn_equip_ancleg_click()
{
    SetEquipMinMax(61, 80)
    calcEquip()
}

// Go
kBTN_EQUIP_GO = document.getElementById(kBTN_EQUIP_GO_ID)
kBTN_EQUIP_GO.addEventListener("click", btn_equip_go_click);

function btn_equip_go_click()
{
    calcEquip()
}

// ================================================================================================
// Hero - Go
// ================================================================================================
kBTN_HERO_GO = document.getElementById(kBTN_HERO_GO_ID)
kBTN_HERO_GO.addEventListener("click", btn_hero_go_click);

function btn_hero_go_click()
{
    calcHero()
}

// Talent - Go
kBTN_TALENT_GO = document.getElementById(kBTN_TALENT_GO_ID)
kBTN_TALENT_GO.addEventListener("click", btn_talent_go_click);

function btn_talent_go_click()
{
    calcTalent()
}

// Star (Hero Evolution) - Go
kBTN_HEROSTAR_GO = document.getElementById(kBTN_HEROSTAR_GO_ID)
kBTN_HEROSTAR_GO.addEventListener("click", btn_herostar_go_click);

function btn_herostar_go_click()
{
    calcStar()
}

// $('#exampleModal').on('show.bs.modal', function (e) {
//     console.log("Modal is successfully shown!")
// });
