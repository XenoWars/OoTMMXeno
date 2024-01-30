import { makeTestSeed } from '../helper';

test("Can make a seed - dungeon conds", () => {
  makeTestSeed("DUNGEON CONDS", {
    rainbowBridge: 'custom',
    specialConds: {
      BRIDGE: {
        count: 12,
        stones: false,
        medallions: false,
        remains: false,
        dungeons: true,
        skullsGold: false,
        skullsSwamp: false,
        skullsOcean: false,
        fairiesWF: false,
        fairiesSH: false,
        fairiesGB: false,
        fairiesST: false,
        fairyTown: false,
        masksRegular: false,
        masksTransform: false,
        masksOot: false,
        triforce: false,
        coinsRed: false,
        coinsGreen: false,
        coinsBlue: false,
        coinsYellow: false
      }
    }
  });
});
