
// Commom   1-20    (02-20)
// Great    1-25    (21-25)
// Rare     1-30    (26-30)
// Epic     1-40    (31-40)
// P Epic   1-50    (41-50)
// Leg      1-60    (51-60)
// Anc Leg  1-80    (61-80)

function calcEquip()
{
    kTEXT_EQUIP_MIN = document.getElementById(kTEXT_EQUIP_MIN_ID)
    kTEXT_EQUIP_MAX = document.getElementById(kTEXT_EQUIP_MAX_ID)

    level_min = kTEXT_EQUIP_MIN.value
    level_max = kTEXT_EQUIP_MAX.value
    // console.log("level_min [%s] level_max [%s]", level_min, level_max)

    if (!validate_equip(level_min, "min"))
        return
    else if (!validate_equip(level_max, "max"))
        return
    else if (level_min > level_max)
    {
        alert(kMSG_EQUIP_ERROR)
        kTEXT_EQUIP_MIN.focus()
        return
    }

    var scroll = 0
    var gold = 0
    for (var i = parseInt(level_min); i <= parseInt(level_max); i++)
    {
        var info = get_equip_info(i)
        if (info && info.scroll && info.gold)
        {
            scroll += info.scroll
            gold += info.gold
        }
    }
    // console.log("scroll [%s] gold [%s] [%s]", scroll, gold, gold.toLocaleString())

    kSPAN_EQUIP_SCROLL = document.getElementById(kSPAN_EQUIP_SCROLL_ID)
    kSPAN_EQUIP_SCROLL.textContent = "Scroll: " + scroll.toLocaleString()
    kSPAN_EQUIP_GOLD = document.getElementById(kSPAN_EQUIP_GOLD_ID)
    kSPAN_EQUIP_GOLD.textContent = "Gold: " + gold.toLocaleString()
}

function validate_equip(level, order)
{
    if (isNaN(level) || level < 2 || level > 80)
    {
        alert(kMSG_EQUIP_ERROR)
        if (order == "min")
            kTEXT_EQUIP_MIN.focus()
        else if (order == "max")
            kTEXT_EQUIP_MAX.focus()

        return false
    }

    return true
}

function SetEquipMinMax(level_min, level_max)
{
    kTEXT_EQUIP_MIN = document.getElementById(kTEXT_EQUIP_MIN_ID)
    kTEXT_EQUIP_MIN.value = level_min

    kTEXT_EQUIP_MAX = document.getElementById(kTEXT_EQUIP_MAX_ID)
    kTEXT_EQUIP_MAX.value = level_max
}

function get_equip_info(level)
{
    var info

    switch (level)
    {
        case 2:
            info = {
                scroll: 1,
                gold: 200,
            }
            break

        case 3:
            info = {
                scroll: 2,
                gold: 400,
            }
            break

        case 4:
            info = {
                scroll: 4,
                gold: 600,
            }
            break

        case 5:
            info = {
                scroll: 6,
                gold: 800,
            }
            break

        case 6:
            info = {
                scroll: 8,
                gold: 1000,
            }
            break

        case 7:
            info = {
                scroll: 10,
                gold: 1200,
            }
            break

        case 8:
            info = {
                scroll: 10,
                gold: 1400,
            }
            break

        case 9:
            info = {
                scroll: 10,
                gold: 1600,
            }
            break

        case 10:
            info = {
                scroll: 10,
                gold: 1800,
            }
            break

        case 11:
            info = {
                scroll: 15,
                gold: 2000,
            }
            break

        case 12:
            info = {
                scroll: 15,
                gold: 2200,
            }
            break

        case 13:
            info = {
                scroll: 15,
                gold: 2400,
            }
            break

        case 14:
            info = {
                scroll: 15,
                gold: 2600,
            }
            break

        case 15:
            info = {
                scroll: 15,
                gold: 2800,
            }
            break

        case 16:
            info = {
                scroll: 20,
                gold: 3000,
            }
            break

        case 17:
            info = {
                scroll: 20,
                gold: 3200,
            }
            break

        case 18:
            info = {
                scroll: 20,
                gold: 3400,
            }
            break

        case 19:
            info = {
                scroll: 20,
                gold: 3600,
            }
            break

        case 20:
            info = {
                scroll: 20,
                gold: 3800,
            }
            break

        case 21:
            info = {
                scroll: 25,
                gold: 4000,
            }
            break

        case 22:
            info = {
                scroll: 25,
                gold: 4200,
            }
            break

        case 23:
            info = {
                scroll: 25,
                gold: 4400,
            }
            break

        case 24:
            info = {
                scroll: 25,
                gold: 4600,
            }
            break

        case 25:
            info = {
                scroll: 25,
                gold: 4800,
            }
            break

        case 26:
            info = {
                scroll: 30,
                gold: 5000,
            }
            break

        case 27:
            info = {
                scroll: 30,
                gold: 5500,
            }
            break

        case 28:
            info = {
                scroll: 30,
                gold: 6000,
            }
            break

        case 29:
            info = {
                scroll: 30,
                gold: 6500,
            }
            break

        case 30:
            info = {
                scroll: 30,
                gold: 7000,
            }
            break

        case 31:
            info = {
                scroll: 40,
                gold: 7500,
            }
            break

        case 32:
            info = {
                scroll: 40,
                gold: 8000,
            }
            break

        case 33:
            info = {
                scroll: 40,
                gold: 8500,
            }
            break

        case 34:
            info = {
                scroll: 40,
                gold: 9000,
            }
            break

        case 35:
            info = {
                scroll: 40,
                gold: 9500,
            }
            break

        case 36:
            info = {
                scroll: 50,
                gold: 10000,
            }
            break

        case 37:
            info = {
                scroll: 50,
                gold: 11000,
            }
            break

        case 38:
            info = {
                scroll: 50,
                gold: 12000,
            }
            break

        case 39:
            info = {
                scroll: 50,
                gold: 13000,
            }
            break

        case 40:
            info = {
                scroll: 50,
                gold: 14000,
            }
            break

        case 41:
            info = {
                scroll: 70,
                gold: 15000,
            }
            break

        case 42:
            info = {
                scroll: 70,
                gold: 16000,
            }
            break

        case 43:
            info = {
                scroll: 70,
                gold: 17000,
            }
            break

        case 44:
            info = {
                scroll: 70,
                gold: 18000,
            }
            break

        case 45:
            info = {
                scroll: 70,
                gold: 19000,
            }
            break

        case 46:
            info = {
                scroll: 100,
                gold: 20000,
            }
            break

        case 47:
            info = {
                scroll: 100,
                gold: 22000,
            }
            break

        case 48:
            info = {
                scroll: 100,
                gold: 24000,
            }
            break

        case 49:
            info = {
                scroll: 100,
                gold: 26000,
            }
            break

        case 50:
            info = {
                scroll: 100,
                gold: 28000,
            }
            break

        case 51:
            info = {
                scroll: 150,
                gold: 30000,
            }
            break

        case 52:
            info = {
                scroll: 150,
                gold: 32000,
            }
            break

        case 53:
            info = {
                scroll: 150,
                gold: 34000,
            }
            break

        case 54:
            info = {
                scroll: 150,
                gold: 36000,
            }
            break

        case 55:
            info = {
                scroll: 150,
                gold: 38000,
            }
            break

        case 56:
            info = {
                scroll: 200,
                gold: 40000,
            }
            break

        case 57:
            info = {
                scroll: 200,
                gold: 45000,
            }
            break

        case 58:
            info = {
                scroll: 200,
                gold: 50000,
            }
            break

        case 59:
            info = {
                scroll: 200,
                gold: 55000,
            }
            break

        case 60:
            info = {
                scroll: 200,
                gold: 60000,
            }
            break

        case 61:
            info = {
                scroll: 250,
                gold: 65000,
            }
            break

        case 62:
            info = {
                scroll: 250,
                gold: 70000,
            }
            break

        case 63:
            info = {
                scroll: 250,
                gold: 75000,
            }
            break

        case 64:
            info = {
                scroll: 250,
                gold: 80000,
            }
            break

        case 65:
            info = {
                scroll: 250,
                gold: 85000,
            }
            break

        case 66:
            info = {
                scroll: 300,
                gold: 90000,
            }
            break

        case 67:
            info = {
                scroll: 300,
                gold: 95000,
            }
            break

        case 68:
            info = {
                scroll: 300,
                gold: 100000,
            }
            break

        case 69:
            info = {
                scroll: 300,
                gold: 110000,
            }
            break

        case 70:
            info = {
                scroll: 300,
                gold: 120000,
            }
            break

        case 71:
            info = {
                scroll: 400,
                gold: 130000,
            }
            break

        case 72:
            info = {
                scroll: 400,
                gold: 140000,
            }
            break

        case 73:
            info = {
                scroll: 400,
                gold: 150000,
            }
            break

        case 74:
            info = {
                scroll: 400,
                gold: 160000,
            }
            break

        case 75:
            info = {
                scroll: 400,
                gold: 170000,
            }
            break

        case 76:
            info = {
                scroll: 500,
                gold: 180000,
            }
            break

        case 77:
            info = {
                scroll: 500,
                gold: 190000,
            }
            break

        case 78:
            info = {
                scroll: 500,
                gold: 200000,
            }
            break

        case 79:
            info = {
                scroll: 500,
                gold: 220000,
            }
            break

        case 80:
            info = {
                scroll: 500,
                gold: 240000,
            }
            break
    }

    return info
}
