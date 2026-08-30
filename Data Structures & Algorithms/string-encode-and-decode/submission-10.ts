class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded: string = ""
        for (const str of strs) {
            let strSize = str.length
            let strSizeAsString = String(strSize)
            let numberOfCharsInSize = strSizeAsString.length
            encoded = encoded + numberOfCharsInSize + strSize + str
            // console.log(encoded)
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // console.log(str)
        const decoded: string[] = []
        let turns = 0
        let i = 0
        while (i <= str.length - 1) {
            let howManyCharsToRead = str[i]
            // dummy values
            let nextWordLen = '-1'
            let start = -1
            if (howManyCharsToRead === '1') {
                nextWordLen = str[i+1]
                start = i+2
            } else if (howManyCharsToRead === '2') {
                nextWordLen = `${str[i+1]}${str[i+2]}`
                start = i+3
            } else if (howManyCharsToRead === '3') {
                nextWordLen = `${str[i+1]}${str[i+2]}${str[i+3]}`
                start = i+4
            }
            // console.log(howManyCharsToRead, nextWordLen, start)
            let end = start + Number(nextWordLen)
            let word = str.substring(start, end)
            decoded.push(word)
            i = end
            // console.log(word, i)
            turns++
            if (turns === 100) {
                break
            }
        }
        return decoded
    }
}
