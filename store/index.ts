import { v4 as uuidv4 } from "uuid";
export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if(!state.cart.length) return 0
    return state.cart?.reduce((accumulator, next) => accumulator + +next.combinedPrice, 0) 
  },

  totalCount: state => {
    return state.cart?.reduce((accumulator, next) => accumulator + +next.count, 0) 
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart: (state, formOutput) => {
    formOutput.id = uuidv4();
    state.cart.push(formOutput);
  }
};
const headers: Record<string, string> = {
  "Content-Type": "application/json",
  "x-api-key": process.env.AWS_API_KEY || ""
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
