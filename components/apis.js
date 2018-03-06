import AV from './leancloud';
import { LeanCloudResParser } from './utils';

// 获取当前用户
export const getUser = () => {
  const currentUser = AV.User.current();

  if (currentUser) {
    return LeanCloudResParser(currentUser);
  }

  return -1;
}

// 获取用户id
export const getUid = () => {
  const currentUser = AV.User.current();

  if (currentUser) {
    const { id } = LeanCloudResParser(currentUser);

    return id;
  }

  return -1;
}

// 获取打卡记录
export const getRecords = async () => {
  const uid = await getUid();
  const query = new AV.Query('Game');
  const User = AV.Object.createWithoutData('_User', uid);

  query.equalTo('user', User);
  query.include(['task']);
  query.descending('createdAt');

  let list = [];

  return query.find().then(results => {
    results.map(r => {
      list.push(Object.assign(LeanCloudResParser(r.attributes.task), {
        createdAt: r.createdAt
      }));
    });
    
    return list;
  }, function (error) {
    return [];
  });
}

// 获取积分
export const getScore =  async () => {
  const records = await getRecords();
  let score = {
    physical: 0,
    wisdom: 0,
    mileage: 0
  };

  records.map(r => {
    const { physical, wisdom, mileage } = r;

    score = {
      physical: score.physical + physical,
      wisdom: score.wisdom + wisdom,
      mileage: score.mileage + mileage,
    }
  });

  return score;
}