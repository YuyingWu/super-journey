import AV from 'leancloud-storage';

const AVInstance = AV;

if(!AVInstance.applicationId){
  const appId = 'Do5NpSTuP2APFE9wQAvDxmxM-gzGzoHsz';
  const appKey = 'TL0dh8sMu3m6MMaEukSxPfon';
  AVInstance.init({ appId, appKey });
}

export default AVInstance;