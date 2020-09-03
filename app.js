// Create the Data
const data = [{
  name: 'John Doe',
  age: 31,
  gender: 'male',
  lookingfor: 'male',
  location: 'Berlin DE',
  image: 'https://randomuser.me/api/portraits/men/47.jpg'
},
{
  name: 'Sara Smith',
  age: 25,
  gender: 'female',
  lookingfor: 'male',
  location: 'Cologne DE',
  image: 'https://randomuser.me/api/portraits/women/47.jpg'
},
{
  name: 'William Thompson',
  age: 39,
  gender: 'male',
  lookingfor: 'female',
  location: 'Hamburg DE',
  image: 'https://randomuser.me/api/portraits/men/83.jpg'
},
];

const profiles = profileIterator(data);

// Call First Profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


// Next Profile Display
function nextProfile() {

  // Iterate with profiles.next().value
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    // Profile Display
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    // Image Display
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Create Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ? {
        value: profiles[nextIndex++],
        done: false
      } : {
          done: true
        }
    }
  };
};