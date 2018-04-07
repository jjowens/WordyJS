var wordy = (function() {
        var _vowels = ['a', 'e', 'i', 'o', 'u'];
        var _keywords = 'blakpool';

        function Counter() {
            /**
             * @return {number}
             */
            function CountWords(val) {
                var arr = val.split(' ');
                return arr.length;
            }

            function GetLength(val) {
                return val.length;
            }

            /**
             * @return {number}
             */
            function CountLetters(val) {
                var tempVal = val.replace(/ /g, '');

                return tempVal.length;
            }

            return {
                CountWords: CountWords,
                CountLetters: CountLetters,
                GetLength: GetLength
            }
        }

        function Text() {

            /**
             * @return {boolean}
             */
            function ContainsVowels(val) {

                var tempVal = val.toLowerCase();

                var arr = tempVal.split('');

                var findVowels = function(entry) {
                    return (_vowels.indexOf(entry) > -1);
                };

                var doesContains = arr.some(findVowels);

                return doesContains;
            }

            /**
             * @return {boolean}
             */
            function ContainsWord(val, keyword) {
                var tempVal = val.toLowerCase();
                return (tempVal.indexOf(keyword) > -1);
            }


            /**
             * @return {string}
             */
            function ReverseText(val) {
                var tempVal = '';

                var totalLen = val.length - 1;

                for (i=0; i <= totalLen; i++) {
                    tempVal = val[i] + tempVal;
                }

                tempVal = tempVal.trim();

                return tempVal;
            }

            /**
             * @return {string}
             */
            function BackToFront(val) {
                var tempVal = ' ';

                if (!val) {
                    return tempVal;
                }

                var arr = val.split(' ');

                var totalLen = arr.length - 1;

                for (i=0; i <= totalLen; i++) {
                    tempVal = arr[i] + ' ' + tempVal;
                }

                tempVal = tempVal.trim();

                return tempVal;
            }

            /**
             * @return {string}
             */
            function ReverseWordsInText(val) {
                var tempVal = ' ';

                if (!val) {
                    return tempVal;
                }

                tempVal = this.BackToFront(val);
                tempVal = this.ReverseText(tempVal);

                tempVal = tempVal.trim();

                return tempVal;
            }

            /**
             * @return {string}
             */
            function SortText(val) {
                var arr = val.split(' ');

                arr.sort(function(a,b) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();
                    if (a == b) return 0;
                    if (a > b) return 1;
                    return -1;
                });

                var tempval = arr.toString();

                return tempval;
            }

            /**
             * @return {string}
             */
            function ConvertToURLSlug(val) {
                var tempVal = val.toLowerCase();

                tempVal = tempVal.trim();
                tempVal = tempVal.replace(/ /g, '-');

                return tempVal;
            }

            /**
             * @return {string}
             */
            function GetFirstLetters(val) {
                var arr = val.split(' ');
                var tempVal = '';
                arr.forEach(function(entry) {
                    if (entry) {
                        tempVal = tempVal + entry[0];
                    }
                });

                return tempVal;
            }

            /**
             * @return {string}
             */
            function GetLastLetters(val) {
                var arr = val.split(' ');
                var tempVal = '';
                arr.forEach(function(entry) {
                    if (entry) {
                        idx = entry.length - 1;
                        tempVal = tempVal + entry[idx];
                    }
                });

                return tempVal;
            }

            /**
             * @return {string}
             */
            function StripNumeric(val) {
                var tempVal = '';
                var arr = val.split('');
                arr.forEach(function(entry) {
                   if (!parseInt(entry)) {
                       tempVal = tempVal + entry;
                   } else {
                       tempVal = tempVal.trim();
                   }
                });

                return tempVal;
            }

            return {
                ContainsVowels: ContainsVowels,
                ReverseText: ReverseText,
                BackToFront: BackToFront,
                ReverseWordsInText: ReverseWordsInText,
                ContainsWord: ContainsWord,
                SortText: SortText,
                ConvertToURLSlug: ConvertToURLSlug,
                GetFirstLetters: GetFirstLetters,
                GetLastLetters: GetLastLetters,
                StripNumeric: StripNumeric
            }

        }

        return {
            Counter: Counter,
            Text: Text
        }

    }
);