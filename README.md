# WordyJS
A Javascript module to maniplate text and checks the number of characters.

This is the Javascript version of my CSharp library, Wordy. It won't have all of the equivalent functions in this verison.

You can do the following

* Change text back to front - Example - 'A fox jumped over the brown fence' changes to 'fence brown the over jumped fox A'
* Reverse Words in text - Example - 'A fox jumped over the brown fence' changes to 'A xof depmuj revo eht nworb ecnef'
* Reverse Text - Example 'A fox jumped over the brown fence' changes to 'ecnef nworb eht revo depmuj xof A'
* Count Words - It counts how many words in your paragraph. Example it will check the string 'A fox jumped over the brown fence' and return 7.
* GetLength - It counts the length of your string
* Count Letters - It counts how many characters in your paragraph. It will ignore all whitespaces.  Example it will check the string 'A fox jumped over the brown fence' and return 27
* ContainsVowels - Will return true if it finds any vowels in your string
* SortText - It will split your string into an array, which is then sorted in ascending order. There may be a possiblity of duplicates
* Slug - It will convert a web link into a slug url. Useful for creating your MVC links. Example - 'A fox jumped over the brown fence' becomes 'a-fox-jumped-over-the-brown-fence'
* GetFirstLetters - It will get the first letter of your words in a string. Example - ''A fox jumped over the brown fence' becomes 'Afjotbf'
* GetLastLetters - It will get the last letter of your words in a string. Example - ''A fox jumped over the brown fence' becomes 'Axdrene'
* StripNumeric - It will remove any numeric characters from the string '12 foxes jumped over the brown fence' becomes 'foxes jumped over the brown fence'

# Code Example Below

'''javascript
<script type="text/javascript" src="public/wordy/wordy.min.js"></script>

function testWordy(arg) {
	var txtVal = 'A fox jumped over the brown fence'

	// returns fence brown the over jumped fox A
	console.log(wordy().Text().BackToFront(txtVal));

	// returns ecnef nworb eht revo depmuj xof A
	console.log(wordy().Text().ReverseText(txtVal));

	// returns A xof depmuj revo eht nworb ecnef
	console.log(wordy().Text().ReverseWordsInText(txtVal));
	
	// returns 7
	console.log(wordy().Counter().CountWords(txtVal));

	// returns true
	console.log(wordy().Text().ContainsVowels(txtVal));

	// returns 27
	console.log(wordy().Counter().CountLetters(txtVal));

	// returns 32
	console.log(wordy().Counter().GetLength(txtVal));
	
	// returns true
	console.log(wordy().Text().ContainsWord(txtVal, 'fox');
	
	// returns false
	console.log(wordy().Text().ContainsWord(txtVal, 'cat');

	// returns A,brown,fence,fox,jumped,over,the
	console.log(wordy().Text().SortText(txtVal));
	
	// returns a-fox-jumped-over-the-brown-fence
	console.log(wordy().Text().ConvertToURLSlug(txtVal));
	
	// returns Afjotbf
	console.log(wordy().Text().GetFirstLetters(txtVal));
	
	// returns Axdrene
	console.log(wordy().Text().GetLastLetters(txtVal));

	// returns foxes jumped over the brown fence
	console.log(wordy().Text().StripNumeric('6 foxes jumped over the brown fence'));
}
'''
