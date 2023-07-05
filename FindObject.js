/***********************************************************************
 *                                                                     *
 *                          FIND THE OBJECT                            *
 *                                                                     *
 * Create an array of objects (e.g. students). Then use an array       *
 * method to return a single object by matching one of the values in   *
 * the array (e.g. match on name).                                     *
 *                                                                     *
 ***********************************************************************/

const students = [
    { firstName: 'Pat', lastName: 'Belcher', onTime: true },
    { firstName: 'Ariana', lastName: 'Diaz', onTime: false },
    { firstName: 'Sam', lastName: 'Holmes', onTime: true },
    { firstName: 'Kevin', lastName: 'Fernandez', onTime: true },
  ]
  
  const sam = students.find(student => student.firstName === 'Sam')
  
  
  
  
  
  