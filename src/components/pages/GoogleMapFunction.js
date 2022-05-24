const GOOGLE_MAP_API_WWW = 'https://www.googleapis.com'
const GOOGLE_MAP_API_MAPS = 'https://maps.googleapis.com'
const GOOGLE_API_KEY = ''
const SERVER_URL = 'http://localhost:3001'

export async function getCurrentLatLng() {
    let postBody = {
        "homeMobileCountryCode": 852,
        "homeMobileNetworkCode": 852,
        "radioType": "gsm",
        "carrier": "",
        "considerIp": true,
        "cellTowers": [],
        "wifiAccessPoints": []
    }
    try {
        console.log(`${GOOGLE_MAP_API_WWW}/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`)
        const geoLocationRespond = await fetch(`${GOOGLE_MAP_API_WWW}/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(postBody)
        })
        console.log(geoLocationRespond)
        if (geoLocationRespond.status === 200) {
            let geoLocationResult = await geoLocationRespond.json()
            console.log(geoLocationResult)
            console.log(geoLocationResult?.location?.lat ?? 0)
            return {
                code: "0",
                lat: geoLocationResult?.location?.lat ?? 0,
                lng: geoLocationResult?.location?.lng ?? 0,
                accuracy: geoLocationResult?.accuracy,
            }
        }
    } catch (e) {
        console.error(e)
    }
    return {
        code: "-1",
        lat: 0,
        lng: 0,
        accuracy: 0,
    }
}

export async function getAddressByLatLng(lat, lng) {
    console.log(`getAddressByLatLng`)
    try {
        const getReverseCodingRespond = await fetch(`${SERVER_URL}/geocode`, {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({
                lat:lat,
                lng:lng
            })
        })
        if (getReverseCodingRespond.status === 200) {
            let getReverseCodingResult = await getReverseCodingRespond.json()
            return {
                code: "0",
                fullAddress:getReverseCodingResult?.results?.[0]?.formatted_address??""
            }
        }
    } catch (e) {
        console.error(e)
    }
    return {
        code: "-1",
        fullAddress:""
    }
}
