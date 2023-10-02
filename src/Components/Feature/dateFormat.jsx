const dateFormat = (date) => {
    const tempDay = date.getDay();
    let day;
    const tempMonth = date.getMonth();
    let month;
    const year = date.getFullYear();
    const mDay  = date.getDate()


    //day filter 
    switch (tempDay)
    {
        case 0:
            day = 'Sunday'
            break;
        case 1:
            day = 'Monday'
            break;
        case 2:
            day = 'Tuesday'
            break;
        case 3:
            day = 'Wednesday'
            break;
        case 4:
            day = 'Thursday'
            break;
        case 5:
            day = 'Friday'
            break;
        case 6:
            day = 'Saturday'
            break;
        default:
            day ="Not"
    }



    //month format
    switch(tempMonth)
    {
        case 0 :
            month = 'Jan';
            break;
        
        case 1 :
            month = 'Feb';
            break;
        
        case 2 :
            month = 'Mar';
            break;
        
        case 3 :
            month = 'Apr';
            break;
        
        case 4 :
            month = 'May';
            break;
        
        case 5 :
            month = 'Jun';
            break;
        
        case 6 :
            month = 'Jul';
            break;
        
        case 7 :
            month = 'Aug';
            break;
        
        case 8 :
            month = 'Sept';
            break;
        
        case 9 :
            month = 'Oct';
            break;
        
        case 10 :
            month = 'Nov';
            break;
        
        case 11 :
            month = 'Dec';
            break;
        
    }


    const FormatedDate ={
        'mDay' : mDay,
        'day': day,
        'month' : month,
        'year' : year
    }
    return FormatedDate
}
export default dateFormat