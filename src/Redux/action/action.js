export const Add = (item) => {
  return {
    type: "add_to_cart",
    payload: item,
  };
};


export const Remove = (id)=>{
    return{
        name:"remove_from_cart",
        pauyload: id
    }
}