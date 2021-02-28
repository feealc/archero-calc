
function calcHero()
{
    kTEXT_HERO_MIN = document.getElementById(kTEXT_HERO_MIN_ID)
    kTEXT_HERO_MAX = document.getElementById(kTEXT_HERO_MAX_ID)

    level_min = kTEXT_HERO_MIN.value
    level_max = kTEXT_HERO_MAX.value
    // console.log("level_min [%s] level_max [%s]", level_min, level_max)

    if (!validate_hero(level_min, "min"))
        return
    if (!validate_hero(level_max, "max"))
        return

    var saphire = 0
    var gold = 0
    for (var i = parseInt(level_min); i <= parseInt(level_max); i++)
    {
        var info = get_hero_info(i)
        if (info.no_info)
        {
            
            alert(kMSG_HELP.replace("XXX", String((i - 1))))
            break
        }

        if (info && info.saphire && info.gold)
        {
            saphire += info.saphire
            gold += info.gold
        }
    }
    // console.log("saphire [%s] gold [%s] [%s]", saphire, gold, gold.toLocaleString())

    kSPAN_HERO_SAPHIRE = document.getElementById(kSPAN_HERO_SAPHIRE_ID)
    kSPAN_HERO_SAPHIRE.textContent = "Saphire: " + saphire.toLocaleString()
    kSPAN_HERO_GOLD = document.getElementById(kSPAN_HERO_GOLD_ID)
    kSPAN_HERO_GOLD.textContent = "Gold: " + gold.toLocaleString()
}

function validate_hero(level, order)
{
    if (isNaN(level) || level < 2 || level > 100)
    {
        alert("Hero level invalid. Values accepted is 2 to 100.")
        if (order == "min")
            kTEXT_HERO_MIN.focus()
        else if (order == "max")
            kTEXT_HERO_MAX.focus()

        return false
    }

    return true
}

function get_hero_info(level)
{
    var info

    switch (level)
    {
        case 2:
            info = {
                saphire: 1,
                gold: 400,
            }
            break

        case 3:
            info = {
                saphire: 2,
                gold: 800,
            }
            break

        case 4:
            info = {
                saphire: 3,
                gold: 1200,
            }
            break

        case 5:
            info = {
                saphire: 4,
                gold: 1600,
            }
            break

        case 6:
            info = {
                saphire: 5,
                gold: 2000,
            }
            break

        case 7:
            info = {
                saphire: 5,
                gold: 2400,
            }
            break

        case 8:
            info = {
                saphire: 5,
                gold: 2800,
            }
            break

        case 9:
            info = {
                saphire: 5,
                gold: 3200,
            }
            break

        case 10:
            info = {
                saphire: 5,
                gold: 3600,
            }
            break

        case 11:
            info = {
                saphire: 7,
                gold: 4000,
            }
            break

        case 12:
            info = {
                saphire: 7,
                gold: 4400,
            }
            break

        case 13:
            info = {
                saphire: 7,
                gold: 4800,
            }
            break

        case 14:
            info = {
                saphire: 7,
                gold: 5200,
            }
            break

        case 15:
            info = {
                saphire: 7,
                gold: 5600,
            }
            break

        case 16:
            info = {
                saphire: 10,
                gold: 6000,
            }
            break

        case 17:
            info = {
                saphire: 10,
                gold: 6400,
            }
            break

        case 18:
            info = {
                saphire: 10,
                gold: 6800,
            }
            break

        case 19:
            info = {
                saphire: 10,
                gold: 7200,
            }
            break

        case 20:
            info = {
                saphire: 10,
                gold: 7600,
            }
            break

        case 21:
            info = {
                saphire: 15,
                gold: 8000,
            }
            break

        case 22:
            info = {
                saphire: 15,
                gold: 8400,
            }
            break

        case 23:
            info = {
                saphire: 15,
                gold: 8800,
            }
            break

        case 24:
            info = {
                saphire: 15,
                gold: 9200,
            }
            break

        case 25:
            info = {
                saphire: 15,
                gold: 9600,
            }
            break

        case 26:
            info = {
                saphire: 20,
                gold: 10000,
            }
            break

        case 27:
            info = {
                saphire: 20,
                gold: 11000,
            }
            break

        case 28:
            info = {
                saphire: 20,
                gold: 12000,
            }
            break

        case 29:
            info = {
                saphire: 20,
                gold: 13000,
            }
            break

        case 30:
            info = {
                saphire: 20,
                gold: 14000,
            }
            break

        case 31:
            info = {
                saphire: 30,
                gold: 15000,
            }
            break

        case 32:
            info = {
                saphire: 30,
                gold: 16000,
            }
            break

        case 33:
            info = {
                saphire: 30,
                gold: 17000,
            }
            break

        case 34:
            info = {
                saphire: 30,
                gold: 18000,
            }
            break

        case 35:
            info = {
                saphire: 30,
                gold: 19000,
            }
            break

        case 36:
            info = {
                saphire: 40,
                gold: 20000,
            }
            break

        case 37:
            info = {
                saphire: 40,
                gold: 22000,
            }
            break

        case 38:
            info = {
                saphire: 40,
                gold: 24000,
            }
            break

        case 39:
            info = {
                saphire: 40,
                gold: 26000,
            }
            break

        case 40:
            info = {
                saphire: 40,
                gold: 28000,
            }
            break

        case 41:
            info = {
                saphire: 50,
                gold: 30000,
            }
            break

        case 42:
            info = {
                saphire: 50,
                gold: 32000,
            }
            break

        case 43:
            info = {
                saphire: 50,
                gold: 34000,
            }
            break

        case 44:
            info = {
                saphire: 50,
                gold: 36000,
            }
            break

        case 45:
            info = {
                saphire: 50,
                gold: 38000,
            }
            break

        case 46:
            info = {
                saphire: 65,
                gold: 40000,
            }
            break

        case 47:
            info = {
                saphire: 65,
                gold: 44000,
            }
            break

        case 48:
            info = {
                saphire: 65,
                gold: 48000,
            }
            break

        case 49:
            info = {
                saphire: 65,
                gold: 52000,
            }
            break

        case 50:
            info = {
                saphire: 65,
                gold: 56000,
            }
            break

        case 51:
            info = {
                saphire: 80,
                gold: 60000,
            }
            break

        case 52:
            info = {
                saphire: 80,
                gold: 64000,
            }
            break

        case 53:
            info = {
                saphire: 80,
                gold: 68000,
            }
            break

        case 54:
            info = {
                saphire: 80,
                gold: 72000,
            }
            break

        case 55:
            info = {
                saphire: 80,
                gold: 76000,
            }
            break

        case 56:
            info = {
                saphire: 100,
                gold: 80000,
            }
            break

        case 57:
            info = {
                saphire: 100,
                gold: 90000,
            }
            break

        case 58:
            info = {
                saphire: 100,
                gold: 100000,
            }
            break

        case 59:
            info = {
                saphire: 100,
                gold: 110000,
            }
            break

        case 60:
            info = {
                saphire: 100,
                gold: 120000,
            }
            break

        case 61:
            info = {
                saphire: 120,
                gold: 130000,
            }
            break

        case 62: // estimativa
            info = {
                saphire: 120,
                gold: 140000,
            }
            break

        case 63: // estimativa
            info = {
                saphire: 120,
                gold: 150000,
            }
            break

        case 64: // estimativa
            info = {
                saphire: 120,
                gold: 160000,
            }
            break

        case 65: // estimativa
            info = {
                saphire: 120,
                gold: 170000,
            }
            break

        case 66:
            info = {
                saphire: 140,
                gold: 180000,
            }
            break

        case 67:
            info = {
                saphire: 140,
                gold: 190000,
            }
            break

        case 68:
            info = {
                saphire: 140,
                gold: 200000,
            }
            break

        case 69:
            info = {
                saphire: 140,
                gold: 220000,
            }
            break

        case 70:
            info = {
                saphire: 140,
                gold: 240000,
            }
            break

        case 71:
            info = {
                saphire: 170,
                gold: 260000,
            }
            break

        case 72:
            info = {
                saphire: 170,
                gold: 280000,
            }
            break

        case 73:
            info = {
                saphire: 170,
                gold: 300000,
            }
            break

        case 74:
            info = {
                saphire: 170,
                gold: 320000,
            }
            break

        case 75:
            info = {
                saphire: 170,
                gold: 340000,
            }
            break

        case 76:
            info = {
                saphire: 200,
                gold: 360000,
            }
            break

        case 77:
            info = {
                saphire: 200,
                gold: 380000,
            }
            break

        case 78:
            info = {
                saphire: 200,
                gold: 400000,
            }
            break

        case 79:
            info = {
                saphire: 200,
                gold: 440000,
            }
            break

        case 80:
            info = {
                saphire: 200,
                gold: 480000,
            }
            break

        case 81:
            info = {
                saphire: 240,
                gold: 520000,
            }
            break

        case 82:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 83:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 84:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 85:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 86:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 87:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 88:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 89:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 90:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 91:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 92:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 93:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 94:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 95:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 96:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 97:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 98:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 99:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break

        case 100:
            info = {
                no_info: true,
                // saphire: 240,
                // gold: 520000,
            }
            break
    }

    return info
}
