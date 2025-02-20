//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700],
]
//1. district having Highest +ve case
high_positive = covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(` district having Highest +ve case ${high_positive[1]}`)

//2. district having Highest 1st dose vaccine
first_dose = covid_data.reduce((a,b) => a[5]>b[5]?a:b)
console.log(` district having Highest 1st dose vaccine::  ${first_dose[1]}`)

//3. district having lowest death rate
/*death_rate = covid_data.reduce((a,b) => a[3]<b[3]?a[3]:b[3])
districts_low = covid_data.filter((dist) => dist[3] == death_rate).map( a => a[1] )
console.log({death_rate});
*/
districts_low = covid_data.reduce((a,b) => a[3]<b[3]?a:b)
console.log(`district having lowest death rate ${districts_low[1]}`)

//4. sort data with +ve case in descending order
console.log(`covid data sorted by +ve case`,covid_data.sort((a,b)=>b[2]-a[2]))

//5. is district with +ve cases > 15000
case_15k = covid_data.some((a) => a[2] > 15000)
// console.log({case_15k})
console.log(`Any district with +ve case >15k ? ${case_15k?'yes':'no'} `)

//6. sort data with 1st dose vaccine ascending order
console.log(`covid data sorted by 1st dose vaccine asc::`,covid_data.sort((a,b)=>a[5]-b[5]))

//7. Print Thrissur details
console.log(`Thrissur covid data:: ${covid_data.find( a => a[1] =='Thrissur')}`)

//8. Print total number of positive cases
total_positive = covid_data.reduce((a,b) => a+b[2],0)
console.log(`Total Covid +ve cases reported :: ${total_positive}`)

//9. Print total number of curred cases
total_cured = covid_data.reduce((a,b) => a+b[4],0)
console.log(`Total Covid +ve cured cases  :: ${total_cured}`)

//10. Print curred cases in Idukki
idukki_cured = covid_data.find( a => a[1] =='Idukki')
console.log(`Total Covid +ve cured case in Idduki :: ${idukki_cured[4]}`)