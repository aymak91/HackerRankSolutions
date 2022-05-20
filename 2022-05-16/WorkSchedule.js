// An employee has to work exactly as many hours as they are told to each week, scheduling no more than a given daily maximum number of hours. On some days, 
// the number of hours worked will be given. The employee gets to choose the remainder of their schedule, within the given limits.

// A completed schedule consists of exactly 7 digits in the range 0 to 8 that represent each day's hours to be worked. A pattern string similar to the schedule will be given, but with some of the digits replaced by a question mark, ?, (ascii 63 decimal). Given a maximum number of hours that can be worked in a day, replace the question marks with digits so that the sum of the scheduled hours is exactly the hours that must be worked in a week.

// Example
// pattern = '08??840'
// work_hours = 24
// day_hours = 4

// There are two days on which they must work 24 - 20 = 4 more hours for the week. All of the possible schedules are listed below:
// 0804840
// 0813840
// 0822840
// 0831840
// 0840840

// Function Description
// Complete the function findSchedules in the editor below.

// findSchedules has the following parameter(s):
//     int work_hours:  the hours that must be worked in the week
//     int day_hours:  the maximum hours that may be worked in a day
//     int pattern:  the partially completed schedule

// Returns:
//     string arr[]: represents all possible valid schedules (must be ordered lexicographically ascending)

// Constraints
// 1 ≤ work_hours ≤ 56
// 1 ≤ day_hours ≤ 8
// | pattern | = 7
// Each character of pattern ∈ {0, 1,...,8}
// There is at least one correct schedule.

/*
 * Complete the 'findSchedules' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER workHours
 *  2. INTEGER dayHours
 *  3. STRING pattern
 */

function findSchedules(workHours, dayHours, pattern) {
    // Write your code here
    
    let availDays = 7;
    let availHours = workHours;
    const availIndices = [];
    const newSchedule = new Array(7)
    
    for (let i=0; i<7; i++) {
        newSchedule[i] = pattern[i];
        if (pattern[i] !== '?') {
            availDays--;
            availHours -= parseInt(pattern[i]);
        } else {
            availIndices.push(i);
        }
    }
    
    if (availDays === 0) return [pattern];
    
    const validSchedules = [];
    
    const scheduleGenerator = (days, hours) => {
        
        const index = availDays - days;
        const availDayIndex = availIndices[index];
        
        if (days === 1) {
            newSchedule[availDayIndex] = hours;
            validSchedules.push(newSchedule.join(''));
            return;
        }
        
        const minH = Math.max(0, hours-(days- 1)*dayHours);
        const maxH = Math.min(dayHours, hours);
        
        for (let i=minH; i<=maxH; i++) {
            newSchedule[availDayIndex] = i;
            scheduleGenerator(days-1, hours-i);
        }
        
    }
    
    scheduleGenerator(availDays, availHours);
    return validSchedules;
}

