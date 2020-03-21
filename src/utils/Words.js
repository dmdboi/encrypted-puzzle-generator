const nouns = [
    'time',
    'year',
    'people',
    'way',
    'down',
    'day',
    'man',
    'thing',
    'woman',
    'life',
    'child',
    'world',
    'school',
    'state',
    'family',
    'student',
    'group',
    'government',
    'problem',
    'number',
    'night',
    'bedroom',
    'program',
    'question',
    'home',
    'point',
    'business',
    'netflix',
    'amazon',
    'google',
    'member',
    'information',
    'education',
    'morning',
    'disappearance',
    'others',
    'level'
]

function randomizeWords() {
    let words = []
    for(var i = 0; i < 20; i++ ) {
        words.push(nouns[Math.floor(Math.random()*nouns.length)])
    }
    return words
};

export default randomizeWords