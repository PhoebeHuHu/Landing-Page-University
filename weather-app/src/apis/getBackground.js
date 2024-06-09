import sunnyBg from '../assets/background/Sunny_background.png'
import cloudyBg from '../assets/background/Cloudy_background.png'
import snowBg from '../assets/background/Snow_background.png'
import hailBg from '../assets/background/Hail_background.png'
import rainBg from '../assets/background/Rain_background.png'

export default function getBg(condition) {
    const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes('sunny') || lowerCaseCondition.includes('clear')) {
        return sunnyBg;
    } else if (lowerCaseCondition.includes('cloudy') || lowerCaseCondition.includes('overcast') || lowerCaseCondition.includes('mist') || lowerCaseCondition.includes('fog')) {
        return cloudyBg;
    } else if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle') || lowerCaseCondition.includes('shower') || lowerCaseCondition.includes('thunder')) {
        return rainBg;
    } else if (lowerCaseCondition.includes('sleet') || lowerCaseCondition.includes('ice') || lowerCaseCondition.includes('freezing')) {
        return hailBg;
    } else if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('blizzard')) {
        return snowBg;
    } else {
        return cloudyBg;
    }

}
