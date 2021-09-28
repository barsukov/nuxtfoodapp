export const state = () => ({
  fooddata: []
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  }
};
const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "x-api-key": process.env.AWS_API_KEY || ''
};

export const actions = {
  async getFoodData({ state, commit }) {
    try {
      if (state.fooddata.length) return;
      const fetchApiUrl =
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants";
      await fetch(fetchApiUrl, {
        headers: headers
      })
        .then(response => response.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (e) {
      console.log("e");
    }
  }
};
