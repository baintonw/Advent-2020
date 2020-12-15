// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

// For example, suppose your expense report contained the following:

// 1721
// 979
// 366
// 299
// 675
// 1456
// In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

// Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?


const input = "1583 1295 1747 1628 1756 1992 1984 1990 2006 1626 1292 1561 1697 1249 2001 1822 1715 1951 1600 1615 1769 1825 1335 1987 1745 1660 1952 1437 1348 1968 615 1847 476 1346 1357 1838 1955 1750 1831 2003 1730 1696 1257 1581 866 1765 1691 1995 1977 1988 1713 1599 1300 1892 1550 2002 1694 1930 1998 1564 1704 1398 864 1480 1578 1946 1850 1964 1914 1860 1979 1857 1969 1675 1967 2009 1950 1834 783 1935 1963 1659 1314 1647 1671 1706 1734 1965 1666 316 1657 1663 1373 1719 1778 1559 1869 1958 1986 1845 1643 1783 1670 1445 1758 2008 1680 1251 1982 1420 1621 1997 1785 1994 1376 1944 1771 1844 96 467 1954 903 1368 1305 1589 1970 1980 1521 1775 1629 1796 1985 1957 1669 1637 1606 1766 1972 1956 1685 1235 58 1996 1959 1788 1273 1378 1233 1470 1584 1741 1327 1763 1989 1665 1667 1975 1862 1791 1229 1873 1761 1754 1882 1642 1971 1777 1580 1648 1678 1266 1645 502 1717 1723 1244 1370 1898 1755 1708 1983 1901"

const inputArray = input.split(' ')

//returns an array with the two values that add to 2020
const addsTo2020 = (arr) => {
    const matched = []
    const numbersArr = []
    const complements = []

    for (let i = 0; i < arr.length; i++) {
        const number = parseInt(arr[i])
        numbersArr.push(number)
        complements.push(2020 - number)
    }

    for (let i = 0; i < numbersArr.length; i++) {
        // console.log(complements[i])
        // console.log(arr.indexOf(complements[i]))
        if (numbersArr.indexOf(complements[i]) > -1) {
            // console.log('We hit it! ', complements[i])
            matched.push(complements[i])
        }
    }

    console.log(matched[0] * matched[1])

}

//Find three numbers in the orignal array that add to 2020, and return their product
const add3To2020 = (arr) => {
    const numbersArr = [];
    let current;
    let complement;

    let result = []

    //convert strings in array to numbers
    for (let i = 0; i < arr.length; i++) {
        const first = parseInt(arr[i])
        numbersArr.push(first)
    }

    //is there an item in the numbers array that is less than the item's complement?

    for (let i = 0; i < numbersArr.length; i++) {
        current = numbersArr[i]
        complement = 2020 - current

        for (let j = 1; j < numbersArr.length; j++) {
            if (numbersArr[j] < complement) {
                // console.log(numbersArr[j])
                const combo = current + numbersArr[j]

                for (let z = 2; z < numbersArr.length; z++) {
                    if ((combo + numbersArr[z]) === 2020) {

                        result.includes(numbersArr[z]) ? null : result.push(numbersArr[z])
                    }
                }
            }
        }        
    }
   
    console.log(result[0] * result[1] * result[2])

}

// addsTo2020(inputArray)
add3To2020(inputArray)