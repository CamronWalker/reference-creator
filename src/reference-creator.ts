export class ReferenceCreator {
    parseReference(bookName: string, chapterNum: number, startVerseNum: number, lastVerseNum?: number, templateMain?: string, templateVerse?: string, templateTag?: string) {
        //let bookName = "1 Nephi"
        //let chapterNum = 3
        //let startVerseNum = 10
        //let lastVerseNum = 12

        const booksArray = [
            ["D&C",1,"D&C","D&C"  ],
            ["1 Nephi",1,"1-Ne","BoM"  ],
            ["2 Nephi",2,"2-Ne","BoM"  ],
            ["Jacob",3,"Jacob","BoM"  ],
            ["Enos",4,"Enos","BoM"  ],
            ["Jarom",5,"Jarom","BoM"  ],
            ["Omni",6,"Omni","BoM"  ],
            ["Words of Mormon",7,"WoM","BoM"  ],
            ["Mosiah",8,"Mos","BoM"  ],
            ["Alma",9,"Alma","BoM"  ],
            ["Helaman",10,"Hel","BoM"  ],
            ["3 Nephi",11,"3-Ne","BoM"  ],
            ["4 Nephi",12,"4-Ne","BoM"  ],
            ["Mormon",13,"Mormon","BoM"  ],
            ["Ether",14,"Ether","BoM"  ],
            ["Moroni",15,"Moroni","BoM"  ],
            ["Matthew",1,"Matt","NewT"  ],
            ["Mark",2,"Mark","NewT"  ],
            ["Luke",3,"Luke","NewT"  ],
            ["John",4,"John","NewT"  ],
            ["Acts",5,"Acts","NewT"  ],
            ["Romans",6,"Rom","NewT"  ],
            ["1 Corinthians",7,"1-Cor","NewT"  ],
            ["2 Corinthians",8,"2-Cor","NewT"  ],
            ["Galatians",9,"Gal","NewT"  ],
            ["Ephesians",10,"Eph","NewT"  ],
            ["Philippians",11,"Phil","NewT"  ],
            ["Collosians",12,"Coll","NewT"  ],
            ["1 Thessalonians",13,"1-Thes","NewT"  ],
            ["2 Thessalonians",14,"2-Thes","NewT"  ],
            ["1 Timothy",15,"1-Tim","NewT"  ],
            ["2 Timothy",16,"2-Tim","NewT"  ],
            ["Titus",17,"Titus","NewT"  ],
            ["Philemon",18,"Philem","NewT"  ],
            ["Hebrews",19,"Heb","NewT"  ],
            ["James",20,"James","NewT"  ],
            ["1 Peter",21,"1-Pet","NewT"  ],
            ["2 Peter",22,"2-Pet","NewT"  ],
            ["1 John",23,"1-John","NewT"  ],
            ["2 John",24,"2-John","NewT"  ],
            ["3 John",25,"3-John","NewT"  ],
            ["Jude",26,"Jude","NewT"  ],
            ["Revelation",27,"Rev","NewT"  ],
            ["Genesis",1,"Gen","OldT"  ],
            ["Exodus",2,"Exo","OldT"  ],
            ["Leviticus",3,"Lev","OldT"  ],
            ["Numbers",4,"Num","OldT"  ],
            ["Deuteronomy",5,"Deut","OldT"  ],
            ["Joshua",6,"Josh","OldT"  ],
            ["Judges",7,"Judg","OldT"  ],
            ["Ruth",8,"Ruth","OldT"  ],
            ["1 Samuel",9,"1-Sam","OldT"  ],
            ["2 Samuel",10,"2-Sam","OldT"  ],
            ["1 Kings",11,"1-King","OldT"  ],
            ["2 Kings",12,"2-King","OldT"  ],
            ["1 Chronicles",13,"1-Chro","OldT"  ],
            ["2 Chronicles",14,"2-Chro","OldT"  ],
            ["Ezra",15,"Ezra","OldT"  ],
            ["Nehemiah",16,"Nehem","OldT"  ],
            ["Esther",17,"Esther","OldT"  ],
            ["Job",18,"Job","OldT"  ],
            ["Psalms",19,"Psalm","OldT"  ],
            ["Proverbs",20,"Prov","OldT"  ],
            ["Ecclesiastes",21,"Eccles","OldT"  ],
            ["Song of Solomon",22,"SoS","OldT"  ],
            ["Isaiah",23,"Isaiah","OldT"  ],
            ["Jeremiah",24,"Jerem","OldT"  ],
            ["Lamentations",25,"Lament","OldT"  ],
            ["Ezekiel",26,"Ezek","OldT"  ],
            ["Daniel",27,"Dan","OldT"  ],
            ["Hosea",28,"Hosea","OldT"  ],
            ["Joel",29,"Joel","OldT"  ],
            ["Amos",30,"Amos","OldT"  ],
            ["Obadiah",31,"Obad","OldT"  ],
            ["Jonah",32,"Jonah","OldT"  ],
            ["Micah",33,"Micah","OldT"  ],
            ["Nahum",34,"Nahum","OldT"  ],
            ["Habakkuk",35,"Habak","OldT"  ],
            ["Zephaniah",36,"Zeph","OldT"  ],
            ["Haggai",37,"Hagg","OldT"  ],
            ["Zechariah",38,"Zech","OldT"  ],
            ["Malachi",39,"Mal","PoGP"  ],
            ["Moses",1,"Moses","PoGP"  ],
            ["Abraham",2,"Abra","PoGP"  ],
            ["Joseph Smith--Matthew",3,"JS-Matt","PoGP"  ],
            ["Joseph Smith--History",4,"JS-Hist","PoGP"  ],
            ["The Articles of Faith",5,"AoF","PoGP"  ]
          ]
        

        var bookArrayRow = booksArray.filter(function(value, index) { return value[0]==bookName})
        //console.log(bookArrayRow)


        let bookNumString = bookArrayRow[0][1].toString()
        while(bookNumString.length < 2) bookNumString = "0" + bookNumString
        //console.log(bookNumString)

        if (typeof lastVerseNum === "undefined") {
            // Single Verse Ref
            var referenceOutput = ">[!scripture] " + bookName + " " + chapterNum.toString() + ":" + startVerseNum.toString() + "\n" +
                ">![[" + bookNumString + " " + bookName + "#^c" + chapterNum.toString() + "v" + startVerseNum.toString() + "]]\n" +
                ">#Scripture/" + bookArrayRow[0][3] + "/" + bookArrayRow[0][2] + "/C" + chapterNum.toString() + "/V" + startVerseNum.toString()

        } else {
            // Multiple Verse Ref
            let currentVerseNum = startVerseNum
            var multiVerseRefOutput = ""
            var multiTagRefOutput = ""
            while (currentVerseNum <= lastVerseNum) {
                multiVerseRefOutput = multiVerseRefOutput + "![[" + bookNumString + " " + bookName + "#^c" + chapterNum.toString() + "v" + currentVerseNum.toString() + "]]"
                multiTagRefOutput = multiTagRefOutput + "#Scripture/" + bookArrayRow[0][3] + "/" + bookArrayRow[0][2] + "/C" + chapterNum.toString() + "/V" + currentVerseNum.toString()
                currentVerseNum++;
            }

            var referenceOutput = ">[!scripture] " + bookName + " " + chapterNum.toString() + ":" + startVerseNum.toString() + "-" + lastVerseNum.toString() + "\n" +
                ">" + multiVerseRefOutput + "\n" + 
                ">" + multiTagRefOutput
        }

        console.log(referenceOutput)
        return referenceOutput
    }
}