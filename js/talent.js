
function calcTalent()
{
    kTEXT_TALENT_MIN = document.getElementById(kTEXT_TALENT_MIN_ID)
    kTEXT_TALENT_MAX = document.getElementById(kTEXT_TALENT_MAX_ID)

    level_min = kTEXT_TALENT_MIN.value
    level_max = kTEXT_TALENT_MAX.value
    // console.log("level_min [%s] level_max [%s]", level_min, level_max)

    if (!validate_talent(level_min, "min"))
        return
    else if (!validate_talent(level_max, "max"))
        return
    else if (level_min > level_max)
    {
        alert(kMSG_TALENT_ERROR)
        kTEXT_TALENT_MIN.focus()
        return
    }

    var gold = 0
    for (var i = parseInt(level_min); i <= parseInt(level_max); i++)
    {
        var info = get_talent_info(i)
        if (info && info.gold)
        {
            gold += info.gold
        }
    }
    // console.log("gold [%s] [%s]", gold, gold.toLocaleString())

    kSPAN_TALENT_GOLD = document.getElementById(kSPAN_TALENT_GOLD_ID)
    kSPAN_TALENT_GOLD.textContent = "Gold: " + gold.toLocaleString()
}

function validate_talent(level, order)
{
    if (isNaN(level) || level < 1 || level > 171)
    {
        alert(kMSG_TALENT_ERROR)
        if (order == "min")
            kTEXT_TALENT_MIN.focus()
        else if (order == "max")
            kTEXT_TALENT_MAX.focus()

        return false
    }

    return true
}

function get_talent_info(level)
{
    var info

    switch (level)
    {
        case 1:
            info = {
                gold: 200,
            }
            break

        case 2:
            info = {
                gold: 250,
            }
            break

        case 3:
            info = {
                gold: 300,
            }
            break

        case 4:
            info = {
                gold: 350,
            }
            break

        case 5:
            info = {
                gold: 400,
            }
            break

        case 6:
            info = {
                gold: 450,
            }
            break

        case 7:
            info = {
                gold: 500,
            }
            break

        case 8:
            info = {
                gold: 600,
            }
            break

        case 9:
            info = {
                gold: 700,
            }
            break

        case 10:
            info = {
                gold: 800,
            }
            break

        case 11:
            info = {
                gold: 900,
            }
            break

        case 12:
            info = {
                gold: 1000,
            }
            break

        case 13:
            info = {
                gold: 1200,
            }
            break

        case 14:
            info = {
                gold: 1400,
            }
            break

        case 15:
            info = {
                gold: 1600,
            }
            break

        case 16:
            info = {
                gold: 1800,
            }
            break

        case 17:
            info = {
                gold: 2000,
            }
            break

        case 18:
            info = {
                gold: 2200,
            }
            break

        case 19:
            info = {
                gold: 2400,
            }
            break

        case 20:
            info = {
                gold: 2600,
            }
            break

        case 21:
            info = {
                gold: 2800,
            }
            break

        case 22:
            info = {
                gold: 3000,
            }
            break

        case 23:
            info = {
                gold: 3500,
            }
            break

        case 24:
            info = {
                gold: 4000,
            }
            break

        case 25:
            info = {
                gold: 4500,
            }
            break

        case 26:
            info = {
                gold: 5000,
            }
            break

        case 27:
            info = {
                gold: 5500,
            }
            break

        case 28:
            info = {
                gold: 6000,
            }
            break

        case 29:
            info = {
                gold: 6500,
            }
            break

        case 30:
            info = {
                gold: 7000,
            }
            break

        case 31:
            info = {
                gold: 7500,
            }
            break

        case 32:
            info = {
                gold: 8000,
            }
            break

        case 33:
            info = {
                gold: 8500,
            }
            break

        case 34:
            info = {
                gold: 9000,
            }
            break

        case 35:
            info = {
                gold: 9500,
            }
            break

        case 36:
            info = {
                gold: 10000,
            }
            break

        case 37:
            info = {
                gold: 11000,
            }
            break

        case 38:
            info = {
                gold: 12000,
            }
            break

        case 39:
            info = {
                gold: 13000,
            }
            break

        case 40:
            info = {
                gold: 14000,
            }
            break

        case 41:
            info = {
                gold: 15000,
            }
            break

        case 42:
            info = {
                gold: 16000,
            }
            break

        case 43:
            info = {
                gold: 17000,
            }
            break

        case 44:
            info = {
                gold: 18000,
            }
            break

        case 45:
            info = {
                gold: 19000,
            }
            break

        case 46:
            info = {
                gold: 20000,
            }
            break

        case 47:
            info = {
                gold: 22000,
            }
            break

        case 48:
            info = {
                gold: 24000,
            }
            break

        case 49:
            info = {
                gold: 26000,
            }
            break

        case 50:
            info = {
                gold: 28000,
            }
            break

        case 51:
            info = {
                gold: 30000,
            }
            break

        case 52:
            info = {
                gold: 32000,
            }
            break

        case 53:
            info = {
                gold: 34000,
            }
            break

        case 54:
            info = {
                gold: 36000,
            }
            break

        case 55:
            info = {
                gold: 38000,
            }
            break

        case 56:
            info = {
                gold: 40000,
            }
            break

        case 57:
            info = {
                gold: 42000,
            }
            break

        case 58:
            info = {
                gold: 44000,
            }
            break

        case 59:
            info = {
                gold: 46000,
            }
            break

        case 60:
            info = {
                gold: 48000,
            }
            break

        case 61:
            info = {
                gold: 50000,
            }
            break

        case 62:
            info = {
                gold: 55000,
            }
            break

        case 63:
            info = {
                gold: 60000,
            }
            break

        case 64:
            info = {
                gold: 65000,
            }
            break

        case 65:
            info = {
                gold: 70000,
            }
            break

        case 66:
            info = {
                gold: 75000,
            }
            break

        case 67:
            info = {
                gold: 80000,
            }
            break

        case 68:
            info = {
                gold: 85000,
            }
            break

        case 69:
            info = {
                gold: 90000,
            }
            break

        case 70:
            info = {
                gold: 95000,
            }
            break

        case 71:
            info = {
                gold: 100000,
            }
            break

        case 72:
            info = {
                gold: 105000,
            }
            break

        case 73:
            info = {
                gold: 110000,
            }
            break

        case 74:
            info = {
                gold: 115000,
            }
            break

        case 75:
            info = {
                gold: 120000,
            }
            break

        case 76:
            info = {
                gold: 125000,
            }
            break

        case 77:
            info = {
                gold: 130000,
            }
            break

        case 78:
            info = {
                gold: 135000,
            }
            break

        case 79:
            info = {
                gold: 140000,
            }
            break

        case 80:
            info = {
                gold: 145000,
            }
            break

        case 81:
            info = {
                gold: 150000,
            }
            break

        case 82:
            info = {
                gold: 160000,
            }
            break

        case 83:
            info = {
                gold: 170000,
            }
            break

        case 84:
            info = {
                gold: 180000,
            }
            break

        case 85:
            info = {
                gold: 190000,
            }
            break

        case 86:
            info = {
                gold: 200000,
            }
            break

        case 87:
            info = {
                gold: 210000,
            }
            break

        case 88:
            info = {
                gold: 220000,
            }
            break

        case 89:
            info = {
                gold: 230000,
            }
            break

        case 90:
            info = {
                gold: 240000,
            }
            break

        case 91:
            info = {
                gold: 250000,
            }
            break

        case 92:
            info = {
                gold: 260000,
            }
            break

        case 93:
            info = {
                gold: 270000,
            }
            break

        case 94:
            info = {
                gold: 280000,
            }
            break

        case 95:
            info = {
                gold: 290000,
            }
            break

        case 96:
            info = {
                gold: 300000,
            }
            break

        case 97:
            info = {
                gold: 320000,
            }
            break

        case 98:
            info = {
                gold: 340000,
            }
            break

        case 99:
            info = {
                gold: 360000,
            }
            break

        case 100:
            info = {
                gold: 380000,
            }
            break

        case 101:
            info = {
                gold: 400000,
            }
            break

        case 102:
            info = {
                gold: 420000,
            }
            break

        case 103:
            info = {
                gold: 440000,
            }
            break

        case 104:
            info = {
                gold: 460000,
            }
            break

        case 105:
            info = {
                gold: 480000,
            }
            break

        case 106:
            info = {
                gold: 500000,
            }
            break

        case 107:
            info = {
                gold: 520000,
            }
            break

        case 108:
            info = {
                gold: 540000,
            }
            break

        case 109:
            info = {
                gold: 560000,
            }
            break

        case 110:
            info = {
                gold: 580000,
            }
            break

        case 111:
            info = {
                gold: 600000,
            }
            break

        case 112:
            info = {
                gold: 620000,
            }
            break

        case 113:
            info = {
                gold: 640000,
            }
            break

        case 114:
            info = {
                gold: 670000,
            }
            break

        case 115:
            info = {
                gold: 700000,
            }
            break

        case 116:
            info = {
                gold: 730000,
            }
            break

        case 117:
            info = {
                gold: 760000,
            }
            break

        case 118:
            info = {
                gold: 790000,
            }
            break

        case 119:
            info = {
                gold: 820000,
            }
            break

        case 120:
            info = {
                gold: 850000,
            }
            break

        case 121:
            info = {
                gold: 880000,
            }
            break

        case 122:
            info = {
                gold: 910000,
            }
            break

        case 123:
            info = {
                gold: 940000,
            }
            break

        case 124:
            info = {
                gold: 970000,
            }
            break

        case 125:
            info = {
                gold: 1000000,
            }
            break

        case 126:
            info = {
                gold: 1040000,
            }
            break

        case 127:
            info = {
                gold: 1080000,
            }
            break

        case 128:
            info = {
                gold: 1120000,
            }
            break

        case 129:
            info = {
                gold: 1160000,
            }
            break

        case 130:
            info = {
                gold: 1200000,
            }
            break

        case 131:
            info = {
                gold: 1240000,
            }
            break

        case 132:
            info = {
                gold: 1280000,
            }
            break

        case 133:
            info = {
                gold: 1320000,
            }
            break

        case 134:
            info = {
                gold: 1360000,
            }
            break

        case 135:
            info = {
                gold: 1400000,
            }
            break

        case 136:
            info = {
                gold: 1440000,
            }
            break

        case 137:
            info = {
                gold: 1480000,
            }
            break

        case 138:
            info = {
                gold: 1520000,
            }
            break

        case 139:
            info = {
                gold: 1560000,
            }
            break

        case 140:
            info = {
                gold: 1600000,
            }
            break

        case 141:
            info = {
                gold: 1650000,
            }
            break

        case 142:
            info = {
                gold: 1700000,
            }
            break

        case 143:
            info = {
                gold: 1750000,
            }
            break

        case 144:
            info = {
                gold: 1800000,
            }
            break

        case 145:
            info = {
                gold: 1850000,
            }
            break

        case 146:
            info = {
                gold: 1900000,
            }
            break

        case 147:
            info = {
                gold: 1950000,
            }
            break

        case 148:
            info = {
                gold: 2000000,
            }
            break

        case 149:
            info = {
                gold: 2100000,
            }
            break

        case 150:
            info = {
                gold: 2200000,
            }
            break

        case 151:
            info = {
                gold: 2300000,
            }
            break

        case 152:
            info = {
                gold: 2400000,
            }
            break

        case 153:
            info = {
                gold: 2500000,
            }
            break

        case 154:
            info = {
                gold: 2600000,
            }
            break

        case 155:
            info = {
                gold: 2700000,
            }
            break

        case 156:
            info = {
                gold: 2800000,
            }
            break

        case 157:
            info = {
                gold: 2900000,
            }
            break

        case 158:
            info = {
                gold: 3000000,
            }
            break

        case 159:
            info = {
                gold: 3200000,
            }
            break

        case 160:
            info = {
                gold: 3400000,
            }
            break

        case 161:
            info = {
                gold: 3600000,
            }
            break

        case 162:
            info = {
                gold: 3800000,
            }
            break

        case 163:
            info = {
                gold: 4000000,
            }
            break

        case 164:
            info = {
                gold: 4200000,
            }
            break

        case 165:
            info = {
                gold: 4400000,
            }
            break

        case 166:
            info = {
                gold: 4600000,
            }
            break

        case 167:
            info = {
                gold: 4800000,
            }
            break

        case 168:
            info = {
                gold: 5000000,
            }
            break

        case 169:
            info = {
                gold: 5500000,
            }
            break

        case 170:
            info = {
                gold: 6000000,
            }
            break

        case 171:
            info = {
                gold: 6500000,
            }
            break
    }

    return info
}
