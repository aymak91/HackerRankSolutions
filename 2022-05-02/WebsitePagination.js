// There will be a list of items in the form of a 2-dimensional string array where each element contains [name, relevance, price].  
// Given the sort column, the sort order (0: ascending, 1: descending), the number of items to be displayed on each page 
// (except for the last page which may have fewer), and a page number, determine the list of item names in the specified page 
// while respecting the item's order. Page numbering starts at 0.

// Example
// items = [['item1', '10', '15'], ['item2', '3', '4'], ['item3', '17', '8']]
// sortParameter = 1
// sortOrder = 0
// itemsPerPage = 2
// pageNumber = 1

// n = 3 items
// Sort them by (relevance: 1) in ascending order (items = [['item2', '3', '4'], ['item1', '10', '15'], ['item3', '17', '8']])
// Display up to 2 items in each page
// The page 0 contains 2 item names ['item2', 'item1'] and page 1 contains only 1 item name, so result = 'item3'

// Function Description
// Complete the function fetchItemsToDisplay in the editor below.

// fetchItemsToDisplay has the following parameter(s):
//     string items[n][3]: a 2D array of arrays of strings in the form [name, relevance, price]
//    int sortParameter: the column of the items to sort on
//    int sortOrder:0 = ascending and 1 = descending
//    int itemsPerPage: the number of items per page
//    int pageNumber: the page number to display item names

// Returns:
//     string pageItems[m]:  array of item names on the requested page in the order they are displayed

// Constraints
// 1 ≤ n < 10^5
// 1 ≤ m  ≤ n
// 0 ≤ relevance, price < 108
// relevance and price are both integers
// 1 ≤ itemsPerPage < 20
// 0 ≤ pageNumber < 10
 
/*
 * Complete the 'fetchItemsToDisplay' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY items
 *  2. INTEGER sortParameter
 *  3. INTEGER sortOrder
 *  4. INTEGER itemsPerPage
 *  5. INTEGER pageNumber
 */

function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    // Write your code here
    
    if (sortParameter === 0) {
        items.sort((a, b) => (a[0] < b[0]) ? -1 : 1);
    } else {
        items.sort((a, b) => a[sortParameter] - b[sortParameter]);
    }
    
    if (sortOrder === 1) items = items.reverse();
    
    let i = pageNumber * itemsPerPage;
    const pageItems = [];
    
    while (i<items.length && pageItems.length<itemsPerPage) {
        pageItems.push(items[i][0]);
        i++;
    }
    
    return pageItems;
    
}

