import { getAllNotificationsByUser } from "./notifications";

describe('', () => {
  it('getAllNotificationsByUser returns correct notifications for given user id', () => {
      const jsonData = [
        {
          guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          isRead: true,
          type: "urgent",
          value:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
          guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
          isRead: false,
          type: "urgent",
          value:
            "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
        }
      ];
    
      const userId = '5debd764a7c57c7839d722e9';
      const result = getAllNotificationsByUser(userId);
    
      expect(result).toEqual(expect.arrayContaining(jsonData));
  });

})

// test('normalizedData should return normalized data', () => {
//   const expectedResult = [
//     '5debd76480edafc8af244228',
//     '5debd764507712e7a1307303',
//     '5debd76444dd4dafea89d53b',
//     '5debd76485ee4dfd1284f97b',
//     '5debd7644e561e022d66e61a',
//     '5debd7644aaed86c97bf9d5e',
//     '5debd76413f0d5e5429c28a0',
//     '5debd7642e815cd350407777',
//     '5debd764c1127bc5a490a4d0',
//     '5debd7646ef31e0861ec1cab',
//     '5debd764a4f11eabef05a81d',
//     '5debd764af0fdd1fc815ad9b',
//     '5debd76468cb5b277fd125f4',
//     '5debd764de9fa684468cdc0b'
//   ];

//   expect(normalizedData.result).toEqual(expect.arrayContaining(expectedResult));

// })