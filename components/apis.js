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

  if (uid === -1){
    return;
  }

  const query = new AV.Query('Game');
  const User = AV.Object.createWithoutData('_User', uid);

  query.equalTo('user', User);
  query.include(['task']);
  query.descending('createdAt');

  let list = [];

  return query.find().then(results => {
    if (results && results.length) {
      results.map(r => {
        list.push(Object.assign(LeanCloudResParser(r.attributes.task), {
          createdAt: r.createdAt
        }));
      });
    }
    
    return list;
  }).catch((error) => {
    console.error(error, 'Promise error');
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

  if (records && records.length) {
    records.map(r => {
      const { physical, wisdom, mileage } = r;
  
      score = {
        physical: score.physical + physical,
        wisdom: score.wisdom + wisdom,
        mileage: score.mileage + mileage,
      }
    });
  }

  return score;
}

// 获取用户等级信息
export const getUserLevel = async () => {
  const score = await getScore();
  const { physical, wisdom } = score;
  let levelList = [];
  let userLevel = {
    level: 1,
    physical: 100,
    wisdom: 100
  };

  const query = new AV.Query('Level');

  return query.find().then(res => {
    if (res && res.length) {
      res.map(r => {
        levelList.push(LeanCloudResParser(r));
      });
  
      levelList.map(item => {
        const { level, physical: levelPhysical, wisdom: levelWisdom } = item;
  
        switch(level) {
          case 2:
            if (physical > levelPhysical && wisdom > levelWisdom) {
              userLevel = {
                level,
                physical: levelPhysical,
                wisdom: levelWisdom
              };
            }
            break;
        }
      });
    }

    return userLevel;
  });
}

// 设置当前交通工具
export const setVehicle = async (vehicle) => {
  const uid = await getUid();

  if (uid === -1){
    return;
  }

  const User = AV.Object.createWithoutData('_User', uid);
  // const VehicleList = await getVehicleList(vehicle);
  // const v = AV.Object.createWithoutData('Vehicle', VehicleList[0].id);

  User.set('vehicle', vehicle);

  User.save().then(() => {
    console.log('set vehicle successfully!');
  });
}

// 获取所有交通工具
export const getVehicleList = (type) => {
  const query = new AV.Query('Vehicle');

  if (type) {
    query.equalTo('key', type);
  }

  return query.find().then(results => {
    let list = [];

    if (results && results.length) {
      results.map(r => {
        list.push(LeanCloudResParser(r));
      });
    }

    return list;
  });
}

// 获取我的交通工具
export const getMyVehicle = async () => {
  const uid = await getUid();

  if (uid === -1){
    return;
  }

  const query = new AV.Query('_User');

  return query.get(uid).then(user => {
    return {
      vehicle: user.get('vehicle'),
      garage: user.get('garage')
    };
  });
}

// task list
export const getTaskList = () => {
  const query = new AV.Query('Task');

  return query.find().then(results => {
    let data = [];

    if (results && results.length) {
      results.map(r => {
        data.push(LeanCloudResParser(r));
      });
    }

    return data;
  }, function (error) {
    console.error(error, 'Promise error');
  });
}

export const getGroupTaskList = async () => {
  const list = await getTaskList();
  let group = {};

  if (list && list.length) {
    list.map(item => {
      if (!group[item.group]) {
        group[item.group] = [];
      }

      group[item.group].push(item);
    });
  }

  return group;
}

export const getDestinationList = () => {
  const query = new AV.Query('Destination');

  return query.find().then(results => {
    let data = [];

    if (results && results.length) {
      results.map(r => {
        data.push(LeanCloudResParser(r));
      });
    }

    return data;
  }).catch((error) => {
    console.error(error, 'Promise error');
  });
}

export const getMyDestination = async () => {
  const uid = await getUid();

  if (uid === -1){
    return;
  }

  const query = new AV.Query('_User');

  query.include(['travel']);

  return query.get(uid).then(user => {
    if (user.get('travel')) {
      return {
        ...LeanCloudResParser(user.get('travel'))
      };
    }

    return {};
  }).catch((error) => {
    console.error(error, 'Promise error');
  });
}

// 获取旅行记录
export const getTravelList = async () => {
  const uid = await getUid();

  if (uid === -1){
    return;
  }

  const query = new AV.Query('Travel');
  const User = AV.Object.createWithoutData('_User', uid);

  query.equalTo('user', User);
  query.include(['destination', 'objectId']);
  query.descending('createdAt');

  let list = [];

  return query.find().then(results => {
    if (results && results.length) {
      results.map(r => {
        const { endTime, startTime, status, destination } = r.attributes;
        const des = LeanCloudResParser(destination);
        const composed = {
          destination: des,
          endTime,
          startTime,
          status,
          travelId: r.id
        };

        list.push(composed);
      });
    }

    return list;
  }).catch((error) => {
    console.error(error, 'Promise error');
  });
}

export const setTravelStatus = async (id) => {
  const Travel = AV.Object.createWithoutData('Travel', id);

  Travel.set('status', 'archived');
  Travel.save().then(() => {
    console.log('set travel archived successfully!');
  });
}