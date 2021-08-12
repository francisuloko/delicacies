export default class counter {
    meals(){
      const meals = api.get(api.urls.meals)
      const len = meals.then((meals) => meals.meals.length);
      return len
    }
}