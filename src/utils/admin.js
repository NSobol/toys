class ApiAdmin {
  getAnalytics() {
    return fetch(
      `https://api-metrika.yandex.net/stat/v1/data/bytime?metrics=ym:s:hits&date1=10daysAgo&date2=today&group=day&id=94010807`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((data) => Promise.reject(data));
    });
  }

  getAnalyticTraffic() {
    return fetch(
      `https://api-metrika.yandex.net/stat/v1/data/bytime?row_ids=[["direct"],["organic","organic.yandex"],["social","social.ya"],["ad"]]&date1=2023-06-07&date2=2023-06-21&group=day&dimensions=ym:s:<attribution>TrafficSource,ym:s:<attribution>SourceEngine&attribution=last&ids=94010807&metrics=ym:s:visits`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      return res.ok
        ? res.json()
        : res.json().then((data) => Promise.reject(data));
    });
  }
}

export const apiAdmin = new ApiAdmin();