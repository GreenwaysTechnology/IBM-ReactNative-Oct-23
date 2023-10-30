
//Is it Pure..Impure function
// function updateProfile(profile, city) {
//     profile.city = city
//     return profile
// }
//ways to write immutablity : Pattern 1
// function updateProfile(profile, city) {
//     //new Profile Object
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }
//Pattern 2
// function updateProfile(profile, city) {
//     //clone method
//     return Object.assign({}, profile, { city: city })
// }
//pattern 3:
function updateProfile(profile, city) {
    // Using spread notation
    return {
        ...profile,city:city
    }
}

const profile = {
    id: 1,
    name: 'Subramaian',
    city: 'New York'
}
console.log('Before update', profile)
const updatedProfile = updateProfile(profile, 'Coimbatore')
//check the profile
console.log(profile === updatedProfile ? "Same object" : "Different Object")
console.log('After update', updatedProfile)
