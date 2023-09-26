// const jsonData = JSON.parse(require('fs').readFileSync('./notifications.json', 'utf-8'));
// const { normalize, schema } = require('normalizr')
import jsonData from '../../notifications.json'
import { normalize, schema } from 'normalizr';

// const user = new schema.Entity('users');
// const message = new schema.Entity('messages', {}, {
//   idAttribute: 'guid'
// });
// const notification = new schema.Entity('jsonData', {
//   author: user,
//   context: message
// });

// const normalizedData = normalize(jsonData, [notification]);

// function getAllNotificationsByUser(userId) {
//   const notificationsEntity = normalizedData.entities.jsonData;
//   const messagesEntity = normalizedData.entities.messages;
//   const result = [];

//   for (let key in notificationsEntity) {
//     if (notificationsEntity[key].author === userId) {
//       const context = notificationsEntity[key].context;
//       result.push(messagesEntity[context]);
//     }
//   }

//   return result;
// };

export function getAllNotificationsByUser(userId) {
  return jsonData
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}

// console.log(normalizedData.entities.notifications('5debd7642e815cd350407777'))
console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'))
