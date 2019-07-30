
export function isEmptyField(item_to_check) {
    if (
      item_to_check == null ||
      item_to_check == undefined ||
      item_to_check == "" ||
      item_to_check == "null"
    )
      return true;
    return false;
  }
  
  export function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }