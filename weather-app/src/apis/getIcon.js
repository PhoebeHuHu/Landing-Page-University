import sunnyIcon from '../assets/weather_icon/Sunny.png'
import cloudyIcon from '../assets/weather_icon/Cloudy.png'
import snowIcon from '../assets/weather_icon/Snow.png'
import hailIcon from '../assets/weather_icon/Hail.png'
import rainIcon from '../assets/weather_icon/Rain.png'

export default function getIcon(condition) {
    const lowerCaseCondition = condition.toLowerCase();

    if (lowerCaseCondition.includes('sunny') || lowerCaseCondition.includes('clear')) {
        return sunnyIcon;
    } else if (lowerCaseCondition.includes('cloudy') || lowerCaseCondition.includes('overcast') || lowerCaseCondition.includes('mist') || lowerCaseCondition.includes('fog')) {
        return cloudyIcon;
    } else if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle') || lowerCaseCondition.includes('shower') || lowerCaseCondition.includes('thunder')) {
        return rainIcon;
    } else if (lowerCaseCondition.includes('sleet') || lowerCaseCondition.includes('ice') || lowerCaseCondition.includes('freezing')) {
        return hailIcon;
    } else if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('blizzard')) {
        return snowIcon;
    } else {
        return cloudyIcon;
    }

}
