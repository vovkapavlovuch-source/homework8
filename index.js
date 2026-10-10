const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for(const name of friends)
{
    string += name + ',';
}
console.log(string);
console.log(friends.join(','));

const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']
const cardToRemove = cards.splice(cards.indexOf('Карточка-3'), 1);
const cardToInsert = cards.splice(0, 0, 'Карточка-6');
const cardToUpdate = cards.splice(2, 1, 'Карточка-4');
console.log(cards);

