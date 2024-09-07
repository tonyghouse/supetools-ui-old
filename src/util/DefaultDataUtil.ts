export const defaultJson: string = `{
  "teamName": "Cosmic Defenders",
  "baseCity": "Nova Town",
  "established": 2018,
  "headquarters": "Orbit Station",
  "isActive": true,
  "teamMembers": [
    {
      "name": "Photon Phantom",
      "age": 31,
      "secretIdentity": "Emmet Blake",
      "powers": ["Light speed", "Laser vision", "Photon shields"]
    },
    {
      "name": "Gravity Guru",
      "age": 45,
      "secretIdentity": "Tara Wells",
      "powers": ["Gravity manipulation", "Time dilation", "Mass increase"]
    },
    {
      "name": "Spectral Sorceress",
      "age": 357,
      "secretIdentity": "Unknown",
      "powers": ["Spirit summoning", "Energy blasts", "Telekinesis", "Astral projection", "Dimensional rifts"]
    },
    {
      "name": "Captain Cosmic",
      "age": 29,
      "secretIdentity": "Hank Howard",
      "powers": ["Interstellar flight", "Supernova burst", "Alien technology manipulation"]
    }
  ]
}`;


export const defaultYaml: string = `
teamName: Cosmic Defenders
baseCity: Nova Town
established: 2018
headquarters: Orbit Station
isActive: true
teamMembers:
  - name: Photon Phantom
    age: 31
    secretIdentity: Emmet Blake
    powers:
      - Light speed
      - Laser vision
      - Photon shields
  - name: Gravity Guru
    age: 45
    secretIdentity: Tara Wells
    powers:
      - Gravity manipulation
      - Time dilation
      - Mass increase
  - name: Spectral Sorceress
    age: 357
    secretIdentity: Unknown
    powers:
      - Spirit summoning
      - Energy blasts
      - Telekinesis
      - Astral projection
      - Dimensional rifts
  - name: Captain Cosmic
    age: 29
    secretIdentity: Hank Howard
    powers:
      - Interstellar flight
      - Supernova burst
      - Alien technology manipulation
`;

export const defaultToml: string = `
teamName = "Cosmic Defenders"
baseCity = "Nova Town"
established = 2018
headquarters = "Orbit Station"
isActive = true
[[teamMembers]]
name = "Photon Phantom"
age = 31
secretIdentity = "Emmet Blake"
powers = [ "Light speed", "Laser vision", "Photon shields" ]
[[teamMembers]]
name = "Gravity Guru"
age = 45
secretIdentity = "Tara Wells"
powers = [ "Gravity manipulation", "Time dilation", "Mass increase" ]
[[teamMembers]]
name = "Spectral Sorceress"
age = 357
secretIdentity = "Unknown"
powers = [
"Spirit summoning",
"Energy blasts",
"Telekinesis",
"Astral projection",
"Dimensional rifts"
]
[[teamMembers]]
name = "Captain Cosmic"
age = 29
secretIdentity = "Hank Howard"
powers = [
"Interstellar flight",
"Supernova burst",
"Alien technology manipulation"
]
`;



export const defaultXml: string = `<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <teamName>Cosmic Defenders</teamName>
  <baseCity>Nova Town</baseCity>
  <established>2018</established>
  <headquarters>Orbit Station</headquarters>
  <isActive>true</isActive>
  <teamMembers>
    <name>Photon Phantom</name>
    <age>31</age>
    <secretIdentity>Emmet Blake</secretIdentity>
    <powers>Light speed</powers>
    <powers>Laser vision</powers>
    <powers>Photon shields</powers>
  </teamMembers>
  <teamMembers>
    <name>Gravity Guru</name>
    <age>45</age>
    <secretIdentity>Tara Wells</secretIdentity>
    <powers>Gravity manipulation</powers>
    <powers>Time dilation</powers>
    <powers>Mass increase</powers>
  </teamMembers>
  <teamMembers>
    <name>Spectral Sorceress</name>
    <age>357</age>
    <secretIdentity>Unknown</secretIdentity>
    <powers>Spirit summoning</powers>
    <powers>Energy blasts</powers>
    <powers>Telekinesis</powers>
    <powers>Astral projection</powers>
    <powers>Dimensional rifts</powers>
  </teamMembers>
  <teamMembers>
    <name>Captain Cosmic</name>
    <age>29</age>
    <secretIdentity>Hank Howard</secretIdentity>
    <powers>Interstellar flight</powers>
    <powers>Supernova burst</powers>
    <powers>Alien technology manipulation</powers>
  </teamMembers>
</root>`;

export const defaultTableJson = `[
  {
  "currencyId": 159,
  "currency": "Turkmenistan manat",
  "symbol": "m.",
  "isoCode": "TMT",
  "createdDate": "2024-06-13T05:53:43.067Z",
  "createdUserId": 2,
  "updatedDate": "2024-08-30T08:14:38.523Z",
  "updatedUserId": 21
  },
  {
  "currencyId": 160,
  "currency": "Tuvaluan dollar",
  "symbol": "$",
  "isoCode": "TVD",
  "createdDate": "2024-06-13T05:53:43.067Z",
  "createdUserId": 2,
  "updatedDate": "2024-08-30T08:14:38.797Z",
  "updatedUserId": 21
  },
  {
  "currencyId": 173,
  "currency": "Zambian kwacha",
  "symbol": "ZK",
  "isoCode": "ZMW",
  "createdDate": "2024-06-13T05:53:43.067Z",
  "createdUserId": 2,
  "updatedDate": "2024-08-30T08:14:42.403Z",
  "updatedUserId": 21
  }
  ]`;


export const defaultDataMap = {
    json: defaultJson,
    yaml: defaultYaml,
    toml: defaultToml,
    xml: defaultXml,
    tableJson: defaultTableJson,
  };