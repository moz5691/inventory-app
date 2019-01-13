import moment from 'moment';

const filterHelper = (inventories,{text, sortBy, startDate, endDate} ) => {

  return inventories.filter((inventory) => {
    const entryDateMoment = moment(inventory.entryDate);
    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);
    console.log('entryDate', entryDateMoment, 'startDate', startDateMoment, 'endDate', endDateMoment)
    let startDateBoolean = false;
    let endDateBoolean = false;
    // in case no startDate
    if (startDate) {
      startDateBoolean = startDateMoment.isSameOrBefore(entryDateMoment,"day");
    }
    // in case no endDate
    if (endDate) {
      endDateBoolean = endDateMoment.isSameOrAfter(entryDateMoment,"day");
    }
    const textBoolean = inventory.title.toLowerCase().includes(text.toLowerCase());
    return startDateBoolean && endDateBoolean && textBoolean;
  }).sort((a,b) => {
    if( sortBy === "date"){
      return a.entryDate < b.entryDate ? 1 : -1
    } else if(sortBy === "price"){
      return a.itemPrice < b.itemPrice ? 1 : -1
    } else if(sortBy === "qtyIn"){
      return a.qtyIn < b.qtyIn ? 1 : -1
    } else if(sortBy === "qtySold"){
      return a.qtySold < b.qtySold ? 1 : -1
    } else
    return
  })

}

export default filterHelper;
